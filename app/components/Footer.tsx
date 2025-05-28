"use client"

import Image from 'next/image';
import React from 'react';
import Container from '@/app/components/Elements/Container';
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from '@/public/logo-white.png';
import { FaFacebookSquare } from "react-icons/fa";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa6';
import { MdMarkEmailRead } from 'react-icons/md';

const Footer = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", {
                theme: "dark",
                cssVarsPerTheme: {
                    dark: { "cal-brand": "#161616" },
                    light: {}, // Add an empty light theme to satisfy the type
                },
                hideEventTypeDetails: false,
                layout: "month_view"
            });

        })();
    }, [])
    return (
        <footer className='mt-20 py-4  '>
            <Container>
                <div>
                    <Cal namespace="30min"
                        calLink="lumixus-studio/30min"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        config={{ "layout": "month_view", "theme": "dark" }}
                    />
                </div>
            </Container>

            <Container className='space-y-6 lg:space-y-0 mt-10 py-4 md:flex block w-full justify-around items-center'>
                <div>
                    <div className='lg:block flex justify-center lg:justify-left'>
                        <Image src={logo} alt="logo" className='w-[100px]' />
                    </div>

                    <p className='pt-4 lg:text-left text-center text-xs opacity-80'>
                        &copy; 2025 Lumixus Studio. All rights reserved.
                    </p>
                </div>

                <ul className="lg:my-0 my-4 text-center space-y-3 text-white">
                    <li >
                        <Link href="#" className='text-base lg:text-lg font-semibold'>
                            Quick links
                        </Link>
                    </li>

                    <li>
                        <Link href="/" className="text-[15px] hover:border-b border-b-white hover:pb-1 hover:text-white transition-all ease-linear delay-75 hover:opacity-100 opacity-70">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href="/resources" className="text-[15px] hover:border-b border-b-white hover:pb-1 hover:text-white transition-all ease-linear delay-75 hover:opacity-100 opacity-70">
                            Resources
                        </Link>
                    </li>
                </ul>

                <div className='flex md:pt-0 pt-3 items-center justify-center space-x-6'>
                    <Link href="mailto:lumixusstudio@gmail.com" className='group block opacity-70 hover:opacity-100 transition-all ease-in delay-75'>
                        <MdMarkEmailRead className="w-6 h-6 md:text-base group-hover:scale-110" />
                    </Link>

                    <Link href="https://www.instagram.com/lumixus_studio/" className='group block opacity-70 hover:opacity-100 transition-all ease-in delay-75'>
                        <FaInstagram className="w-6 h-6 md:text-base group-hover:scale-110" />
                    </Link>

                    <Link href="https://www.facebook.com/profile.php?id=61563258786419&mibextid=ZbWKwL" className='group block opacity-70 hover:opacity-100 transition-all ease-in delay-75'>
                        <FaFacebook className="w-6 h-6 md:text-base group-hover:scale-110" />
                    </Link>
                </div>
            </Container>
        </footer>
    )
}

export default Footer