"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/app/components/Elements/Container';
import Button from '@/app/components/Elements/Button';
import logo from '@/public/logo-white.png';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(true);
    }

    return (
        <nav className='pt-6 pb-4 relative z-20'>
            <Container className='flex justify-between items-center'>
                <div className="flex items-center space-x-6">
                    <Image src={logo} alt="Lumixus studio logo" className='pr-6 w-16 xl:w-28 xl:border-r xl:border-r-white ' />

                    <ul className='ml-4 xl:flex hidden tracking-wide items-center justify-between space-x-6 text-sm'>
                        <li className="hover:opacity-60 hover:text-white transition-all ease-in delay-75 ">
                            <Link href="#about">
                                Resources
                            </Link>
                        </li>

                        <li className="hover:opacity-60 hover:text-white transition-all ease-in delay-75 ">
                            <Link href="#about">
                                About
                            </Link>
                        </li>

                        <li className="hover:opacity-60 hover:text-white transition-all ease-in delay-75 ">
                            <Link href="#services">
                                Services
                            </Link>
                        </li>

                        <li className="hover:opacity-60 hover:text-white transition-all ease-in delay-75 ">
                            <Link href="#works">
                                Portfolio
                            </Link>
                        </li>

                        <li className="hover:opacity-60 hover:text-white transition-all ease-in delay-75 ">
                            <Link href="#testimonials">
                                Testimonials
                            </Link>
                        </li>

                    </ul>
                </div>

                <Button className="hidden xl:flex items-center space-x-2">
                    <span>Start Now</span>
                    <MdArrowOutward className='text-white' />
                </Button>

                {/* Mobile navigation */}
                <FaBarsStaggered
                    className="xl:hidden block cursor-pointer"
                    style={{ width: "20px", height: "20px" }}
                    onClick={handleClick}
                />
            </Container>

            {
                click &&
                <div className='h-screen w-full fixed bg-secondary z-50 top-0 left-0'>

                    <Container className=''>

                        <div className='pt-10 flex items-center justify-between'>
                            <Image src={logo} alt="Lumixus studio logo" className='w-16 md:w-28' />

                            <FaXmark onClick={() => setClick(false)} />
                        </div>

                        <ul className='mt-10 space-y-6'>
                            <li className="text-[34px]">
                                <Link href="#about" className='hover:opacity-60 hover:text-white transition-all ease-in delay-75  flex items-center space-x-2' onClick={() => setClick(false)} >
                                    <span>About</span>

                                    <MdArrowOutward />
                                </Link>
                            </li>

                            <li className="text-[34px]">
                                <Link href="#services" className='hover:opacity-60 hover:text-white transition-all ease-in delay-75  flex items-center space-x-2' onClick={() => setClick(false)} >
                                    <span>Services</span>

                                    <MdArrowOutward />
                                </Link>
                            </li>

                            <li className="text-[34px]">
                                <Link href="#works" className='hover:opacity-60 hover:text-white transition-all ease-in delay-75  flex items-center space-x-2' onClick={() => setClick(false)} >
                                    <span>Portfolio</span>

                                    <MdArrowOutward />
                                </Link>
                            </li>

                            <li className="text-[34px]">
                                <Link href="#testimonials" className='hover:opacity-60 hover:text-white transition-all ease-in delay-75  flex items-center space-x-2' onClick={() => setClick(false)} >
                                    <span>Testimonials</span>

                                    <MdArrowOutward />
                                </Link>
                            </li>

                            <li className="text-[34px]">
                                <Link href="#contact" className='hover:opacity-60 hover:text-white transition-all ease-in delay-75  flex items-center space-x-2' onClick={() => setClick(false)} >
                                    <span>
                                        Contact
                                    </span>

                                    <MdArrowOutward />
                                </Link>
                            </li>

                            <li>
                                <Link href="https://cal.com/lumixus-studio/30min" className='w-full '>
                                    <Button className='md:w-1/2 w-full text-[17px] '>
                                        Schedule a call
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </Container>
                </div>
            }
        </nav>
    )
}

export default Navbar