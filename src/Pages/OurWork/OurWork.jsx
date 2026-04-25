import React, { useState } from "react";
import Container from "../../components/Common/Container";

import work1 from "../../assets/portfolio/woek1.png";
import work2 from "../../assets/portfolio/woek2.png";
import work3 from "../../assets/portfolio/woek3.png";
import work4 from "../../assets/portfolio/woek4.png";
import work5 from "../../assets/portfolio/woek5.png";
import work6 from "../../assets/portfolio/woek6.png";

import { IoIosArrowRoundForward } from "react-icons/io";

const OurWork = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabClass = (tab) =>
    `text-[15px] text-center py-2.5 px-5 cursor-pointer transition-all ${
      activeTab === tab
        ? "text-[#2405F2] font-bold border-blue-700"
        : "text-slate-600 font-medium border-transparent hover:text-blue-700"
    }`; 

  return (
    <>
      <section className="py-28">
        <Container>
          <div>
            <div className="p-4 flex flex-col justify-center items-center">
              <ul className="w-max flex gap-2">
                <li
                  className={tabClass("all")}
                  onClick={() => setActiveTab("all")}
                >
                  All
                </li>

                <li
                  className={tabClass("ui design")}
                  onClick={() => setActiveTab("ui design")}
                >
                  UI Design
                </li>

                <li
                  className={tabClass("Webflow Design")}
                  onClick={() => setActiveTab("Webflow Design")}
                >
                  Webflow Design
                </li>

                <li
                  className={tabClass("Figma Design")}
                  onClick={() => setActiveTab("Figma Design")}
                >
                  Figma Design
                </li>
              </ul>

              {/*All tabs contents  */}

              <div className="grid grid-cols-2 items-center justify-between gap-8.75">
                {activeTab === "all" && (
                  <div className="max-w-7xl mx-auto mt-[30px] rotate">
                    <img
                      className="rounded-md"
                      src={work1}
                      alt="portfolio image"
                    />
                    <h1
                      className="whowe-title mt-6
                  "
                    >
                      Template 1
                    </h1>
                    <p className="gblsw pt-3 pb-6">
                      Apparently we had reached a great height in the
                      atmosphere, for the sky was a dead black, and the stars
                      had ceased to twinkle.
                    </p>
                    <a
                      href="#"
                      className="gblsw font-bold flex items-center gap-2"
                    >
                      View Portfolio
                      <span className="text-[30px]  ">
                        <IoIosArrowRoundForward />
                      </span>
                    </a>
                  </div>
                )}

                {activeTab === "all" && (
                  <div className="max-w-7xl mx-auto mt-[30px]  rotate">
                    <img
                      className="rounded-md"
                      src={work2}
                      alt="portfolio image"
                    />
                    <h1
                      className="whowe-title mt-6
                  "
                    >
                      Template 2
                    </h1>
                    <p className="gblsw pt-3 pb-6">
                      Apparently we had reached a great height in the
                      atmosphere, for the sky was a dead black, and the stars
                      had ceased to twinkle.
                    </p>
                    <a
                      href="#"
                      className="gblsw font-bold flex items-center gap-2"
                    >
                      View Portfolio
                      <span className="text-[30px]  ">
                        <IoIosArrowRoundForward />
                      </span>
                    </a>
                  </div>
                )}

                {activeTab === "all" && (
                  <div className="max-w-7xl mx-auto mt-[30px] rotate">
                    <img
                      className="rounded-md"
                      src={work3}
                      alt="portfolio image"
                    />
                    <h1
                      className="whowe-title mt-6
                  "
                    >
                      Template 3
                    </h1>
                    <p className="gblsw pt-3 pb-6">
                      Apparently we had reached a great height in the
                      atmosphere, for the sky was a dead black, and the stars
                      had ceased to twinkle.
                    </p>
                    <a
                      href="#"
                      className="gblsw font-bold flex items-center gap-2"
                    >
                      View Portfolio
                      <span className="text-[30px]  ">
                        <IoIosArrowRoundForward />
                      </span>
                    </a>
                  </div>
                )}

                {activeTab === "all" && (
                  <div className="max-w-7xl mx-auto mt-[30px] rotate">
                    <img
                      className="rounded-md"
                      src={work4}
                      alt="portfolio image"
                    />
                    <h1
                      className="whowe-title mt-6
                  "
                    >
                      Template 4
                    </h1>
                    <p className="gblsw pt-3 pb-6">
                      Apparently we had reached a great height in the
                      atmosphere, for the sky was a dead black, and the stars
                      had ceased to twinkle.
                    </p>
                    <a
                      href="#"
                      className="gblsw font-bold flex items-center gap-2"
                    >
                      View Portfolio
                      <span className="text-[30px]  ">
                        <IoIosArrowRoundForward />
                      </span>
                    </a>
                  </div>
                )}

                {activeTab === "all" && (
                  <div className="max-w-7xl mx-auto mt-[30px] rotate">
                    <img
                      className="rounded-md"
                      src={work5}
                      alt="portfolio image"
                    />
                    <h1
                      className="whowe-title mt-6
                  "
                    >
                      Template 5
                    </h1>
                    <p className="gblsw pt-3 pb-6">
                      Apparently we had reached a great height in the
                      atmosphere, for the sky was a dead black, and the stars
                      had ceased to twinkle.
                    </p>
                    <a
                      href="#"
                      className="gblsw font-bold flex items-center gap-2"
                    >
                      View Portfolio
                      <span className="text-[30px]  ">
                        <IoIosArrowRoundForward />
                      </span>
                    </a>
                  </div>
                )}

                {activeTab === "all" && (
                  <div className="max-w-7xl mx-auto mt-[30px] rotate">
                    <img
                      className="rounded-md"
                      src={work6}
                      alt="portfolio image"
                    />
                    <h1
                      className="whowe-title mt-6
                  "
                    >
                      Template 6
                    </h1>
                    <p className="gblsw pt-3 pb-6">
                      Apparently we had reached a great height in the
                      atmosphere, for the sky was a dead black, and the stars
                      had ceased to twinkle.
                    </p>
                    <a
                      href="#"
                      className="gblsw font-bold flex items-center gap-2"
                    >
                      View Portfolio
                      <span className="text-[30px]  ">
                        <IoIosArrowRoundForward />
                      </span>
                    </a>
                  </div>
                )}
              </div>
              <div className="flex gap-10">
                {/*All tabs contents  */} 
                {activeTab === "ui design" && (
                  <div className="max-w-2xl mt-8">
                    <h4 className="text-base font-semibold">
                      Content Management
                    </h4>
                  </div>
                )}

                {activeTab === "Webflow Design" && (
                  <div className="max-w-2xl mt-8">
                    <h4 className="text-base font-semibold">Your Profile</h4>
                  </div>
                )}

                {activeTab === "Figma Design" && (
                  <div className="max-w-2xl mt-8">
                    <h4 className="text-base font-semibold">Your Profile</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurWork;
