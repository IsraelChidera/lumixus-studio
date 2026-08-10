import type { Metadata } from "next";
import Hero from "./components/Hero";
import StartProject from "./components/StartProject";
import Philosophy from "./components/PainPoints";
import Services from "./components/Services";
import Works from "./components/Works";
import Process from "./components/Process";
import HowWeWork from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Contact from "./components/BookACall";

export const metadata: Metadata = {
  title: "Lumixus Studio | B2B Client Acquisition Systems",
  description:
    "We build client acquisition systems for B2B service businesses — positioning, web design, content and follow-up engineered to generate qualified sales conversations.",
  alternates: {
    canonical: "https://lumixus.studio"
  },
  openGraph: {
    title: "Lumixus Studio | B2B Client Acquisition Systems",
    description:
      "We help B2B service businesses turn their digital presence into a predictable source of qualified sales conversations. Good marketing is good business.",
    url: "https://lumixus.studio",
    type: "website"
  }
};

export default function Home() {
  return (
    <main>
      {/* 1. Hero - dark, editorial, typography-led */}
      <Hero />

      {/* 2. Social Proof - marquee of client names */}
      <StartProject />

      {/* 3. Philosophy - short editorial manifesto */}
      <Philosophy />

      {/* 4. Services - interactive editorial list */}
      <Services />

      {/* 5. Portfolio - large image-led tiles */}
      <Works />

      {/* 6. Process - connected editorial story */}
      <Process />

      {/* 7. How We Work - project vs partnership, no pricing table */}
      <HowWeWork />

      {/* 8. Testimonials - single featured quote */}
      <Testimonial />

      {/* 9. FAQ - plain editorial list */}
      <Faq />

      {/* 10. Contact - dramatic CTA + form, dark full-width */}
      <Contact />
    </main>
  );
}
