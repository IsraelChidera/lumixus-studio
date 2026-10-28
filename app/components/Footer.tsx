"use client";

import Image from "next/image";
import React from "react";
import Container from "@/app/components/Elements/Container";
import logo from "@/public/logo-blue.png";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#3600ff" },
          dark: { "cal-brand": "#3600ff" }
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <footer className="bg-white border-t border-border">
      {/* Cal.com embed */}
      <div className="border-b border-border py-20 sm:py-24 bg-surface">
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-10 lg:gap-16 items-start">
            <div>
              <h2
                className="font-bold text-text"
                style={{ fontSize: "clamp(30px, 3.6vw, 48px)", letterSpacing: "-0.035em", lineHeight: 1.05 }}
              >
                Prefer to talk it through?
              </h2>
              <p className="mt-5 text-muted text-[16px] leading-relaxed max-w-sm">
                Pick a time for a 30-minute pipeline review. We&apos;ll look at how you
                win clients today and where the quickest gains are.
              </p>
            </div>
            <div className="rounded-[24px] bg-white ring-1 ring-border overflow-hidden min-h-[420px]">
              <Cal
                namespace="30min"
                calLink="lumixus-studio/30min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: "month_view", theme: "light" }}
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Footer content */}
      <Container className="py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image src={logo} alt="Lumixus Studio" className="h-7 w-auto mb-4" />
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              We build digital growth systems for B2B service businesses: positioning, website, content, SEO and follow-up that turn your digital presence into a consistent source of leads and customers.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Link
                href="mailto:lumixusstudio@gmail.com"
                aria-label="Email Lumixus Studio"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors"
              >
                <MdMarkEmailRead className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.instagram.com/lumixus.studio/"
                aria-label="Lumixus Studio on Instagram"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61563258786419"
                aria-label="Lumixus Studio on Facebook"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors"
              >
                <FaFacebook className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold text-text mb-5">Navigation</p>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/#services" },
                { label: "Work", href: "/#works" },
                { label: "Process", href: "/#process" },
                { label: "Journal", href: "/resources" }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-text mb-5">Services</p>
            <ul className="space-y-3">
              {[
                "Pipeline Audit",
                "Client Acquisition System",
                "Pipeline Growth Retainer"
              ].map((s) => (
                <li key={s}>
                  <Link href="/#services" className="text-sm text-muted hover:text-primary transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Lumixus Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/resources" className="text-xs text-muted hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="mailto:lumixusstudio@gmail.com" className="text-xs text-muted hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
