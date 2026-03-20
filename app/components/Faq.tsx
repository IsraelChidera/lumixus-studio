"use client";

import React, { useState } from "react";
import Container from "@/app/components/Elements/Container";

const faqs = [
  {
    question: "What services does Lumixus Studio offer?",
    answer:
      "We specialize in web design & development, brand identity, business automation, growth strategy, social media management, and conversion optimization — all focused on B2B businesses."
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard website typically takes 2–4 weeks. More advanced projects (e-commerce, automation integrations) may take 4–8 weeks. We prioritize quality without cutting corners."
  },
  {
    question: "Do you offer branding alongside web design?",
    answer:
      "Yes. Our Starter Package includes brand identity basics (logo, colors, typography), while higher-tier packages include full brand strategy, social media templates, and marketing systems."
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes — we offer flexible payment options including installments for higher-tier packages. Book a call and we'll structure a plan that works for your budget."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "100%. Every website we build is fully responsive and rigorously tested across desktop, tablet, and mobile to ensure a seamless experience for every visitor."
  },
  {
    question: "Can you handle social media and content marketing?",
    answer:
      "Yes. Our Growth and Scale packages include social media strategy, content creation, and paid ad management to drive qualified leads from every channel."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Absolutely. We offer monthly maintenance plans covering bug fixes, security updates, performance monitoring, and content updates to keep your site running optimally."
  },
  {
    question: "How do I get started?",
    answer:
      "Simply book a free intro call. We'll talk through your goals, suggest the right package, and outline the exact steps to get your project moving."
  }
];

const Faq = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-28 bg-surface">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="section-label mb-4 inline-flex">
              <span className="w-1 h-1 rounded-full bg-primary" />
              FAQ
            </span>
            <h2
              className="font-bold text-text mt-3 tracking-tight"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", letterSpacing: "-0.02em" }}
            >
              Got questions?{" "}
              <span className="gradient-text-primary">We've got answers.</span>
            </h2>
          </div>

          {/* Accordion */}
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

          {/* Bottom CTA */}
          <div className="text-center mt-12 pt-10 border-t border-border">
            <p className="text-sm text-muted mb-4">Still have questions?</p>
            <a
              href="https://cal.com/lumixus-studio/30min"
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
