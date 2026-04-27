"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { MdArrowOutward } from "react-icons/md";
import Container from "@/app/components/Elements/Container";
import { projects, type Project } from "@/app/lib/projects";
import ProjectDetailPanel from "./ProjectDetailPanel";

const CATEGORIES = [
  "All",
  "Web Design",
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
      <section id="works" className="py-28 bg-white">
        <Container>
          {/* ── Header ─────────────────────────────────────────── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="section-label mb-4 inline-flex">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Our Portfolio
              </span>
              <h2
                className="font-bold text-text tracking-tight mt-2"
                style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
              >
                Work we're
                <span className="gradient-text-primary"> proud of</span>
              </h2>
            </div>
            <p className="text-muted text-[15px] max-w-xs leading-relaxed md:text-right">
              Real projects, real results. Every build is crafted to perform.
            </p>
          </div>

          {/* ── Category filter ─────────────────────────────────── */}
          <div className="flex flex-wrap gap-2 mb-12">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => {
              const isFeatured = i === 0 && active === "All";
              const num = String(
                projects.findIndex((p) => p.slug === project.slug) + 1
              ).padStart(2, "0");

              return isFeatured ? (
                /* ── Featured card (col-span-2, split layout) ── */
                <button
                  key={project.slug}
                  onClick={() => setSelected(project)}
                  className="group text-left bg-white border border-border rounded-2xl card-glow sm:col-span-2 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <div className="p-8 flex-1 flex flex-col sm:flex-row gap-0">
                    {/* Left — main info */}
                    <div className="flex-1 flex flex-col sm:pr-8">
                      <div className="flex items-start justify-between mb-8">
                        <span className="text-xs font-semibold text-primary/30 tracking-[0.15em]">
                          {num}
                        </span>
                        <div className="flex flex-wrap gap-1.5 justify-end">
                          {project.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium text-muted bg-surface border border-border px-2.5 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="w-8 h-0.5 bg-primary/20 group-hover:bg-primary group-hover:w-16 transition-all duration-300 rounded-full mb-5" />

                      <h3
                        className="font-bold text-text leading-tight mb-3"
                        style={{
                          fontSize: "clamp(22px, 2.5vw, 30px)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed flex-1 mb-8">
                        {project.tagline}
                      </p>

                      <div className="flex items-center justify-between pt-5 border-t border-border mt-auto">
                        <div className="flex flex-wrap gap-1.5">
                          {project.scope.slice(0, 3).map((s) => (
                            <span
                              key={s}
                              className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap flex-shrink-0 ml-3">
                          View details
                          <MdArrowOutward />
                        </span>
                      </div>
                    </div>

                    {/* Right — results (desktop only) */}
                    <div className="hidden sm:flex flex-col border-l border-border pl-8 w-56 flex-shrink-0">
                      <p className="text-[10px] font-semibold text-muted/50 tracking-widest uppercase mb-5">
                        Results
                      </p>
                      <div className="space-y-4">
                        {project.results.map((r) => (
                          <div key={r} className="flex items-start gap-2.5">
                            <span className="flex-shrink-0 mt-[3px] w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            </span>
                            <p className="text-sm text-text/70 leading-snug">{r}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              ) : (
                /* ── Regular card ─────────────────────────────── */
                <button
                  key={project.slug}
                  onClick={() => setSelected(project)}
                  className="group text-left bg-white border border-border rounded-2xl card-glow flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <div className="p-7 flex-1 flex flex-col">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-8">
                      <span className="text-xs font-semibold text-primary/30 tracking-[0.15em]">
                        {num}
                      </span>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium text-muted bg-surface border border-border px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Animated accent line */}
                    <div className="w-8 h-0.5 bg-primary/20 group-hover:bg-primary group-hover:w-12 transition-all duration-300 rounded-full mb-5" />

                    {/* Name + tagline */}
                    <h3
                      className="text-xl font-bold text-text leading-tight mb-2.5"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed flex-1 mb-6">
                      {project.tagline}
                    </p>

                    {/* Key result */}
                    <div className="bg-surface border border-border rounded-xl px-4 py-3.5 mb-6">
                      <p className="text-[10px] font-semibold text-muted/50 tracking-widest uppercase mb-1.5">
                        Key Result
                      </p>
                      <p className="text-sm font-semibold text-text leading-snug">
                        {project.results[0]}
                      </p>
                    </div>

                    {/* Footer row */}
                    <div className="flex items-center justify-between pt-5 border-t border-border">
                      <div className="flex flex-wrap gap-1.5">
                        {project.scope.slice(0, 2).map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap flex-shrink-0 ml-3">
                        View details
                        <MdArrowOutward />
                      </span>
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
                No projects in this category yet
              </p>
              <p className="text-sm text-muted">
                We're always adding new work — check back soon.
              </p>
            </div>
          )}

          {/* ── Footer row ───────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-12 pt-8 border-t border-border gap-5">
            <p className="text-muted text-sm">{projects.length} completed projects</p>
            <Link
              href="https://cal.com/lumixus-studio/30min"
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors shadow-lg shadow-primary/20"
            >
              Start your project
              <MdArrowOutward className="text-base" />
            </Link>
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
