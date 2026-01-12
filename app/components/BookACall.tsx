"use client";
import React, { useRef, useState } from "react";
import Container from "@/app/components/Elements/Container";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import Button from "@/app/components/Elements/Button";

const initialState = {
  name: "",
  email: "",
  phone: "",
  business: "",
  message: ""
};

const BookACall = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<any>({});
  const mailtoRef = useRef<HTMLAnchorElement>(null);

  const validate = () => {
    const newErrors: any = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.business.trim())
      newErrors.business = "Business name is required.";
    if (!form.message.trim()) newErrors.message = "Please describe your needs.";
    return newErrors;
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent("New Book a Call Submission");
    const body = encodeURIComponent(
      `Full Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone Number: ${form.phone}\n` +
        `Business Name: ${form.business}\n` +
        `Message: ${form.message}`
    );
    const mailtoLink = `mailto:info@lumixus-studio.com?subject=${subject}&body=${body}`;

    // Set the href and trigger click
    if (mailtoRef.current) {
      mailtoRef.current.href = mailtoLink;
      mailtoRef.current.click();
    }
    setForm(initialState);
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
              onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                  placeholder="Full Name"
                />
                {errors.name && (
                  <span className="text-red-400 text-xs">{errors.name}</span>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs">{errors.email}</span>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                  placeholder="Phone Number"
                />
                {errors.phone && (
                  <span className="text-red-400 text-xs">{errors.phone}</span>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="business"
                  value={form.business}
                  onChange={handleChange}
                  className="w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                  placeholder="Business Name"
                />
                {errors.business && (
                  <span className="text-red-400 text-xs">
                    {errors.business}
                  </span>
                )}
              </div>
              <textarea
                rows={4}
                cols={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="col-span-2 w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                placeholder="Describe what your business needs (More leads, sales, automations, handling appointments etc.)"
              ></textarea>
              {errors.message && (
                <span className="text-red-400 text-xs col-span-2">
                  {errors.message}
                </span>
              )}
              <div className="flex justify-start col-span-2 pt-4">
                <Button className="flex items-center space-x-2" type="submit">
                  <span>Submit your Form</span>
                  <MdArrowOutward className="text-white" />
                </Button>
                {/* Hidden anchor for mailto */}
                <a ref={mailtoRef} style={{ display: "none" }}>
                  Mailto
                </a>
              </div>
            </form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BookACall;
