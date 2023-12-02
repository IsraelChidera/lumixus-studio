import React from 'react';

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { A11y, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
    return (
        <section className='mt-[100px]'>
            <div className='bg-image h-screen'>
                <div className='flex relative z-30 mt-20 justify-end '>
                    <div className='bg-[#0E0E0E] px-6 py-10'>
                        <div>
                            <p className='uppercase text-left text-sm font-medium'>
                                Our clients
                            </p>

                            <h2 className='mt-[22px] leading-normal text-left text-[36px] font-medium'>
                                What does our client have to say?
                            </h2>

                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial