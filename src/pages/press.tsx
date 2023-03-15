import Layout from "@/components/layout/Layout";
import Gallery from "@/components/press/Gallery";
import MoreBlogs from "@/components/press/MoreBlogs";
import SingleBlogPost from "@/components/press/SingleBlogPost";
import Tabs from "@/components/press/Tabs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import { useTranslation } from "next-i18next";

const PressPage = () => {
  const { t } = useTranslation("press");

  return (
    <Layout title={t("title")}>
      <Gallery />
      <SingleBlogPost />
      <MoreBlogs />
    </Layout>
  );
};

export default PressPage;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["press", "common"])),
  },
});
