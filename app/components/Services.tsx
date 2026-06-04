"use client";

import { motion } from "motion/react";
import Container from "@/app/components/Elements/Container";

const services = [
  {
    number: "01",
    title: "Lead Generation System",
    description:
      "We engineer your entire digital funnel — landing pages, SEO, LinkedIn presence, and lead capture flows — to deliver a consistent stream of qualified B2B prospects without relying on referrals.",
    tag: "Lead Gen",
    outcome: "Predictable pipeline",
  },
  {
    number: "02",
    title: "Client Acquisition Website",
    description:
      "Not a brochure — a conversion machine. Every page is architected to build trust, communicate authority, and turn visitors into booked discovery calls. Designed for B2B buyers, not general audiences.",
    tag: "Web",
    outcome: "More booked calls",
  },
  {
    number: "03",
    title: "Brand Authority System",
    description:
      "Positioning, visual identity, and messaging that makes you the obvious choice in your market. When prospects land on your site or social, they should immediately think: these are the people I need.",
    tag: "Branding",
    outcome: "Premium perception",
  },
  {
    number: "04",
    title: "Conversion Optimization",
    description:
      "Systematic analysis and improvement of every touchpoint in your funnel. We identify exactly where prospects drop off and fix it — turning your existing traffic into booked meetings.",
    tag: "CRO",
    outcome: "Higher close rates",
  },
  {
    number: "05",
    title: "Business Automation",
    description:
      "CRM setup, follow-up sequences, proposal automation, and workflow systems that keep leads warm and moving through your pipeline — without your team doing it all manually.",
    tag: "Automation",
    outcome: "Zero manual follow-up",
  },
  {
    number: "06",
    title: "B2B Content & SEO",
    description:
      "Long-form content, LinkedIn strategy, and technical SEO that positions you as the authority in your niche — so ideal clients find you before they find your competitors.",
    tag: "SEO & Content",
    outcome: "Inbound authority",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-surface">
      <Container>

        {/* ── Section header ─────────────────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="section-label">
              <span className="w-1 h-1 rounded-full bg-primary" />
              What We Build
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-end">
            <h2
              className="font-bold text-text tracking-tight"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}
            >
              Six systems that turn your
              <br />
              <span className="gradient-text-primary">digital presence into revenue</span>
            </h2>
            <p className="text-muted text-[16px] leading-relaxed lg:pb-1">
              Every engagement is scoped around one metric: qualified leads into your pipeline.
              Nothing we build is decorative — it&apos;s all engineered to convert.
            </p>
          </div>
        </div>

        {/* ── Services grid ──────────────────────────────────────── */}
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-white border border-border rounded-2xl p-7 card-glow cursor-default flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-semibold text-primary/50 tracking-widest uppercase">
                  {service.number}
                </span>
                <span className="text-xs font-medium text-muted bg-surface border border-border px-2.5 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>

              <div className="w-8 h-px bg-primary/20 group-hover:bg-primary group-hover:w-12 transition-all duration-300 mb-5" />

              <h3 className="text-[17px] font-semibold text-text leading-snug mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed flex-1">{service.description}</p>

              <div className="mt-5 pt-4 border-t border-border">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/8 px-3 py-1.5 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {service.outcome}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Footer row ─────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mt-14">
          <div className="flex-1 h-px bg-border" />
          <a
            href="https://cal.com/lumixus-studio/30min"
            className="shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-colors shadow-lg shadow-primary/20"
          >
            Discuss Your Growth System
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

      </Container>
    </section>
  );
};

export default Services;
