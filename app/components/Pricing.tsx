"use client";

import React from "react";
import Container from "@/app/components/Elements/Container";
import Link from "next/link";
import { motion } from "motion/react";

const plans = [
  {
    name: "Starter",
    tagline: "For new businesses establishing their digital presence",
    highlight: false,
    features: [
      "Custom Website Design & Development",
      "Basic SEO Setup (On-page optimization)",
      "Google My Business Setup",
      "Brand Identity Guide",
      "Social Media Profile Setup",
      "Add-ons available on request"
    ],
    cta: "Get Started",
    ctaHref: "https://cal.com/lumixus-studio/30min"
  },
  {
    name: "Growth",
    tagline: "For businesses ready to scale leads and visibility",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Advanced SEO & Technical SEO",
      "AI-Powered Chat Bot Integration",
      "Social Media Strategy Guide",
      "Content Creation & Strategy",
      "Full Social Media Management"
    ],
    cta: "Start Growing",
    ctaHref: "https://cal.com/lumixus-studio/30min"
  },
  {
    name: "Scale",
    tagline: "For businesses ready to dominate their market",
    highlight: false,
    features: [
      "Everything in Growth",
      "Full Marketing System Setup",
      "AI Workflow Automations",
      "Email Marketing Automation",
      "Paid Ads Strategy & Management",
      "Dedicated Growth Strategist"
    ],
    cta: "Let's Dominate",
    ctaHref: "https://cal.com/lumixus-studio/30min"
  }
];

const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Pricing = () => {
  return (
    <section className="py-28 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex">
            <span className="w-1 h-1 rounded-full bg-primary" />
            Packages
          </span>
          <h2
            className="font-bold text-text mt-3 tracking-tight"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
          >
            Flexible plans for{" "}
            <span className="gradient-text-primary">every stage</span>
          </h2>
          <p className="mt-4 text-muted text-[17px] max-w-md mx-auto leading-relaxed">
            No one-size-fits-all. Choose the package that matches where you are and where you want to go.
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
                  ? "bg-dark border-transparent shadow-2xl shadow-primary/20"
                  : "bg-white border-border"
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-8">
                <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${plan.highlight ? "text-white/40" : "text-muted"}`}>
                  {plan.name}
                </p>
                <h3 className={`text-2xl font-bold mb-3 ${plan.highlight ? "text-white" : "text-text"}`}>
                  {plan.name} Package
                </h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-white/50" : "text-muted"}`}>
                  {plan.tagline}
                </p>
              </div>

              {/* Divider */}
              <div className={`h-px mb-8 ${plan.highlight ? "bg-white/10" : "bg-border"}`} />

              {/* Features */}
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

              {/* CTA */}
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

        {/* Custom note */}
        <p className="text-center text-sm text-muted mt-10">
          Need something custom?{" "}
          <a
            href="https://cal.com/lumixus-studio/30min"
            className="text-primary font-semibold hover:underline underline-offset-4"
          >
            Let's talk about your specific goals →
          </a>
        </p>
      </Container>
    </section>
  );
};

export default Pricing;
