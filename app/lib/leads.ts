// Shared lead definitions used by the contact form and the /api/leads route.

export const SERVICE_OPTIONS = [
  "Pipeline Audit",
  "Client Acquisition System",
  "Pipeline Growth Retainer",
  "Not sure yet",
] as const;

export const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $6,000",
  "$6,000+",
  "Not sure yet",
] as const;

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within a month",
  "1 – 3 months",
  "Just exploring",
] as const;

/** What the form sends to /api/leads. */
export type LeadInput = {
  fullName: string;
  email: string;
  phoneNumber?: string;
  business: string;
  website?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
  /** Attribution captured in the browser */
  page?: string;
  referrer?: string;
  utm?: string;
  /** Spam checks: hidden field that must stay empty, and ms since the form appeared */
  hp?: string;
  elapsedMs?: number;
};

export type LeadResponse =
  | { ok: true; leadId: string; /** true when the prospect was sent a confirmation email */ autoReply?: boolean }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };
