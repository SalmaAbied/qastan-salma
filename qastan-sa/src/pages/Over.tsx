import React from "react";
import Timeline from "../components/Timeline";
import Intro from "../components/IntroGrid";
import CardWSymbol from "../components/CardWSymbol";
import Title from "../components/Title";

const cardInfo = [
  {
    title: "Transparantie",
    description: "Vanaf de start van het project weet je perfect hoeveel het totale plaatje zal kosten. Je krijgt voldoende inzicht in het project en hoeft je geen zorgen te maken over verborgen kosten. Reken maar op een mooie return-on-investment!",
    icon: "TriangleAlert",
  },
  {
    title: "Kwaliteit",
    description: "Qastan quality, daar kan je op rekenen! Het is niet alleen een streefdoel, maar ook het resultaat van doordachte ontwikkeling van onze producten. We bieden onze klanten heel wat opties aan die bij concurrenten vaak niet terug te vinden zijn.",
    icon: "Hourglass",
  },
  {
    title: "Altijd een oplossing",
    description: "Een samenwerking aangaan met ons, betekent ook samen groeien. Heel wat oplossingen uit ons aanbod zijn tot stand gekomen door samenwerkingen met klanten op maat. Bij ons hoef je niet te kiezen. Als onze standaardproducten niet 100% geschikt zijn voor jouw onderneming, passen we ze graag aan. Samen bouwen we aan een toekomstgerichte oplossing die perfect bij je past.",
    icon: "ShieldOff",
  },
  {
    title: "Wij spreken uw (code)taal",
    description: "Bij Qastan spreken we jouw taal. Zowel voor, tijdens als na het project. We houden het graag simpel en begrijpbaar, in onze offertes en bij onze helpdesk. Met gericht advies bouwen we mee aan jouw groei!",
    icon: "Code",
  },
  {
    title: "Efficiënt",
    description: "Ons hoofddoel is om bestaande processen te optimaliseren. Dit doen we op de meest efficiënte manier! Onze adviezen, analyses en ondersteuning zijn allemaal bedoeld om het rendement van jouw onderneming maximaal te vergroten.",
    icon: "Shuffle",
  },
  {
    title: "Samen duiken in de digitalisering van jouw onderneming?",
    description: "We helpen je graag verder na een verkennend gesprek. We luisteren naar jouw noden, stellen een gepaste oplossing voor en laten je bedrijf vliegen!",
    icon: "UserRound",
    button: "Contacteer ons",
  },
];

function Over() {
  return (
    <>
      <Intro />
      <Title title="Waarom kiezen voor Qastan?" description="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
        {cardInfo.map((card, index) => (
          <CardWSymbol key={index} title={card.title} description={card.description} icon={card.icon} button={card.button} className={index === 5 ? "col-span-1 lg:col-span-3 bg-slate-800 text-white" : ""} />
        ))}
      </div>
      <div className="py-10">
        <Title title="Ons verhaal" description="Ontdek hoe Qastan zich sinds 1998 heeft ontwikkeld van een eenmanszaak tot een toonaangevend familiebedrijf in de IT-sector, met meer dan 25 jaar expertise in het leveren van innovatieve en betrouwbare IT-oplossingen." />
        <Timeline />
      </div>
    </>
  );
}

export default Over;
