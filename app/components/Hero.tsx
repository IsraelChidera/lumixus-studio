"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import Container from "@/app/components/Elements/Container";
import Button from "@/app/components/Elements/Button";
import { MdArrowOutward } from "react-icons/md";

const capabilities = ["Strategy", "Branding", "Web", "Content", "Advertising", "Growth"];

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const rise = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { y: 24, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.7, delay, ease: "easeOut" as const }
        };

  return (
    <header className="relative min-h-screen bg-dark flex flex-col overflow-hidden noise">
      {/* Ambient glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[560px] h-[560px] bg-primary/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[480px] h-[480px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />

      <Container className="relative z-10 flex flex-col justify-between flex-1 pt-28 pb-12 min-h-screen">
        {/* ── Top row ──────────────────────────────────────────────── */}
        <motion.div {...rise(0)} className="flex items-center justify-between">
          <span className="text-white/50 text-[11px] tracking-[0.2em] uppercase font-medium">
            Full-Service Marketing Agency
          </span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
            </span>
            <span className="text-white/45 text-[11px] tracking-[0.15em] uppercase">
              Now booking new projects
            </span>
          </div>
        </motion.div>

        {/* ── Headline ─────────────────────────────────────────────── */}
        <div className="my-auto py-16 sm:py-20">
          <motion.h1
            {...rise(0.08)}
            className="font-bold text-white leading-[0.95] tracking-[-0.04em]"
            style={{ fontSize: "clamp(48px, 8.5vw, 124px)" }}
          >
            We make brands
            <br />
            <span className="font-serif italic font-normal tracking-normal text-primary">
              worth remembering.
            </span>
          </motion.h1>

          <motion.div
            {...rise(0.2)}
            className="mt-10 grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-16 items-start"
          >
            <p className="text-white/45 text-[16px] sm:text-[18px] leading-[1.7] font-light max-w-lg">
              Strategy, branding, web design, content and advertising, under
              one roof. For companies who want to grow, not just look busy.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Button href="#contact" variant="inverse">
                Start a project
              </Button>
              <Button href="#works" variant="outline-dark" icon={false}>
                See our work
              </Button>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom row ───────────────────────────────────────────── */}
        <motion.div {...rise(0.32)}>
          <div className="w-full h-px bg-white/8 mb-8" />
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {capabilities.map((cap, i) => (
                <span
                  key={cap}
                  className="flex items-center gap-3 text-white/50 text-[13px] font-light"
                >
                  {i > 0 && <span className="w-0.5 h-0.5 rounded-full bg-white/15" />}
                  {cap}
                </span>
              ))}
            </div>
            <Link
              href="#works"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[13px] font-medium transition-colors"
            >
              Selected work
              <MdArrowOutward className="text-sm" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </header>
  );
};

export default Hero;
