import React from "react";
import Container from "@/app/components/Elements/Container";

// Each name appears once here; the marquee duplicates the list itself.
const clients = [
  "RDJ Estates",
  "CLWCF",
  "Ayuda Content",
  "Connectivia",
  "Global Value Pedestal",
  "Scris Enterprise",
  "Chris Global",
  "NAJEC FMCG",
  "MyT40",
  "Katampe Heights Apartments",
  "Good Homes",
  "Graft",
  "Market dash",
  "KSOM",
  "PMAT",
];

const marquee = [...clients, ...clients];

const SocialProof = () => {
  return (
    <section className="bg-white border-y border-border">
      <Container className="py-8 sm:py-10 grid lg:grid-cols-[220px_1fr] gap-5 lg:gap-10 items-center">
        <p className="text-[14px] leading-snug text-muted">
          Trusted by teams in real estate, logistics, nonprofits and professional services
        </p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <ul className="marquee-track motion-reduce:animate-none" aria-label="Clients we've worked with">
            {marquee.map((name, i) => (
              <li
                key={i}
                aria-hidden={i >= clients.length}
                className="flex-shrink-0 px-7 text-[19px] sm:text-[21px] font-bold tracking-[-0.02em] text-text/30 whitespace-nowrap"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default SocialProof;
