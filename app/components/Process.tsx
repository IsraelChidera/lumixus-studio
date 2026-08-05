"use client";

import { motion } from "motion/react";
import Container from "@/app/components/Elements/Container";

const steps = [
  {
    number: "01",
    title: "Understand",
    duration: "Week 1",
    description:
      "We start by listening. Your market, your customers, what's already working and what's quietly not.",
  },
  {
    number: "02",
    title: "Shape",
    duration: "Weeks 2–3",
    description:
      "Strategy and creative direction come together into a plan you can actually see, not just a deck.",
  },
  {
    number: "03",
    title: "Build",
    duration: "Weeks 3–6",
    description:
      "Design and development move fast, with you kept in the loop at every stage. No surprises, no scope creep.",
  },
  {
    number: "04",
    title: "Grow",
    duration: "Ongoing",
    description:
      "Launch isn't the finish line. We keep testing, refining, and compounding results long after.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 sm:py-32 bg-dark relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <Container className="relative z-10">
        {/* ── Section header ─────────────────────────────────────── */}
        <div className="flex items-end justify-between gap-8 mb-16 sm:mb-24 flex-wrap">
          <h2
            className="font-bold text-white tracking-tight max-w-xl"
            style={{ fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.03em" }}
          >
            How we
            <span className="font-serif italic font-normal text-primary"> work together</span>
          </h2>
          <p className="text-white/55 text-[16px] leading-relaxed max-w-xs">
            No mysterious process. Four stages, start to finish.
          </p>
        </div>

        {/* ── Steps ──────────────────────────────────────────────── */}
        <div className="relative pl-8 sm:pl-12 border-l border-white/10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative ${i !== steps.length - 1 ? "pb-16 sm:pb-20" : ""}`}
              style={{ marginLeft: `${(i % 2) * 6}%` }}
            >
              <span className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-dark" />

              <div className="flex items-baseline gap-4 mb-3 flex-wrap">
                <span className="text-xs font-semibold text-white/45 tracking-widest tabular-nums">
                  {step.number}
                </span>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>

              <h3
                className="font-serif italic font-normal text-white leading-none mb-4"
                style={{ fontSize: "clamp(30px, 4.5vw, 52px)" }}
              >
                {step.title}
              </h3>
              <p className="text-white/60 text-[16px] leading-relaxed max-w-md">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
