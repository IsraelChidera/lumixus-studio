import Image from 'next/image';
import React from 'react';
import Container from '@/app/components/Elements/Container';
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from '@/public/logo-white.png';
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='mt-20 px-4 py-4 border-t border-[#0E0E0E]'>
            <Container className='md:block flex w-full justify-center items-center'>
                <div className='md:flex justify-between items-center'>
                    <div className=''>
                        <Image src={logo} alt="logo" className='w-20' />
                    </div>

                    <div className='flex md:pt-0 pt-3 items-center justify-center space-x-4'>
                        <a className='' href="mailto:lumixusstudio@gmail.com"> 
                            <SiGmail className="text-sm md:text-base "/>
                        </a>

                        <a href="https://www.instagram.com/lumixus_studio/">
                            <FaInstagram className="text-sm md:text-base "/>
                        </a>

                        <a href="#">
                            <FaFacebookSquare className="text-sm md:text-base "/>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer