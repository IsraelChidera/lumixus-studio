"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MdArrowOutward } from "react-icons/md";
import Container from "@/app/components/Elements/Container";
import { projects } from "@/app/lib/projects";

const CATEGORIES = ["All", "Web Design", "Branding", "E-commerce", "CRO", "Social Media", "SEO"];

const Works = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="works" className="py-28 bg-white">
      <Container>
        {/* Header */}
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

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-white border-primary"
                  : "text-muted border-border hover:border-primary/40 hover:text-text bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, i) => {
            const isFeatured = i === 0 && active === "All";
            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`group relative rounded-2xl overflow-hidden bg-surface block${
                  isFeatured ? " sm:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative w-full${
                    isFeatured ? " aspect-[16/9]" : " aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 640px) 100vw, 66vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />

                  {/* Always-on gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />

                  {/* Card info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium text-white/60 bg-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-white font-semibold text-lg leading-tight">
                        {project.name}
                      </h3>
                    </div>

                    {/* Arrow — reveals on hover */}
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <MdArrowOutward className="text-white text-sm" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg font-semibold text-text mb-2">
              No projects in this category yet
            </p>
            <p className="text-sm text-muted">
              We're always adding new work — check back soon.
            </p>
          </div>
        )}

        {/* Footer row */}
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
  );
};

export default Works;
