import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lumixus.studio";

  // Static pages
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
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    }
  ];

  // Blog posts — add new entries here as content is published
  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/how-to-generate-leads-for-b2b-business-nigeria`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog/web-design-tips-for-nigerian-businesses`,
      lastModified: new Date("2026-03-05"),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog/brand-identity-vs-logo-design-whats-the-difference`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/blog/how-to-automate-your-business-operations-nigeria`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/blog/digital-marketing-agency-nigeria-complete-guide`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];

  return [...staticPages, ...blogPosts];
}
