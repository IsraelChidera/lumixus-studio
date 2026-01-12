"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/Elements/Container";
import Button from "@/app/components/Elements/Button";
import logo from "@/public/logo-blue.png";
import {
  FaBarsStaggered,
  FaFacebook,
  FaInstagram,
  FaXmark
} from "react-icons/fa6";
import { MdArrowOutward, MdMarkEmailRead } from "react-icons/md";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(true);
  };

  return (
    <nav className="pt-6 pb-4 relative z-20 bg-white ">
      <Container className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/">
            <Image
              src={logo}
              alt="Lumixus studio logo"
              className="pr-6 w-20 xl:w-28 xl:border-r xl:border-r-white "
            />
          </Link>

          <ul className="ml-4 xl:flex hidden tracking-wide items-center justify-between space-x-6 text-sm">
            <li className="hover:border-b-2 hover:pb-2 text-text hover:border-b-primary hover:text-primary transition-all ease-in delay-75 ">
              <Link href="/#about">About</Link>
            </li>

            <li className="hover:border-b-2 hover:pb-2 text-text hover:border-b-primary hover:text-primary transition-all ease-in delay-75 ">
              <Link href="/#services">Services</Link>
            </li>

            <li className="hover:border-b-2 hover:pb-2 text-text hover:border-b-primary hover:text-primary transition-all ease-in delay-75 ">
              <Link href="/#works">Portfolio</Link>
            </li>

            <li className="hover:border-b-2 hover:pb-2 text-text hover:border-b-primary hover:text-primary transition-all ease-in delay-75 ">
              <Link href="/#contact">Contact</Link>
            </li>

            <li className="hover:border-b-2 hover:pb-2 text-text hover:border-b-primary hover:text-primary transition-all ease-in delay-75 ">
              <Link href="/resources">Resources</Link>
            </li>
          </ul>
        </div>

        <Link href="https://cal.com/lumixus-studio/30min">
          <Button className="hidden xl:flex items-center space-x-2">
            <span>Start Now</span>
            <MdArrowOutward className="text-white" />
          </Button>
        </Link>

        {/* Mobile navigation */}
        <FaBarsStaggered
          className="xl:hidden block cursor-pointer"
          style={{ width: "16px", height: "16px" }}
          onClick={handleClick}
        />
      </Container>

      {click && (
        <div className="h-screen w-full fixed bg-white z-50 top-0 left-0">
          <Container className="">
            <div className="pt-10 flex items-center justify-between">
              <Image
                src={logo}
                alt="Lumixus studio logo"
                className="w-16 md:w-28"
              />

              <FaXmark onClick={() => setClick(false)} />
            </div>

            <ul className="mt-10 space-y-6">
              <li className="text-base">
                <Link
                  href="/#about"
                  className="hover:opacity-60 hover:text-white transition-all ease-in delay-75  flex items-center space-x-2"
                  onClick={() => setClick(false)}
                >
                  <span>About</span>

                  <MdArrowOutward />
                </Link>
              </li>

              <li className="text-base">
                <Link
                  href="/#services"
                  className="hover:opacity-60 hover:text-white transition-all ease-in delay-75  flex items-center space-x-2"
                  onClick={() => setClick(false)}
                >
                  <span>Services</span>

                  <MdArrowOutward />
                </Link>
              </li>

              <li className="text-base">
                <Link
                  href="/#works"
                  className="hover:opacity-60 hover:text-white transition-all ease-in delay-75  flex items-center space-x-2"
                  onClick={() => setClick(false)}
                >
                  <span>Portfolio</span>

                  <MdArrowOutward />
                </Link>
              </li>

              <li className="text-base">
                <Link
                  href="/#testimonials"
                  className="hover:opacity-60 hover:text-white transition-all ease-in delay-75  flex items-center space-x-2"
                  onClick={() => setClick(false)}
                >
                  <span>Testimonials</span>

                  <MdArrowOutward />
                </Link>
              </li>

              <li className="text-base">
                <Link
                  href="/resources"
                  className="hover:opacity-60 hover:text-white transition-all ease-in delay-75  flex items-center space-x-2"
                  onClick={() => setClick(false)}
                >
                  <span>Resources</span>

                  <MdArrowOutward />
                </Link>
              </li>

              <li className="text-base">
                <Link
                  href="#contact"
                  className="hover:opacity-60 hover:text-white transition-all ease-in delay-75  flex items-center space-x-2"
                  onClick={() => setClick(false)}
                >
                  <span>Contact</span>

                  <MdArrowOutward />
                </Link>
              </li>

              <li>
                <Link
                  href="https://cal.com/lumixus-studio/30min"
                  className="w-full "
                >
                  <Button className="md:w-1/2 w-full text-[17px] ">
                    Schedule a call
                  </Button>
                </Link>
              </li>
            </ul>

            <div className="mt-4">
              <p className="text-text text-xs">
                We're Lumixus Studio, and we partner with B2B businesses to
                close more deals and increase their customer pipeline
              </p>

              <div className="flex pt-3 items-center justify-start space-x-6">
                <Link
                  href="https://www.instagram.com/lumixus_studio/"
                  className="group block bg-primary rounded-full p-2 opacity-70 hover:opacity-100 transition-all ease-in delay-75"
                >
                  <FaInstagram className="w-4 h-4 text-white text-xs group-hover:scale-110" />
                </Link>

                <Link
                  href="https://www.facebook.com/profile.php?id=61563258786419&mibextid=ZbWKwL"
                  className="group block bg-primary rounded-full p-2 opacity-70 hover:opacity-100 transition-all ease-in delay-75"
                >
                  <FaFacebook className="w-4 h-4 text-white text-xs group-hover:scale-110" />
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
