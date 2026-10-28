import { NextResponse } from "next/server";
import type { LeadInput, LeadResponse } from "@/app/lib/leads";

// Leads are validated here on the server, then forwarded to a Google Apps
// Script web app that writes them to the Leads sheet, emails you an alert and
// sends the prospect an auto-reply. See integrations/google-apps-script/.
//
// Optional environment variables (Netlify -> Site configuration -> Environment variables):
//   LEADS_WEBHOOK_URL     Apps Script web app URL; defaults to the existing deployment below
//   LEADS_WEBHOOK_SECRET  Shared secret; must match SHARED_SECRET in the script if you set one
const LEGACY_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwGn_TqgZJKXSYekTZJ8Ta1qCdy7XHFs277mXY9gY_TUP2SSMBAOc6rFDJEIhZ2xVAFVQ/exec";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FILL_MS = 2500; // humans don't complete the form faster than this

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, max) : "";

// Keeps line breaks in the message but caps its length.
const cleanMessage = (value: unknown) =>
  typeof value === "string" ? value.replace(/\r\n/g, "\n").trim().slice(0, 4000) : "";

const json = (body: LeadResponse, status = 200) => NextResponse.json(body, { status });

const makeLeadId = () => {
  const d = new Date();
  const date = `${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, "0")}${String(d.getUTCDate()).padStart(2, "0")}`;
  return `LX-${date}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
};

export async function POST(request: Request) {
  let raw: LeadInput;
  try {
    raw = (await request.json()) as LeadInput;
  } catch {
    return json({ ok: false, error: "We couldn't read that submission. Please try again." }, 400);
  }

  // Spam: bots fill the hidden field or submit instantly. Pretend it worked so
  // they get no signal, but store nothing.
  if (clean(raw.hp, 200) || (typeof raw.elapsedMs === "number" && raw.elapsedMs < MIN_FILL_MS)) {
    return json({ ok: true, leadId: "filtered", autoReply: false });
  }

  const lead = {
    fullName: clean(raw.fullName, 120),
    email: clean(raw.email, 200).toLowerCase(),
    phoneNumber: clean(raw.phoneNumber, 40),
    business: clean(raw.business, 160),
    website: clean(raw.website, 300),
    service: clean(raw.service, 80),
    budget: clean(raw.budget, 80),
    timeline: clean(raw.timeline, 80),
    message: cleanMessage(raw.message),
    page: clean(raw.page, 500),
    referrer: clean(raw.referrer, 500),
    utm: clean(raw.utm, 500),
  };

  const fieldErrors: Record<string, string> = {};
  if (!lead.fullName) fieldErrors.fullName = "Full name is required.";
  if (!EMAIL_RE.test(lead.email)) fieldErrors.email = "Enter a valid email address.";
  if (!lead.business) fieldErrors.business = "Company name is required.";
  if (lead.message.length < 10) fieldErrors.message = "Tell us a little more about what you need.";
  if (Object.keys(fieldErrors).length) {
    return json({ ok: false, error: "Please fix the highlighted fields.", fieldErrors }, 422);
  }

  const leadId = makeLeadId();
  const webhookUrl = process.env.LEADS_WEBHOOK_URL || LEGACY_WEBHOOK_URL;

  const payload = {
    secret: process.env.LEADS_WEBHOOK_SECRET || "",
    leadId,
    receivedAt: new Date().toISOString(),
    ...lead,
    // Field names the original sheet script expects, so the fallback keeps working.
    date: new Date().toLocaleString("en-GB", { timeZone: "Africa/Lagos" }),
    businessName: lead.business,
    description: [
      lead.service && `Interested in: ${lead.service}`,
      lead.budget && `Budget: ${lead.budget}`,
      lead.timeline && `Timeline: ${lead.timeline}`,
      lead.website && `Website: ${lead.website}`,
      lead.message,
    ]
      .filter(Boolean)
      .join("\n"),
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
      signal: controller.signal,
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);

    // The upgraded script replies with JSON { ok, autoReply }. The original one
    // replied with plain "Success", so a non-JSON 200 still counts as saved.
    const text = await res.text();
    let autoReply = false;
    let body: { ok?: boolean; error?: string; autoReply?: boolean } | null = null;
    try {
      body = JSON.parse(text);
    } catch {
      body = null;
    }
    if (body && body.ok === false) throw new Error(`Webhook rejected lead: ${body.error ?? "unknown"}`);
    if (!body && /<html/i.test(text)) throw new Error("Webhook returned an HTML error page");
    if (body?.autoReply === true) autoReply = true;

    return json({ ok: true, leadId, autoReply });
  } catch (error) {
    // Logged in Netlify's function logs so a failed lead is never silent.
    console.error("[leads] delivery failed", { leadId, email: lead.email, business: lead.business, error: String(error) });
    return json(
      {
        ok: false,
        error:
          "Your message didn't go through. Please try again, or email lumixusstudio@gmail.com directly.",
      },
      502
    );
  } finally {
    clearTimeout(timeout);
  }
}
