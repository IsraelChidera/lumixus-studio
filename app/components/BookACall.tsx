import React from "react";
import Container from "@/app/components/Elements/Container";
import { FaArrowRight } from "react-icons/fa6";
import Button from "@/app/components/Elements/Button";
import { MdArrowOutward } from "react-icons/md";

const BookACall = () => {
  return (
    <section className="bg-accent py-[100px]">
      <Container className="">
        <div className="lg:px-0 px-3  lg:ml-[97px] lg:grid grid-cols-4 gap-x-10">
          <div className="col-span-1 flex items-center">
            <div>
              <h2 className="text-[31px] font-bold lg:text-[61px] text-white lg:leading-[61px]">
                <span>Book a Free</span> <br className="lg:block hidden" />
                <span>Call</span>
              </h2>

              <p className="-pt-10 flex space-x-4 items-center text-white">
                <span>Get in touch</span>
                <FaArrowRight className="text-white lg:block hidden" />
              </p>
            </div>
          </div>

          <div className="mt-4 lg:mt-0 col-span-3 w-full">
            <p className="text-white lg:text-lg text-sm">
              Simply fill out the form and We'll get back to you immediately!
            </p>

            <form className=" lg:grid lg:grid-cols-2 grid-cols-1 space-y-2 lg:space-y-0 gap-4 mt-10">
              <div>
                <input
                  type="text"
                  className="w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  className="w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="text"
                  className="w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <input
                  type="text"
                  className="w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                  placeholder="Business Name"
                />
              </div>

              <textarea
                rows={4}
                cols={4}
                className="col-span-2 w-full border-0 text-white rounded-[4px] placeholder:text-opacity-100 placeholder:text-white text-opacity-50 py-[20px] px-4 bg-[#ffffff0d] focus:border-none"
                placeholder="Describe what your business needs (More leads, sales, automations, handling appointments etc.)"
              ></textarea>

              <div className=" flex justify-start col-span-2 pt-4">
                <Button className="flex items-center space-x-2">
                  <span>Submit your Form</span>
                  <MdArrowOutward className="text-white" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookACall;
