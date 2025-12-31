import React from "react";
import Container from "../../components/Common/Container";
import mission1 from "../../assets/mission/mission1.png";
const OurTeam = () => {
  return (
    <>
      <section className="bg-[#F4F6FC] py-[128px] ">
        <Container>
          <div className=" ">
            <h1 className="gbl-blog mb-12 text-center">Meet our team </h1>
            <div className=" ">
              <div className="bg-[#fff] w-[296px] pt-[44px] pb-[38px] px-[44px] text-center rounded-md">
                <img className="h-[168px] w-168px] rounded-full text-center mx-auto" src={mission1} alt="mission image" />
                <h4 className="text-[24px] fontm-medium font-poppins leading-9 text-[#1d2130]  mt-[30px] ">Simon</h4>
                <span className="txt-[16px] leadgin-7 font-normal font-poppins text-[#1D2130]/70 ">CTO</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurTeam;
