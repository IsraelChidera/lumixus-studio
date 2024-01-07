import React from 'react';
import Container from '@/app/components/Elements/Container';
import Button from '@/app/components/Elements/Button';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import web from '@/public/web.png';
import strategy from '@/public/strategy.png';
import ball from '@/public/ball.png';
import { MdWeb } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";
import { IoStorefrontOutline } from "react-icons/io5";
import Link from 'next/link';

const Services = () => {
    return (
        <section className='mt-[62px] pb-[50px]'>
            <Container className='px-3 lg:px-0'>
                <div id="about">
                    <p className='uppercase text-center text-sm font-medium'>
                        Who we are
                    </p>

                    <h2 data-aos="fade-up" className='mt-[22px] leading-normal text-center text-[36px] font-medium'>
                        Lumixus Studio is a growth catalyst. We engineer websites
                        that captivate your audience and convert them into loyal
                        customers, propelling your business forward. <br/> We leverage
                        data-driven design, user-centric optimization, and strategic
                        SEO to boost brand awareness, fuel engagement, and drive
                        measurable results. Whether it's increased website traffic, 
                        improved lead generation, a thriving online presence, or 
                        skyrocketing sales, we help you achieve your unique 
                        business goals
                    </h2>

                    <div className='flex items-center justify-center mt-[30px] pb-[37px]'>
                        <Link data-aos="fade-up" href="https://calendly.com/lumixusstudio/30min">
                            <Button className='flex items-center text-[17px] space-x-2'>
                                <span>
                                    Get a Free Consultation
                                </span>

                                <FaArrowRight className="text-white" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>

            <div id="services" className='pt-[114px] bg-[#0E0E0E] relative '>
                <Container className='relative z-20'>
                    <p data-aos="fade-up" className='uppercase text-center text-[20px] font-medium'>
                        Our best services
                    </p>

                    <h2 data-aos="fade-up" className='text-6xl text-center font-medium'>
                        We provide end-to-end solutions
                    </h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-10 md:gap-x-10 pt-9 pb-9'>
                        <div className='flex items-center space-x-4'>
                            <div>
                                <Image src={web} alt="web dev icon" />
                            </div>

                            <div>
                                <h4 className='text-xl'>Website Design & Development</h4>
                                <p className='text-sm pt-1'>
                                    Align your website goals with user needs and market trends
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <div>
                                <MdWeb className="text-blue text-[40px]" />
                            </div>

                            <div>
                                <h4 className='text-xl'>Web Design Consulting</h4>
                                <p className='text-sm pt-1'>
                                    Craft captivating interfaces that are intuitive and
                                    enjoyable to navigate.
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <div>
                                <Image src={strategy} alt="strategy" />
                            </div>

                            <div>
                                <h4 className='text-xl'>SEO Strategies & Optimization</h4>
                                <p className='text-sm pt-1'>
                                    Propel your website to the top of search results and attract qualified leads.
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <div>
                                <GrOptimize className="text-blue text-[40px]" />
                            </div>

                            <div>
                                <h4 className='text-xl'>Web Optimization</h4>
                                <p className='text-sm pt-1'>
                                    Build high-performing websites for speed, scalability, and mobile responsiveness.
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <div>
                                <GrOptimize className="text-blue text-[40px]" />
                            </div>

                            <div>
                                <h4 className='text-xl'>Conversion Optimization</h4>
                                <p className='text-sm pt-1'>
                                    Analyze user behavior and refine your website to maximize conversions and sales.
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <div>
                                <IoStorefrontOutline className="text-blue text-[40px]" />
                            </div>

                            <div>
                                <h4 className='text-xl'>E-commerce Development & Management</h4>
                                <p className='text-sm pt-1'>
                                    Build your online store from scratch and optimize it for smooth, frictionless sales.
                                </p>
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