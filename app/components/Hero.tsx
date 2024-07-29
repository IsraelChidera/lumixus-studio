import React from 'react';
import Container from '@/app/components/Elements/Container';
import Button from '@/app/components/Elements/Button';
import Button2 from '@/app/components/Elements/Button2';
import screen from '@/public/screenshero-screens.png';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <header className='pt-[60px] pb-[100px]'>
            <Container>
                <div className='text-center mb-1'>
                    <Link 
                        className="bg-white text-primary rounded-2xl px-4 md:py-2 py-1 text-xs md:text-sm" 
                        href="https://cal.com/lumixus-studio/15min"
                    >
                        <span>Get a free website consultation today!</span>
                    </Link>
                </div>
                <h1 className='text-center text-[30px] sm:text-[60px] text-6xl font-medium -leading-7 mt-2'>
                    <span className='gradient-animation-light'>Helping SMEs Drive More Sales</span><br />
                    <span className='gradient-animation-dark'>Close Deals & Double Leads</span>
                </h1>

                <div className='mx-auto w-full flex items-center justify-center text-center'>
                    <p className='p-3 sm:text-base text-sm mt-[8px] md:w-[582px]'>
                        We craft user-centric websites that not only drive growth but also solidify
                        your presence and influence in the ever-evolving digital space.
                    </p>
                </div>

                <div className='mt-4 sm:mt-[40px] flex items-center justify-center w-full'>
                    <div className='md:grid grid-cols-2 md:space-y-0 space-y-4 space-x-0 md:space-x-4'>

                        <Link href="https://cal.com/lumixus-studio/30min" className='w-full block'>
                            <Button className='w-full  text-[17px] '>
                                Schedule a call
                            </Button>
                        </Link>

                        <Link href="#services" className='w-full block'>
                            <Button2 className=' w-full text-[17px]'>
                                Learn more
                            </Button2>
                        </Link>
                    </div>
                </div>
            </Container>

            <div className='mt-[35px]'>
                <Image src={screen} alt="hero screens" style={{ width: "100%" }} />
            </div>
        </header>
    )
}

export default Hero