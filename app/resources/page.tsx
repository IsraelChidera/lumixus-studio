import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import Container from "@/app/components/Elements/Container";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export const metadata: Metadata = {
  title: "Free Business Resources — Templates & Tools for Entrepreneurs",
  description:
    "Download free Notion templates, content systems, and strategy guides built by Lumixus Studio for B2B business owners and content creators in Nigeria.",
  keywords: [
    "free business templates Nigeria",
    "free Notion template for business",
    "content calendar template Nigeria",
    "free digital marketing resources",
    "business growth tools",
    "free consultation Lagos",
    "Lumixus Studio resources"
  ],
  alternates: {
    canonical: "https://lumixus.studio/resources"
  },
  openGraph: {
    title: "Free Business Resources — Templates & Tools | Lumixus Studio",
    description:
      "Free Notion templates, content systems, and strategy guides for B2B business owners and content creators. Built by the Lumixus Studio team.",
    url: "https://lumixus.studio/resources",
    type: "website"
  }
};

const resources = [
  {
    tag: "Free Template",
    title: "Content Bank Template",
    description:
      "A Notion content repository that lets you store, organize, and repurpose all your content ideas in one place. Built for content creators, business owners, and social media managers who want to stay consistent and create high-quality content effortlessly.",
    image: "/resource1.png",
    cta: "Get Free Template",
    href: "https://selar.com/0f3k23",
    external: true
  },
  {
    tag: "Free Consultation",
    title: "Book a Discovery Call",
    description:
      "We help businesses and entrepreneurs launch stunning, high-converting websites in 7 days or less. Starting fresh or rebranding — our proven process covers strategy, copy, design, and development without the long wait.",
    image: "/resouce2.png",
    cta: "Book Free Call",
    href: "https://cal.com/lumixus-studio/30min?overlayCalendar=true",
    external: true
  }
];

const page = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Page header */}
      <section className="relative bg-dark overflow-hidden flex items-center" style={{ minHeight: "60vh" }}>
        {/* Background elements — mirrors Hero */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10 pt-36 pb-24">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 text-white/80 text-xs font-medium px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Free for Creators & Business Owners
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-bold text-white leading-[1.04] tracking-tight"
              style={{ fontSize: "clamp(44px, 6vw, 76px)", letterSpacing: "-0.03em" }}
            >
              Tools to help your
              <br />
              <span className="gradient-text-primary">business grow.</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-white/50 mt-7 max-w-xl mx-auto leading-relaxed"
              style={{ fontSize: "clamp(16px, 1.5vw, 18px)" }}
            >
              Free templates, guides, and consultations from the Lumixus Studio team — built for content creators and B2B business owners.
            </p>
          </div>
        </Container>

        </section>

      {/* Resources grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="group bg-white border border-border rounded-2xl overflow-hidden flex flex-col card-glow"
              >
                {/* Image */}
                <div className="overflow-hidden aspect-[16/9] bg-surface">
                  <Image
                    src={resource.image}
                    width={720}
                    height={405}
                    alt={resource.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-7">
                  {/* Tag */}
                  <span className="inline-flex w-fit text-xs font-semibold text-primary bg-primary/8 border border-primary/15 px-3 py-1 rounded-full mb-4">
                    {resource.tag}
                  </span>

                  <h2 className="text-xl font-bold text-text mb-3 leading-snug">
                    {resource.title}
                  </h2>

                  <p className="text-sm text-muted leading-relaxed flex-1 mb-6">
                    {resource.description}
                  </p>

                  <Link
                    href={resource.href}
                    target={resource.external ? "_blank" : undefined}
                    rel={resource.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-semibold py-3.5 px-6 rounded-full text-sm transition-colors w-full"
                  >
                    {resource.cta}
                    <MdArrowOutward className="text-base" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center p-10 rounded-2xl bg-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
                Want more?
              </p>
              <h3
                className="font-bold text-white mb-4 tracking-tight"
                style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}
              >
                Ready to build your digital system?
              </h3>
              <p className="text-white/40 text-[15px] mb-8 max-w-md mx-auto leading-relaxed">
                These resources are just the start. Let's build a full strategy tailored to your business goals.
              </p>
              <Link
                href="https://cal.com/lumixus-studio/30min"
                className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors shadow-lg shadow-primary/30"
              >
                Book a Free Strategy Call
                <MdArrowOutward className="text-base" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default page;
