"use client";

import React from "react";
import Container from "@/app/components/Elements/Container";
import Button from "@/app/components/Elements/Button";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const Pricing = () => {
  const router = usePathname();

  return (
    <motion.section
      initial={{
        y: 100,
        opacity: 0
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        // damping: 70,
        duration: 5
      }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      className="py-[80px]"
    >
      <Container>
        <div className="flex justify-center mb-2 items-center">
          <h2 className="text-sm lg:text-base w-fit rounded-[6px]">Pricing</h2>
        </div>

        <h2 className=" text-[34px] lg:text-[36px] text-center font-medium text-text">
          Flexible Plans for Every Budget
        </h2>

        <div className="relative mt-[36px]">
          <div className="px-4 relative z-20 mt-10 grid lg:grid-cols-3 gap-4">
            <div className="bg-white py-8 px-4 rounded-[6px]">
              <div className="">
                <p className="text-[18px] lg:text-[20px] mb-1 text-text">
                  Starter Package
                </p>
                {/* <p className='text[40px] lg:text-[48px] mb-6'>$0</p> */}
                <p className="text-[#757577] text-sm lg:text-[14px] mb-10">
                  Best for New Businesses
                </p>

                <ul className="space-y-4">
                  <li className="flex items-center text-base:text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Custom Website.</span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Basic SEO Setup (On-page optimization)</span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Google My Business Setup</span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Brand Identity Guide </span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Social Media</span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Add-ons (if required)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white py-8 px-4 rounded-[6px]">
              <div className="">
                <p className="text-[18px] lg:text-[20px] mb-1 text-text">
                  Growth Package
                </p>
                {/* <p className='text-[40px] lg:text-[48px] mb-6'>$2</p> */}
                <p className="text-[#757577] text-sm lg:text-[14px] mb-10">
                  For Businesses Ready to Scale
                </p>

                <ul className="space-y-4 text-text">
                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Everything in Start Package</span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Advanced SEO</span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Chat Bots</span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Social Media Strategy Guide</span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Content Creation & Strategy</span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Social Media Management</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white py-8 px-4 rounded-[6px]">
              <div className="">
                <p className="text-[18px] lg:text-[20px] mb-1 text-text">
                  Scale Package
                </p>
                {/* <p className='text-[40px] lg:text-[48px] mb-6'>$8<span className='text-[#757577] text-[17px]'>/month</span></p> */}
                <p className="text-[#757577] text-sm lg:text-[14px] mb-10">
                  For Businesses Looking to Dominate
                </p>

                <ul className="space-y-4 text-text">
                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Everything in Growth Package</span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Full Marketing System Setup</span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>AI Automations</span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Email Marketing Automation</span>
                  </li>

                  <li className="flex items-center text-[15px] space-x-2">
                    <IoCheckmarkCircleOutline className="text-accent" />
                    <span>Paid Ads Strategy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Pricing;
