import DisplayCareers from "@/components/career/DisplayCareers";
import Layout from "@/components/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { useTranslation } from "next-i18next";

const CareerPage = () => {
  const { t } = useTranslation("career");

  return (
    <Layout title={t("title")}>
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
