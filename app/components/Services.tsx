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

const Services = () => {
    return (
        <section id="#services" className='mt-[62px] pb-[50px]'>
            <Container>
                <p className='uppercase text-center text-sm font-medium'>
                    Who we are
                </p>

                <h2 className='mt-[22px] leading-normal text-center text-[36px] font-medium'>
                    Lumixous Studio is a digital solution for a product agency
                    that relates people relations with products,
                    story development, and other services.
                </h2>

                <div className='flex items-center justify-center mt-[30px] pb-[37px]'>
                    <Button className='flex items-center text-[17px] space-x-2'>
                        <span>
                            Get a Free Consultation
                        </span>

                        <FaArrowRight className="text-white" />
                    </Button>
                </div>
            </Container>

            <div className='pt-[114px] bg-[#0E0E0E] relative '>
                <Container className='relative z-20'>
                    <p className='uppercase text-center text-[20px] font-medium'>
                        Our best services
                    </p>

                    <h2 className='text-6xl text-center font-medium'>
                        We provide end-to-end solutions
                    </h2>

                    <div className='grid grid-cols-2 gap-y-10 gap-x-10 pt-9 pb-9'>
                        <div className='flex items-center space-x-4'>
                            <div>
                                <Image src={web} alt="web dev icon" />
                            </div>

                            <div>
                                <h4 className='text-xl'>Web Design and Development</h4>
                                <p className='text-sm pt-1'>
                                    Product agency that relates people relations
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
                                    Product agency that relates people relations
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <div>
                                <Image src={strategy} alt="strategy" />
                            </div>

                            <div>
                                <h4 className='text-xl'>Strategy</h4>
                                <p className='text-sm pt-1'>
                                    Product agency that relates people relations
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <div>
                                <GrOptimize className="text-blue text-[40px]" />
                            </div>

                            <div>
                                <h4 className='text-xl'>Optimization</h4>
                                <p className='text-sm pt-1'>
                                    Product agency that relates people relations
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <div>
                                <IoStorefrontOutline className="text-blue text-[40px]" />
                            </div>

                            <div>
                                <h4 className='text-xl'>Ecommerce</h4>
                                <p className='text-sm pt-1'>
                                    Product agency that relates people relations
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