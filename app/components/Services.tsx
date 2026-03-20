"use client";

import React from "react";
import Container from "@/app/components/Elements/Container";
import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "High-performing, pixel-perfect websites engineered to convert visitors into qualified leads and paying clients.",
    tag: "Web"
  },
  {
    number: "02",
    title: "Brand Identity",
    description:
      "From logo to full visual system — we build brand identities that communicate trust, authority, and differentiation.",
    tag: "Branding"
  },
  {
    number: "03",
    title: "Business Automation",
    description:
      "Leverage intelligent automation to streamline operations, reduce manual work, and let your business run without you.",
    tag: "Automation"
  },
  {
    number: "04",
    title: "Growth Strategy",
    description:
      "Data-driven strategies tailored to your goals — from market positioning to lead generation that actually converts.",
    tag: "Strategy"
  },
  {
    number: "05",
    title: "Social Media & Content",
    description:
      "Strategic content creation, social media management, and paid ad campaigns that build authority and drive inbound leads.",
    tag: "Marketing"
  },
  {
    number: "06",
    title: "Conversion Optimization",
    description:
      "Analyze user behavior, eliminate friction, and systematically improve your site's ability to turn traffic into revenue.",
    tag: "CRO"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-surface">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex">
            <span className="w-1 h-1 rounded-full bg-primary" />
            What We Do
          </span>
          <h2
            className="font-bold text-text mt-3 tracking-tight"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
          >
            End-to-end solutions for{" "}
            <span className="gradient-text-primary">B2B growth</span>
          </h2>
          <p className="mt-4 text-muted text-[17px] max-w-xl mx-auto leading-relaxed">
            Every service we offer is built around one outcome: more qualified leads,
            better conversions, and faster revenue growth.
          </p>
        </div>

        {/* Services grid */}
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, i) => (
            <div
              key={service.number}
              className="group bg-white border border-border rounded-2xl p-7 card-glow cursor-default"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs font-semibold text-primary/60 tracking-widest uppercase">
                  {service.number}
                </span>
                <span className="text-xs font-medium text-muted bg-surface border border-border px-2.5 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>

              {/* Icon line */}
              <div className="w-8 h-0.5 bg-primary/20 group-hover:bg-primary transition-colors duration-300 mb-5 rounded-full" />

              {/* Content */}
              <h3 className="text-lg font-semibold text-text leading-snug mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA row */}
        <div className="text-center mt-14">
          <a
            href="https://cal.com/lumixus-studio/30min"
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-full text-[15px] transition-colors shadow-lg shadow-primary/20"
          >
            Discuss Your Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Services;
