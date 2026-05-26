"use client";

import React from "react";
import Container from "@/app/components/Elements/Container";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Free Growth Audit",
    description:
      "A focused 30-minute audit call. We assess your current pipeline, digital presence, and the specific gaps costing you clients. You leave with clarity — whether or not we work together.",
    duration: "30 min",
    label: "No cost, no commitment",
  },
  {
    number: "02",
    title: "Growth System Blueprint",
    description:
      "We map your custom client acquisition system — what to build, what to fix, and in what order. You receive a clear proposal with projected outcomes, timelines, and investment.",
    duration: "2–3 days",
    label: "Strategy before execution",
  },
  {
    number: "03",
    title: "System Build & Launch",
    description:
      "Execution begins the moment you're ready. We build fast, keep you informed at every stage, and launch with precision — no delays, no surprises, no scope creep.",
    duration: "2–6 weeks",
    label: "Full-service delivery",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description:
      "Post-launch isn't the finish line. We monitor performance, run conversion tests, and continuously improve your system so results compound month over month.",
    duration: "Ongoing",
    label: "Growth never stops",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-28 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex">
            <span className="w-1 h-1 rounded-full bg-primary" />
            How It Works
          </span>
          <h2
            className="font-bold text-text mt-3 tracking-tight"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
          >
            From audit to revenue —{" "}
            <span className="gradient-text-primary">in four steps.</span>
          </h2>
          <p className="mt-4 text-muted text-[17px] max-w-md mx-auto leading-relaxed">
            No vague timelines. No mysterious processes. Here's exactly how we take
            your business from invisible to inevitable.
          </p>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center mb-6 relative z-10">
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                </div>

                <div className="bg-surface border border-border rounded-2xl p-6 h-full card-glow">
                  <span className="inline-flex text-xs font-medium text-primary bg-primary/8 px-2.5 py-1 rounded-full mb-3">
                    {step.duration}
                  </span>

                  <h3 className="text-base font-semibold text-text mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <p className="text-[11px] font-semibold text-muted/50 tracking-widest uppercase">
                    {step.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="text-center mt-20">
          <a
            href="https://cal.com/lumixus-studio/30min"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
          >
            Start with a free growth audit →
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Process;
