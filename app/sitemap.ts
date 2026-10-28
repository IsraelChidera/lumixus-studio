import { MetadataRoute } from "next";
import { SITE_URL } from "@/app/lib/site";
import { projects } from "@/app/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];

  // Case studies - generated from the same data that builds /work/[slug].
  const caseStudies: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  // Blog URLs were removed: app/blog is disabled (underscore-prefixed folders
  // are not routed), so listing them sent search engines to 404 pages.
  // Re-add them here when the blog is re-enabled.
  return [...staticPages, ...caseStudies];
}
