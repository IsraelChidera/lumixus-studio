import React from 'react';
import Container from '@/app/components/Elements/Container';

const Hero = () => {
    return (
        <header className='pt-[50px]'>
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

                <div>
                    
                </div>
            </Container>
        </header>
    )
}

export default Hero