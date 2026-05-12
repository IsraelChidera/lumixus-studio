import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/app/components/Elements/Container";
import { MdArrowOutward, MdArrowBack } from "react-icons/md";

// ─── Post data ───────────────────────────────────────────────────────────────
// Replace this with a CMS/MDX solution as the blog grows.
const posts: Record<
  string,
  {
    title: string;
    description: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    authorRole: string;
    content: {
      intro: string;
      sections: { heading: string; body: string }[];
      conclusion: string;
    };
  }
> = {
  "how-to-generate-leads-for-b2b-business-nigeria": {
    title: "How to Generate Consistent B2B Leads in Nigeria (2026 Guide)",
    description:
      "Stop relying on referrals. Learn 7 proven strategies B2B businesses in Nigeria are using to generate qualified leads consistently - from LinkedIn outreach to SEO-optimized landing pages.",
    category: "Lead Generation",
    date: "March 1, 2026",
    readTime: "8 min read",
    author: "Lumixus Studio",
    authorRole: "B2B Digital Marketing Agency",
    content: {
      intro:
        "Most B2B businesses in Nigeria rely on one channel for new clients: referrals. When referrals are flowing, growth feels effortless. But when they dry up - and they always do - the business stalls. This guide breaks down 7 proven lead generation strategies that work specifically in the Nigerian B2B market.",
      sections: [
        {
          heading: "1. Optimize Your Website for Search Intent",
          body: "Your website should answer the exact questions your ideal clients are searching for on Google. This means creating dedicated service pages with keyword-rich content, publishing educational blog posts that rank for industry terms, and ensuring your site loads in under 3 seconds. A slow, generic website is invisible to search engines and unconvincing to prospects."
        },
        {
          heading: "2. Build a LinkedIn Presence That Positions You as an Authority",
          body: "LinkedIn is the most effective B2B social platform in Nigeria. Posting consistently about industry insights, case studies, and client results builds trust with decision-makers before they ever contact you. Aim for 3–4 posts per week and engage actively in your industry's comment sections."
        },
        {
          heading: "3. Create a Lead Magnet That Solves a Real Problem",
          body: "Offer something valuable for free - a checklist, template, mini-audit, or guide - in exchange for an email address. This builds your list of warm prospects who have already shown interest in your expertise. A well-positioned lead magnet can generate dozens of qualified leads per month without paid ads."
        },
        {
          heading: "4. Set Up Email Nurture Sequences",
          body: "Most B2B buyers need 5–12 touchpoints before making a decision. An automated email sequence keeps you top of mind between those touchpoints. Use tools like Mailchimp or ConvertKit to send a 5–7 email sequence to every new lead, educating them about the problem you solve and why your agency is the right solution."
        },
        {
          heading: "5. Leverage Google Business Profile for Local Discovery",
          body: "If you serve businesses in Lagos or any Nigerian city, your Google Business Profile is essential. Optimized profiles appear in map results when prospects search 'digital marketing agency Lagos' or 'web design company near me'. Fill in every field, add photos, and actively collect reviews from past clients."
        },
        {
          heading: "6. Run Targeted LinkedIn or Meta Ads (Even on a Small Budget)",
          body: "Paid ads accelerate lead generation when your organic engine is still building. LinkedIn Ads let you target by job title, company size, and industry - perfect for B2B. Even ₦50,000/month allocated strategically can generate qualified discovery calls when paired with a strong landing page."
        },
        {
          heading: "7. Ask for Referrals Systematically",
          body: "Referrals don't have to be passive. Create a simple referral programme - offer a discount, cash incentive, or gift - and actively ask satisfied clients to introduce you to two business owners they know. This turns your existing clients into a predictable lead source."
        }
      ],
      conclusion:
        "Consistent B2B lead generation isn't magic - it's a system. Start by fixing your website, then build one or two of these channels into a repeatable process. If you'd like help building this system for your business, book a free strategy call with the Lumixus Studio team."
    }
  },
  "web-design-tips-for-nigerian-businesses": {
    title:
      "10 Web Design Mistakes Nigerian Businesses Keep Making (And How to Fix Them)",
    description:
      "Your website might be costing you clients. We analysed 50+ Nigerian business websites and found the same costly mistakes. Here's what to fix first.",
    category: "Web Design",
    date: "March 5, 2026",
    readTime: "6 min read",
    author: "Lumixus Studio",
    authorRole: "B2B Digital Marketing Agency",
    content: {
      intro:
        "After reviewing over 50 Nigerian business websites, we found a clear pattern: the same mistakes showing up again and again. These aren't cosmetic issues - they're conversion killers that cause visitors to leave before taking any action. Here are the 10 most common and how to fix each one.",
      sections: [
        {
          heading: "1. No Clear Value Proposition Above the Fold",
          body: "The first thing a visitor sees should tell them exactly what you do, who you help, and why they should care. 'Welcome to our website' does not do this. Replace vague headlines with specific, benefit-led statements like 'We help FMCG distributors in Lagos automate their order management.'"
        },
        {
          heading: "2. Slow Page Load Speed",
          body: "Nigerian internet connections vary widely. If your site takes more than 3 seconds to load, you're losing visitors before they see your offer. Compress images, remove unnecessary plugins, and consider upgrading to a faster hosting provider. Use Google PageSpeed Insights to benchmark your current speed."
        },
        {
          heading: "3. No Mobile Optimization",
          body: "Over 80% of Nigerian internet users browse on mobile. If your website isn't designed for mobile first, you're turning away the majority of your traffic. Test your site on multiple Android devices - the most common in Nigeria."
        },
        {
          heading: "4. Buried or Weak Calls to Action",
          body: "If your CTA is a small grey button at the bottom of the page that says 'Submit', you're asking visitors to make too much effort. Every page should have a clear, high-contrast CTA that tells the user exactly what to do next: 'Book Your Free Strategy Call', 'Get a Free Quote', 'WhatsApp Us Now'."
        },
        {
          heading: "5. Stock Photos That Destroy Trust",
          body: "Generic stock photos - especially the ones with American office workers - erode trust immediately. Use real photos of your team, your office, and your work. If you must use stock images, choose African-specific libraries like Nappy or Afrikimages."
        },
        {
          heading: "6. No Social Proof",
          body: "Testimonials, case studies, client logos, and review counts all signal that others have trusted you and benefited from doing so. Nigerian buyers are sceptical by default - social proof is your most powerful trust-builder."
        },
        {
          heading: "7. Confusing Navigation",
          body: "If visitors can't find what they need in 3 clicks, they leave. Simplify your navigation to 4–6 top-level items maximum. Every navigation item should be a clear destination, not a mystery."
        },
        {
          heading: "8. No Local SEO Setup",
          body: "Most Nigerian businesses miss out on 'near me' and city-based searches because they haven't set up Google Business Profile or included location-specific keywords on their site. This is free traffic you're leaving on the table."
        },
        {
          heading: "9. Form Fields That Ask for Too Much",
          body: "Long contact forms with 10+ fields kill conversions. Ask only for what you need to take the next step. Name, email, and a brief description of their need is usually enough to start a conversation."
        },
        {
          heading: "10. No Analytics or Tracking",
          body: "If you don't have Google Analytics and Google Search Console installed, you're flying blind. You can't improve what you don't measure. Both are free and take under an hour to set up properly."
        }
      ],
      conclusion:
        "Fixing even half of these issues can dramatically increase the number of leads your website generates. Start with the ones that apply to your site today. If you'd like a professional audit and rebuild, the Lumixus Studio team is ready - book a free strategy call to get started."
    }
  },
  "brand-identity-vs-logo-design-whats-the-difference": {
    title:
      "Brand Identity vs. Logo Design: What's the Difference and Why It Matters",
    description:
      "Most businesses spend money on a logo and call it branding. Here's why that's a costly mistake - and what a real brand identity actually includes.",
    category: "Branding",
    date: "March 10, 2026",
    readTime: "5 min read",
    author: "Lumixus Studio",
    authorRole: "B2B Digital Marketing Agency",
    content: {
      intro:
        "Ask most business owners what 'branding' means and they'll point to their logo. While a logo is part of your brand, it's just one piece of a much larger system. Understanding the difference between a logo and a brand identity can save you thousands and dramatically improve how prospects perceive your business.",
      sections: [
        {
          heading: "What Is a Logo?",
          body: "A logo is a mark - a visual symbol that represents your business. It might be a wordmark (your business name in a custom typeface), a pictorial mark (a symbol or icon), or a combination of both. A logo alone tells a viewer little beyond the name of your business."
        },
        {
          heading: "What Is a Brand Identity?",
          body: "Brand identity is the complete visual and verbal system that communicates who you are, what you stand for, and how you're different. It includes: your logo (all variations), your colour palette, typography system, imagery style, iconography, tone of voice, and brand guidelines that define how all of these are used consistently across every touchpoint."
        },
        {
          heading: "Why the Distinction Matters for Nigerian Businesses",
          body: "In a market where trust is hard-won, visual consistency builds credibility. When your logo, website, social media posts, business cards, and proposals all look cohesive and intentional, prospects perceive you as more established and reliable - even if you're a young business. Inconsistency, on the other hand, signals disorganisation."
        },
        {
          heading: "What a Strong Brand Identity Delivers",
          body: "Recognition: prospects remember you after a single interaction. Trust: consistent visuals signal professionalism. Differentiation: you look distinct in a sea of generic competitors. Efficiency: your team can produce marketing materials faster when guidelines exist. Premium positioning: a polished brand commands higher prices."
        },
        {
          heading: "The Cost of Getting It Wrong",
          body: "Businesses that invest only in a cheap logo often find themselves rebranding within 2–3 years as the limitations become apparent. The real cost isn't just money - it's the brand equity and recognition you have to rebuild from scratch. Doing it right the first time is almost always cheaper."
        }
      ],
      conclusion:
        "If your business is ready to build a brand that commands trust and premium prices, start with a brand identity system - not just a logo. The Lumixus Studio branding service delivers a complete visual identity that positions you as the authority in your market. Book a free strategy call to discuss your brand."
    }
  },
  "how-to-automate-your-business-operations-nigeria": {
    title:
      "How to Automate Your Business Operations in Nigeria Without a Tech Team",
    description:
      "CRM setup, email sequences, WhatsApp automation - discover the tools and workflows that let Nigerian businesses run 24/7 without manual follow-ups.",
    category: "Automation",
    date: "March 15, 2026",
    readTime: "10 min read",
    author: "Lumixus Studio",
    authorRole: "B2B Digital Marketing Agency",
    content: {
      intro:
        "Business owners who want to scale in Nigeria face a common trap: as the business grows, so does the manual workload. Follow-ups get missed, invoices are delayed, leads fall through the cracks, and the founder becomes the bottleneck. Automation is the solution - and it's more accessible than most people think, even without a dedicated tech team.",
      sections: [
        {
          heading: "Start With a CRM: The Foundation of Automation",
          body: "A Customer Relationship Management system (CRM) is where your contacts, deals, and communication history live. Without one, everything is in your head, your WhatsApp, and scattered spreadsheets. Tools like HubSpot (free tier available), Zoho CRM, or Pipedrive are excellent starting points. Set up a simple pipeline: Lead → Contacted → Proposal Sent → Won/Lost."
        },
        {
          heading: "Automate Your Lead Follow-Up Sequences",
          body: "The single biggest revenue leak in most Nigerian businesses is inconsistent follow-up. When a lead submits your contact form or sends a WhatsApp message, they should automatically receive a response within minutes - not days. Tools like Mailchimp, Brevo (formerly Sendinblue), or ActiveCampaign let you send automated email sequences triggered by specific actions. Set up a 5-email nurture sequence for every new lead."
        },
        {
          heading: "WhatsApp Business API for Automated Customer Communication",
          body: "WhatsApp is the dominant communication channel in Nigeria. The WhatsApp Business API (accessible through providers like Twilio, Wati, or Interakt) lets you send automated welcome messages, appointment reminders, order confirmations, and follow-ups at scale. This keeps your business responsive even when you're unavailable."
        },
        {
          heading: "Automate Your Invoicing and Payments",
          body: "Use tools like Wave (free), QuickBooks, or FreshBooks to automate invoice creation and payment reminders. Connect these to a Nigerian payment gateway like Paystack or Flutterwave so clients can pay immediately upon receiving the invoice. This alone typically cuts payment collection time in half."
        },
        {
          heading: "Appointment Booking Without the Back-and-Forth",
          body: "Eliminate the WhatsApp ping-pong of scheduling calls by using a booking tool like Calendly or Cal.com. Share your booking link and prospects choose a time that works for both parties automatically. At Lumixus Studio, we use Cal.com for all discovery calls - it saves hours every week."
        },
        {
          heading: "Use Zapier or Make to Connect Your Tools",
          body: "Once you have your core tools in place, use Zapier or Make (formerly Integromat) to connect them without writing a single line of code. Example workflow: 'When someone fills my Google Form → Add them to my CRM → Send a welcome email → Schedule a follow-up task in 3 days.' These multi-step automations run 24/7 without your involvement."
        },
        {
          heading: "AI Chatbot for Website Lead Capture",
          body: "An AI chatbot on your website can qualify leads, answer FAQs, and collect contact information even at 2am on a Sunday. Tools like Tidio, Intercom, or Chatbase integrate with your site in minutes and can significantly increase the number of leads your website captures."
        }
      ],
      conclusion:
        "You don't need a technical co-founder or an in-house dev team to automate your business. Start with one tool - a CRM or a booking link - and build from there. If you'd like Lumixus Studio to design and implement a complete automation system for your business, book a free strategy call today."
    }
  },
  "digital-marketing-agency-nigeria-complete-guide": {
    title:
      "How to Choose a Digital Marketing Agency in Nigeria: The Complete Guide",
    description:
      "Not all agencies are equal. This guide tells you exactly what to look for, what questions to ask, and what red flags to avoid when hiring a digital marketing agency in Nigeria.",
    category: "Digital Marketing",
    date: "March 18, 2026",
    readTime: "9 min read",
    author: "Lumixus Studio",
    authorRole: "B2B Digital Marketing Agency",
    content: {
      intro:
        "The Nigerian digital marketing industry has grown rapidly - and so has the number of agencies claiming to deliver results. Choosing the wrong one can cost you time, money, and momentum. This guide gives you a clear framework for evaluating and selecting the right agency for your business.",
      sections: [
        {
          heading: "Define What 'Results' Mean for Your Business",
          body: "Before approaching any agency, clarify your goal. Are you trying to generate leads? Increase brand awareness? Drive e-commerce sales? Improve your website's search ranking? Different goals require different strategies, and a good agency will ask this question upfront. If they don't, that's your first red flag."
        },
        {
          heading: "Look for Industry-Specific Experience",
          body: "A general marketing agency may not understand the nuances of your industry. If you're in real estate, fintech, FMCG, or professional services, look for an agency with case studies in your sector. The strategies that work for an e-commerce brand are different from those that work for a B2B SaaS company."
        },
        {
          heading: "Evaluate Their Own Digital Presence",
          body: "An agency that can't market itself well is unlikely to market you well. Check their website (is it fast, well-designed, and convincing?), their social media (do they post consistently and with clear expertise?), and their Google search ranking (do they appear when you search for their service in their city?)."
        },
        {
          heading: "Ask for Specific Case Studies and Metrics",
          body: "Any credible agency should be able to show you documented results: 'We increased organic traffic by 140% for a Lagos real estate firm in 6 months' or 'Our web redesign for a logistics company increased qualified leads by 3x.' Vague claims like 'We grow brands' are not evidence."
        },
        {
          heading: "Understand Their Reporting Process",
          body: "You should receive regular reports showing clear metrics tied to your goals. Ask: How often do you report? What metrics do you track? How do you attribute results to specific activities? Monthly reporting with defined KPIs is the minimum expectation."
        },
        {
          heading: "Red Flags to Watch For",
          body: "Guaranteed number-one Google rankings (no one can guarantee this). No clear contract or scope of work. Reluctance to explain their process. No fixed point of contact. Pressure to sign quickly. Prices dramatically below market rate (usually signals poor quality or offshore outsourcing)."
        },
        {
          heading: "What to Expect to Pay",
          body: "Quality digital marketing in Nigeria typically costs between ₦150,000 and ₦800,000+ per month depending on the scope. Agencies offering comprehensive SEO, content, social media, and ads for ₦50,000/month are almost certainly cutting corners. You get what you pay for - and in marketing, the cost of poor execution is missed revenue."
        }
      ],
      conclusion:
        "The right agency becomes a genuine growth partner - one that understands your business as well as you do and brings both strategy and execution to the table. If you're looking for an agency that works specifically with B2B businesses and is transparent about what it takes to grow, we'd love to talk. Book a free strategy call with Lumixus Studio today."
    }
  }
};

// ─── Types ────────────────────────────────────────────────────────────────────
interface PageProps {
  params: { slug: string };
}

// ─── Metadata generation ──────────────────────────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = posts[params.slug];
  if (!post) return { title: "Post Not Found" };

  const url = `https://lumixus.studio/blog/${params.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: "Lumixus Studio",
      url: "https://lumixus.studio"
    },
    publisher: {
      "@type": "Organization",
      name: "Lumixus Studio",
      logo: {
        "@type": "ImageObject",
        url: "https://lumixus.studio/logo-1.png"
      }
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
    inLanguage: "en"
  };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: ["Lumixus Studio"],
      section: post.category
    },
    other: {
      "application/ld+json": JSON.stringify(articleSchema)
    }
  };
}

// ─── Static params ────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

// ─── Page component ───────────────────────────────────────────────────────────
export default function BlogPostPage({ params }: PageProps) {
  const post = posts[params?.slug];
  console.log("Slug", post)
  // if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: "Lumixus Studio",
      url: "https://lumixus.studio"
    },
    publisher: {
      "@type": "Organization",
      name: "Lumixus Studio",
      logo: { "@type": "ImageObject", url: "https://lumixus.studio/logo-1.png" }
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lumixus.studio/blog/${params.slug}`
    },
    articleSection: post.category,
    inLanguage: "en"
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-dark overflow-hidden" style={{ minHeight: "50vh" }}>
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10 pt-36 pb-20">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
            >
              <MdArrowBack />
              Back to Blog
            </Link>

            <span className="inline-flex text-xs font-semibold text-primary bg-primary/15 border border-primary/30 px-3 py-1 rounded-full mb-6">
              {post.category}
            </span>

            <h1
              className="font-bold text-white leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.025em" }}
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-white/40 text-sm">
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Article body */}
      <section className="py-16">
        <Container>
          <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-text prose-p:text-muted prose-p:leading-relaxed">
            {/* Intro */}
            <p className="text-lg text-muted leading-relaxed mb-10 font-medium">
              {post.content.intro}
            </p>

            {/* Sections */}
            {post.content.sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-xl font-bold text-text mb-4">
                  {section.heading}
                </h2>
                <p className="text-[15px] text-muted leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}

            {/* Conclusion */}
            <div className="mt-12 p-7 bg-surface border border-border rounded-2xl">
              <p className="text-[15px] text-muted leading-relaxed">
                <strong className="text-text">In summary: </strong>
                {post.content.conclusion}
              </p>
            </div>
          </article>

          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-16 p-8 rounded-2xl bg-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
                Ready to take action?
              </p>
              <h3 className="font-bold text-white text-2xl mb-3 tracking-tight">
                Let's build your growth system
              </h3>
              <p className="text-white/40 text-sm mb-6 leading-relaxed max-w-md">
                Stop reading about growth and start experiencing it. Book a free
                30-minute strategy call with the Lumixus Studio team.
              </p>
              <Link
                href="https://cal.com/lumixus-studio/30min"
                className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-colors shadow-lg shadow-primary/30"
              >
                Book Your Free Strategy Call
                <MdArrowOutward className="text-base" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
