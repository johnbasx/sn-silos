import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeroSection from "@/components/home/hero-section/HeroSection";
import Deals from "@/components/home/Deals";
import LetsTalk from "@/components/home/LetsTalk";
import Offers from "@/components/home/Offers";
import OrganicFarming from "@/components/home/OrganicFarming";
import IOTServices from "@/components/home/IOTServices";
import QualityFood from "@/components/home/QualityFood";
import WhyUs from "@/components/home/WhyUs";
import DownloadApp from "@/components/home/DownloadApp";
import SomeDetail from "@/components/home/SomeDetail";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import Partners from "@/components/home/Partners";
import Layout from "@/components/layout/Layout";
import ServicesWeAreOffering from "@/components/services/ServicesWeAreOffering";
import HowWeWorkTimeline from "@/components/services/HowWeWorkTimeline";

import { useTranslation } from "next-i18next";

const HomePage = () => {
  const { t } = useTranslation(["home", "common"]);

  return (
    <Layout title={t("home:title")}>
      <HeroSection />
      <Deals />
      {/* <OurBusinessUnits /> */}
      {/* <OurSolutions /> */}
      <ServicesWeAreOffering />
      <HowWeWorkTimeline />

      <LetsTalk />
      <Offers />
      <OrganicFarming />
      <IOTServices />
      <QualityFood />
      <WhyUs />
      <TestimonialSection />
      <SomeDetail />
      <DownloadApp />
      <Partners />
    </Layout>
  );
};

export default HomePage;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home", "common"])),
  },
});
