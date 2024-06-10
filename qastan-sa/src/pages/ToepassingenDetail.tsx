import React from "react";
import Banner from "../components/BannerDetail";
import CardWImage from "../components/CardWImage";
import ArtikelToepassingen from "../components/ArtikelToepassingen";

const ToepassingenDetail: React.FC = () => {
  return (
    <>
      <ArtikelToepassingen />
      <CardWImage />
      <Banner title="Niet gevonden wat je zoekt?" description="Niet getreurd! Ook als je een specifiek project voor ogen hebt, kunnen wij jou helpen. Hoe groot of klein de uitdaging ook is, samen gaan we op zoek naar de best mogelijke oplossing die 100% bij je past." buttonText="Vraag een gesprek aan" buttonLink="/Contact" bgcolor="lightgray" />
    </>
  );
};

export default ToepassingenDetail;
