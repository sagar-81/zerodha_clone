import React from "react";
import HeroSection from "./HeroSection";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccont from "../OpenAccount";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccont />
    </>
  );
}

export default HomePage;
