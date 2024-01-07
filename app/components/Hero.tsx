import React from 'react';
import Container from '@/app/components/Elements/Container';
import Button from '@/app/components/Elements/Button';
import Button2 from '@/app/components/Elements/Button2';
import screen from '@/public/screenshero-screens.png';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <header className='pt-[50px] pb-[100px]'>
            <Container>
                <h1 className='text-center sm:text-[60px] text-6xl font-medium -leading-7 '>
                    <span className='gradient-animation-light'>Elevate your brand</span><br />
                    <span className='gradient-animation-dark'>Craft experiences that convert!</span>
                </h1>

                <div className='mx-auto w-full flex items-center justify-center text-center'>
                    <p className='p-3 mt-[10px] md:w-[582px]'>                        
                        We craft user-centric websites that not only drive growth but also solidify 
                        your presence and influence in the ever-evolving digital landscape.
                    </p>
                </div>

                <div className='mt-4 sm:mt-[40px] flex items-center justify-center w-full'>
                    <div className='md:grid grid-cols-2 md:space-y-0 space-y-4 space-x-0 md:space-x-4'>

                        <Link href="https://calendly.com/lumixusstudio/let-s-talk" className='w-full block'>
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