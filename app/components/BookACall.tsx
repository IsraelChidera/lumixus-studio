"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Container from "@/app/components/Elements/Container";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required."),
  email: yup
    .string()
    .email("Invalid email address.")
    .required("Email is required."),
  phoneNumber: yup
    .string()
    .transform((val) => (val === "" ? undefined : val))
    .notRequired()
    .min(7, "Phone number looks too short")
    .max(16, "Phone number looks too long"),
  business: yup.string().required("Brand or business name is required."),
  message: yup.string().required("Tell us a little about what you need.")
});

const benefits = [
  "A reply within 24 hours, from a real person",
  "A short call to figure out if we're a fit",
  "No pitch decks, no pressure",
];

const inputClasses = (hasError: boolean) =>
  `w-full rounded-xl border px-4 py-3.5 text-sm text-white placeholder:text-white/30 bg-white/5 focus:bg-white/[0.08] transition-colors ${
    hasError ? "border-red-400/50" : "border-white/15"
  }`;

const BookACall = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const handleContactForm = async (data: any) => {
    setIsSubmitting(true);
    try {
      const GOOGLE_SHEET_URL = `https://script.google.com/macros/s/AKfycbwGn_TqgZJKXSYekTZJ8Ta1qCdy7XHFs277mXY9gY_TUP2SSMBAOc6rFDJEIhZ2xVAFVQ/exec`;
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: new Date().toLocaleString(),
          fullName: data.fullName,
          email: data.email,
          phoneNumber: data.phoneNumber || "N/A",
          businessName: data.business,
          description: data.message
        })
      });
      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-dark overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <Container className="relative z-10">
        {/* ── Headline ─────────────────────────────────────────────── */}
        <div className="flex items-center gap-4 mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/45">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Let&apos;s Talk
          </span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <h2
          className="font-bold text-white tracking-tight max-w-3xl mb-16"
          style={{ fontSize: "clamp(36px, 6vw, 76px)", letterSpacing: "-0.03em", lineHeight: 1.02 }}
        >
          Let&apos;s make your brand
          <br />
          <span className="font-serif italic font-normal text-primary">impossible to ignore.</span>
        </h2>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 gap-16 items-start"
        >
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <p className="text-white/45 text-[16px] leading-relaxed">
              Tell us a little about your brand and what you&apos;re trying to
              do. We read every message ourselves and reply within a day.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-5 h-5 rounded-full bg-primary/15 border border-primary/25 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 p-5 rounded-2xl bg-white/[0.04] border border-white/10">
              <p className="text-xs font-semibold tracking-wider uppercase text-white/50 mb-1">Prefer a quick call?</p>
              <a
                href="https://cal.com/lumixus-studio/30min"
                className="text-sm font-semibold text-white hover:text-primary transition-colors flex items-center gap-1"
              >
                Book directly on our calendar <MdArrowOutward />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div className="rounded-2xl bg-white/5 border border-white/10 p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Message received.</h3>
                <p className="text-sm text-white/45">We&apos;ll get back to you within a day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(handleContactForm)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="Full Name"
                      className={inputClasses(!!errors.fullName)}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="Email Address"
                      className={inputClasses(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      {...register("phoneNumber")}
                      placeholder="Phone Number (optional)"
                      className={inputClasses(!!errors.phoneNumber)}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      {...register("business")}
                      placeholder="Brand / Business Name"
                      className={inputClasses(!!errors.business)}
                    />
                    {errors.business && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.business.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <textarea
                    rows={5}
                    {...register("message")}
                    placeholder="What are you trying to do? A rebrand, a new site, ongoing marketing, tell us where you're stuck."
                    className={`${inputClasses(!!errors.message)} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1.5">{errors.message.message}</p>
                  )}
                </div>

                {submitError && <p className="text-red-400 text-sm">{submitError}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-secondary disabled:opacity-60 text-white font-semibold py-4 rounded-full text-[15px] transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <MdArrowOutward className="text-lg" />}
                </button>

                <p className="text-xs text-center text-white/30">
                  No spam, ever. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* ── Bottom rule + socials ──────────────────────────────── */}
        <div className="flex items-center gap-6 mt-20 pt-8 border-t border-white/8">
          <div className="flex-1" />
          <Link href="https://www.instagram.com/lumixus_studio/" className="text-white/45 hover:text-white transition-colors text-xs tracking-wide">
            Instagram
          </Link>
          <span className="text-white/10">·</span>
          <Link href="mailto:lumixusstudio@gmail.com" className="text-white/45 hover:text-white transition-colors text-xs tracking-wide">
            Email Us
          </Link>
          <span className="text-white/10">·</span>
          <Link href="https://www.facebook.com/profile.php?id=61563258786419" className="text-white/45 hover:text-white transition-colors text-xs tracking-wide">
            Facebook
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BookACall;
