import React from "react";
import HeroWText from "../components/HeroWText";
import CardWSymbol from "../components/CardWSymbol";
import Title from "../components/Title";
import Banner from "../components/BannerDetail";
import CardDetail from "../components/CardDetail";
import LogoSlider from "../components/Slider";
import CardWImage from "../components/CardWImage";

const cardInfo = [
  {
    title: "Personeelsplanning",
    description: "Onze planning is gericht op het real-time ontzorgen van de planner én de uitvoerder. Stuur werknemers in real-time aan via de krachtige app en gebruiksvriendelijk planbord in onze Field Service Management.",
    icon: "Calendar",
  },
  {
    title: "Competentiematrixen en skills",
    description: "De juiste persoon op de juiste plaats. Meet de bezettingsgraad en zo stuur jouw aanwervingsbeleid of opleidingstrajecten tijdig bij.",
    icon: "Graduation",
  },
  {
    title: "Werkplekbeheer",
    description: "Beheer de bezetting per werkpost of werkplek en breng alle noodzakelijke competenties voor een specifieke taak in kaart. Onderbezetting of overbezetting maar ook beschikbaarheid van de werkpost en werkplek spot je meteen.",
    icon: "Briefcase",
  },
  {
    title: "Resourceplanning & productieplanning",
    description: "Hou productie nauwgezet bij, maak prognoses en hou voorraadwijzigingen steeds bij de hand. Snel en efficiënt handelen start hier.",
    icon: "Chart",
  },
];

function Plannen() {
  const cardData = [
    {
      imageUrl: "https://www.qastan.be/swfiles/files/artificiele-intelligentie-ai-voor-documenten.jpeg?nc=1715848906",
      title: "Matching via algoritme",
      description: "MountQ gaat opzoek naar de meest geschikte match tussen uitvoerder, taak, competenties of beschikbaarheden via een algoritme. Bij het algoritme houden we rekening me jouw bedrijfeigen wensen en noden (CAO-levels, voorraadlevels, route en afstand,...)",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/Audit.jpg?nc=1715848906",
      title: "Standaard of toch liever op maat?",
      description: "Maak gebruik van onze standaardcomponenten of kies voor een eigen op maat gemaakte planningsoftware. We houden rekening met jouw noden en wensen.",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/productieplanning-en-scheduling.jpeg?nc=1715848906",
      title: "Integraties in bestaande omgeving",
      description: "MountQ biedt als planner zeer veel mogelijkheden naar integraties en koppelingen toe: MES, WMS, DMS, ERP, HR-tools, boekhouding, routeplanners,...",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/werkpostplanning-via-ai.png?nc=1715848906",
      title: "Een oplossing vanuit de praktijk",
      description: "MountQ werd als planningsoftware ontwikkeld en getest vanuit de praktijk samen met Van Marcke Group en Odisee Hogeschool. Theorie en praktijk komen zo samen in één enkele applicatie.",
    },
  ];
  return (
    <>
      <HeroWText badgeText="Plannen" heading="Planningsoftware voor de KMO" paragraph="Plannen is een tijdrovende klus waarbij het vaak moeilijk is om het overzicht te bewaren. Kleine of grote organisaties hebben steeds andere noden en zoeken schaalbare oplossingen die kunnen meegroeien binnen de organisatie. Planningsystemen die ontzorgen én de efficiëntie verhogen? Daar gaan we voor." buttonText="Contacteer ons" buttonLink="/Contact" imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" />
      <div className="container mx-auto py-10">
        <Title title="MountQ, onze oplossing voor een efficiënte planning" description="MountQ is onze planningsoftware voor de KMO. Standaard maar toch steeds afgestemd op jouw omgeving of organisatie. Ontwikkeld in nauwe samenwerking met Van Marcke Group en Odisee Hogeschool, zijn de tools gerichte op effectieve praktijkervaring. Dit zorgt ervoor dat onze planning altijd afgestemd is op de behoeften van de klant: praktisch, gebruiksvriendelijk en wiskundig goed onderbouwd. Of je nu kiest voor onze standaardoplossing of liever maatwerk, wij staan klaar om jouw planning verder te optimaliseren." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardInfo.map((card, index) => (
            <CardWSymbol key={index} title={card.title} description={card.description} icon={card.icon} />
          ))}
        </div>
      </div>
      <Banner title="Samen duiken in de planning van jouw onderneming?" description="We helpen je graag verder na een verkennend gesprek. We luisteren naar jouw noden, stellen een gepaste oplossing voor en laten je bedrijf vliegen!" buttonText="Vraag een gesprek aan" bgcolor="darkblue" />
      <Title title="Voordelen van MountQ als planner?" description="" />
      <CardDetail cardData={cardData} />
      <LogoSlider />
      <CardWImage />
    </>
  );
}

export default Plannen;
