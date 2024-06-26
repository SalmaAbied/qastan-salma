import React from "react";
import GridPartners from "../components/GridPartners";
import Banner from "../components/BannerDetail";
import HighlightedFeatures from "../components/FeatureCards";

function Partners() {
  return (
    <>
      <HighlightedFeatures />
      {/* <GridPartners /> */}
      <Banner title="Let's team up!" description="Laat ons de mogelijkheden samen bekijken. Contacteer ons voor een samenwerking." buttonText="Contacteer ons" buttonLink="/Contact" bgcolor="darkblue" />
    </>
  );
}

export default Partners;
