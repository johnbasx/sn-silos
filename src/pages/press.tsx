import Gallery from "@/components/press/Gallery";
import MoreBlogs from "@/components/press/MoreBlogs";
import SingleBlogPost from "@/components/press/SingleBlogPost";
import Tabs from "@/components/press/Tabs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const PressPage = () => {
  return (
    <>
      <Gallery />
      <SingleBlogPost />
      <MoreBlogs />
    </>
  );
};

export default PressPage;

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["gallery"])),
  },
});
