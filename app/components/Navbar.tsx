"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/app/components/Elements/Container';
import logo from '@/public/logo-white.png';
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    return (
        <nav className='pt-6 pb-4'>
            <Container className='flex justify-between items-center'>
                <Image src={logo} alt="Lumixus studio logo" className='w-16 md:w-28' />

                <ul className='xl:flex hidden tracking-wide items-center justify-between space-x-6 text-sm'>
                    <li className=''>
                        <Link href="#about">
                            About
                        </Link>
                    </li>

                    <li>
                        <Link href="/#services">
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link href="#works">
                            Portfolio
                        </Link>
                    </li>

                    <li>
                        <Link href="#testimonials">
                            Testimonials
                        </Link>
                    </li>

                    <li>
                        <Link href="#contact">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile navigation */}
                <FaBarsStaggered 
                    className="md:hidden block"
                    onClick={handleClick}
                />
            </Container>

        </nav>
    )
}

export default Navbar