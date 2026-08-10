"use client";

import { motion } from "motion/react";
import Container from "@/app/components/Elements/Container";

const beliefs = [
  {
    number: "01",
    text: "We turn your website into a source of clients. Not just a brochure.",
  },
  {
    number: "02",
    text: "We solve business problems with design and marketing, not decoration.",
  },
  {
    number: "03",
    text: "We care about outcomes, not vanity metrics or awards nobody remembers.",
  },
  {
    number: "04",
    text: "Good marketing is good business. That's the whole philosophy.",
  },
];

const Philosophy = () => {
  return (
    <section className="py-24 sm:py-32 bg-white" id="about">
      <Container>
        <div className="flex items-center gap-4 mb-16">
          <span className="section-label">
            <span className="w-1 h-1 rounded-full bg-primary" />
            What We Believe
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <h2 className="sr-only">Our Philosophy</h2>

        <div className="max-w-4xl">
          {beliefs.map((belief, i) => (
            <motion.div
              key={belief.number}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex items-start gap-6 sm:gap-10 py-8 ${
                i === 0 ? "border-t border-border" : ""
              } ${i !== beliefs.length - 1 ? "border-b border-border" : "pb-0"} ${
                i % 2 === 1 ? "sm:pl-12" : ""
              }`}
            >
              <span className="text-xs font-semibold text-primary/40 tracking-widest uppercase mt-3 flex-shrink-0">
                {belief.number}
              </span>
              <p
                className={`text-text leading-[1.25] tracking-tight ${
                  i === beliefs.length - 1 ? "font-serif italic font-normal" : "font-bold"
                }`}
                style={{ fontSize: "clamp(24px, 3.4vw, 40px)" }}
              >
                {belief.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Philosophy;
