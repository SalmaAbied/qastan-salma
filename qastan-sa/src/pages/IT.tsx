import React from "react";
import HeroWText from "../components/HeroWText";
import CardWSymbol from "../components/CardWSymbol";
import Title from "../components/Title";
import Banner from "../components/BannerDetail";

function IT() {
  return (
    <>
      <HeroWText badgeText="IT-beheer" heading="Infrastructuur & Hardware" paragraph="We staan jouw organisatie bij in de dagdagelijkse taken. Bij ons ben je geen nummer maar praat je rechtstreeks met jouw contactpersonen. Echte mensen die jouw vanop afstand of ter plaatse helpen waar nodig. Zo ontzorgen wij jouw organisatie." buttonText="Contacteer ons" buttonLink="/Contact" imageUrl="https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="container mx-auto py-10">
        <Title title="Klaar voor het optimaliseren van u IT-infrastructuur ?" description="Maak uw IT-landschap efficiënter en veerkrachtiger door gebruik te maken van onze diepgaande expertise en op maat gemaakte oplossingen die uw bedrijf helpen om te gaan met de uitdagingen van een steeds veranderend technologisch landschap." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CardWSymbol title="Verouderde infrastructuur ?" description="Verouderde infrastructuur en onduidelijkheid over de aanwezige apparatuur en software kunnen uw IT-landschap verstoren. Het gebrek aan transparantie kan leiden tot inefficiënties en belemmeringen bij het nemen van cruciale beslissingen over uw technologische omgeving." icon="Settings" />
          <CardWSymbol title="Handen te kort ?" description="Kleine gebruikersproblemen blijven onopgelost en wachten lang op een oplossing. Dit gebrek aan directe ondersteuning kan leiden tot verminderde productiviteit en frustratie bij medewerkers." icon="User" />
          <CardWSymbol title="Geen back-ups of adequate beveiliging ?" description="Geen back-ups of adequate beveiliging kunnen de organisatie kwetsbaar maken voor ernstige gegevensverlies en beveiligingsinbreuken. Het ontbreken van regelmatige back-ups vormt een directe bedreiging voor de continuïteit van de operaties en kan leiden tot aanzienlijke schade aan de reputatie en financiële verliezen voor de organisatie." icon="Lock" />
          <CardWSymbol title="Onoverzichtelijke structuur ?" description="The IT environment is disorganized and lacks structure, making it difficult to manage and utilize technological resources. This lack of clarity can lead to confusion among employees and inefficiency in operational processes, impacting the overall productivity of the company." icon="Layers" />
        </div>
      </div>
      <Banner title="Samen duiken in de hardware en infrastructuur van jouw onderneming?" description="We helpen je graag verder na een verkennend gesprek. We luisteren naar jouw noden, stellen een gepaste oplossing voor en laten je bedrijf vliegen! Benieuwd naar wat we voor jou kunnen betekenen? Klik op de 'Demo' knop hieronder voor een voorproefje van onze oplossingen in actie." buttonText="Vraag een gesprek aan" />
    </>
  );
}

export default IT;
