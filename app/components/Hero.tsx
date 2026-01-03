import React from "react";
import Container from "@/app/components/Elements/Container";
import Button from "@/app/components/Elements/Button";
import Button2 from "@/app/components/Elements/Button2";
import screen from "@/public/screenshero-screens.png";
import Image from "next/image";
import Link from "next/link";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { IoMdArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <header className="pt-[80px] pb-[100px] bg-[#f8f8fb] relative">
      <Container>
        <div className="text-center mb-2 flex justify-center ">
          <p
            className=" bg-accent text-white rounded-[5px] px-4 md:py-1 py-1 text-[12px] w-fit flex items-center space-x-3"
            // href="https://cal.com/lumixus-studio/15min"
          >
            <div className="flex items-center space-x-2">
              <GoDot className="text-white" />
              <GoDotFill className="text-white animate-pulse" />
            </div>
            <span>2/5 SLOTS REMAINING</span>
          </p>
        </div>
        <h1 className="text-center text-[48px]  font-semibold leading-[120%] mt-2">
          <span className="text-primary">Double Leads</span>
          <br />
          <span className="text-primary">Close Deals, Drive Sales</span>
        </h1>

        <div className="flex justify-center items-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="307"
            height="21"
            viewBox="0 0 307 21"
            fill="none"
          >
            <path
              d="M1 13.2473C60.0748 3.516 122.336 2.97626 183.811 4.5935C206.317 5.18557 228.718 6.06673 250.819 6.89182C268.112 7.53745 319.657 9.05786 302.58 10.8829C294.595 11.7363 285.888 10.9903 277.828 11.2175C255.636 11.8428 233.439 12.5034 211.267 13.354C164.003 15.1673 116.818 17.7203 69.5272 19.2496C59.0976 19.5868 47.8575 20.7225 37.4047 19.3061C26.9054 17.8834 42.3739 13.8278 44.4728 13.3766C57.503 10.5757 71.3453 10.1782 84.8036 9.48318C112.947 8.0297 141.126 6.92979 169.262 5.40513C174.112 5.14233 178.961 4.86922 183.811 4.5935C216.183 2.75324 248.572 0.796955 281.101 1.01699"
              stroke="#ADAEB5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>

        <div className="mx-auto w-full flex items-center justify-center text-center">
          <p className="lg:leading-[32px] leading-normal lg:p-3 font-normal sm:text-[18px] text-text
           text-[14px] mt-[8px] md:w-[589px]">
            Your business should work as hard as you do. Without agency bloat or
            unnecessary fluff, we focus on clean design, smart strategy, and
            real results.
          </p>
        </div>

        <div className="flex mt-4 sm:mt-[20px] items-center justify-center w-full">
          <div className="md:grid grid-cols-2 md:space-y-0 space-y-4 space-x-0 md:space-x-4">
            <Link
              href="https://cal.com/lumixus-studio/30min"
              className="w-full block"
            >
              <Button className="w-full text-[16px] flex items-center space-x-2 ">
                <span>Launch Today</span>

                <MdArrowOutward className="text-white" />
              </Button>
            </Link>

            <Link href="#services" className="w-full block">
              <Button2 className="w-full flex justify-center space-x2">
                <span className="block">Learn more</span>
                {/* <IoMdArrowDown /> */}
              </Button2>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
