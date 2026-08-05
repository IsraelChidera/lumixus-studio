"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/app/components/Elements/Container";

const testimonials = [
  {
    quote:
      "Lumixus went beyond building a website. They collaborated on SEO, social media, and ongoing performance analysis. They think like a partner, not a vendor.",
    name: "William Oharisi",
    role: "CEO",
    company: "Ayuda Content",
    result: "Inbound interest grew significantly after launch",
  },
  {
    quote:
      "They crafted a strategy that positions us as a real voice in our industry. Social engagement, recognition, and warmer conversations with prospects, all in the first quarter.",
    name: "Glory Ebere",
    role: "Founder",
    company: "Connectivia",
    result: "Stronger brand recognition across the industry",
  },
  {
    quote:
      "They revamped our entire user experience, intuitive, engaging, and built to convert. Customer satisfaction rose and sales followed. They bridge design and business outcomes perfectly.",
    name: "James Oladele",
    role: "Co-Founder",
    company: "Nexo Tech",
    result: "Conversion rate improved measurably",
  },
  {
    quote:
      "Partnering with Lumixus Studio was one of the best decisions we made. Fast, user-friendly, and now a real asset to our growth. Real business understanding, real results.",
    name: "Mr. Nebolisa",
    role: "Managing Director",
    company: "NAJEC FMCG",
    result: "New partner onboarding time cut by 40%",
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-deep">
      <Container>
        <div className="flex items-center gap-4 mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/45">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Client Words
          </span>
          <div className="flex-1 h-px bg-white/8" />
        </div>
        <h2 className="sr-only">Client Testimonials</h2>

        <div className="max-w-3xl mx-auto text-center min-h-[220px] sm:min-h-[180px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <p
                className="font-serif italic font-normal text-white leading-[1.3]"
                style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
              >
                {current.quote}
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div>
                  <p className="text-white text-sm font-semibold">{current.name}</p>
                  <p className="text-white/50 text-xs mt-0.5">
                    {current.role} · {current.company}
                  </p>
                </div>
                <span className="w-px h-8 bg-white/10" />
                <p className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                  {current.result}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Selector ───────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-3 mt-16">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={active === i}
              className={`w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                active === i
                  ? "bg-primary border-primary text-white"
                  : "border-white/15 text-white/40 hover:border-white/35 hover:text-white/70"
              }`}
            >
              {t.name.charAt(0)}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
