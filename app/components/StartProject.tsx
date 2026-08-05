import React from "react";
import Container from "@/app/components/Elements/Container";

const clients = [
  "Ayuda Content",
  "Connectivia",
  "Scris Enterprise",
  "NAJEC FMCG",
  "Katampe Heights Apartments",
  "Good Homes",
  "RDJ Estates",
  "Chris Global",
  "Graft",
  "Market dash",
  "Najec Limited",
  "KSOM",
  "PMAT",
  "Ayuda Content",
  "Connectivia",
  "Scris Enterprise",
  "NAJEC FMCG",
  "Katampe Heights Apartments",
  "Good Homes",
  "RDJ Estates",
  "Chris Global",
  "Graft",
  "Market dash",
  "Najec Limited",
  "KSOM",
  "PMAT",
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-surface border-y border-border overflow-hidden">
      <Container>
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted mb-10">
          Brands we&apos;ve helped grow
        </p>
      </Container>

      {/* Marquee */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {clients.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-6 flex items-center gap-3 text-text/50 hover:text-text transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0" />
              <span className="text-sm font-semibold whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
