"use client";

import { motion } from "motion/react";
import Container from "@/app/components/Elements/Container";

const testimonials = [
  {
    quote:
      "Lumixus went beyond building a website - they collaborated on SEO, social media integration, and ongoing performance analysis. They think like a growth partner, not a vendor.",
    name: "William Oharisi",
    role: "CEO",
    company: "Ayuda Content",
    result: "Inbound leads grew significantly post-launch",
  },
  {
    quote:
      "They crafted a strategy that positions us as thought leaders in our niche. We've seen a surge in qualified leads, social media presence, and industry recognition. The ROI was immediate.",
    name: "Glory Ebere",
    role: "Founder",
    company: "Connectivia",
    result: "3× increase in qualified pipeline",
  },
  {
    quote:
      "They revamped our entire user experience - intuitive, engaging, and optimized for conversions. Customer satisfaction scores soared and sales increased significantly. They bridge design and business outcomes perfectly.",
    name: "James Oladele",
    role: "Co-Founder",
    company: "Nexo Tech",
    result: "Conversion rate improved measurably",
  },
  {
    quote:
      "Partnering with Lumixus Studio was one of the best decisions we made. The site is fast, user-friendly, and has become a strong asset in our growth strategy. Real business understanding, real results.",
    name: "Mr. Nebolisa",
    role: "Managing Director",
    company: "NAJEC FMCG",
    result: "New partner onboarding reduced by 40%",
  },
];

const StarRow = () => (
  <div className="flex items-center gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-28 bg-deep">
      <Container>

        {/* ── Section header ─────────────────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/30">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Client Results
            </span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-end">
            <h2
              className="font-bold text-white tracking-tight"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.03em" }}
            >
              B2B businesses that
              <br />
              <span className="gradient-text-light">grew their pipeline with us</span>
            </h2>
            <p className="text-white/35 text-[16px] leading-relaxed lg:pb-1">
              Not design awards - real business outcomes from real clients.
            </p>
          </div>
        </div>

        {/* ── Grid ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-white/8 p-7 flex flex-col justify-between hover:bg-white/[0.04] transition-colors duration-200 ${
                i === 0 ? "bg-primary/10" : "bg-white/[0.03]"
              }`}
            >
              <div>
                <StarRow />
                <p className="text-white/65 text-[15px] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6">
                <div className="bg-white/5 border border-white/8 rounded-xl px-4 py-2.5 mb-5 inline-block">
                  <p className="text-xs font-semibold text-white/80">{t.result}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-white/35 text-xs mt-0.5">{t.role} · {t.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Footer ─────────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mt-12">
          <div className="flex-1 h-px bg-white/8" />
          <a
            href="#works"
            className="shrink-0 text-sm font-semibold text-white/40 hover:text-white transition-colors"
          >
            See the work behind these results →
          </a>
        </div>

      </Container>
    </section>
  );
};

export default Testimonial;
