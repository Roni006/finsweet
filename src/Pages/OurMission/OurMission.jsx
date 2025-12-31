import React from "react";
import Container from "../../components/Common/Container";
import mission1 from "../../assets/about-bg/mission1.png";
import mission2 from "../../assets/about-bg/mission2.png";
const OurMission = () => {
  return (
    <>
      <section className="bg-[#EEF4FA] py-[128px] ">
        <Container>
          <div className="mainDiv">
            <div className="flex items-center gap-[140px]">
              <div className="w-[623px]">
                <h6 className="text-[18px] leading-8 font-poppins font-medium text-[#282938]">
                  Our Mission
                </h6>
                <h2 className=" text-[38px] leading-[72px] font-poppins font-semibold text-[#282938] mb-[16px] ">
                  Inspire, Innovate, Share
                </h2>
                <p className="gblsw w-[484px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <img src={mission1} alt="missoin image" />
              </div>
            </div>

            <div className="flex flex-row-reverse items-center gap-[140px] mt-[30px] ">
              <div className="w-[623px]">
                <h6 className="text-[18px] leading-8 font-poppins font-medium text-[#282938]">
                  Our Mission
                </h6>
                <h2 className=" text-[38px] leading-[72px] font-poppins font-semibold text-[#282938] mb-[16px] ">
                  Laser focus
                </h2>
                <p className="gblsw w-[484px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <img src={mission2} alt="missoin image" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurMission;
