import Image from 'next/image';
import React from 'react';
import Container from '@/app/components/Elements/Container';
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from '@/public/logo-white.png';
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='mt-20 py-4 border-t border-gray-100'>
            <Container className='md:block flex w-full justify-center items-center'>
                <div className='md:flex justify-between items-center'>
                    <div className=''>
                        <Image src={logo} alt="logo" className='w-20' />
                    </div>

                    <div className='flex md:pt-0 pt-3 items-center justify-center space-x-4'>
                        <a href="mailto:lumixusstudio@gmail.com"> 
                            <SiGmail className="w-8 h-8 md:text-base "/>
                        </a>

                        <a href="https://www.instagram.com/lumixus_studio/">
                            <FaInstagram className="w-8 h-8 md:text-base "/>
                        </a>
                       
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer