import React from "react";
import Container from "../Container";
import logo from "../../../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <section className="bg-[#1C1E53]  pt-24 ">
        <Container>
          <div className="flex justify-between gap-20 ">
            {/* left part  */}
            <div>
              <Link to="/">
                <img src={logo} alt="logo icon" />
              </Link>
              <p className="text-white font-medium font-poppins leading-7 text-[16px] max-w-[385px] p-[22px_0_50px_0] ">
                We are always open to discuss your project and improve your
                online presence.
              </p>

              <div className="bg-[#FCD980] py-3 px-[30px] flex items-center gap-7.5 max-w-[450px]">
                <div>
                  <p className="text-[#282938] font-poppins font-medium leading-8 text-[18px] ">
                    Email Me at
                  </p>
                  <span className="text-[#282938] font-normal font-poppins text-[16px] leading-7 ">
                    <a href="mailto:info@finsweet.com">info@finsweet.com</a>
                  </span>
                </div>

                <div>
                  <p className="text-[#282938] font-poppins font-medium leading-8 text-[18px] ">
                    Call Us
                  </p>
                  <span className="text-[#282938] font-normal font-poppins text-[16px] leading-7 ">
                    <a href="tel: 0927 6277 28525"> 0927 6277 28525</a>
                  </span>
                </div>
              </div>
            </div>

            {/* right part  */}
            <div>
              <h1 className="text-white text-[48px] font-semibold font-poppins leading-16">
                Let's Talk!
              </h1>
              <p className="leading-7 font-poppins text-[16px] text-white max-w-[400px] p-[14px_0_28px_0]">
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
              {/* icons  */}
              <div className="flex items-center gap-4">
                <Link href="#">
                  <FaFacebook className="text-white text-[22px] hover:text-[#f2c249] duration-300 " />
                </Link>
                <Link href="#">
                  <FaTwitter className="text-white text-[22px] hover:text-[#f2c249] duration-300 " />
                </Link>
                <Link href="#">
                  <AiOutlineInstagram className="text-white text-[22px] hover:text-[#f2c249] duration-300 " />
                </Link>
                <Link href="#">
                  <FaLinkedin className="text-white text-[22px] hover:text-[#f2c249] duration-300 " />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#ffffff] py-8 ">
        <Container>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-medium font-poppins text-[#282938]">
                ©Copyright 2022, Finsweet. All rights reserved.
              </p>
              <div>
                <ul className="flex items-center gap-8">
                  <li className="text-[16px] font-medium font-poppins text-[#282938] hover:text-[#FCD980] duration-300">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-[16px] font-medium font-poppins text-[#282938] hover:text-[#FCD980] duration-300">
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li className="text-[16px] font-medium font-poppins text-[#282938] hover:text-[#FCD980] duration-300">
                    <Link to="/features">Features</Link>
                  </li>
                  <li className="text-[16px] font-medium font-poppins text-[#282938] hover:text-[#FCD980] duration-300">
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li className="text-[16px] font-medium font-poppins text-[#282938] hover:text-[#FCD980] duration-300">
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li className="text-[16px] font-medium font-poppins text-[#282938] hover:text-[#FCD980] duration-300">
                    <Link to="/blogs">Blog</Link>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
