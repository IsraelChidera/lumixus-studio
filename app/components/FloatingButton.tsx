"use client"

import { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const FloatingButton = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        // Calculate the height of the first 100vh in pixels
        const first100vh = window.innerHeight * 100 / 100;

        // Check if the scroll position exceeds the first 100vh
        if (window.scrollY > first100vh) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-[140px] md:right-3 right-3 p-4 md:p-6 z-30 drop-shadow-2xl rounded-full bg-primary animate-bounce text-white ${showButton ? 'block' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <IoIosArrowUp />
        </button>
    );
};

export default FloatingButton;
