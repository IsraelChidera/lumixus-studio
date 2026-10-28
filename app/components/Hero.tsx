"use client";

import { motion, useReducedMotion } from "motion/react";
import Container from "@/app/components/Elements/Container";
import Button from "@/app/components/Elements/Button";

// The orbit is the growth system itself: three rings around the outcome.
// Inner ring brings prospects in, middle ring converts them, outer ring
// follows up and measures. Each ring turns at its own pace.
type Ring = {
  name: string;
  radius: number; // % of the orbit's width, from the centre
  duration: number; // seconds per revolution
  offset: number; // starting angle in degrees
  dot: string;
  stroke: string;
  nodes: string[];
};

const rings: Ring[] = [
  {
    name: "Attract",
    radius: 22,
    duration: 46,
    offset: -90,
    dot: "bg-primary",
    stroke: "border-primary/25",
    nodes: ["SEO", "Content", "Ads"],
  },
  {
    name: "Convert",
    radius: 34,
    duration: 70,
    offset: -30,
    dot: "bg-accent",
    stroke: "border-accent/20",
    nodes: ["Positioning", "Website", "Landing pages"],
  },
  {
    name: "Follow up",
    radius: 46,
    duration: 96,
    offset: 10,
    dot: "bg-[#a7a9ff]",
    stroke: "border-[#a7a9ff]/40 border-dashed",
    nodes: ["CRM", "Automation", "Reporting"],
  },
];

const Orbit = () => (
  <div className="relative w-full max-w-[560px] mx-auto aspect-square">
    {/* Soft field behind the system */}
    <div className="absolute inset-[8%] rounded-full bg-primary/[0.06] blur-3xl" aria-hidden="true" />

    {rings.map((ring) => {
      const size = ring.radius * 2;
      const spin = `${ring.duration}s`;
      return (
        <div key={ring.name} aria-hidden="true">
          {/* Track */}
          <div
            className={`absolute rounded-full border ${ring.stroke}`}
            style={{
              width: `${size}%`,
              height: `${size}%`,
              left: `${50 - ring.radius}%`,
              top: `${50 - ring.radius}%`,
            }}
          />
          {/* Rotating layer carrying the nodes */}
          <div
            className="absolute inset-0 animate-[spin_linear_infinite] motion-reduce:animate-none"
            style={{ animationDuration: spin }}
          >
            {ring.nodes.map((node, i) => {
              const angle = ((ring.offset + (360 / ring.nodes.length) * i) * Math.PI) / 180;
              const x = 50 + ring.radius * Math.cos(angle);
              const y = 50 + ring.radius * Math.sin(angle);
              return (
                <div
                  key={node}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {/* Counter-rotate so labels stay upright */}
                  <div
                    className="animate-[spin_linear_infinite] [animation-direction:reverse] motion-reduce:animate-none"
                    style={{ animationDuration: spin }}
                  >
                    <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white border border-border shadow-[0_6px_20px_-8px_rgba(54,0,255,0.25)] pl-2 pr-3 py-1.5 text-[11px] sm:text-[13px] font-medium text-text">
                      <span className={`w-1.5 h-1.5 rounded-full ${ring.dot}`} />
                      {node}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    })}

    {/* The outcome at the centre */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[27%] aspect-square rounded-full bg-primary shadow-[0_20px_60px_-12px_rgba(54,0,255,0.55)] flex flex-col items-center justify-center text-center p-2">
      <span className="text-white font-bold leading-tight text-[12px] sm:text-[17px] tracking-tight">
        Qualified
        <br />
        leads
      </span>
    </div>
  </div>
);

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        };

  return (
    <header className="relative overflow-hidden bg-white">
      {/* Faint ring field echoing the orbit, anchored to the right */}
      <div
        className="absolute -right-[20%] top-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full pointer-events-none opacity-60"
        style={{
          background:
            "repeating-radial-gradient(circle at center, transparent 0 79px, rgba(54,0,255,0.05) 79px 80px)",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 pt-32 sm:pt-36 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-8 items-center">
          {/* ── Copy ─────────────────────────────────────────────── */}
          <div>
            <motion.p
              {...rise(0)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] font-medium text-text/80"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              Digital growth systems for B2B service businesses
            </motion.p>

            <motion.h1
              {...rise(0.08)}
              className="mt-7 font-bold text-text leading-[1.02] tracking-[-0.035em]"
              style={{ fontSize: "clamp(40px, 5.4vw, 76px)" }}
            >
              Turn your digital presence into a steady source of clients.
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-6 text-muted text-[17px] sm:text-[19px] leading-[1.6] max-w-[34rem]"
            >
              We build the system that brings the right prospects to you, turns
              them into enquiries and follows up until they become customers:
              positioning, website, content, SEO and automation, working as one.
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button href="#contact" variant="primary">
                Book a pipeline review
              </Button>
              <Button href="#works" variant="outline" icon={false}>
                See our work
              </Button>
            </motion.div>
          </div>

          {/* ── Orbit ────────────────────────────────────────────── */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <Orbit />
            {/* Legend: what each ring does */}
            <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-muted">
              {rings.map((ring) => (
                <li key={ring.name} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${ring.dot}`} />
                  <span>
                    <span className="font-semibold text-text">{ring.name}</span>{" "}
                    {ring.nodes.join(", ")}
                  </span>
                </li>
              ))}
            </ul>
            <p className="sr-only">
              The Lumixus growth system: attract prospects with SEO, content and ads;
              convert them with positioning, your website and landing pages; and follow
              up with CRM, automation and reporting, all centred on qualified leads.
            </p>
          </motion.div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
