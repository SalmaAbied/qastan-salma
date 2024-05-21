import React from "react";
import Hero from "../components/Hero";
import LogoSlider from "../components/Slider";
import CardFullW from "../components/CardFullW";
import Tabs from "../components/Tabs";
import Banner from "../components/Banner";
import CardFullWTwo from "../components/CardFullWTwo";
import CardWImage from "../components/CardWImage";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <LogoSlider />
      <CardFullW />
      <Tabs />
      <Banner />
      <CardFullWTwo />
      <CardWImage />
    </>
  );
};

export default Home;
