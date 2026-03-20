import type { Metadata } from "next";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title:
    "Lumixus Studio | B2B Web Design, Branding & Digital Marketing Agency Nigeria",
  description:
    "Lumixus Studio helps B2B businesses in Lagos, Nigeria stop losing leads and start closing deals. We build high-converting websites, brand identities, automation systems, and growth strategies. Book a free strategy call today.",
  alternates: {
    canonical: "https://lumixus.studio"
  },
  openGraph: {
    title:
      "Lumixus Studio | Stop Losing Leads. Start Closing Deals.",
    description:
      "High-converting websites, brand identities & marketing systems for B2B businesses in Nigeria. 20+ businesses served. 4-week avg. launch time. 5★ satisfaction. Book your free strategy call.",
    url: "https://lumixus.studio",
    type: "website"
  }
};
import StartProject from "./components/StartProject";
import PainPoints from "./components/PainPoints";
import Services from "./components/Services";
import Works from "./components/Works";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import BookACall from "./components/BookACall";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      {/* 1. Hero — dark, full-screen, conversion-first */}
      <Hero />

      {/* 2. Social Proof — marquee of client names */}
      <StartProject />

      {/* 3. Pain Points — problem agitation */}
      <PainPoints />

      {/* 4. Services — numbered premium cards */}
      <Services />

      {/* 5. Portfolio — hover-overlay carousel */}
      <Works />

      {/* 6. Process — 4-step connected timeline */}
      <Process />

      {/* 7. Pricing — tiered packages */}
      <Pricing />

      {/* 8. Testimonials — dark card grid */}
      <Testimonial />

      {/* 9. FAQ — minimal accordion */}
      <Faq />

      {/* 10. Contact Form — split layout */}
      <BookACall />

      {/* 11. Final CTA — dark full-width section */}
      <Contact />
    </main>
  );
}
