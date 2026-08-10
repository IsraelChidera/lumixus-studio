"use client";

import { useState } from "react";
import Container from "@/app/components/Elements/Container";
import Button from "@/app/components/Elements/Button";

const faqs = [
  {
    question: "We already have a website. Can you still help us?",
    answer:
      "Yes, and that's often where we add the most value. A lot of the sites we look at were built to look good, not to work. We run a straight audit, tell you what's actually holding it back, and fix it.",
  },
  {
    question: "What kind of brands do you work with?",
    answer:
      "B2B service businesses — consulting, IT, logistics, HR & recruitment, professional services. What matters more than sector is whether you're serious about turning your digital presence into a source of qualified clients, not just traffic.",
  },
  {
    question: "How is this different from hiring a web design agency?",
    answer:
      "A web agency builds you a website. We build the whole picture: positioning, brand identity, the site itself, content, and the campaigns that bring people to it.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Depends on scope. A brand identity and website usually lands in four to eight weeks. Ongoing marketing work runs as a partnership, reviewed every month.",
  },
  {
    question: "Do you work on one-off projects or only long-term partnerships?",
    answer:
      "Both. Some brands need a focused project, a new identity, a new site. Others want us running point on marketing month to month.",
  },
  {
    question: "What does the first conversation involve?",
    answer:
      "A short, honest call about where your brand is and where it needs to go. No slideshow, no pressure. Just a clear sense of what's working and whether we're the right fit.",
  },
];

const Faq = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* ── Section header ───────────────────────────────────── */}
          <div className="mb-12">
            <span className="section-label mb-6 inline-flex">
              <span className="w-1 h-1 rounded-full bg-primary" />
              FAQ
            </span>
            <h2
              className="font-bold text-text tracking-tight"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", letterSpacing: "-0.03em" }}
            >
              Straight answers to
              <span className="font-serif italic font-normal"> real questions.</span>
            </h2>
          </div>

          {/* ── List ─────────────────────────────────────────────── */}
          <div className="border-t border-border">
            {faqs.map((faq, i) => {
              const isOpen = active === i;
              const panelId = `faq-panel-${i}`;
              return (
                <div key={faq.question} className="border-b border-border">
                  <button
                    id={`faq-trigger-${i}`}
                    className="w-full flex items-start justify-between gap-4 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg"
                    onClick={() => setActive(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className={`text-base font-semibold leading-snug ${isOpen ? "text-primary" : "text-text"}`}>
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 mt-0.5 ${
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
                    <div id={panelId} role="region" aria-labelledby={`faq-trigger-${i}`} className="pb-6 pr-10">
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
            <Button href="#contact" variant="primary">
              Ask us directly
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
