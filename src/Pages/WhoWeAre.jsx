import React from "react";
import Container from "../components/Common/Container";

const WhoWeAre = () => {
  return (
    <>
      <section className="py-32 ">
        <Container>
          <div className="main-content">
            <div className="bg-[#F4F5F5] py-20 px-20 flex items-center gap-15">
              <div className="leftPart w-[516px]">
                <p className="gblf pb-2">Who We Are</p>
                <span class="whowe-title">Goal Focussed</span>
                <p className="gblsw pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="rightPart w-[516px]">
                <span class="whowe-title">Continuous improvement</span>
                <p className="gblsw pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div>
                <img src="../assets/images/whowe-bg.png" alt="who we are" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhoWeAre;
