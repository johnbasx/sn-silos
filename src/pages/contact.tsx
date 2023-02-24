import ContactSection from "@/components/contact/ContactSection";
import GetInTouch from "@/components/contact/GetInTouch";
import LookingForCareer from "@/components/contact/LookingForCareer";
import Layout from "@/components/layout/Layout";
import React from "react";

const ContactPage = () => {
  return (
    <Layout title='Contact - SN Silos | Land of Technlogy'>
      <ContactSection />
      <LookingForCareer />
      {/* <GetInTouch /> */}
    </Layout>
  );
};

export default ContactPage;
