import Container from "@/app/components/Elements/Container";

const steps = [
  {
    title: "Diagnose",
    duration: "Weeks 1–2",
    description:
      "How clients find you today, what your website and content say, and where enquiries drop off or go cold.",
    output: "Pipeline Audit report",
  },
  {
    title: "Position",
    duration: "Weeks 2–3",
    description:
      "Who you serve, what you solve and why you're the safer choice, turned into messaging every page is built on.",
    output: "Messaging framework",
  },
  {
    title: "Build",
    duration: "Weeks 3–8",
    description:
      "Website, case-study pages, qualifying enquiry form, tracking and follow-up, with you reviewing at every stage.",
    output: "Live acquisition system",
  },
  {
    title: "Grow",
    duration: "Ongoing",
    description:
      "We publish, test and refine, and report every month on qualified enquiries, booked calls and proposals.",
    output: "Monthly pipeline report",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 sm:py-32 bg-dark relative overflow-hidden">
      <div
        className="absolute -right-40 -top-40 w-[700px] h-[700px] rounded-full pointer-events-none opacity-70"
        style={{
          background:
            "repeating-radial-gradient(circle at center, transparent 0 69px, rgba(167,169,255,0.07) 69px 70px)",
          maskImage: "radial-gradient(circle at center, black 25%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 25%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[1fr_380px] gap-6 lg:gap-16 items-end mb-16 sm:mb-20">
          <h2
            className="font-bold text-white"
            style={{ fontSize: "clamp(34px, 5vw, 64px)", letterSpacing: "-0.035em", lineHeight: 1.02 }}
          >
            From first call to a steady pipeline.
          </h2>
          <p className="text-white/55 text-[16px] leading-relaxed">
            Four stages, each with a clear output, so you always know what
            you&apos;re getting and when.
          </p>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              {/* Track with a node per stage */}
              <div className="flex items-center gap-3 mb-8" aria-hidden="true">
                <span className="relative flex-shrink-0 w-3 h-3 rounded-full bg-primary ring-[6px] ring-primary/20" />
                <span className={`h-px flex-1 ${i === steps.length - 1 ? "bg-gradient-to-r from-white/15 to-transparent" : "bg-white/15"}`} />
              </div>
              <p className="text-[13px] font-semibold text-[#a7a9ff]">
                Step {i + 1} <span className="text-white/35 font-normal">· {step.duration}</span>
              </p>
              <h3 className="mt-2 text-[28px] font-bold text-white tracking-[-0.03em]">{step.title}</h3>
              <p className="mt-3 text-white/60 text-[15px] leading-relaxed">{step.description}</p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 px-3 py-1.5 text-[12px] font-medium text-white/75">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a7a9ff]" aria-hidden="true" />
                {step.output}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default Process;
