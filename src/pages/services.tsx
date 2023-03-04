import OurBusinessUnits from "@/components/home/OurBusinessUnits";
import OurSolutions from "@/components/home/OurSolutions";
import Layout from "@/components/layout/Layout";
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
    <Layout title='Services - SN Silos | Land of Technlogy'>
      <LandDescription />
      <LandPlan />
      <OurBusinessUnits />

      <HighQualityLand />
      <OrganicChef />
      <EndToEndSupply />
      <OurSolutions />
      {/* <HowWeWorkTimeline /> */}
      {/* <ServicesWeAreOffering /> */}
      <DiseaseControl />
    </Layout>
  );
};

export default ServicesPage;
