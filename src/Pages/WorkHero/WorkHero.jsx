import React from "react";
import Container from "../../components/Common/Container";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const WorkHero = () => {
  return (
    <>
      <section className="bg-[#F4F6FC] py-24 ">
        <Container>
          <div className="text-center">
            <span className="gblf">What We Created</span>
            <h1 className="gbl-blog pt-2 pb-6">Our Work Portfolio</h1>
            <p className="gblf w-[733px] text-center mx-auto">
              We help teams create great digital products by providing them with
              tools and technology to make the design-to-code process
              universally accessible.
            </p>
            <div className="pt-8 flex items-center justify-center gap-7">
              <FaFacebook className="text-2xl cursor-pointer" />
              <FaTwitter className="text-2xl cursor-pointer"/>
              <FaInstagram className="text-2xl cursor-pointer"/>
              <FaLinkedin className="text-2xl cursor-pointer"/>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WorkHero;
