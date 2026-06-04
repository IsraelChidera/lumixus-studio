"use client";

import { useState } from "react";
import Container from "@/app/components/Elements/Container";

const faqs = [
  {
    question: "We already have a website. Can you still help us?",
    answer:
      "Absolutely, and this is where we add the most value. Most B2B websites we audit have the same problem: they were built to look good, not to generate leads. We run a full conversion audit, identify exactly why your site isn't converting visitors into qualified enquiries, and fix it. You don't always need a rebuild, sometimes you need a strategic overhaul.",
  },
  {
    question: "What types of B2B businesses do you work with?",
    answer:
      "We partner with professional service and B2B service businesses like logistics companies, HR consultancies, accounting firms, legal practices, IT service providers, management consultancies, and commercial design firms. If you sell services to other businesses and need a reliable digital pipeline, we're built for you.",
  },
  {
    question: "How is this different from hiring a web design agency?",
    answer:
      "We're not a web design agency. A web agency builds you a website. We build you a client acquisition system which includes your website, but also your positioning, messaging, lead capture flows, SEO foundation, CRM integration, and follow-up automation. The goal isn't a website you're proud of. It's a pipeline you can count on.",
  },
  {
    question: "How long before we see results?",
    answer:
      "Foundation systems (new website + lead gen setup) typically go live in 3–5 weeks. Organic results like SEO and content authority compound over 3–6 months. For retainer clients, we review pipeline metrics every month and adjust strategy accordingly. We'll be transparent about what's realistic before we start.",
  },
  {
    question: "Do you offer monthly retainers or just one-off projects?",
    answer:
      "Both. Our Foundation package is a one-time project to get your infrastructure right. Our Growth Partner and Scale packages are monthly retainers where we operate as your external growth team, managing SEO, content, conversion optimization, and strategy on an ongoing basis. Most clients start with a Foundation build and move to a retainer.",
  },
  {
    question: "What's included in the free growth audit?",
    answer:
      "It's a 30-minute working session where we assess your current website conversion rate, your pipeline health, your positioning vs. competitors, and the specific gaps costing you leads. You'll leave with a clear picture of what to fix and in what order, whether or not we end up working together. No pitch decks. No sales pressure.",
  },
  {
    question: "Do you work with businesses outside Nigeria?",
    answer:
      "Yes. We've delivered projects across Africa and beyond. Our client acquisition systems work regardless of geography — we adapt messaging, SEO strategy, and digital infrastructure to your specific market.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track what matters for B2B growth: qualified leads generated, discovery calls booked, conversion rate from visitor to enquiry, and pipeline velocity. Not website awards, not 'sessions'. We report against real business metrics monthly.",
  },
];

const Faq = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-28 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto">

          {/* ── Section header ───────────────────────────────────── */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="section-label">
                <span className="w-1 h-1 rounded-full bg-primary" />
                FAQ
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <h2
              className="font-bold text-text tracking-tight"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", letterSpacing: "-0.03em" }}
            >
              Straight answers to
              <br />
              <span className="gradient-text-primary">real questions.</span>
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              B2B buyers ask sharp questions. So do we.
            </p>
          </div>

          {/* ── Accordion ────────────────────────────────────────── */}
          <div className="space-y-2">
            {faqs.map((faq, i) => {
              const isOpen = active === i;
              return (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-200 ${
                    isOpen
                      ? "bg-white border-primary/20 shadow-sm shadow-primary/5"
                      : "bg-white border-border hover:border-primary/20"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                    onClick={() => setActive(isOpen ? null : i)}
                  >
                    <span className={`text-sm font-semibold leading-snug ${isOpen ? "text-primary" : "text-text"}`}>
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? "bg-primary border-primary text-white rotate-45"
                          : "border-border text-muted"
                      }`}
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Footer ───────────────────────────────────────────── */}
          <div className="flex items-center gap-4 mt-12 pt-10 border-t border-border">
            <div className="flex-1" />
            <a
              href="https://cal.com/lumixus-studio/30min"
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              Ask Us Directly. Free 30-min Audit
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Faq;
