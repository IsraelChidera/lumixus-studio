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
            className={`fixed bottom-8 right-6 w-11 h-11 z-40 rounded-full bg-dark border border-white/10 shadow-xl flex items-center justify-center text-white hover:bg-primary transition-all duration-200 ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <IoIosArrowUp className="w-4 h-4" />
        </button>
    );
};

export default FloatingButton;
