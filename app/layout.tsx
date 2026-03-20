import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import FloatingButton from "./components/FloatingButton";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lumixus.studio"),
  title: {
    default:
      "Lumixus Studio | B2B Web Design, Branding & Digital Marketing Agency Nigeria",
    template: "%s | Lumixus Studio"
  },
  description:
    "Lumixus Studio is a B2B digital marketing agency in Lagos, Nigeria. We build high-converting websites, brand identities, and marketing automation systems that generate qualified leads and grow revenue for businesses.",
  applicationName: "Lumixus Studio",
  keywords: [
    "B2B digital marketing agency",
    "web design agency Nigeria",
    "branding agency Lagos",
    "web development company Nigeria",
    "digital marketing Lagos",
    "B2B marketing agency",
    "business website design",
    "SEO agency Nigeria",
    "conversion rate optimization",
    "business automation Nigeria",
    "social media marketing Nigeria",
    "growth strategy agency",
    "high converting website",
    "digital agency Lagos",
    "marketing agency Nigeria",
    "brand identity Lagos",
    "website development B2B",
    "Lumixus Studio",
    "Lumixus"
  ],
  authors: [{ name: "Lumixus Studio", url: "https://lumixus.studio" }],
  creator: "Lumixus Studio",
  publisher: "Lumixus Studio",
  category: "Digital Marketing Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title:
      "Lumixus Studio | B2B Web Design, Branding & Digital Marketing Agency",
    description:
      "We build high-converting websites, brand identities, and marketing systems for B2B businesses in Nigeria and globally. Start with a free strategy call.",
    url: "https://lumixus.studio",
    siteName: "Lumixus Studio",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://lumixus.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumixus Studio — B2B Digital Marketing Agency in Lagos, Nigeria"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@lumixus_studio",
    creator: "@lumixus_studio",
    title: "Lumixus Studio | B2B Digital Agency Nigeria",
    description:
      "High-converting websites, branding & marketing systems for B2B businesses. Based in Lagos, serving clients globally.",
    images: ["https://lumixus.studio/og-image.png"]
  },
  verification: {
    google: "88ZqRCGFRf_I2IGEUIxUaF0Wes8tGZq59uGbTjImxAo"
  },
  alternates: {
    canonical: "https://lumixus.studio"
  }
};

const myFont = localFont({
  src: [
    {
      path: "./fonts/GraphikExtralight.otf",
      weight: "200",
      style: "normal"
    },
    {
      path: "./fonts/GraphikLight.otf",
      weight: "300",
      style: "normal"
    },
    {
      path: "./fonts/GraphikRegular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/GraphikMedium.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "./fonts/GraphikBold.otf",
      weight: "600",
      style: "normal"
    },
    {
      path: "./fonts/GraphikBlack.otf",
      weight: "700",
      style: "normal"
    }
  ]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // ── Schema: Organization ──────────────────────────────────────────────────
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://lumixus.studio/#organization",
    name: "Lumixus Studio",
    alternateName: "Lumixus",
    url: "https://lumixus.studio",
    logo: {
      "@type": "ImageObject",
      url: "https://lumixus.studio/logo-1.png",
      width: 300,
      height: 60
    },
    description:
      "Lumixus Studio is a B2B digital marketing agency in Lagos, Nigeria specializing in web design, branding, business automation, and growth strategy.",
    foundingDate: "2022",
    email: "lumixusstudio@gmail.com",
    telephone: "+2348146265074",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      addressCountry: "NG"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2348146265074",
      contactType: "customer service",
      areaServed: ["NG", "US", "GB", "CA", "AU"],
      availableLanguage: "en"
    },
    sameAs: [
      "https://www.instagram.com/lumixus_studio/",
      "https://www.facebook.com/lumixusstudio"
    ]
  };

  // ── Schema: LocalBusiness ─────────────────────────────────────────────────
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://lumixus.studio/#localbusiness",
    name: "Lumixus Studio",
    description:
      "B2B digital marketing agency in Lagos, Nigeria. We design high-converting websites, build brand identities, automate business processes, and create growth strategies for B2B companies.",
    url: "https://lumixus.studio",
    telephone: "+2348146265074",
    email: "lumixusstudio@gmail.com",
    image: "https://lumixus.studio/og-image.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      addressCountry: "NG"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.5244",
      longitude: "3.3792"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    },
    areaServed: [
      { "@type": "City", "name": "Lagos" },
      { "@type": "State", "name": "Lagos State" },
      { "@type": "Country", "name": "Nigeria" }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing & Web Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Design & Development",
            description:
              "High-performing, pixel-perfect websites engineered to convert visitors into qualified leads and paying clients."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Identity Design",
            description:
              "Complete brand identity systems including logo, color palette, typography, and visual language that communicate trust and authority."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Automation",
            description:
              "Intelligent automation systems using CRM, email workflows, and AI tools to streamline operations and scale without adding headcount."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Growth Strategy",
            description:
              "Data-driven strategies for market positioning, lead generation, and revenue growth tailored to B2B businesses."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media & Content Marketing",
            description:
              "Strategic content creation, social media management, and paid ad campaigns that build authority and drive inbound leads."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Conversion Rate Optimization",
            description:
              "Systematic analysis and improvement of your website's ability to convert traffic into revenue through UX improvements and A/B testing."
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "20",
      bestRating: "5",
      worstRating: "1"
    },
    sameAs: ["https://www.instagram.com/lumixus_studio/"]
  };

  // ── Schema: WebSite ───────────────────────────────────────────────────────
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://lumixus.studio/#website",
    url: "https://lumixus.studio",
    name: "Lumixus Studio",
    description:
      "B2B Web Design, Branding & Digital Marketing Agency in Lagos, Nigeria",
    publisher: {
      "@id": "https://lumixus.studio/#organization"
    },
    inLanguage: "en"
  };

  // ── Schema: FAQPage ───────────────────────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Lumixus Studio offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lumixus Studio offers web design & development, brand identity, business automation, growth strategy, social media management, and conversion rate optimization — all focused on B2B businesses in Nigeria and globally."
        }
      },
      {
        "@type": "Question",
        name: "How long does it take to build a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard website typically takes 2–4 weeks. More advanced projects (e-commerce, automation integrations) may take 4–8 weeks. We prioritize quality without cutting corners."
        }
      },
      {
        "@type": "Question",
        name: "Do you offer branding alongside web design?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our Starter Package includes brand identity basics (logo, colors, typography), while higher-tier packages include full brand strategy, social media templates, and marketing systems."
        }
      },
      {
        "@type": "Question",
        name: "Do you offer payment plans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we offer flexible payment options including installments for higher-tier packages. Book a free strategy call and we'll structure a plan that works for your budget."
        }
      },
      {
        "@type": "Question",
        name: "Will my website be mobile-friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "100%. Every website we build is fully responsive and rigorously tested across desktop, tablet, and mobile to ensure a seamless experience for every visitor."
        }
      },
      {
        "@type": "Question",
        name: "Can you handle social media and content marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our Growth and Scale packages include social media strategy, content creation, and paid ad management to drive qualified leads from every channel."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide ongoing maintenance and support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We offer monthly maintenance plans covering bug fixes, security updates, performance monitoring, and content updates to keep your site running optimally."
        }
      },
      {
        "@type": "Question",
        name: "How do I get started with Lumixus Studio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply book a free intro call on our website. We'll talk through your goals, suggest the right package, and outline the exact steps to get your project moving within 24 hours."
        }
      }
    ]
  };

  return (
    <html lang="en" className={myFont.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>

      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        <FloatingButton />
        <CustomCursor />

        <script
          src="//code.tidio.co/eags5ma6uvurxlw7que0lrhkgybpmcfl.js"
          async
        ></script>

        {/* Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />

        {/* Structured Data — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />

        {/* Structured Data — WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Structured Data — FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
