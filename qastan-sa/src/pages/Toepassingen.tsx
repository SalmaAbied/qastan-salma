import React from "react";
import CardWImage from "../components/Filters";
import LogoSlider from "../components/Slider";
import Banner from "../components/BannerDetail";

function Toepassingen() {
  return (
    <>
      <CardWImage />
      <LogoSlider />
      <Banner title="Niet gevonden wat je zoekt?" description="Niet getreurd! Ook als je een specifiek project voor ogen hebt, kunnen wij jou helpen. Hoe groot of klein de uitdaging ook is, samen gaan we op zoek naar de best mogelijke oplossing die 100% bij je past." buttonText="Vraag een gesprek aan" bgcolor="lightgray" />
    </>
  );
}

export default Toepassingen;
