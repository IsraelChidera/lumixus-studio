"use client";

import React from "react";
import Container from "@/app/components/Elements/Container";
import Link from "next/link";
import { motion } from "motion/react";

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
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex">
            <span className="w-1 h-1 rounded-full bg-primary" />
            Engagement Models
          </span>
          <h2
            className="font-bold text-text mt-3 tracking-tight"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
          >
            Choose how we{" "}
            <span className="gradient-text-primary">grow together</span>
          </h2>
          <p className="mt-4 text-muted text-[17px] max-w-lg mx-auto leading-relaxed">
            Whether you need the foundation built right or a long-term growth partner,
            we have an engagement model that fits your stage and ambition.
          </p>
        </div>

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
                  ? "bg-[#181818] border-transparent shadow-2xl shadow-primary/20"
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
                <div className="flex items-center justify-between mb-3">
                  <p className={`text-xs font-semibold tracking-widest uppercase ${plan.highlight ? "text-white/40" : "text-muted"}`}>
                    {plan.name}
                  </p>
                  <span className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${
                    plan.highlight
                      ? "border-white/10 text-white/40 bg-white/5"
                      : "border-border text-muted bg-surface"
                  }`}>
                    {plan.deliverable}
                  </span>
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${plan.highlight ? "text-white" : "text-text"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-white/50" : "text-muted"}`}>
                  {plan.tagline}
                </p>
              </div>

              <div className={`h-px mb-8 ${plan.highlight ? "bg-white/10" : "bg-border"}`} />

              <ul className="space-y-4 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className={`mt-0.5 ${plan.highlight ? "text-accent" : ""}`}>
                      <CheckIcon />
                    </span>
                    <span className={`text-sm ${plan.highlight ? "text-white/70" : "text-text/70"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "bg-primary hover:bg-secondary text-white shadow-lg shadow-primary/30"
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

        <div className="mt-12 max-w-2xl mx-auto bg-white border border-border rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-text mb-0.5">Not sure which engagement fits your situation?</p>
            <p className="text-sm text-muted">We'll recommend the right starting point on the audit call - no upsell pressure.</p>
          </div>
          <a
            href="https://cal.com/lumixus-studio/30min"
            className="flex-shrink-0 text-sm font-semibold text-primary hover:underline underline-offset-4 whitespace-nowrap"
          >
            Book free audit →
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
