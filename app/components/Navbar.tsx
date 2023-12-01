import React from 'react';
import logo from '@/public/logo-bg-less.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center'>
            <Image src={logo} width={100} height={100} alt="Lumixus studio logo" />

            <ul className='flex items-center justify-between space-x-4'>
                <li>
                    <Link href="#">
                        About
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        Services
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        Portfolio
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        Testimonials
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar