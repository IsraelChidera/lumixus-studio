import React from 'react';
import Container from '@/app/components/Elements/Container';
import Image from 'next/image';
import web from '@/public/web.png';
import ball from '@/public/ball.png';
import { MdWeb } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";
import { IoStorefrontOutline } from "react-icons/io5";

const Services = () => {
    return (
        <section className='mt-[20px] pb-[50px]'>
            <div id="services" className='pt-[114px]  relative '>
                <Container className='relative z-20'>
                    <p data-aos="fade-up" className='uppercase text-center text-[20px] font-medium'>
                        Why Choose Us?
                    </p>

                    <h2 data-aos="fade-up" className='text-6xl text-center font-medium'>
                        We provide end-to-end solutions
                    </h2>

                    <div className='mt-10 flex justify-center'>
                        <div className="lg:w-[800px] grid lg:grid-cols-2 gap-4 ">
                            <div className='rounded-[6px] bg-[#0e0e0e] pt-[29px] pb-[29px] px-[35px]'>
                                <div>
                                    <Image src={web} alt="web dev icon" />
                                </div>

                                <div className="pt-2">
                                    <h4 className='text-2xl font-medium'>Website Design & Development</h4>
                                    <p className='text-base pt-1'>
                                        We transform digital ideas into engaging, user-friendly experiences—whether it's crafting sleek websites or building seamless mobile apps.
                                    </p>
                                </div>
                            </div>

                            <div className='rounded-[6px] bg-[#0e0e0e] pt-[29px] pb-[29px] px-[35px]'>
                                <div>
                                    <Image src={web} alt="web dev icon" />
                                </div>

                                <div className="pt-2">
                                    <h4 className='text-2xl font-medium'>Branding</h4>
                                    <p className='text-base pt-1'>
                                        We will develop your brand identity from concept to launch.
                                    </p>
                                </div>
                            </div>

                            <div className='rounded-[6px] bg-[#0e0e0e] pt-[29px] pb-[29px] px-[35px]'>
                                <div>
                                    <MdWeb className="text-blue text-[40px]" />
                                </div>

                                <div className='pt-2'>
                                    <h4 className='text-2xl font-medium'>Automation</h4>
                                    <p className='text-base pt-1'>
                                        Leverage automation tools to streamline operations, enhance efficiency, and drive business growth.
                                    </p>
                                </div>
                            </div>

                            <div className='rounded-[6px] bg-[#0e0e0e] pt-[29px] pb-[29px] px-[35px]'>
                                <div>
                                    <GrOptimize className="text-blue text-[40px]" />
                                </div>

                                <div className='pt-2'>
                                    <h4 className='text-2xl font-medium'>Growth Strategy</h4>
                                    <p className='text-base pt-1'>
                                        We will help grow your business by creating a growth strategy that aligns with your goals and objectives.
                                    </p>
                                </div>
                            </div>

                            <div className='rounded-[6px] bg-[#0e0e0e] pt-[29px] pb-[29px] px-[35px]'>
                                <div>
                                    <IoStorefrontOutline className="text-blue text-[40px]" />
                                </div>

                                <div className='pt-2'>
                                    <h4 className='text-2xl font-medium'>Social Media & Marketing</h4>
                                    <p className='text-base pt-1'>
                                        Boost your brand's online presence with strategic content marketing, social media management, and paid advertising campaigns.
                                    </p>
                                </div>
                            </div>

                            <div className='rounded-[6px] bg-[#0e0e0e] pt-[29px] pb-[29px] px-[35px]'>
                                <div>
                                    <GrOptimize className="text-blue text-[40px]" />
                                </div>

                                <div className='pt-2'>
                                    <h4 className='text-2xl font-medium'>Conversion Optimization</h4>
                                    <p className='text-base pt-1'>
                                        Analyze user behavior and refine your website to maximize conversions and sales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <Image src={ball} className='absolute bottom-0 z-10 right-0' alt="ball svg" />
            </div>
        </section>
    )
}

export default Services