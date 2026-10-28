# Lead handling: website form → Google Sheet + email

## How a lead flows

1. A prospect submits the contact form on lumixus-studio.com.
2. The site's server route (`app/api/leads/route.ts`) checks the details, filters spam and forwards the lead to the Google Apps Script below.
3. The script:
   - adds a row to the **Leads** tab with Status = **New**
   - emails `lumixusstudio@gmail.com` straight away (hit Reply to answer the prospect)
   - sends the prospect an auto-reply with your booking link
4. The prospect sees a confirmation with a **Book your call now** button, with their name and email pre-filled on Cal.com.
5. Every weekday at 8am you get an email listing any lead still marked **New** after 24 hours.

If Google can't be reached or the script errors, the prospect sees a message asking them to retry or email you directly. The failure is also logged in Netlify's function logs, so no lead disappears silently.

## Upgrading your existing script (about 5 minutes)

The website already sends leads to your existing web app URL (the one ending in `...VFQ/exec`). If you edit that same deployment, the URL stays the same, so **nothing changes on Netlify**.

### 1. Replace the code
1. Open the Google Sheet that has the **lumixus-studio** tab, then go to **Extensions → Apps Script**.
2. Select all of the existing code (the old `doPost`), delete it, and paste in the full contents of `leads.gs`.
3. Click **Save**.

### 2. Run setup once
1. In the function dropdown at the top, choose **setup**, then click **Run**.
2. Google asks for permission because the script now sends email. Click **Review permissions**, choose your account, then **Advanced → Go to (project) → Allow**.
3. When it finishes, the execution log says something like `Copied 12 earlier enquiries into "Leads"`. You now have a **Leads** tab:
   - every past enquiry is copied in, marked **Imported**
   - each row has a status dropdown, and a daily 8am reminder is set up
   - your original **lumixus-studio** tab is left exactly as it was

### 3. Publish the new version (keeps the same URL)
1. Click **Deploy → Manage deployments**.
2. Select your existing web app deployment, then click the **pencil (Edit)** icon.
3. Under **Version**, choose **New version**. Leave **Execute as: Me** and **Who has access: Anyone** as they are.
4. Click **Deploy**.

> Don't use "New deployment". That creates a different URL, and the website would keep sending leads to the old version.

### 4. Test it
1. Open your web app URL in a browser. You should see `{"ok":true,"service":"lumixus-leads"}`. If you see an error page instead, check step 3.
2. Submit the contact form on the live site with your own email. Within a minute you should get:
   - a new row in **Leads** with Status **New**
   - a "New lead" email at lumixusstudio@gmail.com
   - an auto-reply in the inbox you used
3. Change the test row's status to **Not a fit** or delete it.

### 5. Optional: lock the endpoint with a secret
At the moment anyone who finds the URL could post junk rows to your sheet. That was also true of the original script. To close it:
1. Make up a long random string.
2. In **Netlify → Site configuration → Environment variables**, add `LEADS_WEBHOOK_SECRET` with that string, then redeploy the site.
3. Then, and only then, set `SHARED_SECRET` at the top of the script to the same string and publish a new version (step 3).

If the two don't match, the form shows visitors an error. Your Netlify function logs will show `unauthorized`.

### 6. Count leads as conversions in Google Analytics
Each successful submission sends a `generate_lead` event to GA4. After the first lead arrives, go to **GA4 → Admin → Events** and mark `generate_lead` as a **key event**.

## Changing the script later
Edit the code, then publish it with **Deploy → Manage deployments → Edit → Version: New version → Deploy**. The URL stays the same.

## If something goes wrong
- **The form says "didn't go through":** open the web app URL in a browser. If it shows a Google error page, the script crashed. Look in **Apps Script → Executions** for the error.
- **No alert emails arrive:** setup's permission step was probably skipped. Run **setup** again and allow access.
- **Leads go to the old tab instead of Leads:** the new version wasn't published. Repeat step 3.

## Using the sheet as your pipeline
| Status        | Meaning                                  |
|---------------|------------------------------------------|
| New           | Not replied to yet. Reply within 1 business hour |
| Contacted     | You've replied; waiting on them          |
| Call booked   | Discovery call scheduled                 |
| Proposal sent | Scoped proposal is with them             |
| Won / Lost / Not a fit | Closed                          |

Fill in **Next action** and **Follow-up date** on every open lead, and **Deal value** once you've scoped it. Each month, filter by Status to see calls booked, proposals sent and your close rate. Those are the numbers that tell you how far you are from $10k a month.
