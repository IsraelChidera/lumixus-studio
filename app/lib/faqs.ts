// Shared by the FAQ section and the FAQPage structured data in layout.tsx,
// so the visible answers and the schema can never drift apart.
export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "Who do you work with?",
    answer:
      "B2B service businesses - consultancies, agencies, HR and recruitment, IT and tech services, logistics, and other firms that sell to other businesses. If one new client is worth a meaningful amount to you and most of your work still comes from referrals, we're likely a fit.",
  },
  {
    question: "We already have a website. Can you still help?",
    answer:
      "Yes, and that's usually where we start. Many B2B websites look professional but don't explain what the business actually solves, who it's for, or what a prospect should do next. The Pipeline Audit shows you exactly what's holding yours back before you commit to anything bigger.",
  },
  {
    question: "How is this different from hiring a web design or content agency?",
    answer:
      "A web agency hands over a website. A content agency hands over posts. We build the whole path from first impression to booked call: positioning, the site, content that shows your expertise, enquiry forms that qualify, tracking and follow-up. Because we build the technical side ourselves, we can report on qualified enquiries and proposals, not just traffic.",
  },
  {
    question: "How much does it cost?",
    answer:
      "It depends on scope, so we price after the audit, not before. A Client Acquisition System is a one-time, fixed-scope project. The Pipeline Growth Retainer is a monthly engagement. Any advertising spend is paid directly by you and kept separate from our fees.",
  },
  {
    question: "How long until we see results?",
    answer:
      "A Client Acquisition System usually launches in four to eight weeks. Pipeline growth from content and search builds over months, not days, and B2B sales cycles add time on top. We won't promise lead numbers we can't stand behind - we agree the measures with you up front and report against them every month.",
  },
  {
    question: "How do you measure success?",
    answer:
      "By what moves your pipeline: qualified enquiries, booked calls, proposals and, where you share the data, won clients. Traffic and engagement are tracked too, but only as early signals, not as the result.",
  },
  {
    question: "What does the first conversation involve?",
    answer:
      "A 30-minute call about how your business wins clients today, where enquiries drop off, and what a realistic next step looks like. No pitch deck. If we're not the right fit, we'll say so.",
  },
];
