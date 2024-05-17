import React from "react";
import Hero from "../components/Hero";
import LogoSlider from "../components/Slider";
import CardFullW from "../components/CardFullW";
import Tabs from "../components/Tabs";
import Banner from "../components/Banner";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <LogoSlider />
      <CardFullW />
      <Tabs />
      <Banner />
    </>
  );
};

export default Home;
