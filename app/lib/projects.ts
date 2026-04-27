export type Project = {
  slug: string
  name: string
  tagline: string
  image: string
  tags: string[]
  problem: string
  scope: string[]
  features: string[]
  stack: string[]
  process: string
  results: string[]
  relatedSlugs: string[]
}

export const projects: Project[] = [
  {
    slug: "graft",
    name: "Graft",
    tagline: "Rebranding a talent acquisition platform for the African market",
    image: "/graft.png",
    tags: ["Web Design", "Branding", "SEO"],
    problem:
      "Graft needed a digital presence that communicated credibility to enterprise hiring managers while staying approachable for job seekers — two very different audiences, one website.",
    scope: ["Brand Strategy", "Visual Identity", "Web Design", "On-page SEO"],
    features: [
      "Dual-audience homepage architecture",
      "Trust-building social proof sections",
      "Mobile-first responsive layouts",
      "SEO-optimized content structure",
      "Clear conversion funnels for both user types",
    ],
    stack: ["Figma", "Next.js", "Tailwind CSS"],
    process:
      "Started with stakeholder interviews to map both user journeys, then developed a unified visual language that spoke to enterprise clients and candidates equally. Three design iterations before final launch.",
    results: [
      "Launched in 3 weeks",
      "Mobile bounce rate reduced by 35%",
      "Top-5 Google ranking for target keywords within 60 days",
    ],
    relatedSlugs: ["rdj-estates", "pharmabolt"],
  },
  {
    slug: "rdj-estates",
    name: "RDJ Estates",
    tagline: "A conversion-focused website for a premium real estate firm",
    image: "/rdj-estates.png",
    tags: ["Web Design", "CRO", "SEO"],
    problem:
      "RDJ Estates was generating traffic but losing potential buyers at every step — unclear CTAs, a dated design, and no trust signals to justify premium pricing.",
    scope: ["UX Audit", "Web Design", "Conversion Optimization", "SEO"],
    features: [
      "Property listing pages with detailed specs",
      "Multi-step enquiry flow",
      "Trust badges and testimonial integration",
      "WhatsApp CTA integration",
      "Fast-loading image galleries",
    ],
    stack: ["Figma", "WordPress", "Elementor"],
    process:
      "Ran a full UX audit identifying 11 friction points in the existing flow. Redesigned from the ground up with CRO principles guiding every section decision.",
    results: [
      "Enquiry form completions up 58%",
      "Average session duration increased 2.1×",
      "3 high-value property sales attributed to the new site within 45 days",
    ],
    relatedSlugs: ["good-homes", "graft"],
  },
  {
    slug: "good-homes",
    name: "Good Homes",
    tagline: "Brand identity and web design for a residential property developer",
    image: "/good-homes.png",
    tags: ["Web Design", "Branding", "CRO"],
    problem:
      "Good Homes was competing with well-funded developers but had no distinct visual identity — their brand blended into a saturated market and failed to communicate the quality of their builds.",
    scope: ["Brand Identity", "Logo Design", "Web Design", "Marketing Collateral"],
    features: [
      "Full brand identity system",
      "Project showcase pages",
      "Interactive floor plan displays",
      "Lead capture system",
      "Development timeline section",
    ],
    stack: ["Figma", "Webflow"],
    process:
      "Brand positioning workshop first, then built the visual language around 'warm premium' — earthy tones, clean typography, and photography direction showing real lives in quality spaces.",
    results: [
      "Brand launched in 4 weeks",
      "Property enquiries tripled in first month",
      "Featured in 2 local property publications",
    ],
    relatedSlugs: ["rdj-estates", "chris-global"],
  },
  {
    slug: "chris-global",
    name: "Chris Global Limited",
    tagline: "Digital brand overhaul for an international trading company",
    image: "/chris-global.png",
    tags: ["Branding", "Web Design", "Social Media"],
    problem:
      "Chris Global's online presence didn't reflect the scale of their operations — they were trading internationally but looked like a local business online, costing them credibility with new partners.",
    scope: ["Rebrand", "Web Design", "Social Media Strategy", "Content System"],
    features: [
      "International-grade brand identity",
      "Multi-service web architecture",
      "Content calendar and social templates",
      "Partner and client showcase section",
      "News and updates module",
    ],
    stack: ["Figma", "WordPress"],
    process:
      "Interviewed leadership to extract true competitive differentiators, then built a premium identity system that scaled consistently across web, print, and social media.",
    results: [
      "Brand perceived as 'much larger' by 3 new international partners",
      "Social media following grew 4× in 90 days",
      "3 inbound partnership inquiries in first 60 days",
    ],
    relatedSlugs: ["najec-fmcg", "good-homes"],
  },
  {
    slug: "najec-fmcg",
    name: "Najec FMCG",
    tagline: "Social-first brand system for a fast-growing FMCG distributor",
    image: "/najec-fmcg.png",
    tags: ["Branding", "Web Design", "Social Media"],
    problem:
      "Najec FMCG had strong distribution relationships but no consistent brand voice — their social media was scattered and their website didn't communicate the breadth of their product range.",
    scope: ["Brand Guidelines", "Web Design", "Social Media Templates", "Content Strategy"],
    features: [
      "Product catalogue website",
      "Full brand guidelines document",
      "50+ social media templates",
      "Content strategy framework",
      "Distributor partner portal design",
    ],
    stack: ["Figma", "WordPress", "Canva Pro"],
    process:
      "Built the brand around their core value — reliability at scale. Every touchpoint was designed to reinforce trust with both retail partners and end consumers.",
    results: [
      "Social media engagement up 220%",
      "New retail partner onboarding time reduced by 40%",
      "Brand recognised at 2 industry trade shows",
    ],
    relatedSlugs: ["chris-global", "pharmabolt"],
  },
  {
    slug: "pharmabolt",
    name: "Pharmabolt",
    tagline: "E-commerce and growth strategy for a pharmaceutical distributor",
    image: "/pharmabolt.png",
    tags: ["E-commerce", "Web Dev", "CRO"],
    problem:
      "Pharmabolt needed to move from purely offline B2B sales to a digital ordering system — while maintaining the trust standards required in the pharmaceutical industry.",
    scope: ["E-commerce Development", "UX Design", "CRO", "Payment Integration"],
    features: [
      "B2B e-commerce with account-based pricing",
      "Bulk order management system",
      "Secure payment gateway integration",
      "Order tracking dashboard",
      "Product search with category filters",
    ],
    stack: ["Figma", "WooCommerce", "WordPress", "Stripe"],
    process:
      "Mapped the existing offline ordering workflow in detail, then rebuilt it digitally with the same familiar steps — minimizing the behavior change required from existing clients.",
    results: [
      "Online orders processed from day one",
      "Order processing time reduced by 70%",
      "₦12M in online orders in first 90 days",
    ],
    relatedSlugs: ["icystore", "graft"],
  },
  {
    slug: "icystore",
    name: "Icy Store",
    tagline: "Premium e-commerce experience for a fashion-forward retail brand",
    image: "/icystore.png",
    tags: ["E-commerce", "Branding", "CRO"],
    problem:
      "Icy Store was selling through Instagram DMs — losing orders, lacking trust signals, and unable to scale without a proper storefront.",
    scope: ["Brand Identity", "E-commerce Design", "CRO", "Social Media Integration"],
    features: [
      "Full Shopify storefront",
      "Instagram Shop integration",
      "Custom brand identity",
      "Size guide and rich product detail pages",
      "Abandoned cart recovery flows",
    ],
    stack: ["Figma", "Shopify", "Klaviyo"],
    process:
      "Started with the brand identity to establish the premium feel, then built a Shopify store that matched it — every product page optimized for conversion with strong imagery and clear trust signals.",
    results: [
      "Revenue 3× within 60 days of launch",
      "Instagram DM orders fully migrated to the storefront",
      "Average order value up 45%",
    ],
    relatedSlugs: ["pharmabolt", "rdj-estates"],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return projects.filter((p) => slugs.includes(p.slug))
}
