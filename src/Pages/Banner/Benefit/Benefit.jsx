import React from "react";
import Container from "../../../components/Common/Container";
// ! image import
import iconTwo from "../../../assets/fearure/Icon2.png";
import iconFive from "../../../assets/fearure/Icon5.png";
import iconSix from "../../../assets/fearure/Icon6.png";
//! brand image
import brand1 from "../../../assets/brand/Logo 1.png";
import brand2 from "../../../assets/brand/Logo 2.png";
import brand3 from "../../../assets/brand/Logo 3.png";
import brand4 from "../../../assets/brand/Logo 4.png";
import brand5 from "../../../assets/brand/Logo 5.png";

const Benefit = () => {
  const featureContent = [
    {
      icon: iconFive,
      heading: "Customize with ease",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    },
    {
      icon: iconTwo,
      heading: "Perfectly Responsive",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    },
    {
      icon: iconSix,
      heading: "Friendly Support",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
    },
  ];

  const brandImage = [
    {
      brand: brand1,
    },
    {
      brand: brand2,
    },
    {
      brand: brand3,
    },
    {
      brand: brand4,
    },
    {
      brand: brand5,
    },
  ];

  return (
    <>
      <section className=" py-32">
        <Container>
          <div>
            <div>
              <div className="top w-[630px] text-center mx-auto ">
                <h2 className="gblh mt-2">The benefits of working with us</h2>
              </div>
              <div className="grid grid-cols-3 gap-4 gap-y-6 mt-12">
                {featureContent.map((feature) => (
                  <div className="w-[405px] bg-[#F4F6FC] py-10 px-12 rounded-sm shadow">
                    <img src={feature.icon} alt="" />
                    <h4 className="gbl-fh pt-[22px] pb-3">{feature.heading}</h4>
                    <p className="font-poppins font-normal text-[16px] w-[324px]">
                      {feature.paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="brand flex items-center gap-[90px] justify-around">
              <div className="mt-12">
                <h1 className="text-[38px] font-poppins leading-[54px] text-[#282938] font-semibold ">
                  100.000+
                </h1>
                <p className="font-poppins font-normal text-[16px] leading-7 text-[#282938] ">
                  Finsweet Users
                </p>
              </div>
              <div className="flex items-center gap-15 mt-[75px]">
                <img src={brand1} alt="brand image" />
                <img src={brand2} alt="brand image" />
                <img src={brand3} alt="brand image" />
                <img src={brand4} alt="brand image" />
                <img src={brand5} alt="brand image" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Benefit;
