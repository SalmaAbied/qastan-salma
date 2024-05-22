import React from "react";
import HeroWText from "../components/HeroWText";
import CardWSymbol from "../components/CardWSymbol";
import Title from "../components/Title";
import Banner from "../components/BannerDetail";

function Digitalisering() {
  return (
    <>
      <HeroWText badgeText="Digitaliseren" heading="Digitale documentoplossingen voor elke onderneming" paragraph="Al je documenten op één plaats maar toch overal bij de hand hebben? Documenten sneller terugvinden, delen en beheren? Efficiënter werk en de administratieve last verkleinen? Kleine digitaliseringsoplossingen of grote automatiseringstrajecten, we passen onze oplossing aan naar de grootte van jouw onderneming. De mogelijkheden zijn eindeloos!" buttonText="Contacteer ons" buttonLink="/Contact" imageUrl="https://images.unsplash.com/photo-1600267165477-6d4cc741b379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="container mx-auto py-10">
        <Title title="Klaar voor meer digitale efficiëntie?" description="Weg met papierwerk, hallo efficiëntie: digitaliseer uw documenten vandaag nog." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CardWSymbol title="Verouderde infrastructuur" description="Verouderde infrastructuur en onduidelijkheid over de aanwezige apparatuur en software kunnen uw IT-landschap verstoren. Het gebrek aan transparantie kan leiden tot inefficiënties en belemmeringen bij het nemen van cruciale beslissingen over uw technologische omgeving." icon="TriangleAlert" />
          <CardWSymbol title="Handen te kort ?" description="Kleine gebruikersproblemen blijven onopgelost en wachten lang op een oplossing. Dit gebrek aan directe ondersteuning kan leiden tot verminderde productiviteit en frustratie bij medewerkers." icon="Hourglass" />
          <CardWSymbol title="Geen back-ups of adequate beveiliging ?" description="Geen back-ups of adequate beveiliging kunnen de organisatie kwetsbaar maken voor ernstige gegevensverlies en beveiligingsinbreuken. Het ontbreken van regelmatige back-ups vormt een directe bedreiging voor de continuïteit van de operaties en kan leiden tot aanzienlijke schade aan de reputatie en financiële verliezen voor de organisatie." icon="ShieldOff" />
          <CardWSymbol title="Onoverzichtelijke structuur ?" description="De IT-omgeving is ongeorganiseerd en ontbeert structuur, waardoor het moeilijk is om technologische middelen te beheren en te benutten. Dit gebrek aan duidelijkheid kan leiden tot verwarring bij werknemers en inefficiëntie in operationele processen, wat de algehele productiviteit van het bedrijf beïnvloedt." icon="Shuffle" />
        </div>
      </div>
      <Banner
        title="Samen duiken in de automatisatie van jouw onderneming?"
        description="We helpen je graag verder na een verkennend gesprek. We luisteren naar jouw noden, stellen een gepaste oplossing voor en laten je bedrijf vliegen! Benieuwd naar wat we voor jou kunnen betekenen? Klik op de 'Demo' knop voor een voorproefje van onze oplossingen in actie."
        buttonText="Vraag een demo aan"
      />
    </>
  );
}

export default Digitalisering;
