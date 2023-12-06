"use client"
import React, { useRef, useCallback } from 'react';

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { A11y, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {

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
        <section className='mt-[100px]'>
            <div className='bg-image h-screen'>
                <div className='flex relative z-30 p-6 items-center h-full justify-end'>
                    <div className='bg-[#0E0E0E] px-6 py-10'>
                        <div>
                            <p className='uppercase text-left text-sm font-medium'>
                                Our clients
                            </p>

                            <h2 className='mt-[2px] leading-normal text-left text-[30px] font-medium'>
                                What does our <br/> client have to say?
                            </h2>

                            <div className='md:w-[470px] mt-10'>

                                <Swiper
                                    ref={swiperRef}
                                    modules={[Navigation, Pagination, A11y]}                                    
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    className='relative'
                                >
                                    <SwiperSlide>
                                        <div>
                                            <p className='text-[17px] mb-[30px] pb-[30px]'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing 
                                                elit. Possimus in optio molestiae velit soluta
                                                 repudiandae libero cupiditate quod dicta itaque.
                                            </p>

                                            <div className=''>
                                                <h4 className='text-base mb-1 uppercase' style={{letterSpacing: '2px'}}> Lorem Ipseum </h4>
                                                <p className='font-light text-[13px] uppercase'> Founder | Parish</p>
                                            </div>      
                                        </div>
                                    </SwiperSlide>


                                    <SwiperSlide>
                                        <div>
                                            <p className='text-[17px] mb-[30px] pb-[30px]'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing 
                                                elit. Possimus in optio molestiae velit soluta
                                                 repudiandae libero cupiditate quod dicta itaque.
                                            </p>

                                            <div className=''>
                                                <h4 className='text-base mb-1 uppercase' style={{letterSpacing: '2px'}}> Lorem Ipseum </h4>
                                                <p className='font-light text-[13px] uppercase'> Founder | Parish</p>
                                            </div>      
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div>
                                            <p className='text-[17px] mb-[30px] pb-[30px]'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing 
                                                elit. Possimus in optio molestiae velit soluta
                                                 repudiandae libero cupiditate quod dicta itaque.
                                            </p>

                                            <div className=''>
                                                <h4 className='text-base mb-1 uppercase' style={{letterSpacing: '2px'}}> Lorem Ipseum </h4>
                                                <p className='font-light text-[13px] uppercase'> Founder | Parish</p>
                                            </div>      
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div>
                                            <p className='text-[17px] mb-[30px] pb-[30px]'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing 
                                                elit. Possimus in optio molestiae velit soluta
                                                 repudiandae libero cupiditate quod dicta itaque.
                                            </p>

                                            <div className=''>
                                                <h4 className='text-base mb-1 uppercase' style={{letterSpacing: '2px'}}> Lorem Ipseum </h4>
                                                <p className='font-light text-[13px] uppercase'> Founder | Parish</p>
                                            </div>      
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial