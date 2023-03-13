import AboutHero from "@/components/about/AboutHero";
import OurJourney from "@/components/about/OurJourney";
import OurVision from "@/components/about/OurVision";
import Team from "@/components/about/Team";
import Layout from "@/components/layout/Layout";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const AboutPage = () => {
  return (
    <Layout title='About - SN Silos | Land of Technlogy'>
      <AboutHero />
      <OurVision />
      <OurJourney />
      <Team />
    </Layout>
  );
};

export default AboutPage;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["about", "common"])),
  },
});
