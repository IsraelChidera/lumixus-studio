import React from 'react';
import Container from '@/app/components/Elements/Container';
import Button from '@/app/components/Elements/Button';
import Button2 from '@/app/components/Elements/Button2';
import screen from '@/public/screenshero-screens.png';
import Image from 'next/image';
import Link from 'next/link';
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { MdArrowOutward } from 'react-icons/md';
import { IoMdArrowDown } from 'react-icons/io';

const Hero = () => {
    return (
        <header className='pt-[80px] pb-[100px]'>
            <Container>
                <div className='text-center mb-1 flex justify-center '>
                    <Link
                        style={{ background: "linear-gradient(#252525,#1d1d1d)" }}
                        className=" text-white rounded-[5px] px-4 md:py-1 py-1 text-[13px] w-fit flex items-center space-x-3"
                        href="https://cal.com/lumixus-studio/15min"
                    >
                        <div className="flex items-center space-x-2">
                            <GoDot className='text-green-500' />
                            <GoDotFill className='text-green-500 animate-pulse' />
                        </div>
                        <span>2/5 SLOTS REMAINING</span>
                    </Link>
                </div>
                <h1 className='text-center text-[30px] sm:text-[67px] text-5xl font-semibold -leading-4 mt-2'>
                    <span className='gradient-animation-light'>Double Leads</span><br />
                    <span className='gradient-animation-dark'>Close Deals, Drive Sales</span>
                </h1>

                <div className='mx-auto w-full flex items-center justify-center text-center'>
                    <p className='leading-[32px] p-3 font-normal sm:text-[20px] text-sm mt-[8px] md:w-[589px]'>
                        Your business should work as hard as you do.
                        Without agency bloat or unnecessary fluff,
                        we focus on clean design, smart strategy,
                        and real results.
                    </p>
                </div>

                <div className='flex mt-4 sm:mt-[40px] items-center justify-center w-full'>
                    <div className='md:grid grid-cols-2 md:space-y-0 space-y-4 space-x-0 md:space-x-4'>

                        <Link href="https://cal.com/lumixus-studio/30min" className='w-full block'>
                            <Button className='w-full text-[16px] flex items-center space-x-2 '>
                                <span>Launch Today</span>

                                <MdArrowOutward className='text-white' />
                            </Button>
                        </Link>

                        <Link href="#services" className='w-full block'>
                            <Button2 className='w-full text-[16px] flex justify-center space-x2'>
                                <span className='block'>Learn more</span>
                                {/* <IoMdArrowDown /> */}
                            </Button2>
                        </Link>
                    </div>
                </div>
            </Container>           
        </header>
    )
}

export default Hero