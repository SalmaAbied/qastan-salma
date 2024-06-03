import React from "react";
import CardDetail from "../components/CardDetail";
import HeroWText from "../components/HeroWText";
import CardWImage from "../components/Filters";

const cardData = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1587384474964-3a06ce1ce699?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Excelsior",
    description: "Onze eigen zaalvoetbalploeg voor de Ronaldo’s en Messi’s onder ons. Aangevuurd door onze kapitein Thomas, maken we van fair-play een erezaak.",
  },
  {
    id: "2",
    imageUrl: "https://www.qastan.be/swfiles/files/unsplash_pMLf5_j-2_Y-mob.jpg?nc=1708953614",
    title: "Gaming",
    description: "Geen IT’ers zonder een eigen portie gaming. Of het nu ‘Halo’, een FIFAtornooi op de Xbox of strategisch samenzweren in ‘Among Us’ is, once a nerd, always a nerd.",
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1610723112396-868baffc3843?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kicker",
    description: "‘Met band’, het ‘tikske’ of via ‘trick shot’, wekelijks strijden onze puffins in 2 competities (Pro League vs. Amateurs) om de felbegeerde beker én bijhorende bicky burger.",
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1619812787348-033587e6f8a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Friday drink",
    description: "Op vrijdag kaarten we even na. Gekoelde drankjes of een goeie kop koffie en thee zijn sowieso een must op werkdagen, maar vrijdagmiddag mag het net iets meer zijn …",
  },
];
const cardWImageData = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["ontwikkelaar"],
    bgtag: "lightblue",
    title: "React & web ontwikkelaar",
    description: "Als software-ontwikkelaar ben je dé expert bij uitstek voor alle digitalisering- en automatiseringstoepassingen van onze klanten. Samen met het team streef je er naar om nieuwe applicaties te bouwen of bestaande verder te laten evolueren en te optimaliseren. Documentatie hou je up-to-date, testen is jouw 2e natuur maar ook monitoring kent geen geheimen meer. Kortom: je ademt IT. Word je meteen enthousiast als het over digitalisering en automatisering gaat? Solliciteer vandaag nog.",
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["ontwikkelaar"],
    bgtag: "lightblue",
    title: "Software ontwikkelaar",
    description: "Als software-ontwikkelaar ben je dé expert bij uitstek voor alle digitalisering- en automatiseringstoepassingen van onze klanten. Samen met het team streef je er naar om nieuwe applicaties te bouwen of bestaande verder te laten evolueren en te optimaliseren. Documentatie hou je up-to-date, testen is jouw 2e natuur maar ook monitoring kent geen geheimen meer. Kortom: je ademt IT. Word je meteen enthousiast als het over digitalisering en automatisering gaat? Solliciteer vandaag nog.",
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["IT-infrastructuur"],
    bgtag: "darkblue",
    title: "Support engineer",
    description: "Als support engineer ben je een belangrijke schakel in de ondersteuning van de IT-infrastructuur bij onze klanten. Je neemt initiatief en denkt mee met de klant om steeds een geschikte oplossing te vinden. ",
  },
];
const tags = ["ontwikkelaar", "engineer", "IT-infrastructuur"];

function Jobs() {
  return (
    <>
      <HeroWText badgeText="Jobs" heading="Werken bij qastan" paragraph="Zin om mee te duiken in onze uitdagende projecten? Gemotiveerde collega’s zijn altijd welkom!" buttonText="Bekijk onze vacatures" buttonLink="#jobs" imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" />
      <CardDetail cardData={cardData} />
      <div id="jobs">
        <CardWImage title="Ontdek onze openstaande vacatures" cardWImageData={cardWImageData} tags={tags} detailPageRoute="/Jobs" />
      </div>
    </>
  );
}

export default Jobs;
