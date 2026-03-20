import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/app/components/Elements/Container";
import { MdArrowOutward } from "react-icons/md";

export const metadata: Metadata = {
  title: "Blog — Digital Marketing, Web Design & Business Growth Tips",
  description:
    "Expert insights on web design, branding, digital marketing, and business automation from the Lumixus Studio team. Practical guides for B2B businesses in Nigeria.",
  keywords: [
    "digital marketing blog Nigeria",
    "web design tips Nigeria",
    "B2B marketing blog",
    "business growth tips Lagos",
    "branding tips for businesses",
    "SEO guide Nigeria",
    "website conversion tips",
    "business automation guide"
  ],
  alternates: {
    canonical: "https://lumixus.studio/blog"
  },
  openGraph: {
    title: "Blog — Digital Marketing & Business Growth Tips | Lumixus Studio",
    description:
      "Practical guides on web design, branding, digital marketing, and business automation for B2B businesses in Nigeria and globally.",
    url: "https://lumixus.studio/blog",
    type: "website"
  }
};

const posts = [
  {
    slug: "how-to-generate-leads-for-b2b-business-nigeria",
    category: "Lead Generation",
    title: "How to Generate Consistent B2B Leads in Nigeria (2026 Guide)",
    excerpt:
      "Stop relying on referrals. Learn 7 proven strategies B2B businesses in Nigeria are using to generate qualified leads consistently — from LinkedIn outreach to SEO-optimized landing pages.",
    date: "March 1, 2026",
    readTime: "8 min read"
  },
  {
    slug: "web-design-tips-for-nigerian-businesses",
    category: "Web Design",
    title: "10 Web Design Mistakes Nigerian Businesses Keep Making (And How to Fix Them)",
    excerpt:
      "Your website might be costing you clients. We analysed 50+ Nigerian business websites and found the same costly mistakes. Here's what to fix first.",
    date: "March 5, 2026",
    readTime: "6 min read"
  },
  {
    slug: "brand-identity-vs-logo-design-whats-the-difference",
    category: "Branding",
    title: "Brand Identity vs. Logo Design: What's the Difference and Why It Matters",
    excerpt:
      "Most businesses spend money on a logo and call it branding. Here's why that's a costly mistake — and what a real brand identity actually includes.",
    date: "March 10, 2026",
    readTime: "5 min read"
  },
  {
    slug: "how-to-automate-your-business-operations-nigeria",
    category: "Automation",
    title: "How to Automate Your Business Operations in Nigeria Without a Tech Team",
    excerpt:
      "CRM setup, email sequences, WhatsApp automation — discover the tools and workflows that let Nigerian businesses run 24/7 without manual follow-ups.",
    date: "March 15, 2026",
    readTime: "10 min read"
  },
  {
    slug: "digital-marketing-agency-nigeria-complete-guide",
    category: "Digital Marketing",
    title: "How to Choose a Digital Marketing Agency in Nigeria: The Complete Guide",
    excerpt:
      "Not all agencies are equal. This guide tells you exactly what to look for, what questions to ask, and what red flags to avoid when hiring a digital marketing agency in Nigeria.",
    date: "March 18, 2026",
    readTime: "9 min read"
  }
];

const categoryColors: Record<string, string> = {
  "Lead Generation": "bg-green-50 text-green-700 border-green-200",
  "Web Design": "bg-blue-50 text-blue-700 border-blue-200",
  Branding: "bg-purple-50 text-purple-700 border-purple-200",
  Automation: "bg-orange-50 text-orange-700 border-orange-200",
  "Digital Marketing": "bg-primary/8 text-primary border-primary/15"
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page header */}
      <section
        className="relative bg-dark overflow-hidden flex items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10 pt-36 pb-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 text-white/80 text-xs font-medium px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Insights from the Lumixus Studio Team
              </span>
            </div>

            <h1
              className="font-bold text-white leading-[1.04] tracking-tight"
              style={{ fontSize: "clamp(44px, 6vw, 76px)", letterSpacing: "-0.03em" }}
            >
              The Growth
              <br />
              <span className="gradient-text-primary">Playbook</span>
            </h1>

            <p
              className="text-white/50 mt-7 max-w-xl mx-auto leading-relaxed"
              style={{ fontSize: "clamp(16px, 1.5vw, 18px)" }}
            >
              Practical guides on web design, branding, digital marketing, and
              business automation — written for B2B business owners who want
              results, not fluff.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog posts grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-border rounded-2xl overflow-hidden flex flex-col card-glow hover:border-primary/30 transition-colors"
              >
                {/* Placeholder visual */}
                <div className="h-48 bg-surface relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
                  <div className="absolute bottom-4 left-5">
                    <span
                      className={`inline-flex text-xs font-semibold border px-3 py-1 rounded-full ${
                        categoryColors[post.category] ??
                        "bg-primary/8 text-primary border-primary/15"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <p className="text-xs text-muted mb-3">
                    {post.date} · {post.readTime}
                  </p>

                  <h2 className="text-base font-bold text-text mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read article
                    <MdArrowOutward className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center p-10 rounded-2xl bg-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4">
                Ready to implement?
              </p>
              <h3
                className="font-bold text-white mb-4 tracking-tight"
                style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}
              >
                Let us build your growth system
              </h3>
              <p className="text-white/40 text-[15px] mb-8 max-w-md mx-auto leading-relaxed">
                Reading is great — but results come from execution. Let's build
                a full strategy tailored to your business.
              </p>
              <Link
                href="https://cal.com/lumixus-studio/30min"
                className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors shadow-lg shadow-primary/30"
              >
                Book a Free Strategy Call
                <MdArrowOutward className="text-base" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
