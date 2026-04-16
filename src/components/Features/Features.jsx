import React from "react";
import Container from "../Common/Container";
import Feature from "../../Pages/Feature/Feature";
import FeatureHero from "../../Pages/FeatureHero/FeatureHero";
import Logo from "../../Pages/Logo/Logo";
import Benefit from "../../Pages/Benefit/Benefit";
import BestInClass from "../../Pages/BestInClass/BestInClass";
import Rivisions from "../../Pages/Rivisions/Rivisions";
import Support from "../../Pages/Support/Support";
import Deliver from "../../Pages/Deliver/Deliver";
import FAQ from "../../Pages/FAQ/FAQ";

const Features = () => {
  return (
    <>
      <FeatureHero />
      <Logo />
      <Benefit />
      <BestInClass />
      <Rivisions />
      <Support />
      <Deliver />
      <FAQ />
    </>
  );
};

export default Features;
