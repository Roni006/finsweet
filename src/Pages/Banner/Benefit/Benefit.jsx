import React from "react";
import Container from "../../../components/Common/Container";
// ! image import
import iconTwo from "../../../assets/fearure/Icon2.png";
import iconFive from "../../../assets/fearure/Icon5.png";
import iconSix from "../../../assets/fearure/Icon6.png";

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

  return (
    <>
      <section className=" py-[128px]">
        <Container>
          <div className="top w-[630px] text-center mx-auto ">
            <h2 className="gblh mt-2">The benefits of working with us</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 gap-y-6 mt-12">
            {featureContent.map((feature) => (
              <div className="w-[405px] bg-[#F4F6FC] py-10 px-12 rounded-sm shadow">
                <img src={feature.icon} alt="" />
                <h4 className="gbl-fh pt-[22px] pb-3">{feature.heading}</h4>
                <p className="font-poppins font-normal text-[16px] w-[324px]">{feature.paragraph}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Benefit;
