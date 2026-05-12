"use client";

import React from "react";
import Container from "@/app/components/Elements/Container";
import { motion } from "motion/react";

const problems = [
  "Leads come in, but follow-ups are inconsistent",
  "Your online presence doesn't build trust fast enough",
  "You post online, but it doesn't bring real customers",
  "People ask for price, then disappear",
  "Your processes aren't automated - everything relies on you",
  "You're busy, but growth isn't consistent",
  "Your business looks good offline, but weak online",
  "Referrals are your only source of new business",
  "You want to scale, but your systems aren't built for it",
  "You want more sales, but don't know where to start"
];

const PainPoints = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <Container>
        {/* Label */}
        <div className="flex justify-center mb-6">
          <span className="section-label">
            <span className="w-1 h-1 rounded-full bg-primary inline-block" />
            Sound Familiar?
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className="font-bold text-text tracking-tight"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
          >
            Running a business{" "}
            <span className="gradient-text-primary">shouldn't feel this hard.</span>
          </h2>
          <p className="mt-4 text-muted text-[17px] leading-relaxed">
            If any of these sound like your reality, you're not alone - and you're
            in the right place.
          </p>
        </div>

        {/* Problem grid */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-surface border border-border rounded-xl px-5 py-4 group hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-200"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-red-50 border border-red-200 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <p className="text-base text-text/80 leading-snug">{problem}</p>
              </div>
            ))}
          </div>

          {/* Resolution line */}
          <div className="mt-10 text-center">
            <p className="text-muted text-sm">
              We solve every single one of these.{" "}
              <a
                href="#services"
                className="text-primary font-semibold hover:underline underline-offset-4"
              >
                See how →
              </a>
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default PainPoints;
