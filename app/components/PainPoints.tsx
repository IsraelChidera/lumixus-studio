import React from "react";
import Container from "@/app/components/Elements/Container";
import { TfiFaceSad } from "react-icons/tfi";

const PainPoints = () => {
  return (
    <section className="py-[100px]">
      <Container>
        <p className="text-text uppercase text-center lg:text-base text-sm font-medium">
          <span className="text-primary">Running a business</span> shouldn't
          feel this hard
        </p>

        <h2 className="pt-1 text-text lg:text-[55px] text-[36px] leading-[120%] text-center font-medium">
          Does this sound like your{" "}
          <span className="text-accent">business?</span>
        </h2>

        <div className="mt-14 flex justify-center items-center w-full">
          <div className="lg:w-3/4">
            <div className="bg-accent text-white rounded-t-[28px] py-2.5 px-5 text-center">
              <p className="text-sm lg:text-[21px]">Does this sound and feel familiar?</p>
            </div>
            <div className="bg-white p-5 border border- rounded-b-[28px]">
              <ul className="grid lg:grid-cols-2 gap-4">
                <li className="flex items-center space-x-2">
                  <TfiFaceSad className="w-[21px] h-[21px]" />
                  <p className="text-base">
                    Leads come in, but follow-ups are inconsistent
                  </p>
                </li>

                <li className="flex items-center space-x-2">
                  <TfiFaceSad className="w-[21px] h-[21px]" />
                  <p className="text-base">You want more sales</p>
                </li>

                <li className="flex items-center space-x-2">
                  <TfiFaceSad className="w-[21px] h-[21px]" />
                  <p className="text-base">
                    Your online presence doesn't build trust fast enough
                  </p>
                </li>

                <li className="flex items-center space-x-2">
                  <TfiFaceSad className="w-[21px] h-[21px]" />
                  <p className="text-base">
                    You're busy, but growth isn't consistent
                  </p>
                </li>

                <li className="flex items-center space-x-2">
                  <TfiFaceSad className="w-[21px] h-[21px]" />
                  <p className="text-base">
                    You post online, but it doesn't bring real customers
                  </p>
                </li>

                <li className="flex items-center space-x-2">
                  <TfiFaceSad className="w-[21px] h-[21px]" />
                  <p className="text-base">
                    Your business looks good offline, but weak online
                  </p>
                </li>

                <li className="flex items-center space-x-2">
                  <TfiFaceSad className="w-[21px] h-[21px]" />
                  <p className="text-base">
                    People ask for price, then disappear
                  </p>
                </li>

                <li className="flex items-center space-x-2">
                  <TfiFaceSad className="w-[21px] h-[21px]" />
                  <p className="text-base">
                    Referrals are your main source of sales
                  </p>
                </li>

                <li className="flex items-center space-x-2">
                  <TfiFaceSad className="w-[21px] h-[21px]" />
                  <p className="text-base">
                    Your processes aren't automated, so everything relies on you
                  </p>
                </li>

                <li className="flex items-center space-x-2">
                  <TfiFaceSad className="w-[21px] h-[21px]" />
                  <p className="text-base">
                    You want to scale but your business isn't built for it
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PainPoints;
