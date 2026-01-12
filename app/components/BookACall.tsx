"use client";
import React, { useState } from "react";
import Container from "@/app/components/Elements/Container";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import Button from "@/app/components/Elements/Button";
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

const BookACall = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const handleContactForm = async (data: any) => {
    setIsSubmitting(true);
    try {
      const GOOGLE_SHEET_URL = `https://script.google.com/macros/s/AKfycbwGn_TqgZJKXSYekTZJ8Ta1qCdy7XHFs277mXY9gY_TUP2SSMBAOc6rFDJEIhZ2xVAFVQ/exec`;

      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
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
      console.error("Error submitting form:", error);
      setSubmitError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-accent py-[100px]">
      <Container>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 4 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="lg:px-0 px-3  lg:ml-[97px] lg:grid grid-cols-4 gap-x-10"
        >
          <div className="col-span-1 flex items-center">
            <div>
              <h2 className="text-[31px] font-bold lg:text-[61px] text-white lg:leading-[61px]">
                <span>Book a Free</span> <br className="lg:block hidden" />
                <span>Call</span>
              </h2>
              <p className="-pt-10 flex space-x-4 items-center text-white">
                <span>Get in touch</span>
                <FaArrowRight className="text-white lg:block hidden" />
              </p>
            </div>
          </div>
          <div className="mt-4 lg:mt-0 col-span-3 w-full">
            <p className="text-white lg:text-lg text-sm">
              Simply fill out the form and we'll get back to you immediately!
            </p>
            <form
              className="lg:grid lg:grid-cols-2 grid-cols-1 space-y-2 lg:space-y-0 gap-4 mt-10"
              onSubmit={handleSubmit(handleContactForm)}
            >
              <div>
                <input
                  type="text"
                  {...register("fullName")}
                  className="w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                  placeholder="Full Name"
                />
                {errors.fullName?.message && (
                  <p className="text-red-400 text-xs">
                    {errors?.fullName?.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                  placeholder="Email"
                />
                {errors.email?.message && (
                  <span className="text-red-400 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <input
                  type="text"
                  {...register("phoneNumber")}
                  className="w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                  placeholder="Phone Number"
                />
                {errors.phoneNumber?.message && (
                  <span className="text-red-400 text-xs">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>

              <div>
                <input
                  type="text"
                  {...register("business")}
                  className="w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                  placeholder="Business Name"
                />
                {errors.business?.message && (
                  <span className="text-red-400 text-xs">
                    {errors.business.message}
                  </span>
                )}
              </div>

              <textarea
                rows={4}
                cols={4}
                {...register("message")}
                className="col-span-2 w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                placeholder="Describe what your business needs (More leads, sales, automations, handling appointments etc.)"
              ></textarea>
              {errors.message?.message && (
                <span className="text-red-400 text-xs col-span-2">
                  {errors.message.message}
                </span>
              )}

              <div className="flex justify-start col-span-2 pt-4">
                <Button className="flex items-center space-x-2" type="submit">
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <span>Submit your Form</span>
                  )}
                  <MdArrowOutward className="text-white" />
                </Button>
              </div>
            </form>

            {isSubmitted && (
              <p className="text-white text-sm mt-4">
                Form submitted successfully.
              </p>
            )}
            {submitError && <p className="text-red-400 mt-4">{submitError}</p>}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BookACall;
