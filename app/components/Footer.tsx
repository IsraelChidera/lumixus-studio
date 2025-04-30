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

            <Container className=' mt-10 py-4 md:flex block w-full justify-around items-center'>
                <div className=''>
                    <Image src={logo} alt="logo" className='w-[100px]' />
                    <p className='pt-4 text-xs opacity-80'>
                        &copy; 2025 Lumixus Studio. All rights reserved.
                    </p>
                </div>

                <ul className=" text-center space-y-3 text-white">
                    <li >
                        <Link href="#">
                            Quick links
                        </Link>
                    </li>

                    <li>
                        <Link href="/resources" className="text-[15px] hover:underline underline-offset-4 hover:text-white transition-all ease-linear delay-75 opacity-70">
                            Resources
                        </Link>
                    </li>
                </ul>

                <div className='flex md:pt-0 pt-3 items-center justify-center space-x-6'>
                    <a href="mailto:lumixusstudio@gmail.com" className='block'>
                        <MdMarkEmailRead className="w-6 h-6 md:text-base " />
                    </a>

                    <a href="https://www.instagram.com/lumixus_studio/" className='block'>
                        <FaInstagram className="w-6 h-6 md:text-base " />
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=61563258786419&mibextid=ZbWKwL" className='block'>
                        <FaFacebook className="w-6 h-6 md:text-base " />
                    </a>
                </div>
            </Container>
        </footer>
    )
}

export default Footer