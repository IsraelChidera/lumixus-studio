'use client'
import React, { useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import balls from '@/public/balls.png';
import { FaArrowRight } from "react-icons/fa";
import Button from '@/app/components/Elements/Button';
import { A11y, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import pharmabolt from '@/public/pharmabolt.png';
import icystore from '@/public/icystore.png';
import ayuda from '@/public/ayuda.png';
import najec from '@/public/najec.png';
import nextcash from '@/public/nextcash.png';
import ninolynks from '@/public/ninolynks.png';

const Works = () => {

    const swiperRef: any = useRef(null);


    const slidePrev = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    }, []);

    const slideNext = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);

    return (
        <section id="works" className='mt-[154px] pt-10px relative pb-[100px]'>
            <div className='relative z-20'>
                <div className='lg:px-0 px-3  lg:ml-[97px] lg:grid grid-cols-4 gap-x-10'>
                    <div data-aos="fade-up" className='col-span-1 flex items-center'>
                        <div>
                            <h2 style={{ lineHeight: "100px" }} className='text-[81px] font-medium '>
                                <span>Our Latest</span>  <br />
                                <span>Work</span>
                            </h2>

                            <p className='-pt-10 flex space-x-4 items-center'>
                                <span>Our Portfolio</span>
                                <FaArrowRight className='text-white lg:block hidden' />
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-up" className='mt-4 lg:mt-0 col-span-3 w-full'>
                        <div className='relative z-30'>
                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, Pagination, A11y]}
                                pagination={true}
                                loop={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 10,
                                    },
                                }}
                                spaceBetween={30}
                                // slidesPerView={2.5}                                
                                className='relative'
                            >

                                <SwiperSlide>
                                    <div className='relative' >
                                        <Image src={ayuda} alt="web project" />
                                        <div className='centered-bottom bg-[#0E0E0E]  pt-2 px-10 pb-4'>
                                            <p className='gradient-animation-light text-center text-sm font-semibold'>Blogging & Web Design</p>
                                            <h3 className='pt-4 text-[17px] underline hover:no-underline font-semibold text-center text-white'>
                                                <Link href="https://ayudacontents.netlify.app/">
                                                    Ayuda Content
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='relative' >
                                        <Image src={najec} alt="web project" />
                                        <div className='centered-bottom bg-[#0E0E0E]  pt-2 px-10 pb-4'>
                                            <p className='gradient-animation-light text-center text-xs md:text-sm font-semibold'>Web Design & Web Development</p>
                                            <h3 className='pt-4 underline hover:no-underline text-sm md:text-[17px] font-semibold text-center text-white'>
                                                <Link href="https://najecltd.com">
                                                    Najec Limited
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='relative' >
                                        <Image src={nextcash} alt="web project" />
                                        <div className='centered-bottom bg-[#0E0E0E]  pt-2 px-10 pb-4'>
                                            <p className='gradient-animation-light text-center text-xs md:text-sm font-semibold'>Ecommerce Store</p>
                                            <h3 className='pt-4 underline hover:no-underline text-sm md:text-[17px] font-semibold text-center text-white'>
                                                <Link href="https://nextcashandcarry.com.ng/">
                                                    Next Cash & Carry
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='relative' >
                                        <Image src={pharmabolt} alt="web project" />
                                        <div className='centered-bottom bg-[#0E0E0E]  pt-2 px-10 pb-4'>
                                            <p className='gradient-animation-light text-center text-sm font-semibold'>Ecommerce & Web Development</p>
                                            <h3 className='pt-4 underline hover:no-underline text-[17px] font-semibold text-center text-white'>
                                                <Link href="https://pharmaboltapp.vercel.app/">
                                                    Pharmabolt
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='relative' >
                                        <Image src={ninolynks} alt="web project" />
                                        <div className='centered-bottom bg-[#0E0E0E]  pt-2 px-10 pb-4'>
                                            <p className='gradient-animation-light text-center text-sm font-semibold'>Shopping Store</p>
                                            <h3 className='pt-4 text-[17px] underline hover:no-underline font-semibold text-center text-white'>
                                                <Link href="https://ninolynks.com/">
                                                    Ninolynks
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='relative' >
                                        <Image src={icystore} alt="web project" />
                                        <div className='centered-bottom bg-[#0E0E0E]  pt-2 px-10 pb-4'>
                                            <p className='gradient-animation-light text-center text-sm font-semibold'>Ecommerce & Web Development</p>
                                            <h3 className='pt-4 text-[17px] underline hover:no-underline font-semibold text-center text-white'>
                                                <Link href="https://icystore.vercel.app/">
                                                    Icy Store
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div className="mt-4 flex justify-between items-center">
                                <Button onClick={slidePrev}>Prev</Button>
                                <Button onClick={slideNext}>Next</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Image className='absolute z-10 top-0 left-0' src={balls} alt="spheres svgs" />
        </section>
    )
}

export default Works