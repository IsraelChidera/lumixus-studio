"use client";
import React, { useState } from "react";
import Container from "@/app/components/Elements/Container";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
    .min(9, "Phone must be 9 digits or more")
    .max(14, "Phone must be 14 digits or less"),
  business: yup.string().required("Business name is required."),
  message: yup.string().required("Please describe your needs.")
});

const benefits = [
  "We respond within 24 hours",
  "Free 30-minute strategy consultation",
  "No obligation, no pressure",
  "Custom proposal within 48 hours"
];

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
          phoneNumber: data.phoneNumber ? `+234${data.phoneNumber}` : "N/A",
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
    <section id="contact" className="py-28 bg-white">
      <Container>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 gap-16 items-start"
        >
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <span className="section-label mb-4 inline-flex">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Get In Touch
            </span>
            <h2
              className="font-bold text-text mt-3 tracking-tight"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.02em" }}
            >
              Ready to grow your business?
            </h2>
            <p className="mt-4 text-muted text-[16px] leading-relaxed">
              Fill out the form and we'll reach out within 24 hours to understand your goals and show you exactly how we can help.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-text/70">
                  <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10 p-5 rounded-2xl bg-surface border border-border">
              <p className="text-xs font-semibold tracking-wider uppercase text-muted mb-1">Prefer a quick call?</p>
              <a
                href="https://cal.com/lumixus-studio/30min"
                className="text-sm font-semibold text-primary hover:underline underline-offset-4 flex items-center gap-1"
              >
                Book directly on our calendar <MdArrowOutward />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div className="rounded-2xl bg-green-50 border border-green-200 p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 border border-green-200 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text mb-2">Message received!</h3>
                <p className="text-sm text-muted">We'll be in touch within 24 hours. Check your inbox for a confirmation.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(handleContactForm)}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="Full Name"
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm text-text placeholder:text-muted bg-surface focus:bg-white transition-colors ${
                        errors.fullName ? "border-red-300" : "border-border"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="Email Address"
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm text-text placeholder:text-muted bg-surface focus:bg-white transition-colors ${
                        errors.email ? "border-red-300" : "border-border"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      {...register("phoneNumber")}
                      placeholder="Phone Number"
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm text-text placeholder:text-muted bg-surface focus:bg-white transition-colors ${
                        errors.phoneNumber ? "border-red-300" : "border-border"
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      {...register("business")}
                      placeholder="Business Name"
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm text-text placeholder:text-muted bg-surface focus:bg-white transition-colors ${
                        errors.business ? "border-red-300" : "border-border"
                      }`}
                    />
                    {errors.business && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.business.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <textarea
                    rows={5}
                    {...register("message")}
                    placeholder="Tell us about your business needs - more leads, better conversions, automation, etc."
                    className={`w-full rounded-xl border px-4 py-3.5 text-sm text-text placeholder:text-muted bg-surface focus:bg-white transition-colors resize-none ${
                      errors.message ? "border-red-300" : "border-border"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>
                  )}
                </div>

                {submitError && (
                  <p className="text-red-500 text-sm">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-secondary disabled:opacity-60 text-white font-semibold py-4 rounded-full text-[15px] transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <MdArrowOutward className="text-lg" />}
                </button>

                <p className="text-xs text-center text-muted">
                  No spam, ever. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BookACall;
