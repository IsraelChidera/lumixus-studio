import Image from 'next/image';
import React from 'react';
import Container from '@/app/components/Elements/Container';
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from '@/public/logo-3.png'
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='mt-20 border-t border-[#0E0E0E] pt-4 pb-6'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <Image src={logo} alt="logo" className='w-20 h-20' />
                    </div>

                    <div className='flex items-center space-x-4'>
                        <a href="mailto:lumixusstudio@gmail.com"> 
                            <SiGmail className="text-2xl"/>
                        </a>

                        <a href="https://www.instagram.com/lumixus_studio/">
                            <FaInstagram className="text-2xl"/>
                        </a>

                        <a href="#">
                            <FaFacebookSquare className="text-2xl"/>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer