import React from "react";
import Container from "@/app/components/Elements/Container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <section className="relative py-32 bg-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <Container className="relative z-10 text-center">
        {/* Label */}
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white/30 mb-8">
          <span className="w-1 h-1 rounded-full bg-accent" />
          Let's Build Together
        </span>

        {/* Headline */}
        <h2
          className="font-bold text-white mx-auto tracking-tight"
          style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            letterSpacing: "-0.03em",
            maxWidth: "800px"
          }}
        >
          Ready to grow your{" "}
          <span className="gradient-text-primary">business online?</span>
        </h2>

        <p className="mt-6 text-white/40 text-[18px] max-w-lg mx-auto leading-relaxed">
          Join 50+ businesses that trust Lumixus Studio to deliver measurable digital growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link
            href="https://cal.com/lumixus-studio/30min"
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-9 py-4 rounded-full text-[16px] transition-colors shadow-xl shadow-primary/30 w-full sm:w-auto justify-center"
          >
            Book Your Free Strategy Call
            <MdArrowOutward className="text-xl" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-4 rounded-full text-[15px] transition-colors w-full sm:w-auto justify-center"
          >
            Send a Message
          </Link>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <Link
            href="https://www.instagram.com/lumixus_studio/"
            className="text-white/30 hover:text-white transition-colors text-sm"
          >
            Instagram
          </Link>
          <span className="text-white/10">·</span>
          <Link
            href="mailto:lumixusstudio@gmail.com"
            className="text-white/30 hover:text-white transition-colors text-sm"
          >
            Email Us
          </Link>
          <span className="text-white/10">·</span>
          <Link
            href="https://www.facebook.com/profile.php?id=61563258786419"
            className="text-white/30 hover:text-white transition-colors text-sm"
          >
            Facebook
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
