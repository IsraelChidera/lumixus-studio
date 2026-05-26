import Container from "@/app/components/Elements/Container";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const stats = [
  { value: "20+", label: "B2B Businesses Served" },
  { value: "3×", label: "Avg. Lead Increase" },
  { value: "4 Wks", label: "Avg. System Launch" },
  { value: "100%", label: "B2B Focused" },
];

const Hero = () => {
  return (
    <header className="relative min-h-screen bg-dark flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 pt-36 pb-28">
        {/* Availability badge */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 text-white/80 text-xs font-medium px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            3 client slots open this month. Reviewed weekly.
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="text-center font-bold tracking-tight text-white leading-[74px]  max-w-4xl mx-auto"
          style={{ fontSize: "clamp(42px, 6.2vw, 78px)", letterSpacing: "-0.03em" }}
        >
          Your B2B Business Should Be{" "}
          <span className="gradient-text-primary">Generating Leads Online.</span>
          <br />
          If It Isn&apos;t, Something Is Broken.
        </h1>

        {/* Subheadline */}
        <p
          className="text-center text-white mt-7 max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(15px, 1.4vw, 17px)" }}
        >
          Lumixus Studio builds lead generation systems and client acquisition infrastructure
          for B2B service businesses so your website stops being a brochure and starts filling your pipeline.
        </p>

  
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="https://cal.com/lumixus-studio/30min"
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-full text-[15px] transition-colors shadow-lg shadow-primary/30 w-full sm:w-auto justify-center"
          >
            Get Your Free Lead Generation Audit
            <MdArrowOutward className="text-lg" />
          </Link>

          <Link
            href="#works"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-4 rounded-full text-[15px] transition-colors w-full sm:w-auto justify-center"
          >
            See How We&apos;ve Done It
          </Link>
        </div>

        {/* Trust microcopy */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-5">
          {[
            "30 min · no pitch",
            "No contract or obligation",
            "Response within 24 hours",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 text-white/30 text-xs">
              <svg className="w-3 h-3 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 pt-10 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-white/40 text-sm mt-1.5 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </header>
  );
};

export default Hero;
