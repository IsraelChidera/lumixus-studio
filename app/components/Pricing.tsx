"use client";

import React from 'react';
import Container from '@/app/components/Elements/Container';
import Button from '@/app/components/Elements/Button';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { motion } from 'motion/react';

const Pricing = () => {

    const router = usePathname();

    return (
        <motion.section
            initial={{
                y: 100,
                opacity: 0,
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                // damping: 70,
                duration: 5,
            }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            className='py-[80px]'
        >
            <Container>
                <div className='flex justify-center mb-2 items-center'>
                    <h2 className='text-base lg:text-lg  w-fit py-2 px-4 rounded-[6px]'>
                        Pricing
                    </h2>
                </div>

                <h2 className=' text-[34px] lg:text-[40px] text-center font-bold mt-6'>
                    Flexible Plans for Every Budget
                </h2>

                <div className='relative mt-[56px]'>
                    <div className='relative z-20 mt-20 grid lg:grid-cols-3 gap-10'>
                        <div className='bg-[#303030] py-8 px-4 rounded-[6px]'>
                            <div className=''>
                                <p className='text-[24px] lg:text-[28px] mb-4'>Starter Package</p>
                                {/* <p className='text[40px] lg:text-[48px] mb-6'>$0</p> */}
                                <p className='text-[#757577] text-base lg:text-[17px] mb-10'>
                                    Best for New Businesses
                                </p>

                                <ul className="space-y-4">
                                    <li className='flex items-center text-base:text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Custom Website.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Basic SEO Setup (On-page optimization)</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Google My Business Setup</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Brand Identity Guide </span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Social Media</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Add-ons (if required)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* <div className="mt-20 lg:mt-40 flex justify-center">
                                <Button classType='secondary'>Select Plan</Button>
                            </div> */}
                        </div>

                        <div className='bg-[#303030] py-8 px-4 rounded-[6px]'>
                            <div className=''>
                                <p className='text-[24px] lg:text-[28px] mb-4 text-white'>Growth Package</p>
                                {/* <p className='text-[40px] lg:text-[48px] mb-6'>$2</p> */}
                                <p className='text-[#757577] text-[17px] mb-10'>
                                    For Businesses Ready to Scale
                                </p>

                                <ul className="space-y-4">
                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Everything in Start Package</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Advanced SEO</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Social Media Strategy Guide</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Content Creation & Strategy</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Social Media Management</span>
                                    </li>

                                    {/* <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span></span>
                                    </li> */}
                                </ul>
                            </div>

                            {/* <div className="mt-20 lg:mt-40 flex justify-center">
                                <Button classType='secondary'>Select Plan</Button>
                            </div> */}
                        </div>

                        <div className='bg-[#303030] py-8 px-4 rounded-[6px]'>
                            <div className=''>
                                <p className='text-[24px] lg:text-[28px] mb-4 text-white'>Scale Package</p>
                                {/* <p className='text-[40px] lg:text-[48px] mb-6'>$8<span className='text-[#757577] text-[17px]'>/month</span></p> */}
                                <p className='text-[#757577] text-[17px] mb-10'>
                                    For Businesses Looking to Dominate
                                </p>

                                <ul className="space-y-4">
                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Everything in Growth Package</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Full Marketing System (Sales Funnel, Lead Magnets)</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Email Marketing Automation</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Paid Ads Strategy</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </motion.section>
    )
}

export default Pricing