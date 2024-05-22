import React from "react";
import HeroWText from "../components/HeroWText";
import CardWSymbol from "../components/CardWSymbol";
import Title from "../components/Title";
import Banner from "../components/BannerDetail";

function Automatisering() {
  return (
    <>
      <HeroWText badgeText="Automatiseren" heading="Bedrijfsprocessen stroomlijnen en automatiseren" paragraph="Automatisering zorgt voor sterkere integraties tussen verschillende systemen en pakketten waardoor jouw IT-omgeving ten volle kan renderen via ons ERP, CRM, Power apps-toepassingen of webportalen. Bedrijfsprocessen worden gesystematiseerd of manueel en repetitief werk wordt geminimaliseerd." buttonText="Contacteer ons" buttonLink="/Contact" imageUrl="https://images.unsplash.com/photo-1667372283587-e1557c08aca4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="container mx-auto py-10">
        <Title title="Klaar voor meer digitale efficiëntie?" description="Weg met papierwerk, hallo efficiëntie: digitaliseer uw documenten vandaag nog." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CardWSymbol title="Koppelingen" description="Huidige softwarepakketten werken niet goed samen. Het ontbreken van integraties tussen bestaande oplossingen zorgt voor frustraties en tijdsverlies. Integraties en koppelingen vormen de basis voor een goedwerkend en performant IT-systeem." icon="Link" />
          <CardWSymbol title="ERP" description="Veel verspreide gegevens en onoverzichtelijke data. Te veel verschillende systemen, handmatige processen en data die her en daar bewaard wordt. Een centraal ERP vormt de lijm tussen deze processen." icon="Database" />
          <CardWSymbol title="Centraliseren" description="Het gebrek aan inzicht wordt verder verergerd door verspreide gegevens, losse bestanden en documenten, wat resulteert in een beperkt zicht en begrip van het totaalplaatje. Dit kan leiden tot inefficiëntie en gemiste kansen voor procesverbetering." icon="Merge" />
          <CardWSymbol title="Nog excel ?" description="Alles in Excel... Excel is krachtig maar beperkt in mogelijkheden om snel in te spelen op veranderingen en globaal overzicht te scheppen van de onderneming en de efficiëntie is laag. We kunnen het samen bespreken hoe we dit efficienter kunnen maken en digitaliseren" icon="Excel" />
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

export default Automatisering;
