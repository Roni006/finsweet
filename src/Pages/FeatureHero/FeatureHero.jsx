import React from "react";
import Container from "../../components/Common/Container";
import featureHero from "../../assets/images/feature-hero-bg.png"

const FeatureHero = () => {
  return (
    <>
      <section className="bg-[#1C1E53] py-[126px] ">
        <Container>
          <div className="maintContent flex items-center justify-between gap-15">
            <div className="">
              <h1 className="text-[54px] w-[466px] leading-[74px] text-[#ffffff] font-poppins font-bold ">
                All the features you need
              </h1>
              <p className="gbls w-[562px] pt-6 pb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="button flex items-center gap-10">
                <a href="#" className="btns">
                  View Our Works
                </a>
              </div>
            </div>
            <div className="w-[638px]">
              <img src={featureHero} alt="" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FeatureHero;
