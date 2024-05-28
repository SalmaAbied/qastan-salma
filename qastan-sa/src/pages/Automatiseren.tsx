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
    title: "Koppelingen",
    description: "Huidige softwarepakketten werken niet goed samen. Het ontbreken van integraties tussen bestaande oplossingen zorgt voor frustraties en tijdsverlies. Integraties en koppelingen vormen de basis voor een goedwerkend en performant IT-systeem.",
    icon: "Link",
  },
  {
    title: "ERP",
    description: "Veel verspreide gegevens en onoverzichtelijke data. Te veel verschillende systemen, handmatige processen en data die her en daar bewaard wordt. Een centraal ERP vormt de lijm tussen deze processen.",
    icon: "Database",
  },
  {
    title: "Centraliseren",
    description: "Het gebrek aan inzicht wordt verder verergerd door verspreide gegevens, losse bestanden en documenten, wat resulteert in een beperkt zicht en begrip van het totaalplaatje. Dit kan leiden tot inefficiëntie en gemiste kansen voor procesverbetering.",
    icon: "Merge",
  },
  {
    title: "Nog excel ?",
    description: "Alles in Excel... Excel is krachtig maar beperkt in mogelijkheden om snel in te spelen op veranderingen en globaal overzicht te scheppen van de onderneming en de efficiëntie is laag. We kunnen het samen bespreken hoe we dit efficienter kunnen maken en digitaliseren",
    icon: "Excel",
  },
];

function Automatisering() {
  const cardData = [
    {
      imageUrl: "https://www.qastan.be/swfiles/files/logoCirta-mob.png?nc=1715334419",
      title: "ERP-Software",
      description: "Maximaliseer jouw productiviteit en doorloopsnelheid. Alle bouwstenen voor een modern ERP (WMS, CRM, DMS, artikelconfiguratie,...) in één pakket.",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/productieplanning-en-scheduling.jpeg?nc=1715334431",
      title: "Software op maat",
      description: "Specifieke software nodig voor jouw activiteit? Via clientversies of web, wij bouwen de software die u nodig heeft.",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/2021-logo-tech_power-apps-nobg-tab.png?nc=1715334445",
      title: "Microsoft PowerApps",
      description: "Snel in ontwikkeling (en dus kostenbesparend), werk op pc alsook Android/iOs én je betaalt er geen licenties Bovendien zijn de Power Apps volledig geïntegreerd binnen jouw 365-omgeving.",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/laptopAs400-tab.png?nc=1715334491",
      title: "IBM iSeries & AS/400",
      description: "De groene schermen in een nieuw jasje of interface steken?",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/order-entry_klantenportaal_webportal.png?nc=1715845874",
      title: "Web portaal",
      description: "Een webportaal is het moderne visitekaartje van elke onderneming. Het is 24/7 online, verbetert de service en communicatie naar de klant of leverancier. Deel eenvoudig documenten of laat klanten zelf orders plaatsen om jouw administratie te ontzorgen.",
    },
  ];
  return (
    <>
      <HeroWText badgeText="Automatiseren" heading="Bedrijfsprocessen stroomlijnen en automatiseren" paragraph="Automatisering zorgt voor sterkere integraties tussen verschillende systemen en pakketten waardoor jouw IT-omgeving ten volle kan renderen via ons ERP, CRM, Power apps-toepassingen of webportalen. Bedrijfsprocessen worden gesystematiseerd of manueel en repetitief werk wordt geminimaliseerd." buttonText="Contacteer ons" buttonLink="/Contact" imageUrl="https://images.unsplash.com/photo-1667372283587-e1557c08aca4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="container mx-auto py-10">
        <Title title="Klaar voor meer digitale efficiëntie?" description="Weg met papierwerk, hallo efficiëntie: digitaliseer uw documenten vandaag nog." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardInfo.map((card, index) => (
            <CardWSymbol key={index} title={card.title} description={card.description} icon={card.icon} />
          ))}
        </div>
      </div>
      <Banner title="Samen duiken in de automatisatie van jouw onderneming?" description="We helpen je graag verder na een verkennend gesprek. We luisteren naar jouw noden, stellen een gepaste oplossing voor en laten je bedrijf vliegen! Benieuwd naar wat we voor jou kunnen betekenen? Klik op de 'Demo' knop voor een voorproefje van onze oplossingen in actie." buttonText="Vraag een demo aan" buttonLink="/Contact" bgcolor="darkblue" />
      <Title title="Mee(r) automatiseren" description='"Digitale automatisering gaat niet alleen over het stroomlijnen van taken; het is de symfonie die efficiëntie, innovatie en vooruitgang harmoniseert in het moderne technologische landschap."' />
      <CardDetail cardData={cardData} />
      <LogoSlider />
      <CardWImage />
    </>
  );
}

export default Automatisering;
