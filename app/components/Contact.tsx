import Container from "@/app/components/Elements/Container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  return (
    <section className="relative py-32 bg-deep overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">

        {/* ── Section header ─────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/30">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Ready to Grow
          </span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        {/* ── Headline ───────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-end">
          <h2
            className="font-bold text-white tracking-tight"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)", letterSpacing: "-0.03em" }}
          >
            Your pipeline shouldn&apos;t
            <br />
            <span className="gradient-text-primary">depend on luck.</span>
          </h2>

          <div className="flex flex-col gap-6 lg:pb-2">
            <p className="text-white/35 text-[16px] leading-relaxed">
              Book a free 30-minute growth audit. We&apos;ll show you exactly what&apos;s costing
              you leads and what to do about it. No pitch. Just clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://cal.com/lumixus-studio/30min"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0f0e1a] hover:bg-white/90 font-semibold px-7 py-4 rounded-full text-[15px] transition-colors w-full sm:w-auto"
              >
                Book Your Free Growth Audit
                <MdArrowOutward className="text-base" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/12 text-white/50 hover:text-white hover:border-white/30 px-7 py-4 rounded-full text-[15px] font-medium transition-colors w-full sm:w-auto"
              >
                Send a Message
              </Link>
            </div>

            <p className="text-white/20 text-xs">
              Free audit · No obligation · Response within 24 hours
            </p>
          </div>
        </div>

        {/* ── Bottom rule + socials ──────────────────────────────── */}
        <div className="flex items-center gap-6 mt-16 pt-8 border-t border-white/8">
          <div className="flex-1" />
          <Link href="https://www.instagram.com/lumixus_studio/" className="text-white/25 hover:text-white transition-colors text-xs tracking-wide">
            Instagram
          </Link>
          <span className="text-white/10">·</span>
          <Link href="mailto:lumixusstudio@gmail.com" className="text-white/25 hover:text-white transition-colors text-xs tracking-wide">
            Email Us
          </Link>
          <span className="text-white/10">·</span>
          <Link href="https://www.facebook.com/profile.php?id=61563258786419" className="text-white/25 hover:text-white transition-colors text-xs tracking-wide">
            Facebook
          </Link>
        </div>

      </Container>
    </section>
  );
};

export default Contact;
