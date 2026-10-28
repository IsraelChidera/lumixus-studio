"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import * as yup from "yup";
import { Controller, useForm, type Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Container from "@/app/components/Elements/Container";
import Select from "@/app/components/Elements/Select";
import { BOOKING_URL } from "@/app/lib/site";
import {
  BUDGET_OPTIONS,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  type LeadResponse,
} from "@/app/lib/leads";

const schema = yup.object().shape({
  fullName: yup.string().trim().required("Full name is required."),
  email: yup.string().trim().email("Enter a valid email address.").required("Email is required."),
  phoneNumber: yup
    .string()
    .transform((val) => (val === "" ? undefined : val))
    .notRequired()
    .min(7, "Phone number looks too short.")
    .max(20, "Phone number looks too long."),
  business: yup.string().trim().required("Company name is required."),
  website: yup.string().notRequired(),
  service: yup.string().notRequired(),
  budget: yup.string().notRequired(),
  timeline: yup.string().notRequired(),
  message: yup
    .string()
    .trim()
    .min(10, "Tell us a little more about what you need.")
    .required("Tell us a little about what you need."),
});

type FormValues = {
  fullName: string;
  email: string;
  phoneNumber?: string | null;
  business: string;
  website?: string | null;
  service?: string | null;
  budget?: string | null;
  timeline?: string | null;
  message: string;
};
type FieldName = keyof FormValues;

const benefits = [
  "A personal reply within one business day",
  "A short call to see if we're a fit",
  "No pitch decks, no pressure",
];

const inputClasses = (hasError: boolean) =>
  `w-full rounded-xl border px-4 py-3.5 text-sm text-white placeholder:text-white/30 bg-white/5 focus:bg-white/[0.08] transition-colors ${
    hasError ? "border-red-400/60" : "border-white/15"
  }`;

// UTM tags and click IDs, so each lead shows which campaign or post sent it.
const readAttribution = () => {
  if (typeof window === "undefined") return { page: "", referrer: "", utm: "" };
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "li_fat_id"];
  const utm = keys
    .filter((k) => params.get(k))
    .map((k) => `${k}=${params.get(k)}`)
    .join("&");
  return { page: window.location.href, referrer: document.referrer, utm };
};

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

const BookACall = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [lead, setLead] = useState<{ name: string; email: string; autoReply: boolean } | null>(null);
  const shownAt = useRef<number>(0);
  const hpRef = useRef<HTMLInputElement>(null);
  const attribution = useRef({ page: "", referrer: "", utm: "" });

  useEffect(() => {
    shownAt.current = Date.now();
    attribution.current = readAttribution();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setError,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) as unknown as Resolver<FormValues> });


  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    setSubmitError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          ...attribution.current,
          hp: hpRef.current?.value ?? "",
          elapsedMs: Date.now() - shownAt.current,
        }),
      });
      const body = (await res.json().catch(() => null)) as LeadResponse | null;

      if (!res.ok || !body || !body.ok) {
        if (body && !body.ok && body.fieldErrors) {
          Object.entries(body.fieldErrors).forEach(([name, message]) =>
            setError(name as FieldName, { type: "server", message })
          );
        }
        setSubmitError(
          (body && !body.ok && body.error) ||
            "Your message didn't go through. Please try again, or email lumixusstudio@gmail.com."
        );
        setStatus("idle");
        return;
      }

      // Conversion event for GA4 (mark "generate_lead" as a key event in GA4).
      const w = window as GtagWindow;
      w.gtag?.("event", "generate_lead", {
        form_name: "contact",
        service: data.service || "not specified",
        budget: data.budget || "not specified",
      });

      setLead({ name: data.fullName, email: data.email, autoReply: Boolean(body.autoReply) });
      setStatus("sent");
      reset();
    } catch {
      setSubmitError(
        "We couldn't reach the server. Check your connection and try again, or email lumixusstudio@gmail.com."
      );
      setStatus("idle");
    }
  };

  // Prefill the booking page so the next step takes one click.
  const bookingLink = lead
    ? `${BOOKING_URL}?name=${encodeURIComponent(lead.name)}&email=${encodeURIComponent(lead.email)}`
    : BOOKING_URL;

  const fieldError = (name: FieldName) =>
    errors[name] ? (
      <p id={`${name}-error`} className="text-red-400 text-xs mt-1.5">
        {errors[name]?.message as string}
      </p>
    ) : null;

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-dark overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <Container className="relative z-10">
        {/* ── Headline ─────────────────────────────────────────────── */}
        <h2
          className="font-bold text-white max-w-4xl mb-16"
          style={{ fontSize: "clamp(38px, 6vw, 84px)", letterSpacing: "-0.04em", lineHeight: 1 }}
        >
          Let&apos;s build your next client pipeline.
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
              Tell us about your business and how you win clients today. We read
              every message ourselves.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-white/60">
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
                href={BOOKING_URL}
                className="text-sm font-semibold text-white hover:text-primary transition-colors flex items-center gap-1"
              >
                Book a 30-minute pipeline review <MdArrowOutward />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3" aria-live="polite">
            {status === "sent" ? (
              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-10">
                <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Thanks{lead ? `, ${lead.name.split(" ")[0]}` : ""}. Your message is in.
                </h3>
                <p className="text-[15px] text-white/55 leading-relaxed max-w-md">
                  {lead?.autoReply
                    ? `We've sent a confirmation to ${lead.email} and will reply personally within one business day.`
                    : "We'll reply personally within one business day."}{" "}
                  Want to skip the back-and-forth? Pick a time for your pipeline review now.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a
                    href={bookingLink}
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-colors"
                  >
                    Book your call now <MdArrowOutward />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      shownAt.current = Date.now();
                    }}
                    className="inline-flex items-center justify-center text-white/55 hover:text-white text-sm font-semibold px-6 py-3.5 rounded-full border border-white/15 hover:border-white/35 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {/* Honeypot: hidden from people, filled by bots */}
                <div className="absolute -left-[10000px] w-px h-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="company_fax">Leave this field empty</label>
                  <input id="company_fax" ref={hpRef} type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      autoComplete="name"
                      {...register("fullName")}
                      placeholder="Full name"
                      aria-label="Full name"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={inputClasses(!!errors.fullName)}
                    />
                    {fieldError("fullName")}
                  </div>
                  <div>
                    <input
                      type="email"
                      autoComplete="email"
                      {...register("email")}
                      placeholder="Work email"
                      aria-label="Work email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={inputClasses(!!errors.email)}
                    />
                    {fieldError("email")}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      autoComplete="organization"
                      {...register("business")}
                      placeholder="Company name"
                      aria-label="Company name"
                      aria-invalid={!!errors.business}
                      aria-describedby={errors.business ? "business-error" : undefined}
                      className={inputClasses(!!errors.business)}
                    />
                    {fieldError("business")}
                  </div>
                  <div>
                    <input
                      type="tel"
                      autoComplete="tel"
                      {...register("phoneNumber")}
                      placeholder="Phone / WhatsApp (optional)"
                      aria-label="Phone or WhatsApp (optional)"
                      aria-invalid={!!errors.phoneNumber}
                      aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
                      className={inputClasses(!!errors.phoneNumber)}
                    />
                    {fieldError("phoneNumber")}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    inputMode="url"
                    autoComplete="url"
                    {...register("website")}
                    placeholder="Website (optional)"
                    aria-label="Website (optional)"
                    className={inputClasses(false)}
                  />
                  <Controller
                    name="service"
                    control={control}
                    render={({ field }) => (
                      <Select
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        options={SERVICE_OPTIONS}
                        placeholder="What do you need help with?"
                      />
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Controller
                    name="budget"
                    control={control}
                    render={({ field }) => (
                      <Select
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        options={BUDGET_OPTIONS}
                        placeholder="Approximate budget (optional)"
                      />
                    )}
                  />
                  <Controller
                    name="timeline"
                    control={control}
                    render={({ field }) => (
                      <Select
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        options={TIMELINE_OPTIONS}
                        placeholder="When do you want to start?"
                        label="When do you want to start? (optional)"
                      />
                    )}
                  />
                </div>

                <div>
                  <textarea
                    rows={5}
                    {...register("message")}
                    placeholder="How do you win clients today, and where is it getting stuck?"
                    aria-label="Your message"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${inputClasses(!!errors.message)} resize-none`}
                  />
                  {fieldError("message")}
                </div>

                {submitError && (
                  <p role="alert" className="text-red-300 text-sm bg-red-500/10 border border-red-400/20 rounded-xl px-4 py-3">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-secondary disabled:opacity-60 text-white font-semibold py-4 rounded-full text-[15px] transition-colors"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                  {status !== "sending" && <MdArrowOutward className="text-lg" />}
                </button>

                <p className="text-xs text-center text-white/30">
                  We only use your details to reply to this enquiry. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* ── Bottom rule + socials ──────────────────────────────── */}
        <div className="flex items-center gap-6 mt-20 pt-8 border-t border-white/8">
          <div className="flex-1" />
          <Link href="https://www.instagram.com/lumixus.studio/" className="text-white/45 hover:text-white transition-colors text-xs tracking-wide">
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
