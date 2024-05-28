import React from "react";
import Map from "../components/Map";
import Newsletter from "../components/Newsletter";
import Background from "../components/Background";
import ContactSection from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Background />
      <ContactSection />
      <Newsletter />
      <Map />
    </>
  );
}

export default Contact;
