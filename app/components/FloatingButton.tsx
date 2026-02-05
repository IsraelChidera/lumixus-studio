"use client";

import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const FloatingButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window === "undefined") return;
            // first 100vh in pixels
            const first100vh = window.innerHeight;
            setShowButton(window.scrollY > first100vh);
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
            // set initial state
            handleScroll();
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const scrollToTop = () => {
        if (typeof window === "undefined") return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`fixed bottom-[90px] md:right-4 right-4 p-4 md:p-6 z-30 drop-shadow-2xl rounded-full bg-primary animate-bounce text-white ${showButton ? "block" : "hidden"}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <IoIosArrowUp />
        </button>
    );
};

export default FloatingButton;
