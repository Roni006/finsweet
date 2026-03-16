import React from "react";
import Container from "../components/Common/Container";
import vmisssion1 from "../assets/vmission/vmision1.png";
import vmisssion2 from "../assets/vmission/vmision2.png";

const MIssionVission = () => {
  return (
    <>
      <section className="bg-[#EEF4FA] py-32">
        <Container>
          <div>

            <div className="flex items-center justify-between">
              <div className="w-[623px]">
                <p className="gblf pb-4">Our Mission</p>
                <span className="whowe-title">Inspire, Innovate, Share</span>
                <p className="gblsw pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <img
                  className="rounded-sm"
                  src={vmisssion1}
                  alt="mission and vissino bg imager"
                />
              </div>
            </div>
            
            <div className="flex flex-row-reverse  items-center justify-between mt-25">
              <div className="w-[623px]">
                <p className="gblf pb-4">Our Vission</p>
                <span className="whowe-title">Laser Focus</span>
                <p className="gblsw pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div>
                <img
                  className="rounded-sm"
                  src={vmisssion2}
                  alt="mission and vissino bg imager"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MIssionVission;
