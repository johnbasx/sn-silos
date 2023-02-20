import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/Footer";
import NextNProgress from "nextjs-progressbar";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NextNProgress
        height={6}
        color='#10b981'
        options={{ showSpinner: false }}
      />
      <Navbar />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
