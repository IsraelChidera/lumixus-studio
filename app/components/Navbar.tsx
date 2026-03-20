"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
              className="h-7 w-auto"
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
          <button
            className={`xl:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-text" : "text-white"
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FaBarsStaggered className="w-5 h-5" />
          </button>
        </Container>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          <Container className="pt-6 pb-4 flex items-center justify-between">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src={logoBlue} alt="Lumixus Studio" className="h-7 w-auto" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-text hover:bg-surface transition-colors"
              aria-label="Close menu"
            >
              <FaXmark className="w-5 h-5" />
            </button>
          </Container>

          <Container className="flex-1 flex flex-col py-8">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-4 text-lg font-medium text-text border-b border-border hover:text-primary transition-colors"
                  >
                    {link.label}
                    <MdArrowOutward className="text-muted text-base" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="https://cal.com/lumixus-studio/30min"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-medium py-4 rounded-full text-base"
              >
                Book a Free Call
                <MdArrowOutward />
              </Link>
            </div>

            <div className="mt-auto pt-8 border-t border-border">
              <p className="text-sm text-muted mb-4">
                B2B digital growth partner for ambitious businesses.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.instagram.com/lumixus_studio/"
                  className="p-2.5 rounded-full bg-surface hover:bg-primary/10 text-text hover:text-primary transition-colors"
                >
                  <FaInstagram className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61563258786419"
                  className="p-2.5 rounded-full bg-surface hover:bg-primary/10 text-text hover:text-primary transition-colors"
                >
                  <FaFacebook className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Navbar;
