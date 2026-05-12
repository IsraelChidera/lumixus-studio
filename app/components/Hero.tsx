import React from "react";
import Container from "@/app/components/Elements/Container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const stats = [
  { value: "20+", label: "Businesses Served" },
  { value: "4 Wks", label: "Avg. Launch Time" },
  { value: "100%", label: "Mobile Optimized" },
  { value: "5★", label: "Client Satisfaction" }
];

const Hero = () => {
  return (
    <header className="relative min-h-screen bg-dark flex flex-col justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 pt-36 pb-28">
        {/* Availability badge */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 text-white/80 text-xs font-medium px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            2 of 5 Client Slots Remaining This Month
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-center font-bold tracking-tight text-white leading-[1.04] max-w-4xl mx-auto"
            style={{ fontSize: "clamp(48px, 7vw, 84px)", letterSpacing: "-0.03em" }}>
          Stop Losing Leads.
          <br />
          <span className="gradient-text-primary">Start Closing Deals.</span>
        </h1>

        {/* Subheading */}
        <p className="text-center text-white/50 mt-7 max-w-xl mx-auto leading-relaxed"
           style={{ fontSize: "clamp(16px, 1.5vw, 18px)" }}>
          We build high-converting digital systems for B2B businesses - websites,
          branding, automation, and strategy - engineered to fill your pipeline and
          close more sales.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="https://cal.com/lumixus-studio/30min"
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-full text-[15px] transition-colors shadow-lg shadow-primary/30 w-full sm:w-auto justify-center"
          >
            Book Free Strategy Call
            <MdArrowOutward className="text-lg" />
          </Link>

          <Link
            href="#works"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-4 rounded-full text-[15px] transition-colors w-full sm:w-auto justify-center"
          >
            View Our Work
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-10 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-white/40 text-sm mt-1.5 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom gradient fade */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" /> */}
    </header>
  );
};

export default Hero;
