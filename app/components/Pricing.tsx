"use client";

import { motion } from "motion/react";
import Container from "@/app/components/Elements/Container";

const paths = [
  {
    letter: "A",
    title: "A Project",
    description:
      "A focused, scoped engagement, a new identity, a new site, a campaign. Clear deliverables, a clear timeline, a clear end point.",
  },
  {
    letter: "B",
    title: "A Partnership",
    description:
      "Ongoing marketing support, month to month. We become the team behind your growth, not a vendor you call once a year.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-label justify-center mb-6">
            <span className="w-1 h-1 rounded-full bg-primary" />
            How We Work
          </span>
          <h2
            className="font-bold text-text tracking-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 52px)", letterSpacing: "-0.03em" }}
          >
            Two ways to
            <span className="font-serif italic font-normal"> start.</span>
          </h2>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 max-w-3xl mx-auto divide-y sm:divide-y-0 sm:divide-x divide-border"
        >
          {paths.map((path) => (
            <div key={path.letter} className="px-0 sm:px-10 py-8 first:pt-0 sm:first:pl-0 sm:last:pr-0">
              <span className="font-serif italic text-4xl text-primary/40">{path.letter}</span>
              <h3 className="text-xl font-bold text-text tracking-tight mt-4 mb-3">
                {path.title}
              </h3>
              <p className="text-muted text-[15px] leading-relaxed">
                {path.description}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <p className="text-muted text-sm mb-6">
            Not sure which one you need? That&apos;s exactly what the first call is for.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline underline-offset-4"
          >
            Start the conversation →
          </a>
        </div>
      </Container>
    </section>
  );
};

export default HowWeWork;
