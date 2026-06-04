"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Container from "@/app/components/Elements/Container";
import logo from "@/public/logo-white.png";
import logoBlue from "@/public/logo-blue.png";
import {
  FaBarsStaggered,
  FaFacebook,
  FaInstagram,
  FaXmark
} from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#works" },
  { label: "Process", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Resources", href: "/resources" }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <Container className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={scrolled ? logoBlue : logo}
              alt="Lumixus Studio"
              className="h-5 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-text/70 hover:text-primary"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="https://cal.com/lumixus-studio/30min"
            className="hidden xl:inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Book a Call
            <MdArrowOutward className="text-base" />
          </Link>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            className={`xl:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-text" : "text-white"
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FaBarsStaggered className="w-5 h-5" />
          </motion.button>
        </Container>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-dark/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-[61] w-full sm:max-w-sm bg-dark flex flex-col shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-white/[0.07]">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Image src={logo} alt="Lumixus Studio" className="h-7 w-auto" />
                </Link>
                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
                  aria-label="Close menu"
                >
                  <FaXmark className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <ul>
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ x: 32, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.08 + i * 0.055,
                        duration: 0.38,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center justify-between py-5 border-b border-white/[0.07]"
                      >
                        <span
                          className="font-semibold text-white/80 group-hover:text-white transition-colors tracking-[-0.02em]"
                          style={{ fontSize: "clamp(20px, 5vw, 24px)" }}
                        >
                          {link.label}
                        </span>
                        <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-200">
                          <MdArrowOutward className="text-white/50 text-sm group-hover:text-white transition-colors" />
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42, duration: 0.38, ease: "easeOut" }}
                  className="mt-8"
                >
                  <Link
                    href="https://cal.com/lumixus-studio/30min"
                    onClick={() => setMobileOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-semibold py-4 rounded-full text-base transition-colors"
                  >
                    Book a Free Call
                    <MdArrowOutward />
                  </Link>
                </motion.div>
              </nav>

              {/* Panel footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.35 }}
                className="px-6 pb-8 pt-5 border-t border-white/[0.07]"
              >
                <p className="text-[11px] text-white/30 tracking-[0.12em] uppercase font-medium mb-5">
                  B2B Growth Agency · Lagos · Global
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    href="https://www.instagram.com/lumixus_studio/"
                    className="p-2.5 rounded-full border border-white/15 text-white/40 hover:text-white hover:border-white/30 transition-colors"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61563258786419"
                    className="p-2.5 rounded-full border border-white/15 text-white/40 hover:text-white hover:border-white/30 transition-colors"
                  >
                    <FaFacebook className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
