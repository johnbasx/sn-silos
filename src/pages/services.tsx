import OurSolutions from "@/components/home/OurSolutions";
import DiseaseControl from "@/components/services/DiseaseControl";
import EndToEndSupply from "@/components/services/EndToEndSupply";
import HighQualityLand from "@/components/services/HighQualityLand";
import HowWeWorkTimeline from "@/components/services/HowWeWorkTimeline";
import LandDescription from "@/components/services/LandDescription";
import LandPlan from "@/components/services/LandPlan";
import OrganicChef from "@/components/services/OrganicChef";
import ServicesWeAreOffering from "@/components/services/ServicesWeAreOffering";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <LandDescription />
      <LandPlan />
      <HighQualityLand />
      <OrganicChef />
      <EndToEndSupply />
      <OurSolutions />
      <HowWeWorkTimeline />
      <ServicesWeAreOffering />
      <DiseaseControl />
    </>
  );
};

export default ServicesPage;
