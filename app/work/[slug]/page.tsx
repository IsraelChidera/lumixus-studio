import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Container from "@/app/components/Elements/Container";
import Button from "@/app/components/Elements/Button";
import { getProjectBySlug, getRelatedProjects, projects } from "@/app/lib/projects";
import GalleryCarousel from "@/app/components/GalleryCarousel";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} - Case Study`,
    description: project.tagline,
    alternates: { canonical: `https://lumixus.studio/work/${project.slug}` },
    openGraph: {
      title: `${project.name} | Lumixus Studio`,
      description: project.tagline,
      url: `https://lumixus.studio/work/${project.slug}`,
      type: "website",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.relatedSlugs);
  // A live link is the one reliable signal that this was a website project.
  // Everything else (gallery framing, tool labeling, the CTA below) adapts off it,
  // so branding-only or social-only work doesn't inherit web-specific framing.
  const isWebProject = Boolean(project.link);
  // Non-web work leads with its curated gallery asset rather than `image`,
  // which isn't guaranteed to be hero-shaped for brand-only projects.
  const featuredImage = isWebProject
    ? project.image || project.gallery?.[0]
    : project.gallery?.[0] || project.image;

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative bg-dark overflow-hidden flex items-center noise"
        style={{ minHeight: "68vh" }}
      >
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10 pt-40 pb-20">
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-sm font-medium transition-colors mb-12 group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to work
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {project!.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-white/60 bg-white/8 border border-white/12 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <h1
                className="font-bold text-white leading-[1.04] tracking-tight max-w-3xl"
                style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.03em" }}
              >
                {project!.name}
              </h1>
              <p
                className="text-white/50 mt-5 max-w-xl leading-relaxed"
                style={{ fontSize: "clamp(16px, 1.5vw, 18px)" }}
              >
                {project!.tagline}
              </p>
            </div>

            {isWebProject && (
              <Button href={project!.link!} target="_blank" rel="noopener noreferrer" variant="outline-dark">
                Visit the live site
              </Button>
            )}
          </div>
        </Container>
      </section>

      {/* ── Featured image (only when available) ────────────────── */}
      {featuredImage && (
        <section className="bg-surface py-16">
          <Container>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-dark/10">
              <Image
                src={featuredImage}
                alt={project!.name}
                fill
                priority
                sizes="(max-width: 1300px) 91vw, 1300px"
                className={isWebProject ? "object-cover object-top" : "object-contain bg-white p-8"}
              />
            </div>
          </Container>
        </section>
      )}

      {/* ── Project details ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">

            {/* Meta strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-border">
              <div>
                <p className="text-xs font-semibold text-muted tracking-widest uppercase mb-3">
                  Scope
                </p>
                <ul className="space-y-1.5">
                  {project!.scope.map((s) => (
                    <li key={s} className="text-sm font-medium text-text">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold text-muted tracking-widest uppercase mb-3">
                  Tools
                </p>
                <ul className="space-y-1.5">
                  {project!.stack.map((s) => (
                    <li key={s} className="text-sm font-medium text-text">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2">
                <p className="text-xs font-semibold text-muted tracking-widest uppercase mb-3">
                  Results
                </p>
                <ul className="space-y-2">
                  {project!.results.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm font-medium text-text">
                      <span className="flex-shrink-0 mt-[3px] w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery — only renders when images are available */}
            {project!.gallery && project!.gallery.length > 0 && (
              <div className="mb-16">
                <span className="section-label mb-5 inline-flex">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {isWebProject ? "Gallery" : "Brand Assets"}
                </span>
                <div className="mt-4">
                  <GalleryCarousel
                    images={project!.gallery}
                    name={project!.name}
                    fit={isWebProject ? "cover" : "contain"}
                  />
                </div>
              </div>
            )}

            {/* Problem */}
            <div className="mb-16">
              <span className="section-label mb-5 inline-flex">
                <span className="w-1 h-1 rounded-full bg-primary" />
                The Problem
              </span>
              <p className="text-[17px] text-text/75 leading-[1.75] mt-1">
                {project!.problem}
              </p>
            </div>

            {/* Features */}
            <div className="mb-16">
              <span className="section-label mb-5 inline-flex">
                <span className="w-1 h-1 rounded-full bg-primary" />
                What We Built
              </span>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                {project!.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 bg-surface border border-border rounded-xl p-4"
                  >
                    <span className="flex-shrink-0 mt-[3px] w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </span>
                    <p className="text-sm font-medium text-text">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <span className="section-label mb-5 inline-flex">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Our Approach
              </span>
              <p className="text-[17px] text-text/75 leading-[1.75] mt-1">
                {project!.process}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Related projects ─────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-20 bg-surface">
          <Container>
            <div className="mb-10">
              <span className="section-label mb-4 inline-flex">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Related Work
              </span>
              <h2
                className="font-bold text-text mt-3 tracking-tight"
                style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}
              >
                More projects
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/work/${rel.slug}`}
                  className="group rounded-2xl overflow-hidden bg-white block card-glow"
                >
                  {rel.image ? (
                    /* Image card — for projects with visuals to show */
                    <div className={`relative aspect-[4/3] ${rel.link ? "" : "bg-white"}`}>
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`transition-transform duration-500 group-hover:scale-[1.04] ${
                          rel.link ? "object-cover object-top" : "object-contain p-6"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/15 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {rel.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-medium text-white/60 bg-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-white font-semibold text-base leading-tight">
                            {rel.name}
                          </h3>
                        </div>
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <MdArrowOutward className="text-white text-xs" />
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Text card — for projects without a screenshot */
                    <div className="p-6 flex flex-col min-h-[160px]">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {rel.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium text-muted bg-surface border border-border px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold text-text leading-tight mb-2">
                        {rel.name}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed flex-1">
                        {rel.tagline}
                      </p>
                      <div className="flex items-center justify-end pt-4 mt-2 border-t border-border">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          View case study
                          <MdArrowOutward className="text-sm" />
                        </span>
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/#works"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
              >
                View all work
                <MdArrowOutward className="text-sm" />
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="rounded-2xl bg-dark relative overflow-hidden p-12 md:p-16 text-center noise">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
                Next Step
              </p>
              <h3
                className="font-bold text-white mb-4 tracking-tight"
                style={{ fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-0.02em" }}
              >
                Want something like this?
                <span className="font-serif italic font-normal text-primary"> Let&apos;s talk.</span>
              </h3>
              <p className="text-white/50 text-[15px] mb-8 max-w-md mx-auto leading-relaxed">
                Tell us about your brand and what you&apos;re trying to do. We&apos;ll take it from there.
              </p>
              <div className="flex justify-center">
                <Button href="/#contact" variant="primary">
                  Start a project
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
