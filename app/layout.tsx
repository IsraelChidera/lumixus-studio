import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import { MotionConfig } from "motion/react";
import FloatingButton from "./components/FloatingButton";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lumixus.studio"),
  title: {
    default: "Lumixus Studio | Marketing, Branding & Web Design Agency",
    template: "%s | Lumixus Studio"
  },
  description:
    "Lumixus Studio is a full-service marketing agency. We build brand identities, websites, content and campaigns for ambitious companies who want to grow, not just look busy.",
  applicationName: "Lumixus Studio",
  keywords: [
    "marketing agency",
    "branding agency",
    "brand identity design",
    "web design agency",
    "digital marketing agency",
    "creative agency",
    "content marketing agency",
    "advertising agency",
    "brand strategy",
    "website design and development",
    "growth marketing",
    "full-service marketing agency",
    "Lumixus Studio",
    "Lumixus"
  ],
  authors: [{ name: "Lumixus Studio", url: "https://lumixus.studio" }],
  creator: "Lumixus Studio",
  publisher: "Lumixus Studio",
  category: "Marketing Agency",
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
    title: "Lumixus Studio | Marketing, Branding & Web Design Agency",
    description:
      "Strategy, branding, web design, content and advertising for ambitious brands. Good marketing is good business.",
    url: "https://lumixus.studio",
    siteName: "Lumixus Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lumixus.studio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumixus Studio - Marketing, Branding & Web Design Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@lumixus_studio",
    creator: "@lumixus_studio",
    title: "Lumixus Studio | Marketing, Branding & Web Design Agency",
    description:
      "Strategy, branding, web design, content and advertising for ambitious brands. Good marketing is good business.",
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
  ],
  variable: "--font-graphik"
});

const serifFont = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap"
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
      "Lumixus Studio is a full-service marketing agency specializing in brand strategy, identity design, web design and development, content, and advertising.",
    foundingDate: "2022",
    email: "lumixusstudio@gmail.com",
    contactPoint: {
      "@type": "ContactPoint",
      email: "lumixusstudio@gmail.com",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: "en"
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strategy & Positioning",
          description: "Brand strategy and market positioning that gives ambitious companies a clear, differentiated point of view."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Identity",
          description: "Logo, visual identity systems, and brand guidelines built for long-term recognition."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web & Digital Experience",
          description: "Websites and digital products designed and engineered to represent the brand and convert visitors."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content & Storytelling",
          description: "Content strategy, copy, and creative that gives brands a consistent, human voice."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Advertising & Media",
          description: "Paid media strategy and campaign creative across search, social, and display."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Growth & Optimization",
          description: "Ongoing conversion and performance work that compounds results over time."
        }
      }
    ],
    sameAs: [
      "https://www.instagram.com/lumixus_studio/",
      "https://www.facebook.com/lumixusstudio"
    ]
  };

  // ── Schema: WebSite ───────────────────────────────────────────────────────
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://lumixus.studio/#website",
    url: "https://lumixus.studio",
    name: "Lumixus Studio",
    description: "Marketing, Branding & Web Design Agency",
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
        name: "We already have a website. Can you still help us?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, and that is often where we add the most value. A lot of the sites we look at were built to look good, not to work. We run a straight audit, tell you what is actually holding it back, and fix it."
        }
      },
      {
        "@type": "Question",
        name: "What kind of brands do you work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ambitious ones, across a wide range of industries. What matters more than sector is whether a company is serious about growing the brand, not just the traffic."
        }
      },
      {
        "@type": "Question",
        name: "How is this different from hiring a web design agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A web agency builds a website. We build the whole picture: positioning, brand identity, the site itself, content, and the campaigns that bring people to it."
        }
      },
      {
        "@type": "Question",
        name: "How long does a project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depends on scope. A brand identity and website usually lands in four to eight weeks. Ongoing marketing work runs as a partnership, reviewed every month."
        }
      },
      {
        "@type": "Question",
        name: "Do you work on one-off projects or only long-term partnerships?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both. Some brands need a focused project such as a new identity or a new site. Others want us running point on marketing month to month."
        }
      },
      {
        "@type": "Question",
        name: "What does the first conversation involve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A short, honest call about where the brand is and where it needs to go. No slideshow, no pressure. Just a clear sense of what is working, what isn't, and whether we are the right fit."
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${myFont.variable} ${myFont.className} ${serifFont.variable}`}
    >
      <head></head>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MJN0GECS0H"></script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MJN0GECS0H');
        `}
      </Script>

      <body className="relative">
        <MotionConfig reducedMotion="user">
          <Navbar />
          {children}
          <Footer />
          <FloatingButton />
          <CustomCursor />
        </MotionConfig>

        <script
          src="//code.tidio.co/eags5ma6uvurxlw7que0lrhkgybpmcfl.js"
          async
        ></script>

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Structured Data - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
