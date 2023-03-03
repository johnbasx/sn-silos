import ContactSection from "@/components/contact/ContactSection";
import GetInTouch from "@/components/contact/GetInTouch";
import Location from "@/components/contact/Location";
import LookingForCareer from "@/components/contact/LookingForCareer";
import Layout from "@/components/layout/Layout";
import React from "react";

const ContactPage = () => {
  return (
    <Layout title='Contact - SN Silos | Land of Technlogy'>
      <ContactSection />
      <Location />
      <LookingForCareer />
      {/* <GetInTouch /> */}
    </Layout>
  );
};

export default ContactPage;
