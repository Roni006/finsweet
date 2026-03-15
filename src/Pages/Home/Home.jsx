import React from "react";
import Banner from "../Banner/Banner";
import Work from "../Work/Work";
import OurProject from "../OurProject/OurProject";
import Feature from "../Feature/Feature";
import OurClients from "../OurClients/OurClients";
import Inqiry from "../Inqiry/Inqiry";
import Blog from "../Blog/Blog";
import AboutUs from "../AboutUs/AboutUs";
import WhoWe from "../WhoWe/WhoWe";
import Process from "../Process/Process";
import OurMission from "../OurMission/OurMission";
// import Benefit from "../Benefit/Benefit";
import OurTeam from "../OurTeam/OurTeam";
import Pricing from "../Pricing/Pricing";

const Home = () => {
  return (
    <>
      <Banner />
      <Work />
      <OurProject />
      <Feature />
      <OurClients />
      <Inqiry />
      <Blog />
      <AboutUs />
      <WhoWe />
      <Process />
      <OurMission />
      {/* <Benefit /> */}
      <OurTeam />
      <Pricing />
    </>
  );
};

export default Home;
