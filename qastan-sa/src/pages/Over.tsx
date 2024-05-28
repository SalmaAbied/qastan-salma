import React from "react";
import Timeline from "../components/Timeline";
import CardWSymbol from "../components/CardWSymbol";
import Title from "../components/Title";
import HeroWText from "../components/HeroWText";
import TestimoniesSection from "../components/GridCases";

const cardInfo = [
  {
    title: "Transparantie",
    description: "Vanaf de start van het project weet je perfect hoeveel het totale plaatje zal kosten. Je krijgt voldoende inzicht in het project en hoeft je geen zorgen te maken over verborgen kosten. Reken maar op een mooie return-on-investment!",
    icon: "Gem",
  },
  {
    title: "Kwaliteit",
    description: "Qastan quality, daar kan je op rekenen! Het is niet alleen een streefdoel, maar ook het resultaat van doordachte ontwikkeling van onze producten. We bieden onze klanten heel wat opties aan die bij concurrenten vaak niet terug te vinden zijn.",
    icon: "Star",
  },
  {
    title: "Altijd een oplossing",
    description: "Een samenwerking aangaan met ons, betekent ook samen groeien. Heel wat oplossingen uit ons aanbod zijn tot stand gekomen door samenwerkingen met klanten op maat. Bij ons hoef je niet te kiezen. Als onze standaardproducten niet 100% geschikt zijn voor jouw onderneming, passen we ze graag aan. Samen bouwen we aan een toekomstgerichte oplossing die perfect bij je past.",
    icon: "Puzzle",
  },
  {
    title: "Wij spreken uw (code)taal",
    description: "Bij Qastan spreken we jouw taal. Zowel voor, tijdens als na het project. We houden het graag simpel en begrijpbaar, in onze offertes en bij onze helpdesk. Met gericht advies bouwen we mee aan jouw groei!",
    icon: "Code",
  },
  {
    title: "Efficiënt",
    description: "Ons hoofddoel is om bestaande processen te optimaliseren. Dit doen we op de meest efficiënte manier! Onze adviezen, analyses en ondersteuning zijn allemaal bedoeld om het rendement van jouw onderneming maximaal te vergroten.",
    icon: "Rocket",
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
      <HeroWText badgeText="Qastan" heading="Over ons" paragraph="Qastan is een Belgisch familiebedrijf dat gespecialiseerd is in het ontwikkelen en aanbieden van software en hardware. We noemen onszelf ook wel de digitale architecten voor jouw organisatie of bedrijf. Net als de papegaaiduiker in ons logo, zijn onze medewerkers multi-getalenteerd en kunnen ze het hele spectrum van digitale transformatie aan. Onze skills zijn de bouwstenen om de nodige digitale fundamenten van je onderneming te bouwen. Zo kan jij als ondernemer verder doen waar je echt goed in bent en je business laten groeien en versterken." imageUrl="https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Title title="Waarom kiezen voor Qastan?" description="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
        {cardInfo.map((card, index) => (
          <CardWSymbol key={index} title={card.title} description={card.description} icon={card.icon} button={card.button} className={index === 5 ? "col-span-1 lg:col-span-3 bg-slate-800 text-white" : ""} />
        ))}
      </div>
      <TestimoniesSection />
      <Timeline />
    </>
  );
}

export default Over;
