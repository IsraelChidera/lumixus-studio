import React from "react";
import Container from "@/app/components/Elements/Container";

const details = [
  {
    id: 1,
    icon: "1",
    title: "Quick Intro Call",
    description:
      "A short 20-minute call to understand your goals and see how we can help."
  },
  {
    id: 2,
    icon: "2",
    title: "Strategy & Proposal",
    description:
      "We map out a plan tailored to your goals and provide a clear proposal."
  },
  {
    id: 3,
    icon: "3",
    title: "Onboarding",
    description:
      "Once we're set, we kick off the project and onboard to our CRM"
  },
  {
    id: 4,
    icon: "4",
    title: "Launch & Ongoing Support",
    description:
      "It’s not over until your product scale. Get unlimited revisions that meets your exact needs and is fit for launch."
  }
];
const Process = () => {
  return (
    <section>
      <Container>
        <p className="text-text uppercase text-center lg:text-base text-sm font-medium">
          Our approach
        </p>

        <h2 className="text-text text-4xl text-center font-medium">
          Our Simple 4 Step Process
        </h2>

        <div className="mt-20 grid lg:grid-cols-4 lg:gap-x-3 gap-x-0">
          {details.map((item) => (
            <div key={item.id} className="bg-white py-4 px-2">
              <p className="w-fit rounded-[12px] text-[18px] p-3 text-accent border-2 border-accent">
                {item.icon}
              </p>

              <div className="space-y-1.5 mt-[24px]">
                <h3 className="text-text text-base font-semibold leading-[120%]">
                  {item.title}
                </h3>
                <p className="text-sm font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
