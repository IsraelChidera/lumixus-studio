import React from 'react';
import Container from '@/app/components/Elements/Container';
import Button2 from '@/app/components/Elements/Button2';

const Contact = () => {
    return (
        <section>
            <Container className='mt-[154px] relative pb-[100px]'>
                <p className='uppercase text-center text-sm font-medium'>
                    Contact us
                </p>

                <h2 className='gradient-animation-light mt-[22px] leading-normal text-center text-[48px] font-medium'>
                    Let's Get in Touch And Make Magic Together.
                </h2>

                <form className='mt-4'>
                    <div className='grid grid-cols-3 gap-x-4 gap-y-8 '>
                        <div>
                            <input
                                type="text"
                                placeholder='First Name'
                                className='w-full p-5 focus:outline-none'
                                style={{ background: "rgba(255, 255, 255, 0.01)", backdropFilter: "blur(4px)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", }}
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder='Email'
                                className='w-full p-5 focus:outline-none'
                                style={{ background: "rgba(255, 255, 255, 0.01)", backdropFilter: "blur(4px)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", }}
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder='Last Name'
                                className='w-full p-5 focus:outline-none'
                                style={{ background: "rgba(255, 255, 255, 0.01)", backdropFilter: "blur(4px)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", }}
                                required
                            />
                        </div>

                        <div className='col-span-3'>
                            <textarea
                                rows={6}
                                className='w-full p-5 focus:outline-none'
                                placeholder='Message'
                                style={{ background: "rgba(255, 255, 255, 0.01)", backdropFilter: "blur(4px)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", }}
                            ></textarea>

                        </div>
                    </div>

                    <div className='flex items-center justify-center mt-6'>
                        <Button2 className='text-sm'>
                            Send Message
                        </Button2>
                    </div>
                </form>
            </Container>
        </section >
    )
}

export default Contact