import Container from "@/app/components/Elements/Container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const stats = [
  { value: "20+", label: "B2B businesses" },
  { value: "3×",  label: "Avg. lead growth" },
  { value: "4 wks", label: "Avg. launch time" },
  { value: "100%", label: "B2B focused" },
];

const industries = ["Logistics", "HR & Consulting", "Legal", "Accounting", "IT Services"];

const Hero = () => {
  return (
    <header className="relative min-h-screen bg-dark flex flex-col overflow-hidden">

      <Container className="relative z-10 flex flex-col justify-between flex-1 pt-32 pb-10 min-h-screen">

        {/* ── Top row ──────────────────────────────────────────────── */}
        <div className="flex items-center justify-between">
          <span className="text-white/30 text-[11px] tracking-[0.2em] uppercase font-medium">
            B2B Growth Agency
          </span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
            </span>
            <span className="text-white/25 text-[11px] tracking-[0.15em] uppercase">
              Lagos · Global
            </span>
          </div>
        </div>

        {/* ── Main content ─────────────────────────────────────────── */}
        <div>
          <div className="w-full h-px bg-white/8 mb-10" />

          <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-end">

            {/* Headline */}
            <h1
              className="font-bold text-white leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: "clamp(52px, 8vw, 110px)" }}
            >
              We Build Systems
              <br />
              That Generate
              <br />
              <span style={{ color: "rgba(255,255,255,0.18)" }}>
                B2B Clients.
              </span>
            </h1>

            {/* Description + CTA */}
            <div className="flex flex-col justify-end gap-8">
              <p className="text-white/40 text-[15px] leading-[1.7] font-light">
                Lead generation infrastructure, client acquisition systems,
                and conversion strategy for service businesses that need a
                predictable pipeline, not just a website.
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
                <Link
                  href="https://cal.com/lumixus-studio/30min"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0a0a0a] hover:bg-white/90 font-semibold px-6 py-3.5 rounded-full text-sm transition-colors"
                >
                  Free Growth Audit
                  <MdArrowOutward className="text-base" />
                </Link>
                <Link
                  href="#works"
                  className="inline-flex items-center justify-center gap-2 border border-white/12 text-white/50 hover:text-white hover:border-white/30 px-6 py-3.5 rounded-full text-sm font-medium transition-colors"
                >
                  See Our Work
                </Link>
              </div>
            </div>
          </div>

          {/* Industry strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10">
            <span className="text-white/20 text-[11px] tracking-[0.15em] uppercase">
              For
            </span>
            {industries.map((ind, i) => (
              <span
                key={ind}
                className="flex items-center gap-3 text-white/35 text-[13px] font-light"
              >
                {i > 0 && <span className="w-0.5 h-0.5 rounded-full bg-white/15" />}
                {ind}
              </span>
            ))}
          </div>

          <div className="w-full h-px bg-white/8 mt-10" />
        </div>

        {/* ── Stats strip ──────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {stats.map((stat, i) => (
            <div key={stat.value} className="flex items-baseline gap-2">
              {i > 0 && <span className="hidden sm:block w-px h-4 bg-white/10 mr-2" />}
              <span className="text-xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-white/25 text-xs tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </Container>
    </header>
  );
};

export default Hero;
