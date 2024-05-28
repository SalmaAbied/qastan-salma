import React from "react";
import CardWSymbol from "../components/CardWSymbol";
import { icon } from "leaflet";
import HeroWText from "../components/HeroWText";

const cardInfo = [
  {
    title: "Ga aan de slag en download hier de applicatie voor technische ondersteuning",
    description: "",
    icon: "Download",
    button: "Download",
  },
  {
    tag: "Stap 1",
    title: "Download de support applicatie",
    description: "Heb je technische problemen die onze techniekers kunnen oplossen door jouw scherm over te nemen? Download dan hier Anydesk applicatie.",
    button: "Download anydesk applicatie",
  },
  {
    tag: "Stap 2",
    title: "Open de applicatie",
    description: "Open de applicatie na de download. Je kan hem bewaren om in de toekomst nog vlotter geholpen te worden door ons service center.",
  },
  {
    tag: "Stap 03",
    title: "De 9-cijferige code",
    description: "Als de applicatie is opgestart, kunnen we een beveiligde connectie tot stand brengen. Geef de 9-cijferige code door aan je support engineer om hem te laten connecteren.",
  },
  {
    tag: "Stap 04",
    title: "Connectie accepteren",
    description: "Als laatste kan je de beveiligde verbinding accepteren. Deze verbinding blijft tot stand tot je ze opheft of tot een van onze medewerkers de connectie verbreekt.",
  },
  {
    tag: "Stap 05",
    title: "De support engineer doet zijn ding",
    description: "Jouw probleem wordt nu zo snel en efficiënt mogelijk opgelost. Je hoeft niet te wachten en kan gerust verder werken aan iets anders. Wij lossen het voor je op! Ga aan de slag en download hier de applicatie voor technische ondersteuning.",
    button: "Download",
  },
];

function Support() {
  return (
    <>
      <HeroWText badgeText="Qastan Support" heading="Technische ondersteuning nodig?" paragraph="Vind je het antwoord op jouw vraag niet terug in ons helpcentrum? Download onze AnyDesk applicatie en wij helpen je graag verder vanop afstand. Neem gerust contact op met een van onze support medewerkers!" imageUrl="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto py-10">
        {cardInfo.map((card, index) => (
          <CardWSymbol key={index} tag={card.tag} title={card.title} description={card.description} icon={card.icon} button={card.button} className={index === 0 ? "col-span-1 lg:col-span-1 bg-slate-800 text-white" : ""} />
        ))}
      </div>
    </>
  );
}

export default Support;
