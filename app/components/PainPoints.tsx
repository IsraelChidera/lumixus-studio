import Container from "@/app/components/Elements/Container";

const problems = [
  {
    title: "Work depends on referrals",
    cost: "When referrals slow down, so does revenue, and there's no other channel ready to pick up the slack.",
  },
  {
    title: "The website explains what, not why",
    cost: "Prospects can see what you do, but not why you're the safer choice, so they leave to compare.",
  },
  {
    title: "Your expertise is invisible",
    cost: "Your best thinking lives in calls and proposals, not where buyers do their research.",
  },
  {
    title: "Enquiries go quiet",
    cost: "No follow-up and no tracking, so nobody can say which leads turned into work.",
  },
];

const Problems = () => {
  return (
    <section className="py-24 sm:py-32 bg-white" id="problem">
      <Container>
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-32 self-start">
            <h2
              className="font-bold text-text"
              style={{ fontSize: "clamp(32px, 4.2vw, 56px)", letterSpacing: "-0.035em", lineHeight: 1.04 }}
            >
              Most service businesses don&apos;t have a lead problem. They have a system problem.
            </h2>
            <p className="mt-6 text-muted text-[17px] leading-relaxed max-w-md">
              Good work and happy clients aren&apos;t enough when nothing connects
              your website, your content and your follow-up. These are the gaps we
              see most often.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 border-t border-border">
            {problems.map((p, i) => (
              <li
                key={p.title}
                className={`py-9 sm:py-10 border-b border-border ${
                  i % 2 === 0 ? "sm:pr-10 sm:border-r" : "sm:pl-10"
                }`}
              >
                <span className="block w-9 h-9 rounded-full bg-primary/[0.08] relative" aria-hidden="true">
                  <span className="absolute inset-[11px] rounded-full bg-primary" />
                </span>
                <h3 className="mt-6 text-[22px] font-bold text-text tracking-[-0.02em] leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted text-[16px] leading-relaxed">{p.cost}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Problems;
