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
    title: "Verouderde infrastructuur ?",
    description: "Verouderde infrastructuur en onduidelijkheid over de aanwezige apparatuur en software kunnen uw IT-landschap verstoren. Het gebrek aan transparantie kan leiden tot inefficiënties en belemmeringen bij het nemen van cruciale beslissingen over uw technologische omgeving.",
    icon: "Settings",
  },
  {
    title: "Handen te kort ?",
    description: "Kleine gebruikersproblemen blijven onopgelost en wachten lang op een oplossing. Dit gebrek aan directe ondersteuning kan leiden tot verminderde productiviteit en frustratie bij medewerkers.",
    icon: "User",
  },
  {
    title: "Geen back-ups of adequate beveiliging ?",
    description: "Geen back-ups of adequate beveiliging kunnen de organisatie kwetsbaar maken voor ernstige gegevensverlies en beveiligingsinbreuken. Het ontbreken van regelmatige back-ups vormt een directe bedreiging voor de continuïteit van de operaties en kan leiden tot aanzienlijke schade aan de reputatie en financiële verliezen voor de organisatie.",
    icon: "Lock",
  },
  {
    title: "Onoverzichtelijke structuur ?",
    description: "The IT environment is disorganized and lacks structure, making it difficult to manage and utilize technological resources. This lack of clarity can lead to confusion among employees and inefficiency in operational processes, impacting the overall productivity of the company.",
    icon: "Layers",
  },
];

function IT() {
  const cardData = [
    {
      imageUrl: "https://www.qastan.be/swfiles/files/productief-werken-met-qastan-it.jpeg?nc=1715332943",
      title: "IT-Management & MSP",
      description: "Geen eigen IT-dienst? Tijdelijk tekort aan mensen op jouw IT-afdeling of gewoon een lange termijnpartner nodig die met je kan meedenken?",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/Powerapps_bouwen.jpeg?nc=1715333039",
      title: "Meertalige helpdesk",
      description: "Nood aan directe IT-hulp op afstand? Dringende IT-problemen waarvoor snelle interventies noodzakelijk zijn?",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/legoNetworkBuilders.png?nc=1715333089",
      title: "Netwerk & Infrastructuur",
      description: "Beheer, opzetten en ondersteuning van de IT-infrastructuur. Zowel kleine als grotere omgevingen.",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/hardware.jpg?nc=1715333361",
      title: "Hardware",
      description: "Hardware of andere apparatuur nodig? Reeds geïnstalleerde kant-en-klare systemen?",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/documenten-centraliseren.jpeg?nc=1715333166",
      title: "Cloud & hosting",
      description: "Periodieke back-ups, datamigraties of gewoon een beveiligde cloudruimte nodig?",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/Audit.jpg?nc=1715333204",
      title: "IT-Audit",
      description: "Evalueren van de huidige IT-infrastructuur? Kwetsbare punten in jouw beveiliging en bedrijfsprocessen in kaart brengen.",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/scanoplossingen-printoplossingen.jpeg?nc=1715333243",
      title: "Scan en printoplossingen",
      description: "Overvloed aan papieren documenten? Snelle scanoplossingen om papieren documenten efficiënt te digitaliseren en nadien te verwerken.",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/cyberveiligheid-voor-kmo.jpeg?nc=1715333282",
      title: "DPO",
      description: "Ontdek onze DPO-beveiligingsdiensten die de veiligheid van je gegevens waarborgen, met robuuste bescherming tegen bedreigingen en naleving van privacyvoorschriften.",
    },
  ];
  return (
    <>
      <HeroWText badgeText="IT-beheer" heading="Infrastructuur & Hardware" paragraph="We staan jouw organisatie bij in de dagdagelijkse taken. Bij ons ben je geen nummer maar praat je rechtstreeks met jouw contactpersonen. Echte mensen die jouw vanop afstand of ter plaatse helpen waar nodig. Zo ontzorgen wij jouw organisatie." buttonText="Contacteer ons" buttonLink="/Contact" imageUrl="https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="container mx-auto py-10">
        <Title title="Klaar voor het optimaliseren van u IT-infrastructuur ?" description="Maak uw IT-landschap efficiënter en veerkrachtiger door gebruik te maken van onze diepgaande expertise en op maat gemaakte oplossingen die uw bedrijf helpen om te gaan met de uitdagingen van een steeds veranderend technologisch landschap." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardInfo.map((card, index) => (
            <CardWSymbol key={index} title={card.title} description={card.description} icon={card.icon} />
          ))}
        </div>
      </div>
      <Banner title="Samen duiken in de hardware en infrastructuur van jouw onderneming?" description="We helpen je graag verder na een verkennend gesprek. We luisteren naar jouw noden, stellen een gepaste oplossing voor en laten je bedrijf vliegen! Benieuwd naar wat we voor jou kunnen betekenen? Klik op de 'Demo' knop hieronder voor een voorproefje van onze oplossingen in actie." buttonText="Vraag een gesprek aan" bgcolor="darkblue" />
      <Title title="Wij zijn de oplossing voor al uw IT problemen" description="" />
      <CardDetail cardData={cardData} />
      <LogoSlider />
      <CardWImage />
    </>
  );
}

export default IT;
