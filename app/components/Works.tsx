"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Container from "@/app/components/Elements/Container";
import Button from "@/app/components/Elements/Button";
import { projects, type Project } from "@/app/lib/projects";
import { screens } from "@/app/lib/screens";

const hostOf = (url?: string) => {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

// WeRunAm has no screenshot in /public yet, so it gets a cover drawn in its
// own brand colours. Add `image` to its entry in projects.ts to replace this.
const WeRunAmCover = () => (
  <div className="absolute inset-0 bg-[#1c120b] flex flex-col justify-center px-[9%] overflow-hidden">
    <div
      className="absolute -right-[18%] -top-[30%] w-[70%] aspect-square rounded-full bg-[#e66a10]/35 blur-3xl"
      aria-hidden="true"
    />
    <p className="relative text-[#e66a10] font-bold tracking-tight text-[clamp(13px,1.3vw,16px)]">
      WeRunAm
    </p>
    <p
      className="relative mt-3 text-white font-bold leading-[1.02] tracking-[-0.03em]"
      style={{ fontSize: "clamp(26px, 3.4vw, 50px)" }}
    >
      You need it done.
      <br />
      We run am.
    </p>
    <div className="relative mt-6 flex flex-wrap gap-2">
      {["Market Run", "Errand Run", "Airport Rescue", "Import & Export"].map((s) => (
        <span
          key={s}
          className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-white/75 text-[clamp(10px,0.9vw,12px)] font-medium"
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

/** Browser chrome around a desktop capture. */
const BrowserFrame = ({ host, children }: { host: string; children: ReactNode }) => (
  <div className="rounded-[10px] overflow-hidden bg-white ring-1 ring-black/[0.06] shadow-[0_40px_90px_-35px_rgba(15,14,26,0.55)]">
    <div className="flex items-center gap-3 px-3.5 h-7 sm:h-8 border-b border-black/[0.06] bg-[#fbfbfd]">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]/80" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e]/80" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]/80" />
      </span>
      {host && (
        <span className="mx-auto text-[10px] sm:text-[11px] text-muted bg-black/[0.04] rounded-md px-3 py-0.5 truncate max-w-[55%]">
          {host}
        </span>
      )}
      <span className="w-[42px]" aria-hidden="true" />
    </div>
    <div className="relative aspect-[16/10] bg-surface">{children}</div>
  </div>
);

/**
 * A project's live site on its brand tint: desktop in a browser window, with
 * the phone view overlapping when a mobile capture exists.
 */
const Showcase = ({ project, priority = false }: { project: Project; priority?: boolean }) => {
  const host = hostOf(project.link);
  const shot = screens[project.slug];
  const desktop = shot?.desktop ?? (project.imageStyle === "mockup" ? undefined : project.image);
  const mobile = shot?.mobile;

  // Older assets that are already device mockups: show them as they are.
  if (!desktop && project.image && project.imageStyle === "mockup") {
    return (
      <div className="absolute inset-0 p-[7%]">
        <div className="relative w-full h-full">
          <Image
            src={project.image}
            alt={`${project.name} website on desktop and mobile`}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 90vw, 680px"
            className="object-contain drop-shadow-[0_30px_40px_rgba(15,14,26,0.25)]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <div
        className={`absolute ${
          mobile ? "top-[9%] left-[6%] w-[80%]" : "top-1/2 -translate-y-1/2 left-[8%] w-[84%]"
        }`}
      >
        <BrowserFrame host={host}>
          {desktop ? (
            <Image
              src={desktop}
              alt={`${project.name} website on desktop`}
              fill
              priority={priority}
              quality={90}
              sizes="(max-width: 1024px) 85vw, 620px"
              className="object-cover object-top"
            />
          ) : project.slug === "werunam" ? (
            <WeRunAmCover />
          ) : null}
        </BrowserFrame>
      </div>

      {mobile && (
        <div className="absolute right-[5%] bottom-[7%] w-[21%]">
          <div className="relative aspect-[390/844] rounded-[18%/8.5%] bg-[#0f0e1a] p-[4%] shadow-[0_30px_60px_-20px_rgba(15,14,26,0.6)]">
            <div className="relative w-full h-full rounded-[15%/7%] overflow-hidden bg-white">
              <Image
                src={mobile}
                alt={`${project.name} website on mobile`}
                fill
                quality={90}
                sizes="(max-width: 1024px) 22vw, 150px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Source = ({ project }: { project: Project }) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
      project.kind === "in-house" ? "bg-[#fbe9dc] text-[#a3480a]" : "bg-surface text-muted"
    }`}
  >
    {project.highlightSource}
  </span>
);

const Works = () => {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section id="works" className="py-24 sm:py-32 bg-white">
      <Container>
        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-6 lg:gap-16 items-end mb-14 sm:mb-20">
          <h2
            className="font-bold text-text"
            style={{ fontSize: "clamp(36px, 5.4vw, 72px)", letterSpacing: "-0.035em", lineHeight: 1 }}
          >
            Work that brings
            <br className="hidden sm:block" /> in business.
          </h2>
          <p className="text-muted text-[16px] leading-relaxed">
            Websites and growth systems built to do one job: turn attention
            into enquiries, donations and sales.
          </p>
        </div>

        {/* ── Desktop: index + sticky preview ───────────────────── */}
        <div className="hidden lg:grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-14 xl:gap-20 items-start">
          <ul className="border-t border-border">
            {projects.map((project, i) => {
              const isActive = i === active;
              return (
                <li key={project.slug} className="border-b border-border">
                  <Link
                    href={`/work/${project.slug}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-current={isActive ? "true" : undefined}
                    className="group relative block py-7 pl-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-lg"
                  >
                    <span
                      className={`absolute left-0 top-7 bottom-7 w-[3px] rounded-full bg-primary transition-transform duration-300 origin-top ${
                        isActive ? "scale-y-100" : "scale-y-0"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="flex items-center gap-3 text-[13px] text-muted">
                      {project.sector}
                      {project.kind === "in-house" && (
                        <span className="rounded-full bg-[#fbe9dc] text-[#a3480a] px-2 py-0.5 text-[11px] font-semibold">
                          Our product
                        </span>
                      )}
                    </span>
                    <span className="mt-1.5 flex items-center justify-between gap-6">
                      <span
                        className={`font-bold transition-colors duration-300 ${
                          isActive ? "text-text" : "text-text/25 group-hover:text-text/60"
                        }`}
                        style={{ fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
                      >
                        {project.name}
                      </span>
                      <span
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive ? "bg-primary text-white" : "bg-surface text-muted opacity-0"
                        }`}
                        aria-hidden="true"
                      >
                        <MdArrowOutward />
                      </span>
                    </span>
                    {/* The result opens under the active project */}
                    <span
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="block pt-3 text-[15px] text-text/70 leading-relaxed max-w-md">
                          {project.tagline}
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="sticky top-28">
            <div
              className="relative aspect-[4/3] rounded-[32px] overflow-hidden transition-colors duration-500"
              style={{ backgroundColor: current.tint }}
            >
              {projects.map((project, i) => (
                <div
                  key={project.slug}
                  className={`absolute inset-0 transition-[opacity,transform] duration-500 ease-out ${
                    i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
                  aria-hidden={i !== active}
                >
                  <Showcase project={project} priority={i === 0} />
                </div>
              ))}

            </div>

            {/* Result for the selected project */}
            <div className="mt-5 flex items-end justify-between gap-6 px-1">
              <div className="min-w-0">
                <Source project={current} />
                <p className="mt-2 text-text font-bold text-[20px] leading-snug tracking-tight">
                  {current.highlight}
                </p>
              </div>
              <Link
                href={`/work/${current.slug}`}
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4 whitespace-nowrap"
              >
                Read the case study <MdArrowOutward />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Mobile & tablet: stacked cases ─────────────────────── */}
        <ul className="lg:hidden space-y-12">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <Link href={`/work/${project.slug}`} className="group block focus:outline-none">
                <div
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden group-focus-visible:ring-2 group-focus-visible:ring-primary/40"
                  style={{ backgroundColor: project.tint }}
                >
                  <Showcase project={project} priority={i === 0} />
                </div>
                <div className="mt-5 flex items-center gap-3 text-[13px] text-muted">
                  {project.sector}
                  {project.kind === "in-house" && (
                    <span className="rounded-full bg-[#fbe9dc] text-[#a3480a] px-2 py-0.5 text-[11px] font-semibold">
                      Our product
                    </span>
                  )}
                </div>
                <div className="mt-1 flex items-center justify-between gap-4">
                  <h3 className="font-bold text-text text-[28px] sm:text-[34px] tracking-[-0.03em] leading-tight">
                    {project.name}
                  </h3>
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center" aria-hidden="true">
                    <MdArrowOutward />
                  </span>
                </div>
                <p className="mt-2 text-text/80 text-[16px] font-semibold leading-snug">
                  {project.highlight}
                </p>
                <div className="mt-2">
                  <Source project={project} />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Footer row ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-16 pt-8 border-t border-border gap-5">
          <p className="text-muted text-sm max-w-md">
            Results marked client-reported were shared with us by the client
            from their own data.
          </p>
          <Button href="#contact" variant="primary">
            Book a pipeline review
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Works;
