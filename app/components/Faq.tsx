"use client";

import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Container from "@/app/components/Elements/Container";
import { faqs } from "@/app/lib/faqs";
import { BOOKING_URL } from "@/app/lib/site";

const Faq = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-20">
          {/* ── Header + direct line ─────────────────────────────── */}
          <div className="lg:sticky lg:top-32 self-start">
            <h2
              className="font-bold text-text"
              style={{ fontSize: "clamp(32px, 4.2vw, 56px)", letterSpacing: "-0.035em", lineHeight: 1.04 }}
            >
              Questions buyers ask before they call.
            </h2>
            <p className="mt-6 text-muted text-[17px] leading-relaxed max-w-md">
              Straight answers on scope, cost, timelines and how we measure
              results.
            </p>

            <div className="mt-10 rounded-[24px] bg-surface p-6 sm:p-7 max-w-md">
              <p className="text-[17px] font-bold text-text tracking-tight">Have a question that isn&apos;t here?</p>
              <p className="mt-2 text-[15px] text-muted leading-relaxed">
                Ask it on a 30-minute call. If we&apos;re not the right fit, we&apos;ll tell you.
              </p>
              <a
                href={BOOKING_URL}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary hover:bg-secondary text-white text-sm font-semibold px-5 py-3 transition-colors"
              >
                Book a pipeline review <MdArrowOutward aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* ── Questions ────────────────────────────────────────── */}
          <div className="border-t border-border">
            {faqs.map((faq, i) => {
              const isOpen = active === i;
              const panelId = `faq-panel-${i}`;
              return (
                <div key={faq.question} className="border-b border-border">
                  <h3>
                    <button
                      id={`faq-trigger-${i}`}
                      className="w-full flex items-start justify-between gap-6 py-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg group"
                      onClick={() => setActive(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span
                        className={`text-[18px] sm:text-[20px] font-bold tracking-[-0.02em] leading-snug transition-colors ${
                          isOpen ? "text-text" : "text-text/70 group-hover:text-text"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                          isOpen ? "bg-primary text-white rotate-45" : "bg-surface text-text"
                        }`}
                        aria-hidden="true"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    hidden={!isOpen}
                    className="pb-8 pr-14"
                  >
                    <p className="text-[16px] text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
