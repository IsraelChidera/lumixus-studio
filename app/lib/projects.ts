export type Outcome = "convert" | "authority" | "modernize"

export type Project = {
  slug: string
  name: string
  link?: string
  tagline: string
  image?: string
  /** Brand asset / screenshot gallery - shown as a carousel on detail page and panel */
  gallery?: string[]
  tags: string[]
  /** Business outcome this case study is the strongest evidence for - drives homepage grouping */
  outcome: Outcome
  problem: string
  /** What the audit/discovery phase surfaced - the bridge between the problem and what we built */
  discovery: string[]
  scope: string[]
  features: string[]
  stack: string[]
  process: string
  results: string[]
  relatedSlugs: string[]
}

export const projects: Project[] = [
  {
    slug: "core360analytics",
    name: "Core360 Analytics",
    link: "https://core360analytics.tech/",
    tagline: "A unified academic management platform consolidating six campus systems into one",
    gallery: ["/core360analytics.png"],
    tags: ["Web Design", "Web Dev"],
    outcome: "modernize",
    problem:
      "University departments were running on six disconnected systems. Students, lecturers, administrators, wellness staff, student union officials, and executives each had separate tools that couldn't communicate - duplicated data, administrative chaos, and a frustrating experience for everyone on campus.",
    discovery: [
      "Six departments running six disconnected systems with no shared source of truth",
      "Data was re-entered by hand across student, lecturer, admin, wellness, SUG, and executive tools",
      "Each of the six user groups needed a genuinely different workflow, not one generic dashboard",
    ],
    scope: ["UI/UX Design", "Web Development", "Design System", "Multi-portal Architecture"],
    features: [
      "Portal modules - Student, Lecturer, Admin, Wellness, SUG, Executive",
      "Student dashboard: GPA analytics, course tracking, and petition management",
      "Lecturer dashboard: grade moderation, material uploads, and performance tracking",
      "Wellness portal: peer tutoring marketplace and mental health resource library",
      "Executive analytics: institution-wide reporting and oversight tools",
    ],
    stack: ["Figma", "Next.js", "Tailwind CSS", "TypeScript"],
    process:
      "Started by mapping all six user personas and their distinct journeys before designing a single screen. Built a shared component library first, then layered each portal on top - ensuring brand consistency while preserving each role's unique functionality. Three full rounds of stakeholder review before launch.",
    results: [
      "Six fragmented campus systems unified into one coherent platform",
      "Admin overhead significantly reduced across all departments",
      "Full institution rollout delivered on schedule",
    ],
    relatedSlugs: ["scris-enterprise", "myt40"],
  },
  {
    slug: "scris-enterprise",
    link: "https://scris-enterprise.netlify.app/",
    name: "Scris Enterprise",
    tagline: "Professional Writing Services That Drive Results",
    image: "/scris-enterprise.png",
    gallery: ["/scris-enterprise.png", "/scris-enterprise.png"],
    tags: ["Web Design", "Branding", "SEO"],
    outcome: "modernize",
    problem:
      "Scris Enterprise needed a digital presence that communicated credibility to enterprise hiring managers while staying approachable for job seekers - two very different audiences, one website.",
    discovery: [
      "Enterprise hiring managers and individual job seekers were being served the same generic messaging on one homepage",
      "Stakeholder interviews surfaced two distinct decision journeys that needed separate paths through the site",
      "No dedicated trust-building content existed to reassure enterprise clients before a conversation started",
    ],
    scope: ["Brand Strategy", "Visual Identity", "Web Design", "On-page SEO"],
    features: [
      "Professional copywriting and content strategy",
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
    relatedSlugs: ["core360analytics", "myt40"],
  },
  {
    slug: "myt40",
    link: "https://myt40.com/",
    name: "MyT40",
    tagline: "Professional Writing Services That Drive Results",
    image: "/myt40.png",
    gallery: ["/myt40.png", "/myt40.png"],
    tags: ["Web Design", "Branding", "SEO"],
    outcome: "modernize",
    problem:
      "MyT40 needed a website that clearly communicated its expertise in transportation technology while showing logistics companies how its solutions simplify operations, improve efficiency, and support long-term growth.",
    discovery: [
      "Logistics decision-makers couldn't quickly tell how the platform applied to their day-to-day operations",
      "The existing narrative leaned on generic tech language instead of transportation and logistics specifics",
      "Efficiency and growth benefits weren't made tangible anywhere on the site",
    ],
    scope: ["Brand Strategy", "Visual Identity", "Web Design", "On-page SEO"],
    features: [
      "Providing innovative tech solutions for the transportation industry",
      "Trust-building social proof sections",
      "Mobile-first responsive layouts",
      "SEO-optimized content structure",
      "Clear conversion funnels for logistics decision-makers",
    ],
    stack: ["Figma", "Next.js", "Tailwind CSS"],
    process:
      "Started with stakeholder interviews to map how logistics buyers actually evaluate a transportation-tech vendor, then developed a visual language that spoke directly to that audience. Three design iterations before final launch.",
    results: [      
      "Launched in 2 weeks",
      "Mobile bounce rate reduced by 35%",
      "Top-5 Google ranking for target keywords within 60 days",
    ],
    relatedSlugs: ["core360analytics", "scris-enterprise"],
  },
  {
    slug: "rdj-estates",
    name: "RDJ Estates",
    link: "https://rdjestates.com/",
    tagline: "A conversion-focused website for a premium real estate firm",
    image: "/rdj-estates.png",
    gallery: ["/rdj-estates.png"],
    tags: ["Web Design", "CRO", "SEO"],
    outcome: "convert",
    problem:
      "RDJ Estates was generating traffic but losing potential buyers at every step - unclear CTAs, a dated design, and no trust signals to justify premium pricing.",
    discovery: [
      "A full UX audit identified 11 distinct friction points across the enquiry flow",
      "CTAs were inconsistent and buried, leaving visitors without a clear next step",
      "Nothing on the site justified premium pricing - no trust signals, no social proof, no differentiation from lower-tier listings",
    ],
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
    relatedSlugs: ["global-value-pedestal", "chris-global"],
  },
  // {
  //   slug: "good-homes",
  //   name: "Good Homes",
  //   link: "https://goodhomes.com.ng",
  //   tagline: "Brand identity and web design for a residential property developer",
  //   image: "/good-homes.png",
  //   gallery: ["/good-homes.png"],
  //   tags: ["Web Design", "Branding", "CRO"],
  //   problem:
  //     "Good Homes was competing with well-funded developers but had no distinct visual identity - their brand blended into a saturated market and failed to communicate the quality of their builds.",
  //   scope: ["Brand Identity", "Logo Design", "Web Design", "Marketing Collateral"],
  //   features: [
  //     "Full brand identity system",
  //     "Project showcase pages",
  //     "Interactive floor plan displays",
  //     "Lead capture system",
  //     "Development timeline section",
  //   ],
  //   stack: ["Figma", "Webflow"],
  //   process:
  //     "Brand positioning workshop first, then built the visual language around 'warm premium' - earthy tones, clean typography, and photography direction showing real lives in quality spaces.",
  //   results: [
  //     "Brand launched in 4 weeks",
  //     "Property enquiries tripled in first month",
  //     "Featured in 2 local property publications",
  //   ],
  //   relatedSlugs: ["rdj-estates", "global-value-pedestal"],
  // },
  {
    slug: "gloren-ateliers",
    name: "Gloren Ateliers",
    tagline: "Luxury brand identity and digital presence for an African fashion atelier",
    image: "/gloreen.png",
    gallery: ["/gloreen.png", "/gloreen1.png", "/gloreen2.png"],
    tags: ["Branding", "Social Media"],
    outcome: "authority",
    problem:
      "Gloren Ateliers was producing world-class bespoke fashion but presenting it through inconsistent, informal channels. Their brand needed to match the craftsmanship of their garments - premium, intentional, and immediately recognisable - but nothing in their visual identity communicated that.",
    discovery: [
      "Visual presentation was inconsistent across channels, with no single identity tying it together",
      "The brand's craftsmanship wasn't reflected anywhere in its logo, content, or tone of voice",
      "Informal, ad-hoc content was undercutting the premium positioning the garments themselves justified",
    ],
    scope: ["Brand Identity", "Visual Language", "Social Media Strategy", "Content Templates"],
    features: [
      "Luxury logo and wordmark with custom lettering direction",
      "Instagram content system with 40+ branded templates",
      "Brand story and tone of voice document",
      "Launch campaign creative direction",
    ],
    stack: ["Figma", "Adobe Illustrator", "Canva Pro"],
    process:
      "Fashion branding demands restraint. We stripped everything back to the atelier's core truth - meticulous craft. The visual identity was built around negative space, texture, and precision, letting the garments speak without competing visual noise. Every element earns its place.",
    results: [
      "Brand identity and content system launched in 3 weeks",
      "Instagram following grew 3× in the first 60 days post-launch",
      "Featured in 2 Lagos fashion editorial pieces within the first quarter",
    ],
    relatedSlugs: ["global-value-pedestal", "najec-fmcg"],
  },
  {
    slug: "global-value-pedestal",
    name: "Global Value Pedestal",
    tagline: "Brand identity system for an HR consultancy building Africa's executive talent pipeline",
    image: "/pvg.jpeg",
    gallery: ["/pvg.jpeg", "/pvg1.png"],
    tags: ["Branding", "Social Media"],
    outcome: "authority",
    problem:
      "In a professional services market where trust is everything, GVP's generic visual identity was undermining their credibility before a single conversation was had. Prospects couldn't distinguish them from dozens of similar firms, and their social media presence was inconsistent and forgettable.",
    discovery: [
      "A generic visual identity made GVP indistinguishable from dozens of similar consultancies",
      "Leadership's stated differentiators didn't match what clients actually came back for - only the positioning workshop surfaced the real ones",
      "Social media presence was inconsistent enough to be actively forgettable, not just underperforming",
    ],
    scope: ["Brand Strategy", "Logo Design", "Brand Identity", "Social Media Templates"],
    features: [
      "Full logo suite - primary, secondary, and icon mark variants",
      "Color system, typography scale, and usage guidelines",
      "Brand voice and tone framework tailored to corporate B2B",
      "30+ branded social media templates for LinkedIn and Instagram",
      "Business stationery and pitch deck templates",
      "Brand guidelines document for internal and agency use",
    ],
    stack: ["Figma", "Adobe Illustrator", "Canva Pro"],
    process:
      "Ran a brand positioning workshop with leadership to extract GVP's real differentiators - not what they thought they were, but what their clients consistently came back for. Built the identity around precision and elevation: every touchpoint had to feel as calibrated as the talent they placed.",
    results: [
      "Full brand identity delivered and adopted in 2 weeks",
      "Immediately rolled out across all client-facing materials",
      "Reported increase in perception of premium positioning by new prospects",
    ],
    relatedSlugs: ["gloren-ateliers", "chris-global"],
  },
  {
    slug: "chris-global",
    name: "Chris Global Limited",
    link: "https://chrisglobal.netlify.app/",
    tagline: "Digital brand overhaul for an international trading company",
    image: "/chris-global.png",
    gallery: ["/chris-global.png", "/nextcash.png"],
    tags: ["Branding", "Web Design", "Social Media"],
    outcome: "authority",
    problem:
      "Chris Global's online presence didn't reflect the scale of their operations - they were trading internationally but looked like a local business online, costing them credibility with new partners.",
    discovery: [
      "An internationally trading company presented online like a local operation, creating a credibility gap with new partners",
      "Leadership interviews surfaced real competitive differentiators that had never been articulated anywhere public-facing",
      "No content system existed to consistently reinforce scale and credibility across web, print, and social",
    ],
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
    relatedSlugs: ["global-value-pedestal", "najec-fmcg"],
  },

  {
    slug: "najec-fmcg",
    name: "Najec FMCG",
    link: "https://najecfmcg.com/",
    tagline: "Social-first brand system for a fast-growing FMCG distributor",
    image: "/najec-fmcg.png",
    gallery: ["/najec-fmcg.png", "/najec.png"],
    tags: ["Branding", "Web Design", "Social Media"],
    outcome: "authority",
    problem:
      "Najec FMCG had strong distribution relationships but no consistent brand voice - their social media was scattered and their website didn't communicate the breadth of their product range.",
    discovery: [
      "Strong distribution relationships weren't matched by a consistent brand voice anywhere online",
      "Scattered social media made the brand look smaller and less reliable than its real distribution footprint",
      "The website understated the actual breadth of the product catalogue, undercutting retail partner confidence",
    ],
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
      "Built the brand around their core value - reliability at scale. Every touchpoint was designed to reinforce trust with both retail partners and end consumers.",
    results: [
      "Social media engagement up 220%",
      "New retail partner onboarding time reduced by 40%",
      "Brand recognised at 2 industry trade shows",
    ],
    relatedSlugs: ["gloren-ateliers", "chris-global"],
  },

  // {
  //   slug: "pharmabolt",
  //   name: "Pharmabolt",
  //   tagline: "E-commerce and growth strategy for a pharmaceutical distributor",
  //   image: "/pharmabolt.png",
  //   gallery: ["/pharmabolt.png"],
  //   tags: ["E-commerce", "Web Dev", "CRO"],
  //   problem:
  //     "Pharmabolt needed to move from purely offline B2B sales to a digital ordering system - while maintaining the trust standards required in the pharmaceutical industry.",
  //   scope: ["E-commerce Development", "UX Design", "CRO", "Payment Integration"],
  //   features: [
  //     "B2B e-commerce with account-based pricing",
  //     "Bulk order management system",
  //     "Secure payment gateway integration",
  //     "Order tracking dashboard",
  //     "Product search with category filters",
  //   ],
  //   stack: ["Figma", "WooCommerce", "WordPress", "Stripe"],
  //   process:
  //     "Mapped the existing offline ordering workflow in detail, then rebuilt it digitally with the same familiar steps - minimizing the behavior change required from existing clients.",
  //   results: [
  //     "Online orders processed from day one",
  //     "Order processing time reduced by 70%",
  //     "₦12M in online orders in first 90 days",
  //   ],
  //   relatedSlugs: ["icystore", "core360analytics"],
  // },

  // {
  //   slug: "icystore",
  //   name: "Icy Store",
  //   tagline: "Premium e-commerce experience for a fashion-forward retail brand",
  //   image: "/icystore.png",
  //   gallery: ["/icystore.png"],
  //   tags: ["E-commerce", "Branding", "CRO"],
  //   problem:
  //     "Icy Store was selling through Instagram DMs - losing orders, lacking trust signals, and unable to scale without a proper storefront.",
  //   scope: ["Brand Identity", "E-commerce Design", "CRO", "Social Media Integration"],
  //   features: [
  //     "Full Shopify storefront",
  //     "Instagram Shop integration",
  //     "Custom brand identity",
  //     "Size guide and rich product detail pages",
  //     "Abandoned cart recovery flows",
  //   ],
  //   stack: ["Figma", "Shopify", "Klaviyo"],
  //   process:
  //     "Started with the brand identity to establish the premium feel, then built a Shopify store that matched it - every product page optimized for conversion with strong imagery and clear trust signals.",
  //   results: [
  //     "Revenue 3× within 60 days of launch",
  //     "Instagram DM orders fully migrated to the storefront",
  //     "Average order value up 45%",
  //   ],
  //   relatedSlugs: ["pharmabolt", "gloren-ateliers"],
  // },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return projects.filter((p) => slugs.includes(p.slug))
}
