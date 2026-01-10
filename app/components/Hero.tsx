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
    <header className="pt-[80px] pb-[100px] bg-[#fff] relative">
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

      

        <div className="mx-auto w-full flex items-center justify-center text-center">
          <p
            className="lg:leading-[30px] leading-normal lg:p-3 font-normal sm:text-[18px] text-text
           text-[14px] mt-[8px] md:w-[589px]"
          >
            We help B2B businesses build reliable systems that make it easier to
            close deals and attract more qualified leads. No unnecessary
            extras, just straightforward solutions designed to solve your real
            challenges and grow your pipeline
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
