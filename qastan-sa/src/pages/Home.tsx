import React from "react";
import Hero from "../components/Hero";
import LogoSlider from "../components/SliderHome";
import CardFullW from "../components/CardFullW";
import Tabs from "../components/Tabs";
import Banner from "../components/Banner";
import CardFullWTwo from "../components/CardFullWTwo";
import CardWImage from "../components/CardWImage";

const Home: React.FC = () => {
  return (
    <>
      <Hero /> {/* SEO */}
      <LogoSlider /> {/* SEO */}
      <CardFullW /> {/* SEO */}
      <Tabs /> {/* SEO */}
      <Banner /> {/* SEO */}
      <CardFullWTwo /> {/* SEO */}
      <CardWImage /> {/* SEO */}
    </>
  );
};

export default Home;
