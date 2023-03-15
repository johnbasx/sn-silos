import OurBusinessUnits from "@/components/home/OurBusinessUnits";
import OurSolutions from "@/components/home/OurSolutions";
import Layout from "@/components/layout/Layout";
import DiseaseControl from "@/components/services/DiseaseControl";
import EndToEndSupply from "@/components/services/EndToEndSupply";
import HighQualityLand from "@/components/services/HighQualityLand";
import LandDescription from "@/components/services/LandDescription";
import LandPlan from "@/components/services/LandPlan";
import OrganicChef from "@/components/services/OrganicChef";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { useTranslation } from "next-i18next";

const ServicesPage = () => {
  const { t } = useTranslation(["common", "services"]);

  return (
    <Layout title={t("services:title")}>
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

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["services", "common"])),
  },
});
