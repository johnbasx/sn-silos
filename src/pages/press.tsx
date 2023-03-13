import Layout from "@/components/layout/Layout";
import Gallery from "@/components/press/Gallery";
import MoreBlogs from "@/components/press/MoreBlogs";
import SingleBlogPost from "@/components/press/SingleBlogPost";
import Tabs from "@/components/press/Tabs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const PressPage = () => {
  return (
    <Layout title='Press & Gallery - SN Silos | Land of Technlogy'>
      <Gallery />
      <SingleBlogPost />
      <MoreBlogs />
    </Layout>
  );
};

export default PressPage;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["press"])),
  },
});
