import React from 'react';
import Container from '@/app/components/Elements/Container';
import Button from '@/app/components/Elements/Button';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import ring from '@/public/ring.png';
import ring2 from '@/public/ring-2.png';
import Link from 'next/link';

const StartProject = () => {
    return (
        <section className='py-[90px] relative' >
            <Container className='relative z-20'>
                <p data-aos="fade-up" className='uppercase text-center text-sm font-medium'>
                    Let's talk
                </p>

                <h2 data-aos="fade-up" className='text-text leading-normal text-center text-[36px] font-medium'>
                    About your next project
                </h2>

                <div data-aos="fade-up" className='flex items-center justify-center'>
                    <Link href="https://cal.com/lumixus-studio/30min">
                        <Button className='flex items-center text-[17px] space-x-2 mt-[28px]'>
                            <span>
                                Schedule a call
                            </span>

                            <FaArrowRight className="text-white" />
                        </Button>
                    </Link>

                </div>
            </Container>

            <Image className='opacity-60 absolute top-0 right-0 z-10' src={ring} alt="ring svg" />
            <Image className='opacity-60 absolute top-0 left-0 z-10' src={ring2} alt="ring svg" />
        </section>
    )
}

export default StartProject