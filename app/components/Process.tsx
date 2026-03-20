"use client";

import React from "react";
import Container from "@/app/components/Elements/Container";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Quick Intro Call",
    description:
      "A focused 20-minute call to understand your goals, identify gaps, and determine exactly how we can help.",
    duration: "20 min"
  },
  {
    number: "02",
    title: "Strategy & Proposal",
    description:
      "We map a custom growth plan tailored to your goals, then deliver a clear, transparent proposal with timelines.",
    duration: "2–3 days"
  },
  {
    number: "03",
    title: "Onboarding",
    description:
      "Once aligned, we kick off the project, onboard you to our workflow, and begin execution — fast and structured.",
    duration: "Day 1"
  },
  {
    number: "04",
    title: "Launch & Ongoing Support",
    description:
      "We don't stop at launch. You get unlimited revisions, performance monitoring, and continuous support until results are locked in.",
    duration: "Ongoing"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-28 bg-surface">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex">
            <span className="w-1 h-1 rounded-full bg-primary" />
            How We Work
          </span>
          <h2
            className="font-bold text-text mt-3 tracking-tight"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
          >
            Simple. Structured.{" "}
            <span className="gradient-text-primary">Proven.</span>
          </h2>
          <p className="mt-4 text-muted text-[17px] max-w-md mx-auto leading-relaxed">
            From first call to launch, our 4-step process keeps you informed and confident at every stage.
          </p>
        </div>

        {/* Steps */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Number circle */}
                <div className="w-10 h-10 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center mb-6 relative z-10 group-hover:border-primary transition-colors">
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                </div>

                {/* Card */}
                <div className="bg-white border border-border rounded-2xl p-6 h-full card-glow">
                  {/* Duration badge */}
                  <span className="inline-flex text-xs font-medium text-muted bg-surface border border-border px-2.5 py-1 rounded-full mb-4">
                    {step.duration}
                  </span>

                  <h3 className="text-base font-semibold text-text mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://cal.com/lumixus-studio/30min"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
          >
            Start with a free intro call →
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Process;
