import React from "react";
import Hero from "../components/Hero";
import LogoSlider from "../components/Slider";
import CardFullW from "../components/CardFullW";
import Tabs from "../components/Tabs";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <LogoSlider />
      <CardFullW />
      <Tabs />
    </>
  );
};

export default Home;
