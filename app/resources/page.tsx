import Link from "next/link";
import React from "react";
import { TbComet } from "react-icons/tb";
import Container from "@/app/components/Elements/Container";
import Image from "next/image";
import Button from "@/app/components/Elements/Button2";
import { MdArrowOutward } from "react-icons/md";

const page = () => {
  return (
    <main>
      <Container className="relative z-20 mt-10">
        <p className="mt-20 uppercase text-center lg:text-[20px] font-medium">
          Available Resources
        </p>

        <div className="flex justify-center mt-2">
          <h2 className="w-[800px] text-3xl lg:text-5xl text-center font-medium">
            Resources for Content Creators & Business Owners
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="group">
            <div className="p-8 rounded-lg border border-white/10 hover:bg-white bg-white transition-all duration-300 relative flex flex-col">
              <p className="text-text text-sm mb-6 font-sans max-w-xs">
                The Notion Content Bank Template is a content repository
                template that allows you to store, organize, and repurpose all
                your content ideas in one place. Whether you're a content
                creator, business owner, or social media manager, this tool will
                help you stay consistent, track performance, and create
                high-quality content effortlessly
              </p>
              <h3 className="text-3xl text-text">Content bank template</h3>

              <div className="mt-3 pb-8 overflow-hidden rounded-md w-full aspect-[16/9]">
                <Image
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                  src="/resource1.png"
                  width={488}
                  height={475}
                  alt="content bank"
                />
              </div>

              <Link href="https://selar.com/0f3k23" target="_blank">
                <Button className="justify-center flex items-center space-x-2 w-full">
                  <span className="block">View Details</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="group">
            <div className="p-8 rounded-lg border border-white/10 hover:bg-white bg-white transition-all duration-300 relative flex flex-col">
              <p className="text-text text-sm mb-6 font-sans max-w-xs">
                We help businesses, creators, and entrepreneurs go live with
                stunning, high-converting websites in 7 days or less. Whether
                you're starting fresh or rebranding, our proven process delivers
                everything from strategy and copy to design and development
                without the long wait.
              </p>
              <h3 className="text-3xl text-text">Book Discovery Call</h3>

              <div className="mt-3 pb-8 overflow-hidden rounded-md w-full aspect-[16/9]">
                <Image
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                  src="/resouce2.png"
                  width={488}
                  height={475}
                  alt="content bank"
                />
              </div>

              <Link
                href="https://cal.com/lumixus-studio/30min?overlayCalendar=true"
                target="_blank"
              >
                <Button className="justify-center flex items-center space-x-2 w-full">
                  <span className="block">View Details</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default page;
