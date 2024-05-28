import React from "react";
import TeamCard from "../components/PersonalCard";
import Banner from "../components/BannerDetail";

function Team() {
  return (
    <>
      <TeamCard />
      <Banner title="Kom bij ons team!" description="Zin om mee te duiken in onze uitdagende projecten? Gemotiveerde collega’s zijn altijd welkom!" buttonText="Bekijk onze vacatures" bgcolor="darkblue" />
    </>
  );
}

export default Team;
