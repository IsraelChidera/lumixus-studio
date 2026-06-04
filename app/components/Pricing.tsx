"use client";

import { motion } from "motion/react";
import Container from "@/app/components/Elements/Container";
import Link from "next/link";

const plans = [
  {
    name: "Foundation",
    tagline: "One-time build to get your B2B growth infrastructure in place",
    highlight: false,
    deliverable: "Project-based",
    features: [
      "Client acquisition website (5–8 pages)",
      "B2B messaging & positioning framework",
      "On-page SEO foundation",
      "Lead capture & CRM integration",
      "Brand identity guide",
      "Google My Business setup",
      "30-day post-launch support",
    ],
    cta: "Start the Conversation",
    ctaHref: "https://cal.com/lumixus-studio/30min",
  },
  {
    name: "Growth Partner",
    tagline: "Monthly retainer for businesses ready to scale leads consistently",
    highlight: true,
    badge: "Most Popular",
    deliverable: "Monthly retainer",
    features: [
      "Everything in Foundation",
      "Ongoing SEO & content publishing",
      "LinkedIn strategy & execution",
      "Conversion optimization (monthly CRO sprints)",
      "Email & lead nurture automation",
      "Social media management",
      "Monthly performance report & strategy review",
    ],
    cta: "Become a Growth Partner",
    ctaHref: "https://cal.com/lumixus-studio/30min",
  },
  {
    name: "Scale",
    tagline: "Full growth partnership for B2B firms serious about market dominance",
    highlight: false,
    deliverable: "Full partnership",
    features: [
      "Everything in Growth Partner",
      "Paid ads strategy & management (Google/Meta/LinkedIn)",
      "Full CRM & sales automation setup",
      "AI-powered lead qualification workflows",
      "Dedicated growth strategist",
      "Quarterly brand & positioning audits",
      "Priority support & execution",
    ],
    cta: "Let's Dominate",
    ctaHref: "https://cal.com/lumixus-studio/30min",
  },
];

const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Pricing = () => {
  return (
    <section className="py-28 bg-surface">
      <Container>

        {/* ── Section header ─────────────────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="section-label">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Engagement Models
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-end">
            <h2
              className="font-bold text-text tracking-tight"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}
            >
              Choose how we
              <br />
              <span className="gradient-text-primary">grow together</span>
            </h2>
            <p className="text-muted text-[16px] leading-relaxed lg:pb-1">
              Whether you need the foundation built right or a long-term growth partner,
              we have an engagement model that fits your stage and ambition.
            </p>
          </div>
        </div>

        {/* ── Plans ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 items-start"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col h-full ${
                plan.highlight
                  ? "bg-deep border-transparent shadow-2xl shadow-primary/15"
                  : "bg-white border-border"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <p className={`text-[11px] font-semibold tracking-[0.18em] uppercase ${plan.highlight ? "text-white/100" : "text-muted"}`}>
                    {plan.name}
                  </p>
                  <span className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${
                    plan.highlight
                      ? "border-white/30 text-white/55 bg-white/5"
                      : "border-border text-muted bg-surface"
                  }`}>
                    {plan.deliverable}
                  </span>
                </div>
                <div className={`w-8 h-px mb-5 ${plan.highlight ? "bg-primary/40" : "bg-border"}`} />
                <h3 className={`text-2xl font-bold mb-3 tracking-tight ${plan.highlight ? "text-white" : "text-text"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-white/40" : "text-muted"}`}>
                  {plan.tagline}
                </p>
              </div>

              <div className={`h-px mb-8 ${plan.highlight ? "bg-white/8" : "bg-border"}`} />

              <ul className="space-y-4 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className={`text-sm ${plan.highlight ? "text-white/65" : "text-text/70"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "bg-primary hover:bg-secondary text-white shadow-lg shadow-primary/25"
                    : "bg-surface hover:bg-primary hover:text-white text-text border border-border"
                }`}
              >
                {plan.cta}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            </div>
          ))}
        </motion.div>

        {/* ── Footer row ─────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mt-12">
          <div className="flex-1 h-px bg-border" />
          <p className="shrink-0 text-sm text-muted">
            Not sure which fits you?{" "}
            <a href="https://cal.com/lumixus-studio/30min" className="text-primary font-semibold hover:underline underline-offset-4">
              Book a free audit and we&apos;ll recommend the right starting point →
            </a>
          </p>
        </div>

      </Container>
    </section>
  );
};

export default Pricing;
