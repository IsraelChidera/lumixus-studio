/**
 * Lumixus Studio — lead inbox for lumixus-studio.com
 *
 * What it does for every website enquiry:
 *   1. Adds a row to the "Leads" tab (your simple CRM: status, next action, value).
 *   2. Emails you an alert straight away, with reply-to set to the prospect.
 *   3. Sends the prospect a short auto-reply with your booking link.
 * Plus, every weekday morning, it emails you any lead still marked "New"
 * after 24 hours, so nobody waits.
 *
 * Setup (see README.md in this folder for detail):
 *   1. Paste this over the existing code in your sheet's Apps Script editor.
 *   2. Run setup() once. It creates the "Leads" tab and copies across every
 *      enquiry already in the "lumixus-studio" tab.
 *   3. Deploy -> Manage deployments -> Edit -> Version: New version -> Deploy.
 *      Editing the existing deployment keeps the same /exec URL, so the website
 *      needs no changes.
 */

// ── Settings ─────────────────────────────────────────────────────────────────
// Optional but recommended: a long random string. When set, only requests that
// carry the same value (LEADS_WEBHOOK_SECRET on Netlify) are accepted. Leave it
// empty until you've added that variable on Netlify, or leads will be refused.
const SHARED_SECRET = '';
const NOTIFY_EMAIL = 'lumixusstudio@gmail.com';            // where new-lead alerts go
const BOOKING_URL = 'https://cal.com/lumixus-studio/30min';
const FROM_NAME = 'Lumixus Studio';
const SEND_AUTO_REPLY = true;
const SHEET_NAME = 'Leads';
const LEGACY_SHEET_NAME = 'lumixus-studio'; // the tab your original script wrote to

const STATUSES = ['New', 'Contacted', 'Call booked', 'Proposal sent', 'Won', 'Lost', 'Not a fit', 'Imported'];

const HEADERS = [
  'Received', 'Lead ID', 'Status', 'Name', 'Email', 'Phone', 'Company', 'Website',
  'Service', 'Budget', 'Timeline', 'Message', 'Next action', 'Follow-up date',
  'Deal value', 'Notes', 'Page', 'Referrer', 'UTM'
];

// ── Web app entry point ──────────────────────────────────────────────────────
function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    if (SHARED_SECRET && data.secret !== SHARED_SECRET) {
      return respond_({ ok: false, error: 'unauthorized' });
    }

    // Accept the field names the original form used, too.
    data.business = data.business || data.businessName || '';
    data.message = data.message || data.description || '';
    if (data.phoneNumber === 'N/A') data.phoneNumber = '';
    if (!data.email || !data.fullName) {
      return respond_({ ok: false, error: 'missing fields' });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = getSheet_();
      const row = {
        'Received': new Date(data.receivedAt || Date.now()),
        'Lead ID': data.leadId || '',
        'Status': 'New',
        'Name': data.fullName,
        'Email': data.email,
        'Phone': data.phoneNumber || '',
        'Company': data.business || '',
        'Website': data.website || '',
        'Service': data.service || '',
        'Budget': data.budget || '',
        'Timeline': data.timeline || '',
        'Message': data.message || '',
        'Next action': 'Reply within 1 business hour',
        'Follow-up date': '',
        'Deal value': '',
        'Notes': '',
        'Page': data.page || '',
        'Referrer': data.referrer || '',
        'UTM': data.utm || ''
      };
      // Prefix values that start with = + - @ so they're stored as text, not formulas.
      sheet.appendRow(HEADERS.map(function (h) { return safeCell_(row[h]); }));
    } finally {
      lock.releaseLock();
    }

    // Email failures must not lose the lead — it's already in the sheet.
    try { notifyOwner_(data); } catch (err) { console.error('notify failed', err); }
    let autoReplied = false;
    if (SEND_AUTO_REPLY) {
      try { autoReply_(data); autoReplied = true; } catch (err) { console.error('auto-reply failed', err); }
    }

    return respond_({ ok: true, leadId: data.leadId || '', autoReply: autoReplied });
  } catch (err) {
    console.error(err);
    return respond_({ ok: false, error: String(err) });
  }
}

// Visiting the web app URL in a browser shows this — handy to confirm it's live.
function doGet() {
  return respond_({ ok: true, service: 'lumixus-leads' });
}

// ── One-time setup: run this once from the editor ────────────────────────────
function setup() {
  const sheet = getSheet_();

  // Status dropdown with colours, so the sheet works as a pipeline board.
  const statusCol = HEADERS.indexOf('Status') + 1;
  const statusRange = sheet.getRange(2, statusCol, sheet.getMaxRows() - 1, 1);
  statusRange.setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).setAllowInvalid(false).build()
  );
  const colours = {
    'New': '#fde68a', 'Contacted': '#bfdbfe', 'Call booked': '#c7d2fe',
    'Proposal sent': '#ddd6fe', 'Won': '#bbf7d0', 'Lost': '#e5e7eb', 'Not a fit': '#e5e7eb', 'Imported': '#f3f4f6'
  };
  const rules = Object.keys(colours).map(function (status) {
    return SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo(status).setBackground(colours[status]).setRanges([statusRange]).build();
  });
  sheet.setConditionalFormatRules(rules);

  sheet.getRange(2, HEADERS.indexOf('Follow-up date') + 1, sheet.getMaxRows() - 1, 1)
    .setDataValidation(SpreadsheetApp.newDataValidation().requireDate().setAllowInvalid(true).build());
  sheet.getRange(2, HEADERS.indexOf('Received') + 1, sheet.getMaxRows() - 1, 1)
    .setNumberFormat('dd mmm yyyy, hh:mm');

  // Weekday-morning reminder for leads nobody has touched.
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'remindStaleLeads') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('remindStaleLeads').timeBased().everyDays(1).atHour(8).create();

  const copied = migrateOldLeads();
  console.log('Setup complete. Copied ' + copied + ' earlier enquiries into "' + SHEET_NAME + '".');
}

// ── Copy enquiries from the original tab into the Leads pipeline ─────────────
// Safe to run more than once: rows already copied (same time + email) are skipped.
// The original tab is left untouched.
function migrateOldLeads() {
  const ss = SpreadsheetApp.getActive();
  const old = ss.getSheetByName(LEGACY_SHEET_NAME);
  if (!old || old.getLastRow() === 0) return 0;

  const sheet = getSheet_();
  const col = function (name) { return HEADERS.indexOf(name); };
  const existing = {};
  sheet.getDataRange().getValues().slice(1).forEach(function (r) {
    const t = r[col('Received')] instanceof Date ? r[col('Received')].getTime() : String(r[col('Received')]);
    existing[t + '|' + String(r[col('Email')]).toLowerCase()] = true;
  });

  // Original columns: date, name, email, phone, business, description.
  const rows = old.getDataRange().getValues().filter(function (r) {
    return r[0] instanceof Date && r[2]; // skips a header row if there is one
  });

  const toAdd = [];
  rows.forEach(function (r) {
    const key = r[0].getTime() + '|' + String(r[2]).toLowerCase();
    if (existing[key]) return;
    const row = {
      'Received': r[0], 'Lead ID': '', 'Status': 'Imported', 'Name': r[1], 'Email': r[2],
      'Phone': r[3] === 'N/A' ? '' : r[3], 'Company': r[4], 'Website': '', 'Service': '',
      'Budget': '', 'Timeline': '', 'Message': r[5], 'Next action': '', 'Follow-up date': '',
      'Deal value': '', 'Notes': 'Imported from the original "' + LEGACY_SHEET_NAME + '" tab',
      'Page': '', 'Referrer': '', 'UTM': ''
    };
    toAdd.push(HEADERS.map(function (h) { return safeCell_(row[h]); }));
  });

  if (toAdd.length) {
    sheet.getRange(sheet.getLastRow() + 1, 1, toAdd.length, HEADERS.length).setValues(toAdd);
    sheet.sort(1, true); // oldest first, newest at the bottom
  }
  return toAdd.length;
}

// ── Daily reminder ───────────────────────────────────────────────────────────
function remindStaleLeads() {
  const day = new Date().getDay();
  if (day === 0 || day === 6) return; // weekdays only

  const sheet = getSheet_();
  const values = sheet.getDataRange().getValues();
  const col = function (name) { return HEADERS.indexOf(name); };
  const cutoff = Date.now() - 24 * 60 * 60 * 1000;

  const stale = values.slice(1).filter(function (r) {
    const received = r[col('Received')] instanceof Date ? r[col('Received')].getTime() : 0;
    return r[col('Status')] === 'New' && received && received < cutoff;
  });
  if (!stale.length) return;

  const lines = stale.map(function (r) {
    return '• ' + r[col('Name')] + ' (' + r[col('Company')] + ') — ' + r[col('Email')] +
      ', received ' + Utilities.formatDate(r[col('Received')], Session.getScriptTimeZone(), 'dd MMM');
  });
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: stale.length + ' lead' + (stale.length > 1 ? 's' : '') + ' still waiting for a reply',
    body: 'These enquiries are still marked "New" after 24 hours:\n\n' + lines.join('\n') +
      '\n\nOpen the sheet: ' + SpreadsheetApp.getActive().getUrl()
  });
}

// ── Emails ───────────────────────────────────────────────────────────────────
function notifyOwner_(d) {
  const rows = [
    ['Name', d.fullName], ['Email', d.email], ['Phone', d.phoneNumber], ['Company', d.business],
    ['Website', d.website], ['Service', d.service], ['Budget', d.budget], ['Timeline', d.timeline],
    ['Page', d.page], ['Referrer', d.referrer], ['UTM', d.utm]
  ].filter(function (r) { return r[1]; });

  const table = rows.map(function (r) {
    return '<tr><td style="padding:4px 12px 4px 0;color:#6b7080">' + r[0] + '</td><td style="padding:4px 0">' + esc_(r[1]) + '</td></tr>';
  }).join('');

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: d.email,
    name: 'Lumixus Website',
    subject: 'New lead: ' + d.fullName + (d.business ? ' (' + d.business + ')' : '') + (d.service ? ' · ' + d.service : ''),
    htmlBody:
      '<div style="font-family:Arial,sans-serif;font-size:14px;color:#0b0d17">' +
      '<p><strong>New enquiry from lumixus-studio.com</strong> — reply to this email to answer them directly.</p>' +
      '<table style="border-collapse:collapse">' + table + '</table>' +
      '<p style="white-space:pre-wrap;border-left:3px solid #3600ff;padding-left:12px">' + esc_(d.message) + '</p>' +
      '<p><a href="' + SpreadsheetApp.getActive().getUrl() + '">Open the Leads sheet</a> · Lead ID ' + esc_(d.leadId) + '</p>' +
      '</div>'
  });
}

function autoReply_(d) {
  const first = String(d.fullName || '').split(' ')[0] || 'there';
  MailApp.sendEmail({
    to: d.email,
    name: FROM_NAME,
    replyTo: NOTIFY_EMAIL,
    subject: 'Thanks, ' + first + ' — we got your message',
    htmlBody:
      '<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#0b0d17;max-width:560px">' +
      '<p>Hi ' + esc_(first) + ',</p>' +
      '<p>Thanks for getting in touch with Lumixus Studio. Your message has reached us, and we\'ll reply personally within one business day.</p>' +
      '<p>If you\'d rather talk it through now, you can pick a time for a 30-minute pipeline review here:</p>' +
      '<p><a href="' + BOOKING_URL + '" style="display:inline-block;background:#3600ff;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:999px;font-weight:bold">Book a pipeline review</a></p>' +
      '<p>Speak soon,<br>Lumixus Studio</p>' +
      '</div>'
  });
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function getSheet_() {
  const ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#0f0e1a').setFontColor('#ffffff');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(HEADERS.indexOf('Message') + 1, 360);
  }
  return sheet;
}

function safeCell_(value) {
  if (typeof value === 'string' && /^[=+\-@]/.test(value)) return "'" + value;
  return value;
}

function esc_(s) {
  return String(s || '').replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function respond_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
