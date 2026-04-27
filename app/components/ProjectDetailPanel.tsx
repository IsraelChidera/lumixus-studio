"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { MdArrowOutward, MdClose } from "react-icons/md";
import { type Project } from "@/app/lib/projects";

type Props = {
  project: Project;
  onClose: () => void;
};

const ProjectDetailPanel = ({ project, onClose }: Props) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      {/* ── Backdrop ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 bg-dark/50 backdrop-blur-sm z-[100]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Panel ────────────────────────────────────────── */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 32, stiffness: 300 }}
        className="fixed top-0 right-0 bottom-0 z-[101] w-full sm:max-w-[560px] bg-white flex flex-col shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} case study`}
      >
        {/* ── Sticky header ────────────────────────────────── */}
        <div className="flex-shrink-0 px-7 pt-6 pb-5 border-b border-border bg-white">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/15 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-text hover:border-text/20 transition-colors"
              aria-label="Close"
            >
              <MdClose className="text-sm" />
            </button>
          </div>

          <h2
            className="font-bold text-text leading-tight mt-1"
            style={{ fontSize: "clamp(20px, 3vw, 28px)", letterSpacing: "-0.02em" }}
          >
            {project.name}
          </h2>
          <p className="text-sm text-muted mt-1.5 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* ── Scrollable body ──────────────────────────────── */}
        <div className="flex-1 overflow-y-auto">

          {/* Meta: scope + stack */}
          <div className="grid grid-cols-2 border-b border-border">
            <div className="px-7 py-5 border-r border-border">
              <p className="text-[10px] font-semibold text-muted/50 tracking-widest uppercase mb-3">
                Scope
              </p>
              <ul className="space-y-1.5">
                {project.scope.map((s) => (
                  <li key={s} className="text-sm font-medium text-text">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-7 py-5">
              <p className="text-[10px] font-semibold text-muted/50 tracking-widest uppercase mb-3">
                Stack
              </p>
              <ul className="space-y-1.5">
                {project.stack.map((s) => (
                  <li key={s} className="text-sm font-medium text-text">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results */}
          <div className="px-7 py-6 border-b border-border">
            <p className="text-[10px] font-semibold text-muted/50 tracking-widest uppercase mb-4">
              Results
            </p>
            <div className="space-y-2.5">
              {project.results.map((r) => (
                <div
                  key={r}
                  className="flex items-start gap-3 bg-surface border border-border rounded-xl px-4 py-3"
                >
                  <span className="flex-shrink-0 mt-[3px] w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  <p className="text-sm font-medium text-text">{r}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Problem */}
          <div className="px-7 py-6 border-b border-border">
            <span className="section-label mb-4 inline-flex">
              <span className="w-1 h-1 rounded-full bg-primary" />
              The Problem
            </span>
            <p className="text-[15px] text-text/70 leading-[1.8] mt-2">
              {project.problem}
            </p>
          </div>

          {/* What we built */}
          <div className="px-7 py-6 border-b border-border">
            <span className="section-label mb-4 inline-flex">
              <span className="w-1 h-1 rounded-full bg-primary" />
              What We Built
            </span>
            <div className="space-y-2.5 mt-3">
              {project.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-[4px] w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  <p className="text-sm text-text/75 leading-relaxed">{f}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Approach */}
          <div className="px-7 py-6">
            <span className="section-label mb-4 inline-flex">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Our Approach
            </span>
            <p className="text-[15px] text-text/70 leading-[1.8] mt-2">
              {project.process}
            </p>
          </div>
        </div>

        {/* ── Sticky footer ─────────────────────────────────── */}
        <div className="flex-shrink-0 px-7 py-5 border-t border-border bg-white">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://cal.com/lumixus-studio/30min"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-5 py-3.5 rounded-full text-sm transition-colors shadow-lg shadow-primary/20"
            >
              Start a Similar Project
              <MdArrowOutward className="text-base" />
            </Link>
            <Link
              href={`${project.link}`}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary/30 hover:text-primary text-text text-sm font-medium px-5 py-3.5 rounded-full transition-colors"
            >
              View the live project
              <MdArrowOutward className="text-sm text-muted" />
            </Link>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default ProjectDetailPanel;
