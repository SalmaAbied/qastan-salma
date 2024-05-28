import React from "react";
import TeamCard from "../components/PersonalCard";
import Banner from "../components/BannerDetail";
import HeroWText from "../components/HeroWText";

function Team() {
  return (
    <>
      <HeroWText badgeText="Team" heading="Ons team" paragraph="Bij Qastan, staan onze toegewijde professionals klaar om uw IT-uitdagingen aan te pakken. Met een focus op samenwerking en innovatie leveren we op maat gemaakte oplossingen die uw bedrijf vooruit helpen. Of het nu gaat om softwareontwikkeling, netwerkbeheer of IT-advies, ons team staat voor u klaar. Ontdek hoe we uw digitale strategie kunnen versterken en uw bedrijf naar nieuwe hoogten kunnen tillen." buttonText="Werken bij Qastan" buttonLink="/Jobs" imageUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <TeamCard />
      <Banner title="Kom bij ons team!" description="Zin om mee te duiken in onze uitdagende projecten? Gemotiveerde collega’s zijn altijd welkom!" buttonText="Bekijk onze vacatures" buttonLink="/Jobs" bgcolor="darkblue" />
    </>
  );
}

export default Team;
