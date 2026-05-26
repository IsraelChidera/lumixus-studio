"use client";

import React from "react";
import Container from "@/app/components/Elements/Container";
import { motion } from "motion/react";

const problems = [
  "You have a website, but it brings in zero qualified leads",
  "Your pipeline runs on referrals — and dries up when they stop",
  "Sales conversations start with \"how much?\" not \"how can you help me?\"",
  "You're invisible on Google and LinkedIn in your own industry",
  "Your brand looks generic — no one can tell why you're different",
  "You follow up manually with every prospect — it doesn't scale",
  "Prospects visit your site and leave without contacting you",
  "You spend on ads but can't track what actually converts",
  "Every new client feels like luck, not a system working",
  "You want to grow, but your digital infrastructure can't support it",
];

const PainPoints = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <Container>
        <div className="flex justify-center mb-6">
          <span className="section-label">
            <span className="w-1 h-1 rounded-full bg-primary inline-block" />
            Sound Familiar?
          </span>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            className="font-bold text-text tracking-tight"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
          >
            Your business is good.{" "}
            <span className="gradient-text-primary">Your pipeline shouldn't be this unreliable.</span>
          </h2>
          <p className="mt-4 text-muted text-[17px] leading-relaxed">
            These are the exact problems B2B service businesses hire us to fix.
            If one of these is costing you clients right now, keep reading.
          </p>
        </div>

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

          <div className="mt-10 text-center">
            <p className="text-muted text-sm">
              We've solved every one of these for B2B businesses like yours.{" "}
              <a
                href="#services"
                className="text-primary font-semibold hover:underline underline-offset-4"
              >
                See exactly how →
              </a>
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default PainPoints;
