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
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from "./lib/site";
import { faqs } from "./lib/faqs";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Lumixus Studio"
  },
  description: SITE_DESCRIPTION,
  applicationName: "Lumixus Studio",
  keywords: [
    "digital growth systems",
    "B2B lead generation agency",
    "B2B service business marketing",
    "B2B client acquisition",
    "B2B website design",
    "lead generation for service businesses",
    "B2B marketing agency",
    "conversion rate optimization",
    "marketing automation",
    "Lumixus Studio",
    "Lumixus"
  ],
  authors: [{ name: "Lumixus Studio", url: SITE_URL }],
  creator: "Lumixus Studio",
  publisher: "Lumixus Studio",
  category: "B2B Marketing Agency",
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Lumixus Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Lumixus Studio - Digital growth systems for B2B service businesses"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@lumixus_studio",
    creator: "@lumixus_studio",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`]
  },
  verification: {
    google: "88ZqRCGFRf_I2IGEUIxUaF0Wes8tGZq59uGbTjImxAo"
  },
  alternates: {
    canonical: SITE_URL
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
    "@id": `${SITE_URL}/#organization`,
    name: "Lumixus Studio",
    alternateName: "Lumixus",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo-1.png`,
      width: 300,
      height: 60
    },
    description:
      SITE_DESCRIPTION,
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
          name: "Pipeline Audit",
          description: "A structured review of a business's positioning, website, content and enquiry handling, with a prioritised action plan."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Client Acquisition System",
          description: "Messaging, a conversion-focused website, case-study pages, qualifying enquiry forms, CRM, tracking and follow-up automation."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pipeline Growth Retainer",
          description: "Ongoing authority content, SEO, email nurture and monthly pipeline reporting."
        }
      }
    ],
    sameAs: [
      "https://www.instagram.com/lumixus.studio/",
      "https://www.facebook.com/profile.php?id=61563258786419"
    ]
  };

  // ── Schema: WebSite ───────────────────────────────────────────────────────
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Lumixus Studio",
    description: "Digital growth systems for B2B service businesses",
    publisher: {
      "@id": `${SITE_URL}/#organization`
    },
    inLanguage: "en"
  };

  // ── Schema: FAQPage ───────────────────────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
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
