"use client";
import React from "react";
import Container from "@/app/components/Elements/Container";
import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Lumixus Studio went beyond building a beautiful website — they collaborated on SEO, social media integration, and ongoing performance analysis. Invaluable partners in bringing our vision to life.",
    name: "William Oharisi",
    role: "CEO",
    company: "Ayuda Content"
  },
  {
    quote:
      "They crafted a strategy that positions us as thought leaders in our niche. We've seen a surge in social media presence, qualified leads, and industry recognition.",
    name: "Glory Ebere",
    role: "Founder",
    company: "Connectivia"
  },
  {
    quote:
      "They revamped our entire user experience — intuitive, engaging, and optimized for conversions. Customer satisfaction scores soared and sales increased significantly. They truly bridge design and business goals.",
    name: "James Oladele",
    role: "Co-Founder",
    company: "Nexo Tech"
  },
  {
    quote:
      "Partnering with Lumixus Studio was one of the best decisions we made. The site is fast, user-friendly, and has become a strong asset in our growth strategy. Professionalism, creativity, and clear business understanding.",
    name: "Mr. Nebolisa",
    role: "Managing Director",
    company: "NAJEC FMCG"
  }
];

const StarRow = () => (
  <div className="flex items-center gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-28 bg-dark">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Client Stories
          </span>
          <h2
            className="font-bold text-white mt-3 tracking-tight"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
          >
            What our clients{" "}
            <span className="gradient-text-light">actually say</span>
          </h2>
          <p className="mt-4 text-white/40 text-[17px] max-w-md mx-auto leading-relaxed">
            Don't take our word for it. Here's what businesses say after working with us.
          </p>
        </div>

        {/* Grid */}
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
              className={`rounded-2xl border border-white/8 p-7 flex flex-col justify-between ${
                i === 0 ? "bg-primary/10" : "bg-white/[0.03]"
              } hover:bg-white/[0.06] transition-colors duration-200`}
            >
              <div>
                <StarRow />
                <p className="text-white/70 text-[15px] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonial;
