import React from "react";
import CardWImage from "../components/Filters";
import HeroWText from "../components/HeroWText";
import Background from "../components/Background";

const cardWImageData = [
  {
    id: "1",
    imageUrl: "https://www.qastan.be/swfiles/files/sneller-documenten-terugvinden.jpeg",
    tags: ["digitaliseren"],
    bgtag: "lightblue",
    title: "Efficiënter documenten terugvinden in de zee van mappenstructuren",
    description: "Een zee van mappenstructuren. Efficiënter zoeken en terugvinden van documenten.",
  },
  {
    id: "2",
    imageUrl: "https://www.qastan.be/swfiles/files/sterk-wachtwoord-maken.jpeg",
    tags: ["IT-infrastructuur"],
    bgtag: "darkblue",
    title: "Hoe sterk is jouw wachtwoord?",
    description: "Sterke wachtwoorden. Hoeveel tijd zou er nodig zijn om jouw wachtwoord te achterhalen? Doe de test.",
  },
  {
    id: "3",
    imageUrl: "https://www.qastan.be/swfiles/files/Ontwikkeling-op-AS400-720x340-tab.jpeg",
    tags: ["automatiseren"],
    bgtag: "bggray",
    title: "De toekomst van bedrijfs-automatisering: AS/400 blijft betrouwbaar in een digitale wereld",
    description: "Wat is AS/400?AS/400, ook wel bekend als IBM iSeries, is een reeks van computersystemen die geïntroduceerd werden door IBM in de late jaren ’80.",
  },
  {
    id: "4",
    imageUrl: "https://www.qastan.be/swfiles/files/IT-opleiding.jpeg",
    tags: ["automatiseren"],
    bgtag: "bggray",
    title: "De kracht van Power Apps: snel en kostenefficiënt digitaliseren",
    description: "Op maat gemaakte (mobiele) apps ontwikkelen, betekende tot voor kort de start van een ellenlang ontwikkelingstraject.",
  },
  {
    id: "5",
    imageUrl: "https://www.qastan.be/swfiles/files/home-hero-720x340-tab.jpg",
    tags: ["automatiseren", "digitaliseren"],
    bgtag: "bggray",
    title: "Het belang van maatwerksoftware: Hoe Qastan oplossingen op maat biedt",
    description: "Maatwerksoftware speelt een cruciale rol in het moderne bedrijfsleven. Terwijl kant-en-klare softwareoplossingen handig kunnen zijn, is er vaak behoefte aan software die specifiek is afgestemd op de unieke behoeften en processen van een bedrijf",
  },
  {
    id: "6",
    imageUrl: "https://www.qastan.be/swfiles/files/alvaro-reyes-qWwpHwip31M-unsplash2-720x340-tab.jpg",
    tags: ["automatiseren", "digitaliseren"],
    bgtag: "bggray",
    title: "Work it, Make it, Do it – Hoe workflows kunnen bijdragen aan een efficiëntere organisatie",
    description: "“Work it, Make it, Do it – Harder, Better, Faster, Stronger” klinkt de overbekende en catchy oorwurm van Daft Punk.* Het zou zo maar eens het credo kunnen zijn die we vandaag de dag in vele organisaties terugvinden.",
  },
  {
    id: "7",
    imageUrl: "https://www.qastan.be/swfiles/files/productief-werken-met-qastan-it.jpeg",
    tags: ["digitaliseren"],
    bgtag: "lightblue",
    title: "5 gratis apps om jouw efficiënte meteen te boosten",
    description: "Of je nu je taken organiseert, notities maakt, gefocust blijft, vlekkeloze tekst schrijft of taken beheert, deze vijf gratis apps kunnen je helpen om meer gedaan te krijgen met minder moeite. Dus waar wacht je nog op? Ga aan de slag en boost je efficiëntie vandaag nog!",
  },
  {
    id: "8",
    imageUrl: "https://www.qastan.be/swfiles/files/Digitaliseren-implementatie-software-digitale-transformatie-720x340-tab.png",
    tags: ["digitaliseren"],
    bgtag: "bggray",
    title: "Digitaliseren: investeren in de groei van jouw onderneming.",
    description: "Inleiding in een tijdperk waarin technologie een steeds grotere rol speelt, is het digitaliseren van je bedrijf essentieel geworden voor groei en succes.",
  },
  {
    id: "9",
    imageUrl: "https://www.qastan.be/swfiles/files/arne-720x340-tab.png",
    tags: ["digitaliseren"],
    bgtag: "bggray",
    title: "Digitale versnelling",
    description: "Digitaliseren betekent investeren in de groei van je onderneming. Deze verandering brengt kansen met zich mee, maar het is niet altijd eenvoudig.",
  },
  {
    id: "10",
    imageUrl: "https://www.qastan.be/swfiles/files/Vergelijking-van-prijzen-en-mogelijkheden-van-cloudopslagdiensten-voor-bedrijven-720x340-tab.png",
    tags: ["IT-infrastructuur"],
    bgtag: "bggray",
    title: "Efficiënte cloudopslag: ontdek de perfecte match voor jouw organisatie.",
    description: "Cloudopslagdiensten hebben de manier waarop bedrijven gegevens opslaan en beheren revolutionair veranderd. Met een overvloed aan opties beschikbaar, is de juiste keuze maken niet altijd even makkelijk.",
  },
  {
    id: "11",
    imageUrl: "https://www.qastan.be/swfiles/files/fly-d-OQptsc4P3NM-unsplash21-720x340-tab.jpg",
    tags: ["IT-infrastructuur"],
    bgtag: "bggray",
    title: "Twee-stapsverificatie: een extra slot op de digitale deur",
    description: "In het huidige digitale tijdperk, waarin technologie een integraal onderdeel van ons dagelijks leven is geworden, is de veiligheid van onze gegevens en accounts van het grootste belang.",
  },
];
const tags = ["automatiseren", "digitaliseren", "plannen", "IT-infrastructuur"];

function Blog() {
  return (
    <>
      <Background />
      <div className="z-40 relative">
        <HeroWText badgeText="Blog" heading="Onze blog" paragraph="Lees hier alles over Qastan op onze blog en ontdek hoe we jouw digitale transformatie kunnen ondersteunen!" imageUrl="https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <CardWImage title="Ontdek onze blog" cardWImageData={cardWImageData} tags={tags} detailPageRoute="/Blog" />
      </div>
    </>
  );
}

export default Blog;
