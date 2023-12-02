import React from 'react';
import Container from '@/app/components/Elements/Container';
import Button from '@/app/components/Elements/Button';
import Button2 from '@/app/components/Elements/Button2';
import { FaArrowRight } from "react-icons/fa";
import screen from '@/public/screenshero-screens.png';
import Image from 'next/image';

const Hero = () => {
    return (
        <header className='pt-[50px] pb-[100px]'>
            <Container>
                <h1 className='text-center text-[80px] font-medium leading-[5.5rem]'>
                    <span>Let's build products</span><br />
                    <span>together for life</span>
                </h1>

                <div className='mx-auto w-full flex items-center justify-center text-center'>
                    <p className='p-3 mt-[10px] md:w-[582px]'>
                        Lumixus Studio is a digital solution for a product agency
                        that relates people relations, story development.
                    </p>
                </div>

                <div className='mt-[80px] flex items-center justify-center w-full'>
                    <div className='flex space-x-4 '>
                        <Button className='flex items-center text-[17px] space-x-2'>
                            <span>
                                Get Started
                            </span>

                            <FaArrowRight className="text-white" />
                        </Button>

                        <Button2 className='text-[17px]'>
                            Learn More
                        </Button2>
                    </div>
                </div>
            </Container>

            <div className='mt-[35px]'>
                <Image src={screen} alt="hero screens" />
            </div>
        </header>
    )
}

export default Hero