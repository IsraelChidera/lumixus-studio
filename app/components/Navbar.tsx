import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/app/components/Elements/Container';
import logo from '@/public/logo-blue.png';

const Navbar = () => {
    return (
        <nav>
            <Container className='flex justify-between items-center'>
                <Image src={logo} alt="Lumixus studio logo" className='w-36' />

                <ul className='flex tracking-wide items-center justify-between space-x-6 text-sm'>
                    <li className=''>
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
            </Container>

        </nav>
    )
}

export default Navbar