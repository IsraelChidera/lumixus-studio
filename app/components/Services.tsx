import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Container from "@/app/components/Elements/Container";

// The three offers are a path: diagnose, build, grow. Shown side by side so a
// buyer can compare them without clicking anything open.
const services = [
  {
    stage: "Start here",
    title: "Pipeline Audit",
    bestFor: "Businesses that want a clear diagnosis before committing budget",
    timeline: "1–2 weeks",
    description:
      "A structured review of how you win clients online today, with a prioritised list of what's costing you qualified conversations.",
    includes: ["Positioning review", "Website & conversion audit", "Enquiry-handling review", "Prioritised action plan"],
    note: "Fee credited if you go on to the full build",
    featured: false,
  },
  {
    stage: "The core system",
    title: "Client Acquisition System",
    bestFor: "Businesses whose website doesn't explain their value or produce enquiries",
    timeline: "4–8 weeks",
    description:
      "A fixed-scope build that turns your digital presence into a path from first visit to booked call, and stops leads going cold.",
    includes: [
      "Messaging & positioning",
      "Conversion-focused website",
      "Case-study pages",
      "Qualifying enquiry form",
      "CRM, tracking & follow-up automation",
    ],
    note: "One-time project, fixed scope",
    featured: true,
  },
  {
    stage: "Keep growing",
    title: "Pipeline Growth Retainer",
    bestFor: "Businesses ready to build steady inbound demand month after month",
    timeline: "Monthly",
    description:
      "Ongoing work that keeps qualified prospects coming in after launch, reported against enquiries, calls and proposals.",
    includes: ["LinkedIn & authority content", "SEO & insight pages", "Email nurture", "Monthly pipeline report"],
    note: "Reviewed every month, ad spend billed separately",
    featured: false,
  },
];

const Check = ({ featured }: { featured: boolean }) => (
  <svg
    className={`w-4 h-4 mt-[3px] flex-shrink-0 ${featured ? "text-[#a7a9ff]" : "text-primary"}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-surface">
      <Container>
        <div className="grid lg:grid-cols-[1fr_400px] gap-6 lg:gap-16 items-end mb-14 sm:mb-16">
          <h2
            className="font-bold text-text"
            style={{ fontSize: "clamp(34px, 5vw, 64px)", letterSpacing: "-0.035em", lineHeight: 1.02 }}
          >
            Three ways to work with us.
          </h2>
          <p className="text-muted text-[16px] leading-relaxed">
            Each one builds on the last. Start with a diagnosis, fix the
            foundations, then keep the pipeline growing.
          </p>
        </div>

        <ol className="grid lg:grid-cols-3 gap-5 items-stretch">
          {services.map((s) => (
            <li
              key={s.title}
              className={`relative flex flex-col rounded-[28px] p-8 sm:p-9 ${
                s.featured
                  ? "bg-dark text-white shadow-[0_40px_80px_-40px_rgba(54,0,255,0.6)] lg:-my-4 lg:py-12"
                  : "bg-white text-text ring-1 ring-border"
              }`}
            >
              <p className={`text-[13px] font-semibold ${s.featured ? "text-[#a7a9ff]" : "text-primary"}`}>
                {s.stage}
              </p>
              <h3 className="mt-3 text-[28px] font-bold tracking-[-0.03em] leading-tight">{s.title}</h3>
              <p className={`mt-4 text-[15px] leading-relaxed ${s.featured ? "text-white/65" : "text-muted"}`}>
                {s.description}
              </p>

              <ul className="mt-7 space-y-3">
                {s.includes.map((item) => (
                  <li key={item} className={`flex gap-3 text-[15px] ${s.featured ? "text-white/90" : "text-text/85"}`}>
                    <Check featured={s.featured} />
                    {item}
                  </li>
                ))}
              </ul>

              <dl className={`mt-8 pt-6 border-t grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-[14px] ${s.featured ? "border-white/10" : "border-border"}`}>
                <dt className={s.featured ? "text-white/45" : "text-muted"}>Timeline</dt>
                <dd className="font-semibold">{s.timeline}</dd>
                <dt className={s.featured ? "text-white/45" : "text-muted"}>Best for</dt>
                <dd className={s.featured ? "text-white/80" : "text-text/80"}>{s.bestFor}</dd>
              </dl>

              <div className="mt-auto pt-8">
                <p className={`text-[13px] mb-4 ${s.featured ? "text-white/45" : "text-muted"}`}>{s.note}</p>
                <Link
                  href="#contact"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
                    s.featured
                      ? "bg-primary text-white hover:bg-secondary"
                      : "bg-surface text-text hover:bg-primary hover:text-white"
                  }`}
                >
                  {s.featured ? "Book a pipeline review" : `Ask about the ${s.title.split(" ").slice(-1)[0].toLowerCase()}`}
                  <MdArrowOutward aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default Services;
