"use client"
import React, { useRef, useCallback } from 'react';

import Button from '@/app/components/Elements/Button';

import { A11y, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {

    const swiperRef: any = useRef(null);


    const slidePrev: any = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slidePrev();
    }, []);

    const slideNext: any = useCallback(() => {
        if (!swiperRef.current) return;
        swiperRef.current.swiper.slideNext();
    }, []);

    return (
        <section id="testimonials" className='mt-[100px]'>
            <div className='bg-image h-screen'>
                <div className='md:flex relative z-30 p-6 items-center h-full md:justify-end'>
                    <div className='bg-white px-6 py-10'>
                        <div>
                            <p  className='uppercase text-left text-sm font-medium'>
                                Our clients
                            </p>

                            <h2  className='mt-[2px] leading-normal text-left text-[30px] font-medium'>
                                What does our <br /> client have to say?
                            </h2>

                            <div  className='md:w-[470px] w-full mt-10'>

                                <Swiper
                                    ref={swiperRef}
                                    modules={[Navigation, Pagination, A11y]}
                                    pagination={true}
                                    loop={true}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    className='relative swiper-pagination-top swiper-container'
                                >
                                    <SwiperSlide>
                                        <div>
                                            <p className='text-[15px] mb-[30px] pb-[30px]'>
                                                We approached Lumixus Studio with a strategic
                                                vision for our online presence, and they became
                                                invaluable partners in bringing it to life.
                                                They didn't just create a beautiful website,
                                                they collaborated with us on SEO optimization,
                                                social media integration, and ongoing performance
                                                analysis.
                                            </p>

                                            <div className=''>
                                                <p className='font-light text-[13px] uppercase'> CEO | Ayuda Content</p>
                                                <p className='font-light text-[13px] uppercase opacity-80'> William Oharisi</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div>
                                            <p className='text-[15px] mb-[30px] pb-[30px]'>
                                                Lumixus Studio crafted a strategy
                                                that not only stands out in the crowd but also positions
                                                us as thought leaders in our niche. We've seen a surge in
                                                social media presence, qualified leads, and industry recognition,
                                                all thanks to the strategic design and impactful messaging
                                            </p>

                                            <div className=''>
                                                <p className='font-light text-[13px] uppercase'> Founder | Connectivia </p>
                                                <p className='font-light text-[13px] uppercase opacity-80'> Glory Ebere </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div>
                                            <p className='text-[15px] mb-[30px] pb-[30px]'>
                                                We knew our website needed a makeover, but Lumixus
                                                Studio went above and beyond. They completely revamped
                                                our user experience, making it intuitive, engaging, and
                                                optimized for conversions. Our customer satisfaction scores
                                                have soared, and we've seen a significant increase in sales
                                                directly attributed to the new website's seamless functionality.
                                                They truly understand how to bridge the gap between design and
                                                business goals
                                            </p>

                                            <div className=''>
                                                <p className='font-light text-[13px] uppercase'> Co-Founder | Nexo Tech</p>
                                                <p className='font-light text-[13px] uppercase opacity-80'> James Oladele</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div>
                                            <p className='text-[15px] mb-[30px] pb-[30px]'>
                                                Partnering with Lumixus Studio was one of the best decisions we made for our business. The site is fast, user-friendly, and designed with our customers in mind. Since launching, we've noticed a huge improvement in customer engagement and inquiries, and it has become a strong asset in our growth strategy. Lumixus Studio delivered with professionalism, creativity, and a clear understanding of our business goals. I highly recommend them to any business serious about scaling online.
                                            </p>

                                            <div className=''>
                                                <p className='font-light text-[13px] uppercase'> Managing Director | NAJEC FMCG</p>
                                                <p className='font-light text-[13px] uppercase opacity-80'>Mr. Nebolisa</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* <SwiperSlide>
                                        <div>
                                            <p className='text-[15px] mb-[30px] pb-[30px]'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing
                                                elit. Possimus in optio molestiae velit soluta
                                                repudiandae libero cupiditate quod dicta itaque.
                                            </p>

                                            <div className=''>
                                                <h4 className='text-base mb-1 uppercase' style={{ letterSpacing: '2px' }}> Lorem Ipseum </h4>
                                                <p className='font-light text-[13px] uppercase'> Founder | Parish</p>
                                            </div>
                                        </div>
                                    </SwiperSlide> */}
                                </Swiper>

                                <div className='flex justify-between items-center mt-6'>
                                    <Button onClick={slidePrev}>Prev</Button>
                                    <Button onClick={slideNext}>Next</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial