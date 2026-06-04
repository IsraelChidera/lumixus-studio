"use client";

import { motion } from "motion/react";
import Container from "@/app/components/Elements/Container";

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

        {/* ── Section header ─────────────────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="section-label">
              <span className="w-1 h-1 rounded-full bg-primary" />
              How It Works
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-end">
            <h2
              className="font-bold text-text tracking-tight"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}
            >
              From audit to revenue —
              <br />
              <span className="gradient-text-primary">in four steps.</span>
            </h2>
            <p className="text-muted text-[16px] leading-relaxed lg:pb-1">
              No vague timelines. No mysterious processes. Here&apos;s exactly how we take
              your business from invisible to inevitable.
            </p>
          </div>
        </div>

        {/* ── Steps ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="hidden lg:block absolute top-5 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center mb-6 relative z-10">
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                </div>

                <div className="bg-surface border border-border rounded-2xl p-6 h-full">
                  <span className="inline-flex text-xs font-semibold text-primary bg-primary/8 px-2.5 py-1 rounded-full mb-4">
                    {step.duration}
                  </span>

                  <h3 className="text-[15px] font-semibold text-text mb-3 leading-snug">
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

        {/* ── Footer ─────────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mt-16">
          <div className="flex-1 h-px bg-border" />
          <a
            href="https://cal.com/lumixus-studio/30min"
            className="shrink-0 text-sm font-semibold text-primary hover:underline underline-offset-4"
          >
            Start with a free growth audit →
          </a>
        </div>

      </Container>
    </section>
  );
};

export default Process;
