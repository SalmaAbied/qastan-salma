import React from "react";
import HeroWText from "../components/HeroWText";
import CardWSymbol from "../components/CardWSymbol";
import Title from "../components/Title";
import Banner from "../components/BannerDetail";

function Plannen() {
  return (
    <>
      <HeroWText badgeText="Plannen" heading="Planningsoftware voor de KMO" paragraph="Plannen is een tijdrovende klus waarbij het vaak moeilijk is om het overzicht te bewaren. Kleine of grote organisaties hebben steeds andere noden en zoeken schaalbare oplossingen die kunnen meegroeien binnen de organisatie. Planningsystemen die ontzorgen én de efficiëntie verhogen? Daar gaan we voor." buttonText="Contacteer ons" buttonLink="/Contact" imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" />
      <div className="container mx-auto py-10">
        <Title title="MountQ, onze oplossing voor een efficiënte planning" description="MountQ is onze planningsoftware voor de KMO. Standaard maar toch steeds afgestemd op jouw omgeving of organisatie. Ontwikkeld in nauwe samenwerking met Van Marcke Group en Odisee Hogeschool, zijn de tools gerichte op effectieve praktijkervaring. Dit zorgt ervoor dat onze planning altijd afgestemd is op de behoeften van de klant: praktisch, gebruiksvriendelijk en wiskundig goed onderbouwd. Of je nu kiest voor onze standaardoplossing of liever maatwerk, wij staan klaar om jouw planning verder te optimaliseren." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CardWSymbol title="Personeelsplanning" description="Onze planning is gericht op het real-time ontzorgen van de planner én de uitvoerder. Stuur werknemers in real-time aan via de krachtige app en gebruiksvriendelijk planbord in onze Field Service Management." icon="Calendar" />
          <CardWSymbol title="Competentiematrixen en skills" description="De juiste persoon op de juiste plaats. Meet de bezettingsgraad en zo stuur jouw aanwervingsbeleid of opleidingstrajecten tijdig bij." icon="Graduation" />
          <CardWSymbol title="Werkplekbeheer" description="Beheer de bezetting per werkpost of werkplek en breng alle noodzakelijke competenties voor een specifieke taak in kaart. Onderbezetting of overbezetting maar ook beschikbaarheid van de werkpost en werkplek spot je meteen." icon="Briefcase" />
          <CardWSymbol title="Resourceplanning & productieplanning" description="Hou productie nauwgezet bij, maak prognoses en hou voorraadwijzigingen steeds bij de hand. Snel en efficiënt handelen start hier." icon="Chart" />
        </div>
      </div>
      <Banner title="Samen duiken in de planning van jouw onderneming?" description="We helpen je graag verder na een verkennend gesprek. We luisteren naar jouw noden, stellen een gepaste oplossing voor en laten je bedrijf vliegen!" buttonText="Vraag een gesprek aan" />
    </>
  );
}

export default Plannen;
