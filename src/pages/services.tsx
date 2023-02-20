import HighQualityLand from "@/components/services/HighQualityLand";
import LandDescription from "@/components/services/LandDescription";
import LandPlan from "@/components/services/LandPlan";
import OrganicChef from "@/components/services/OrganicChef";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <LandDescription />
      <LandPlan />
      <HighQualityLand />
      <OrganicChef />
    </>
  );
};

export default ServicesPage;
