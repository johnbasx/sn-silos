import ContactSection from "@/components/contact/ContactSection";
import GetInTouch from "@/components/contact/GetInTouch";
import Location from "@/components/contact/Location";
import LookingForCareer from "@/components/contact/LookingForCareer";
import Layout from "@/components/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { useTranslation } from "next-i18next";

const ContactPage = () => {
  const { t } = useTranslation("contact");
  return (
    <Layout title={t("title")}>
      <ContactSection />
      <Location />
      <LookingForCareer />
      {/* <GetInTouch /> */}
    </Layout>
  );
};

export default ContactPage;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["contact", "common"])),
  },
});
