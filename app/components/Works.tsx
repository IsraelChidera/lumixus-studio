'use client'
import React, { useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import balls from '@/public/balls.png';
import { FaArrowRight } from "react-icons/fa";

import { A11y, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        <section className='mt-[154px] relative pb-[100px]'>
            <div className='relative z-20'>
                <div className='ml-[97px] grid grid-cols-4 gap-x-10'>
                    <div className='col-span-1 flex items-center'>
                        <div>
                            <h2 style={{ lineHeight: "100px" }} className='text-[81px] font-medium '>
                                <span>Our Latest</span>  <br />
                                <span>Work</span>
                            </h2>

                            <Link className='-pt-10 flex space-x-4 items-center' href="#">
                                <span>Our Portfolio</span>
                                <FaArrowRight className='text-white' />
                            </Link>
                        </div>
                    </div>

                    <div className='col-span-3 w-full'>
                        <div className='relative z-30'>
                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, Pagination, A11y]}
                                pagination={true}
                                spaceBetween={30}
                                slidesPerView={2.5}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                className='relative'
                            >
                                <SwiperSlide>
                                    <div className='w-[325px] h-[562px] bg-red-600 '>
                                        a
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='w-[325px] h-[562px] bg-red-600 '>
                                        a
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='w-[325px] h-[562px] bg-red-600 '>
                                        a
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='w-[325px] h-[562px] bg-red-600 '>
                                        a
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className='w-[325px] h-[562px] bg-red-600 '>
                                        a
                                    </div>
                                </SwiperSlide>

                                <div onClick={slideNext} className='cursor-pointer centered-element z-20 p-[25px]' style={{ background: "rgba(0, 0, 0, 0.90)" }}>
                                    <FaArrowRight  />
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            <Image className='absolute z-10 top-0 left-0' src={balls} alt="spheres svgs" />
        </section>
    )
}

export default Works