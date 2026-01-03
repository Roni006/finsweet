import React from "react";
import Container from "../../components/Common/Container";
import ColorPointer from "../../assets/ColorPointer.svg";
import BWPointer from "../../assets/BWPointer.svg";
const Pricing = () => {
  return (
    <>
      <section className="pt-32">
        <Container>
          <div>
            <div className="w-[562px] text-center mx-auto mb-15">
              <h1 className="gblh">Our Pricings Plan</h1>
              <p className="gblf">
                When you’re ready to go beyond prototyping in Figma, Webflow is
                ready to help you bring your designs to life — without coding
                them.
              </p>
            </div>
            <div className="mb-[120px] flex gap-7 items-center">
              <div className="bg-[#f4f6fc] w-[406px] pt-11 pb-[62px] ps-12 pe-[76px] rounded-md ">
                <h2 className="flex items-center gap-[5px] text-[38px] font-semibold font-poppins text-[#282938] leading-14 ">
                  $299{" "}
                  <span className="font-normal leading-7 text-[#2405f2] text-[16px]  ">
                    Per Design
                  </span>
                </h2>
                <h3 className="font-medium font-poppins text-[24px] leading-9 text-[#282938] mt-5">
                  Landing Page{" "}
                </h3>
                <p className="font-normal font-poppins leading-7 text-[#282938] w-[281px] pt-2 ">
                  When you’re ready to go beyond prototyping in Figma,{" "}
                </p>
                <div className="mt-[78px] flex flex-col gap-y-5">
                  <div className=" flex items-center gap-3 ">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf">All limited links</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf">All limited links</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf">Own analytics platform</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf">Chat support</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={BWPointer} alt=" price icon" />
                    </span>
                    <p className="gblf">Optimize hashtags</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={BWPointer} alt=" price icon" />
                    </span>
                    <p className="gblf">Unlimited users</p>
                  </div>
                </div>
                <div className="  text-center flex items-center justify-center mx-auto ] ">
                  <a
                    href="#"
                    className="py-4 px-[77px] bg-[#282938] text-white text-[18px] leading-8 font-semibold font-mono rounded-full cursor-pointer mt-20  "
                  >
                    Get Started
                  </a>
                </div>
              </div>

              <div className="bg-[#1C1E53] text-white w-[406px] pt-11 pb-[62px] ps-12 pe-[76px] rounded-md ">
                <h2 className="flex items-center gap-[5px] text-[38px] font-semibold font-poppins text-[#ffffff] leading-14 ">
                  $399
                  <span className="font-normal leading-7 text-[#FCD980] text-[16px]  ">
                    Multi Design
                  </span>
                </h2>
                <h3 className="font-medium font-poppins text-[24px] leading-9 text-[#ffffff] mt-5">
                  Website Page
                </h3>
                <p className="font-normal font-poppins leading-7 text-[#ffffff] w-[281px] pt-2 ">
                  When you’re ready to go beyond prototyping in Figma, Webflow’s
                  ready to help.
                </p>
                <div className="mt-[78px] flex flex-col gap-y-5">
                  <div className=" flex items-center gap-3 ">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf !text-white">All limited links</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf !text-white">All limited links</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf !text-white">Own analytics platform</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf !text-white">Chat support</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf !text-white">Optimize hashtags</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf !text-white">Unlimited users</p>
                  </div>
                </div>
                <div className="  text-center flex items-center justify-center mx-auto ] ">
                  <a
                    href="#"
                    className="py-4 px-[77px] bg-[#FCD980] text-[#282938] text-[18px] leading-8 font-semibold font-mono rounded-full cursor-pointer mt-20  "
                  >
                    Get Started
                  </a>
                </div>
              </div>

              <div className="bg-[#f4f6fc] w-[406px] pt-11 pb-[62px] ps-12 pe-[76px] rounded-md ">
                <h2 className="flex items-center gap-2.5 text-[38px] font-semibold font-poppins text-[#282938] leading-14 ">
                  $499 +
                  <span className="font-normal leading-7 text-[#2405f2] text-[16px]  ">
                    Per Design
                  </span>
                </h2>
                <h3 className="font-medium font-poppins text-[24px] leading-9 text-[#282938] mt-5">
                  Complex Project
                </h3>
                <p className="font-normal font-poppins leading-7 text-[#282938] w-[281px] pt-2 ">
                  When you’re ready to go beyond prototyping in Figma,
                </p>
                <div className="mt-[78px] flex flex-col gap-y-5">
                  <div className=" flex items-center gap-3 ">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf">All limited links</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf">All limited links</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf">Own analytics platform</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf">Chat support</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf">Optimize hashtags</p>
                  </div>

                  <div className=" flex items-center gap-3">
                    <span>
                      <img src={ColorPointer} alt=" price icon" />
                    </span>
                    <p className="gblf">Unlimited users</p>
                  </div>
                </div>
                <div className="text-center flex items-center justify-center mx-auto ">
                  <a
                    href="#"
                    className="py-4 px-[77px] bg-[#282938] text-white text-[18px] leading-8 font-semibold font-mono rounded-full cursor-pointer mt-20  "
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Pricing;
