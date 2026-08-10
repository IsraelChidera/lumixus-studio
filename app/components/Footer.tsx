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
        theme: "dark",
        cssVarsPerTheme: {
          dark: { "cal-brand": "#3600ff" },
          light: {}
        },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <footer className="bg-white border-t border-border">
      {/* Cal.com embed */}
      <div className="border-b border-border py-10 bg-surface">
        <Container>
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-2">
              Prefer To Talk It Through?
            </p>
            <h3 className="text-2xl font-bold text-text tracking-tight">
              Book a time that works for you
            </h3>
          </div>
          <Cal
            namespace="30min"
            calLink="lumixus-studio/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "dark" }}
          />
        </Container>
      </div>

      {/* Footer content */}
      <Container className="py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image src={logo} alt="Lumixus Studio" className="h-7 w-auto mb-4" />
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              We build client acquisition systems for B2B service businesses — positioning, web design, content and follow-up, engineered to turn visitors into sales conversations.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Link
                href="mailto:lumixusstudio@gmail.com"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors"
              >
                <MdMarkEmailRead className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.instagram.com/lumixus_studio/"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61563258786419"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors"
              >
                <FaFacebook className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-text mb-5">
              Navigation
            </p>
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
            <p className="text-xs font-semibold tracking-widest uppercase text-text mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {[
                "Strategy & Positioning",
                "Brand Identity",
                "Web & Digital",
                "Content & Storytelling",
                "Advertising & Media",
                "Growth & Optimization"
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm text-muted">{s}</span>
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
