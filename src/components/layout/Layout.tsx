import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({
  children,
  title = "SN Silos | Land of Technology",
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
