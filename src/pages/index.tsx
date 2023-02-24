import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeroSection from "@/components/home/hero-section/HeroSection";
import Deals from "@/components/home/Deals";
import OurBusinessUnits from "@/components/home/OurBusinessUnits";
import OurSolutions from "@/components/home/OurSolutions";
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
const HomePage = () => {
  const { t } = useTranslation("common");

  return (
    <Layout title='Sn Silos | Land of Technology'>
      <HeroSection />
      <Deals />
      <OurBusinessUnits />
      <OurSolutions />
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
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
