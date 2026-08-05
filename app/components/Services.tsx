"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/app/components/Elements/Container";
import Button from "@/app/components/Elements/Button";

const services = [
  {
    number: "01",
    title: "Strategy & Positioning",
    description:
      "Before a single pixel, we figure out what makes you different and why anyone should care. A clear plan everyone on your team can point to.",
    includes: ["Brand strategy", "Market positioning", "Messaging framework"],
  },
  {
    number: "02",
    title: "Brand Identity",
    description:
      "Logos are the easy part. We build full identity systems, color, type, voice, and the rules that keep it consistent as you grow.",
    includes: ["Visual identity", "Brand guidelines", "Naming & voice"],
  },
  {
    number: "03",
    title: "Web & Digital Experience",
    description:
      "Websites and digital products that look like you and work like they mean it. Design and development, done properly, not just prettily.",
    includes: ["Web design", "Development", "Product design"],
  },
  {
    number: "04",
    title: "Content & Storytelling",
    description:
      "The words and visuals that carry your brand everywhere it shows up, written to sound like a person, not a press release.",
    includes: ["Copywriting", "Content systems", "Creative direction"],
  },
  {
    number: "05",
    title: "Advertising & Media",
    description:
      "Paid campaigns across search, social, and display, built on the strategy underneath them instead of guesswork.",
    includes: ["Paid social", "Search & display", "Campaign creative"],
  },
  {
    number: "06",
    title: "Growth & Optimization",
    description:
      "The work that never really finishes. Testing, refining, and compounding results long after launch day.",
    includes: ["Conversion optimization", "Analytics", "Ongoing iteration"],
  },
];

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-24 sm:py-32 bg-surface">
      <Container>
        {/* ── Section header ─────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-end mb-14">
          <h2
            className="font-bold text-text tracking-tight"
            style={{ fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.03em" }}
          >
            What we
            <span className="font-serif italic font-normal"> actually do</span>
          </h2>
          <p className="text-muted text-[16px] leading-relaxed lg:pb-1">
            Six disciplines, one team. Nothing we build is decorative, it&apos;s
            all in service of a brand people remember.
          </p>
        </div>

        {/* ── Interactive list ──────────────────────────────────── */}
        <div className="border-t border-border">
          {services.map((service, i) => {
            const isOpen = active === i;
            return (
              <div key={service.number} className="border-b border-border">
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${service.number}`}
                  className="w-full flex items-center gap-6 py-7 sm:py-9 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg"
                >
                  <span
                    className={`text-sm font-semibold tracking-widest tabular-nums transition-colors flex-shrink-0 ${
                      isOpen ? "text-primary" : "text-muted/50"
                    }`}
                  >
                    {service.number}
                  </span>
                  <span
                    className={`flex-1 font-bold tracking-tight transition-colors ${
                      isOpen ? "text-primary" : "text-text group-hover:text-primary/70"
                    }`}
                    style={{ fontSize: "clamp(22px, 3.6vw, 40px)", letterSpacing: "-0.02em" }}
                  >
                    {service.title}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "bg-primary border-primary text-white rotate-45"
                        : "border-border text-muted"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-panel-${service.number}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-9 pl-0 sm:pl-[68px] grid sm:grid-cols-[1fr_260px] gap-6 sm:gap-10">
                        <p className="text-muted text-[16px] leading-relaxed max-w-xl">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap content-start gap-2">
                          {service.includes.map((item) => (
                            <span
                              key={item}
                              className="text-xs font-medium text-text/70 bg-white border border-border px-3 py-1.5 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ── Footer row ─────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mt-14">
          <div className="flex-1 h-px bg-border" />
          <Button href="#contact" variant="primary">
            Talk through your project
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Services;
