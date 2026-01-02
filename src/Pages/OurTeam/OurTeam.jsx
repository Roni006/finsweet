import React from "react";
import Container from "../../components/Common/Container";
import mission1 from "../../assets/mission/mission1.png";
import mission2 from "../../assets/mission/mission2.png";
import mission3 from "../../assets/mission/mission3.png";
import mission4 from "../../assets/mission/mission4.png";
import teamBg from "../../assets/images/teambg.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const OurTeam = () => {
  const teamImg = [
    {
      teamImages: mission1,
      heading: "John Smith",
      desig: "CTO",
    },
    {
      teamImages: mission2,
      heading: "Simon Adams",
      desig: "COT",
    },
    {
      teamImages: mission3,
      heading: "Paul Jones",
      desig: "Design Lead",
    },
    {
      teamImages: mission4,
      heading: "Sara Hardin",
      desig: "Project Manager",
    },
  ];
  return (
    <>
      <section className="bg-[#F4F6FC] py-32 ">
        <Container>
          <div className=" ">
            <h1 className="gbl-blog mb-12 text-center">Meet our team </h1>
            <div className="flex gap-8 items-center">
              {teamImg.map((teamDetails) => (
                <div className="relative teaminfo bg-[#ffffff] w-[296px] pt-11 pb-[38px] px-11 text-center rounded-md">
                  <div>
                    <div className="">
                      <img
                        className="hiddenImg absolute left-16"
                        src={teamBg}
                        alt=""
                      />
                    </div>
                    <div className="icons flex gap-3">
                      <FaFacebook className="brand" />
                      <FaTwitter className="brand" />
                      <FaLinkedin className="brand" />
                    </div>
                  </div>

                  <img
                    className="showImg h-[168px] w-168px] rounded-full text-center mx-auto  "
                    src={teamDetails.teamImages}
                    alt="mission image"
                  />
                  <h4 className="text-[24px] fontm-medium font-poppins leading-9 text-[#1d2130]  mt-[30px] ">
                   {teamDetails.heading}
                  </h4>
                  <span className="txt-[16px] leadgin-7 font-normal font-poppins text-[#1D2130]/70 ">
                    {teamDetails.desig}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurTeam;
