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
                <div className='flex justify-center mb-12 items-center'>
                    <h2 className='text-base lg:text-lg  w-fit py-2 px-4 rounded-[6px]'>
                        Pricing
                    </h2>
                </div>

                <h2 className=' text-[34px] lg:text-[40px] text-center font-bold mt-6'>
                    Flexible Plans for Every Budget
                </h2>

                <div className='relative mt-[56px]'>
                    <div className='relative z-20 mt-20 grid lg:grid-cols-3 gap-10'>
                        <div className='bg-[#0e0e0e] py-8 px-4 rounded-[6px]'>
                            <div className=''>
                                <p className='text-[24px] lg:text-[28px] mb-4'>Free</p>
                                <p className='text[40px] lg:text-[48px] mb-6'>$0</p>
                                <p className='text-[#757577] text-base lg:text-[17px] mb-10'>
                                    Get started for free with essential tools to explore Graft's capabilities.
                                </p>

                                <ul className="space-y-4">
                                    <li className='flex items-center text-base:text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>10+ templates.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>2,000 words/month.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>2 languages {"(e.g., English, Swahili)."}</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Single-user access.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Standard email support.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Single format export.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* <div className="mt-20 lg:mt-40 flex justify-center">
                                <Button classType='secondary'>Select Plan</Button>
                            </div> */}
                        </div>

                        <div className='bg-[#0e0e0e] py-8 px-4 rounded-[6px]'>
                            <div className=''>
                                <p className='text-[24px] lg:text-[28px] mb-4 text-primary'>Pay-as-you-go</p>
                                <p className='text-[40px] lg:text-[48px] mb-6'>$2</p>
                                <p className='text-[#757577] text-[17px] mb-10'>
                                    Designed for small businesses looking to scale their operations efficiently.
                                </p>

                                <ul className="space-y-4">
                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>50+ templates.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>5,000 words/week.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>5 languages, including French.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Up to 3 team members.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Priority email support.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Export content in multiple formats.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* <div className="mt-20 lg:mt-40 flex justify-center">
                                <Button classType='secondary'>Select Plan</Button>
                            </div> */}
                        </div>

                        <div className='bg-[#0e0e0e] py-8 px-4 rounded-[6px]'>
                            <div className=''>
                                <p className='text-[24px] lg:text-[28px] mb-4 text-primary'>Monthly plan</p>
                                <p className='text-[40px] lg:text-[48px] mb-6'>$8<span className='text-[#757577] text-[17px]'>/month</span></p>
                                <p className='text-[#757577] text-[17px] mb-10'>
                                    Unlock advanced features to grow and manage your business effectively.
                                </p>

                                <ul className="space-y-4">
                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>100+ templates for all industries.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Unlimited words.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Custom AI prompts.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Up to 10 team members.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>Dedicated account manager.</span>
                                    </li>

                                    <li className='flex items-center text[17px] space-x-2'>
                                        <IoCheckmarkCircleOutline />
                                        <span>White-label content export options.</span>
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