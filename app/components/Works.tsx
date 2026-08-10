"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MdArrowOutward } from "react-icons/md";
import Container from "@/app/components/Elements/Container";
import Button from "@/app/components/Elements/Button";
import { projects, type Project, type Outcome } from "@/app/lib/projects";

const CATEGORIES = [
  "All",
  "Web Design",
  "Web Dev",
  "Branding",
  "E-commerce",
  "CRO",
  "Social Media",
  "SEO",
];

// The strongest quantified proof in the portfolio - CRO outcome, real numbers.
const FEATURED_SLUG = "rdj-estates";

// Groups shown when browsing "All" - honest categories the portfolio actually
// has evidence for. "convert" only has one project so far (the featured slug
// above), which is exactly why it's featured rather than folded into a group.
const OUTCOME_GROUPS: { key: Outcome; label: string; description: string }[] = [
  {
    key: "authority",
    label: "Build Authority & Positioning",
    description: "Brand identity and presence that make trust easier to earn.",
  },
  {
    key: "modernize",
    label: "Modernize Digital Presence",
    description: "Websites and platforms that finally match the scale of the business.",
  },
];

const ProjectCard = ({
  project,
  featured,
}: {
  project: Project;
  featured: boolean;
}) => {
  // No live link means this wasn't a website - lead with the curated
  // gallery asset rather than `image`, which isn't guaranteed to be
  // hero-shaped for brand-only work, and contain it instead of cropping.
  const isWebProject = Boolean(project.link);
  const cover = isWebProject
    ? project.image || project.gallery?.[0]
    : project.gallery?.[0] || project.image;

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group relative text-left rounded-2xl overflow-hidden bg-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className={`relative w-full ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        {cover ? (
          <Image
            src={cover}
            alt={project.name}
            fill
            sizes={featured ? "(max-width: 640px) 100vw, 1200px" : "(max-width: 640px) 100vw, 600px"}
            className={`transition-transform duration-500 group-hover:scale-[1.04] ${
              isWebProject ? "object-cover object-top" : "object-contain p-8 bg-white/[0.03]"
            }`}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-deep to-dark flex items-center justify-center">
            <span className="font-serif italic text-white/15 text-6xl">
              {project.name.charAt(0)}
            </span>
          </div>
        )}

        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        {/* Top row */}
        <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, featured ? 3 : 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium text-white/80 bg-white/10 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 flex-shrink-0">
            <MdArrowOutward className="text-sm" />
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3
            className="font-bold text-white leading-tight mb-2"
            style={{
              fontSize: featured ? "clamp(24px, 3vw, 34px)" : "clamp(19px, 2.2vw, 24px)",
              letterSpacing: "-0.02em",
            }}
          >
            {project.name}
          </h3>
          <p className="text-white/55 text-sm leading-relaxed max-w-md">
            {project.tagline}
          </p>
        </div>
      </div>
    </Link>
  );
};

const Works = () => {
  const [active, setActive] = useState("All");

  const isAll = active === "All";
  const hero = isAll ? projects.find((p) => p.slug === FEATURED_SLUG) : undefined;

  const filtered = isAll
    ? projects
    : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="works" className="py-24 sm:py-32 bg-white">
        <Container>
          {/* ── Header ─────────────────────────────────────────── */}
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="section-label justify-center mb-6">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Selected Work
            </span>
            <h2
              className="font-bold text-text tracking-tight"
              style={{ fontSize: "clamp(34px, 5vw, 60px)", letterSpacing: "-0.03em" }}
            >
              Systems we&apos;ve
              <span className="font-serif italic font-normal"> built to grow.</span>
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              Positioning, websites and conversion systems for companies serious about their next client.
            </p>
          </div>

          {/* ── Category filter ─────────────────────────────────── */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  active === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-muted border-border hover:border-primary/40 hover:text-text"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* ── Featured case study ───────────────────────────── */}
            {hero && (
              <div className="mb-16 rounded-3xl overflow-hidden bg-dark grid lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  {(hero.image || hero.gallery?.[0]) && (
                    <Image
                      src={hero.image || hero.gallery![0]}
                      alt={hero.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/40" />
                </div>
                <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/45 mb-5">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    Featured Case Study
                  </span>
                  <h3
                    className="font-bold text-white leading-tight mb-3"
                    style={{ fontSize: "clamp(26px, 3.4vw, 40px)", letterSpacing: "-0.02em" }}
                  >
                    {hero.name}
                  </h3>
                  <p className="text-white/50 text-[15px] leading-relaxed max-w-md mb-8">
                    {hero.tagline}
                  </p>
                  <div className="space-y-3 mb-9">
                    {hero.results.map((r) => (
                      <div key={r} className="flex items-start gap-2.5 text-sm font-medium text-white/85">
                        <span className="flex-shrink-0 mt-[3px] w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </span>
                        {r}
                      </div>
                    ))}
                  </div>
                  <div>
                    <Button href={`/work/${hero.slug}`} variant="inverse">
                      Read the case study
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* ── Grid: grouped by outcome on "All", flat when filtering by tag ── */}
            {isAll ? (
              <div className="space-y-16">
                {OUTCOME_GROUPS.map((group) => {
                  const groupProjects = projects.filter(
                    (p) => p.outcome === group.key && p.slug !== FEATURED_SLUG
                  );
                  if (groupProjects.length === 0) return null;
                  return (
                    <div key={group.key}>
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-text tracking-tight">{group.label}</h3>
                        <p className="text-muted text-sm mt-1">{group.description}</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {groupProjects.map((project) => (
                          <ProjectCard
                            key={project.slug}
                            project={project}
                            featured={false}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filtered.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    featured={false}
                  />
                ))}
              </div>
            )}

            {/* ── Empty state ──────────────────────────────────────── */}
            {!isAll && filtered.length === 0 && (
              <div className="text-center py-24 border border-dashed border-border rounded-2xl">
                <p className="text-base font-semibold text-text mb-2">
                  Nothing in this category yet
                </p>
                <p className="text-sm text-muted">
                  We&apos;re always adding new work, check back soon.
                </p>
              </div>
            )}
          </motion.div>

          {/* ── Footer row ───────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-14 pt-8 border-t border-border gap-5">
            <p className="text-muted text-sm">{projects.length} selected projects</p>
            <Button href="#contact" variant="primary">
              Start your project
            </Button>
          </div>
        </Container>
      </section>
  );
};


export default Works;
