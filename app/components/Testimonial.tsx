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

const initials = (name: string) =>
  name
    .replace(/^(Mr|Mrs|Ms|Dr)\.?\s+/i, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

const Person = ({ t, light = false }: { t: (typeof testimonials)[number]; light?: boolean }) => (
  <figcaption className="flex items-center gap-3">
    <span
      className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold flex-shrink-0 ${
        light ? "bg-white/10 text-white" : "bg-primary/[0.08] text-primary"
      }`}
      aria-hidden="true"
    >
      {initials(t.name)}
    </span>
    <span>
      <span className={`block text-[15px] font-semibold ${light ? "text-white" : "text-text"}`}>{t.name}</span>
      <span className={`block text-[13px] ${light ? "text-white/55" : "text-muted"}`}>
        {t.role}, {t.company}
      </span>
    </span>
  </figcaption>
);

const Testimonial = () => {
  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-surface">
      <Container>
        <h2
          className="font-bold text-text max-w-2xl mb-14 sm:mb-16"
          style={{ fontSize: "clamp(34px, 5vw, 64px)", letterSpacing: "-0.035em", lineHeight: 1.02 }}
        >
          What clients say after launch.
        </h2>

        <div className="grid lg:grid-cols-12 gap-5">
          <figure className="lg:col-span-7 rounded-[28px] bg-dark p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            <div
              className="absolute -right-24 -bottom-24 w-[420px] h-[420px] rounded-full bg-primary/25 blur-[100px] pointer-events-none"
              aria-hidden="true"
            />
            <blockquote
              className="relative text-white font-bold tracking-[-0.025em]"
              style={{ fontSize: "clamp(24px, 2.6vw, 36px)", lineHeight: 1.22 }}
            >
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div className="relative mt-12 flex flex-wrap items-end justify-between gap-6">
              <Person t={featured} light />
              <p className="text-[13px] font-medium text-[#a7a9ff]">{featured.result}</p>
            </div>
          </figure>

          <div className="lg:col-span-5 grid gap-5">
            {rest.map((t) => (
              <figure key={t.name} className="rounded-[24px] bg-white ring-1 ring-border p-7 flex flex-col justify-between">
                <blockquote className="text-text/85 text-[15px] leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="mt-6 flex flex-wrap items-end justify-between gap-3">
                  <Person t={t} />
                  <p className="text-[12px] font-medium text-primary">{t.result}</p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
