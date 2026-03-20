import Hero from "./components/Hero";
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
