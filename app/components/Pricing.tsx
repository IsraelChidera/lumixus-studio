import Container from "@/app/components/Elements/Container";
import Button from "@/app/components/Elements/Button";

// "Why Lumixus" as a straight comparison: buyers have usually tried an agency
// before, so the clearest case is what's different this time.
const rows = [
  {
    topic: "What you get",
    typical: "A website, or a batch of posts",
    lumixus: "A connected system: positioning, site, content, tracking and follow-up",
  },
  {
    topic: "Who builds it",
    typical: "Handed between a designer, a developer and a content freelancer",
    lumixus: "Engineer-led, end to end, so nothing falls between vendors",
  },
  {
    topic: "What gets reported",
    typical: "Traffic, likes and impressions",
    lumixus: "Qualified enquiries, booked calls and proposals",
  },
  {
    topic: "After launch",
    typical: "Handover, then silence",
    lumixus: "Monthly testing, refinement and a pipeline review",
  },
  {
    topic: "How leads are handled",
    typical: "A contact form that lands in an inbox",
    lumixus: "Qualifying form, instant alert, auto-reply and a pipeline sheet or CRM",
  },
];

const Cross = () => (
  <svg className="w-4 h-4 mt-[3px] flex-shrink-0 text-muted/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const Tick = () => (
  <svg className="w-4 h-4 mt-[3px] flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const WhyLumixus = () => {
  return (
    <section className="py-24 sm:py-32 bg-white" id="why">
      <Container>
        <div className="grid lg:grid-cols-[1fr_380px] gap-6 lg:gap-16 items-end mb-12 sm:mb-16">
          <h2
            className="font-bold text-text"
            style={{ fontSize: "clamp(34px, 5vw, 64px)", letterSpacing: "-0.035em", lineHeight: 1.02 }}
          >
            Built differently from a typical agency.
          </h2>
          <p className="text-muted text-[16px] leading-relaxed">
            If you&apos;ve hired an agency before, here&apos;s what changes when you
            work with us.
          </p>
        </div>

        {/* Desktop: three-column comparison */}
        <div className="hidden md:block rounded-[28px] ring-1 ring-border overflow-hidden">
          <table className="w-full text-left border-collapse">
            <caption className="sr-only">Lumixus compared with a typical agency</caption>
            <thead>
              <tr className="text-[14px]">
                <th scope="col" className="w-[22%] px-8 py-6 font-semibold text-muted">
                  <span className="sr-only">Topic</span>
                </th>
                <th scope="col" className="w-[36%] px-8 py-6 font-semibold text-muted">Typical agency</th>
                <th scope="col" className="w-[42%] px-8 py-6 font-bold text-text bg-primary/[0.05]">
                  Lumixus
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.topic} className="border-t border-border align-top">
                  <th scope="row" className="px-8 py-6 text-[15px] font-semibold text-text">
                    {r.topic}
                  </th>
                  <td className="px-8 py-6 text-[15px] text-muted">
                    <span className="flex gap-3">
                      <Cross />
                      {r.typical}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-[15px] text-text font-medium bg-primary/[0.05]">
                    <span className="flex gap-3">
                      <Tick />
                      {r.lumixus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: one card per topic */}
        <ul className="md:hidden space-y-4">
          {rows.map((r) => (
            <li key={r.topic} className="rounded-2xl ring-1 ring-border p-5">
              <p className="text-[15px] font-semibold text-text">{r.topic}</p>
              <p className="mt-3 flex gap-3 text-[14px] text-muted">
                <Cross />
                <span>
                  <span className="sr-only">Typical agency: </span>
                  {r.typical}
                </span>
              </p>
              <p className="mt-2 flex gap-3 text-[14px] text-text font-medium">
                <Tick />
                <span>
                  <span className="sr-only">Lumixus: </span>
                  {r.lumixus}
                </span>
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <p className="text-muted text-[15px]">
            Want to see where your business is losing qualified prospects? Start with a review.
          </p>
          <Button href="#contact" variant="primary">
            Book a pipeline review
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default WhyLumixus;
