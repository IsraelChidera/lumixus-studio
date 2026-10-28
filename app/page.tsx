import type { Metadata } from "next";
import Hero from "./components/Hero";
import StartProject from "./components/StartProject";
import Problems from "./components/PainPoints";
import Services from "./components/Services";
import Works from "./components/Works";
import Process from "./components/Process";
import WhyLumixus from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Contact from "./components/BookACall";
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from "./lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
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

      {/* 3. Problems - the pain points our buyers recognise */}
      <Problems />

      {/* 4. Services - the three productized offers */}
      <Services />

      {/* 5. Portfolio - large image-led tiles */}
      <Works />

      {/* 6. Process - connected editorial story */}
      <Process />

      {/* 7. Why Lumixus - differentiation */}
      <WhyLumixus />

      {/* 8. Testimonials - single featured quote */}
      <Testimonial />

      {/* 9. FAQ - plain editorial list */}
      <Faq />

      {/* 10. Contact - dramatic CTA + form, dark full-width */}
      <Contact />
    </main>
  );
}
