import DisplayCareers from "@/components/career/DisplayCareers";
import Layout from "@/components/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const CareerPage = () => {
  return (
    <Layout title='Career - SN Silos | Land of Technlogy'>
      <DisplayCareers />
    </Layout>
  );
};

export default CareerPage;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["career", "common"])),
  },
});
