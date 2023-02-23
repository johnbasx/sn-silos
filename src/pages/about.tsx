import AboutHero from "@/components/about/AboutHero";
import OurJourney from "@/components/about/OurJourney";
import OurVision from "@/components/about/OurVision";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <OurVision />
      <OurJourney />
    </>
  );
};

export default AboutPage;
