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
    title: "Verouderde infrastructuur",
    description: "Verouderde infrastructuur en onduidelijkheid over de aanwezige apparatuur en software kunnen uw IT-landschap verstoren. Het gebrek aan transparantie kan leiden tot inefficiënties en belemmeringen bij het nemen van cruciale beslissingen over uw technologische omgeving.",
    icon: "TriangleAlert",
  },
  {
    title: "Handen te kort ?",
    description: "Kleine gebruikersproblemen blijven onopgelost en wachten lang op een oplossing. Dit gebrek aan directe ondersteuning kan leiden tot verminderde productiviteit en frustratie bij medewerkers.",
    icon: "Hourglass",
  },
  {
    title: "Geen back-ups of adequate beveiliging ?",
    description: "Geen back-ups of adequate beveiliging kunnen de organisatie kwetsbaar maken voor ernstige gegevensverlies en beveiligingsinbreuken. Het ontbreken van regelmatige back-ups vormt een directe bedreiging voor de continuïteit van de operaties en kan leiden tot aanzienlijke schade aan de reputatie en financiële verliezen voor de organisatie.",
    icon: "ShieldOff",
  },
  {
    title: "Onoverzichtelijke structuur ?",
    description: "De IT-omgeving is ongeorganiseerd en ontbeert structuur, waardoor het moeilijk is om technologische middelen te beheren en te benutten. Dit gebrek aan duidelijkheid kan leiden tot verwarring bij werknemers en inefficiëntie in operationele processen, wat de algehele productiviteit van het bedrijf beïnvloedt.",
    icon: "Shuffle",
  },
];

function Digitaliseren() {
  const cardData = [
    {
      imageUrl: "https://www.qastan.be/swfiles/files/artificiele-intelligentie-ai-voor-documenten.jpeg?nc=1715336211",
      title: "Data-extractie en documentherkenning (IDP)",
      description: "Sneller documenten verwerken (facturen, bonnen, contracten,...) met onze AI-herkenning. Overtypen wordt verleden tijd, sneller werken de toekomst!",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/ocr-herkenning-facturen.jpeg?nc=1715336601",
      title: "Digitale dossiers",
      description: "Documenten automatisch toevoegen aan een dossier (Werfdossiers, HR, projecten,...) zonder manuele tussenkomst? Overal beschikbaar voor jouw team en eventuele externen.",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/Logo_FITDOC_Small_RGB-1-1.svg?nc=1715336897",
      title: "Documentbeheer (FITdoc DMS)",
      description: "Een complete oplossing voor alle documentstromen. Automatisering en digitalisering van documenten start hier.",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/signature.png?nc=1715336964",
      title: "Digitale ondertekening van documenten",
      description: "Volg offertes en contracten efficiënt op zonder ze af te drukken. Bekijk de status op elk moment en verhoog jouw closing ratio’s.",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/alvaro-reyes-qWwpHwip31M-unsplash2-720x340-tab.jpg?nc=1715337029",
      title: "Workflows en processen",
      description: "Documenten en data bij de juiste persoon krijgen? Goedkeuring van documenten (facturen, offertes,...)",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/ocr-herkenning-factuurherkenning.jpeg?nc=1715337210",
      title: "e-invoicing & Peppol",
      description: "e-facutratie via Peppol wordt een verplichte standaard in België voor elke onderneming. Maak je klaar voor de facturatie van de toekomst.",
    },
    {
      imageUrl: "https://www.qastan.be/swfiles/files/uitlezen-van-documenten-en-bonnen-met-ai.jpeg?nc=1715337176",
      title: "Mailbox automatisaties",
      description: "Je mailbox zit overvol en is onoverzichtelijk? We organiseren en categoriseren mails, sturen ze automatisch door of laten we ze meteen verwerken door middel van AI!",
    },
  ];
  return (
    <>
      <HeroWText badgeText="Digitaliseren" heading="Digitale documentoplossingen voor elke onderneming" paragraph="Al je documenten op één plaats maar toch overal bij de hand hebben? Documenten sneller terugvinden, delen en beheren? Efficiënter werk en de administratieve last verkleinen? Kleine digitaliseringsoplossingen of grote automatiseringstrajecten, we passen onze oplossing aan naar de grootte van jouw onderneming. De mogelijkheden zijn eindeloos!" buttonText="Contacteer ons" buttonLink="/Contact" imageUrl="https://images.unsplash.com/photo-1600267165477-6d4cc741b379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="container mx-auto py-10">
        <Title title="Klaar voor meer digitale efficiëntie?" description="Weg met papierwerk, hallo efficiëntie: digitaliseer uw documenten vandaag nog." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardInfo.map((card, index) => (
            <CardWSymbol key={index} title={card.title} description={card.description} icon={card.icon} />
          ))}
        </div>
      </div>
      <Banner title="Samen duiken in de automatisatie van jouw onderneming?" description="We helpen je graag verder na een verkennend gesprek. We luisteren naar jouw noden, stellen een gepaste oplossing voor en laten je bedrijf vliegen! Benieuwd naar wat we voor jou kunnen betekenen? Klik op de 'Demo' knop voor een voorproefje van onze oplossingen in actie." buttonText="Vraag een demo aan" buttonLink="/Contact" bgcolor="darkblue" />
      <Title title="Mee(r) digitaliseren" description='"Niet alleen gaat digitalisering over technologie. het gaat ook over het transformeren van hoe we zaken doen en interageren met de wereld."' />
      <CardDetail cardData={cardData} />
      <LogoSlider />
      <CardWImage />
    </>
  );
}

export default Digitaliseren;
