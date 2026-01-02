"use client";

import React, { useState } from "react";
import Container from "@/app/components/Elements/Container";
import { motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
import { LuPlus } from "react-icons/lu";

const Faq = () => {
  const [active, setActive] = useState<number | null>(0);

  function handleActive(index: number) {
    active === index ? setActive(null) : setActive(index);
  }

  const faqs = [
    {
      id: 0,
      question: `What is this service best for?`,
      answer: `We partner with B2B companies, SaaS businesses, and digital brands that need fast, reliable creative support—whether it's branding, web applications, high-converting landing pages, or compelling marketing copy. We also love partnering with creatives to help them scale their output and grow their business.`
    },
    {
      id: 1,
      question: `What services does Lumixus Studio offer?`,
      answer: `Lumixus Studio specializes in web. application, SEO, branding, marketing, and business automation for service-based entrepreneurs.`
    },
    {
      id: 2,
      question: `How long does it take to build a website?`,
      answer: `The timeline depends on the project scope. A standard website takes 2-4 weeks, while more advanced projects (e.g., eCommerce, automation) may take 4-8 weeks. We prioritise quality`
    },
    {
      id: 3,
      question: `Do you offer branding services along with web design?`,
      answer: `Yes! Our Starter Package includes basic branding (logo, colors, fonts), while higher-tier packages offer full brand strategy, social media templates, and marketing automation.`
    },
    {
      id: 4,
      question: `Do you offer payment plans?`,
      answer: `Yes! We provide flexible payment options, including installments for high-tier packages. Contact us to discuss a plan that works for your budget.
            `
    },
    {
      id: 5,
      question: `Will my website be mobile-friendly?`,
      answer: `100%! Every website we build is fully responsive and optimized for desktop, tablet, and mobile devices to ensure a seamless user experience.`
    },
    {
      id: 6,
      question: `Can you handle my social media and content marketing?`,
      answer: `Yes! Our Growth & Scale Packages include social media strategy, content creation, and even paid ad management to boost your online presence.`
    },
    {
      id: 7,
      question: `Do you provide ongoing maintenance and support?`,
      answer: `Yes! We offer monthly maintenance plans that include bug fixes, security updates, performance monitoring, and content updates to keep your site running smoothly.`
    },
    {
      id: 8,
      question: `How do I get started?`,
      answer: `Simply contact us for a free consultation. We'll discuss your goals, suggest the best package for you, and begin crafting a website that helps grow your business.`
    }
  ];

  return (
    <section className="py-[80px]">
      <Container className="lg:w-1/2 ">
        <div className="flex justify-center items-center">
          <p className="text-sm lg:text-base text-text w-fit">
            Frequently Asked Questions
          </p>
        </div>

        <h2 className="text-text text-[34px] lg:text-[40px] text-center font-bold ">
          Got Questions? We've Got Answers
        </h2>

        <div className="mt-6 lg:mt-[68px] ">
          {faqs.map((faq, _) => (
            <div
              key={faq.id}
              className={` pb-4 px-6 mb-[32px] ${
                active === _ ? "bg-white border-b-2 border-b-accent rounded-[6px] py-8" : ""
              } `}
            >
              <div className="flex items-center justify-between">
                <p className=" text-text text-sm lg:text-base font-semibold">
                  <span dangerouslySetInnerHTML={{ __html: faq.question }} />
                </p>

                {active === _ ? (
                  <IoMdClose
                    onClick={() => handleActive(_)}
                    className="text-[18px] text-accent cursor-pointer"
                  />
                ) : (
                  <LuPlus
                    onClick={() => handleActive(_)}
                    className="text-[18px] text-accent cursor-pointer"
                  />
                )}
              </div>

              {active === _ ? (
                <motion.p
                  initial={{
                    y: 100,
                    opacity: 0
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    // damping: 70,
                    duration: 4
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1
                  }}
                  className="mt-6 text-sm lg:text-[15px] font-normal text-text"
                >
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </motion.p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Faq;
