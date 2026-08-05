"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { MdArrowOutward } from "react-icons/md";
import Container from "@/app/components/Elements/Container";
import Button from "@/app/components/Elements/Button";
import { projects, type Project } from "@/app/lib/projects";
import ProjectDetailPanel from "./ProjectDetailPanel";

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

const Works = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <>
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
              Work we&apos;re
              <span className="font-serif italic font-normal"> proud of.</span>
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              A handful of the brands we&apos;ve built, rebuilt, and grown.
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

          {/* ── Grid ────────────────────────────────────────────── */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {filtered.map((project, i) => {
              const isFeatured = i === 0 && active === "All";
              // No live link means this wasn't a website - lead with the curated
              // gallery asset rather than `image`, which isn't guaranteed to be
              // hero-shaped for brand-only work, and contain it instead of cropping.
              const isWebProject = Boolean(project.link);
              const cover = isWebProject
                ? project.image || project.gallery?.[0]
                : project.gallery?.[0] || project.image;

              return (
                <button
                  key={project.slug}
                  onClick={() => setSelected(project)}
                  className={`group relative text-left rounded-2xl overflow-hidden bg-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ${
                    isFeatured ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className={`relative w-full ${isFeatured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                    {cover ? (
                      <Image
                        src={cover}
                        alt={project.name}
                        fill
                        sizes={isFeatured ? "(max-width: 640px) 100vw, 1200px" : "(max-width: 640px) 100vw, 600px"}
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
                        {project.tags.slice(0, isFeatured ? 3 : 2).map((tag) => (
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
                          fontSize: isFeatured ? "clamp(24px, 3vw, 34px)" : "clamp(19px, 2.2vw, 24px)",
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
                </button>
              );
            })}
          </motion.div>

          {/* ── Empty state ──────────────────────────────────────── */}
          {filtered.length === 0 && (
            <div className="text-center py-24 border border-dashed border-border rounded-2xl">
              <p className="text-base font-semibold text-text mb-2">
                Nothing in this category yet
              </p>
              <p className="text-sm text-muted">
                We&apos;re always adding new work, check back soon.
              </p>
            </div>
          )}

          {/* ── Footer row ───────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-14 pt-8 border-t border-border gap-5">
            <p className="text-muted text-sm">{projects.length} selected projects</p>
            <Button href="#contact" variant="primary">
              Start your project
            </Button>
          </div>
        </Container>
      </section>

      {/* ── Detail panel ─────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <ProjectDetailPanel
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Works;
