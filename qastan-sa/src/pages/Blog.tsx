import React from "react";
import CardWImage from "../components/Filters";

const cardWImageData = [
  {
    imageUrl: "https://www.qastan.be/swfiles/files/sneller-documenten-terugvinden.jpeg",
    tags: ["digitaliseren"],
    bgtag: "lightblue",
    title: "Efficiënter documenten terugvinden in de zee van mappenstructuren",
    description: "Een zee van mappenstructuren. Efficiënter zoeken en terugvinden van documenten.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/Cyberawarenesstraining-ITpartner.png",
    tags: ["IT-infrastructuur"],
    bgtag: "bggray",
    title: "Cyberveiligheid: awarenesstraining",
    description: "Behoed jouw bedrijf op mogelijk cyberaanvallen door alle medewerkers attent te maken op de gevaren van phishing en het belang van een veilig werkomgeving.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/itsupport.jpeg",
    tags: ["digitaliseren", "automatiseren"],
    bgtag: "lightblue",
    title: "Factuurherkenning (scan & herken)",
    description: "Scan en herken facturen automatisch waardoor het facturatie- en goedkeuringsproces mooi gestroomlijnd is.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/klantenportaal-digitaalportaal.jpeg",
    tags: ["digitaliseren", "automatiseren"],
    bgtag: "lightblue",
    title: "Klanten- of leveranciersportaal opzetten",
    description: "Met een klanten- of leveranciersportaal zorg je ervoor dat jouw klanten op een makkelijke manier hun dossiers kunnen opvolgen of bestellingen kunnen plaatsen zonder extra administratie voor jouw medewerkers.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/artificiele-intelligentie-ai-voor-documenten.jpeg",
    tags: ["digitaliseren", "automatiseren"],
    bgtag: "lightblue",
    title: "Repetitief (of manueel) werk reduceren via AI",
    description: "Bespaar meer tijd door repetitieve handelingen te automatiseren, waardoor er meer ruimte is voor waardevollere taken. Kies voor een efficiëntere en productievere workflow.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/digitaliseren-archief.jpeg",
    tags: ["digitaliseren"],
    bgtag: "lightblue",
    title: "Scanningservice voor papieren archief",
    description: "Met onze scanningservice zet je een papieren archief om in digitale informatie en maak documenten overal toegankelijk.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/scanoplossingen-printoplossingen.jpeg",
    tags: ["digitaliseren"],
    bgtag: "lightblue",
    title: "Scanoplossingen & printoplossingen",
    description: "Wij helpen je met het uitkiezen van de juiste tools en hardware en het bouwen van een sterk beveiligd digitaal archief. Door te werken met een gestructureerde database is het gemakkelijker om snel de juiste informatie te vinden en deze op een efficiënte manier te delen met medewerkers.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/laura-ockel-UQ2Fw_9oApU-unsplash-tab.jpg",
    tags: ["automatiseren"],
    bgtag: "bggray",
    title: "Integraties en koppelingen tussen pakketten",
    description: "Zorg voor een vlottere workflow door de verschillende softwarepakketten met elkaar te laten communiceren.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/lenny-kuhne-jHZ70nRk7Ns-unsplash-tab.jpg",
    tags: ["automatiseren"],
    bgtag: "bggray",
    title: "Processen automatiseren binnen één ERP-pakket",
    description: "Creëer gestroomlijnde (papierloze) processen met een duidelijke focus: het maximaliseren van de productiviteit en de doorloopsnelheid binnen jouw onderneming. Ons ERP-pakket Cirta helpt je op weg.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/kvalifik-5Q07sS54D0Q-unsplash-tab.jpg",
    tags: ["automatiseren"],
    bgtag: "bggray",
    title: "Processen automatiseren rondom het ERP-pakket",
    description: "Voeg kleine toepassingen toe om ook zaken die buiten je ERP-pakket vallen efficiënt aan te pakken.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/alvaro-reyes-qWwpHwip31M-unsplash1-tab.jpg",
    tags: ["automatiseren"],
    bgtag: "bggray",
    title: "Workflow optimaliseren",
    description: "Creëer meer winst op kortere tijd door je workflow te optimaliseren. Een gestructureerde basis leidt automatisch naar een efficiëntere werking.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/scheduling-en-planning.jpeg",
    tags: ["plannen"],
    bgtag: "lightgray",
    title: "Geautomatiseerde werkplekplanning",
    description: "Plan werkplekken geautomatiseerd in op basis van competenties, vaardigheden, bezettinggraad of beschikbaarheden van resources.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/personeelsplanning.jpeg",
    tags: ["plannen"],
    bgtag: "lightgray",
    title: "Personeelsplanning",
    description: "Ontzorg de planner én de uitvoerder door middel van een efficiënte personeelsplanning die de mogelijkheid biedt om real-time plannen te wijzigen en een duidelijk overzicht weergeeft voor alle partijen.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/digitale-productieplanning.jpeg",
    tags: ["plannen"],
    bgtag: "lightgray",
    title: "Productieplanning & scheduling",
    description: "Digitaliseer en optimaliseer jouw scheduling en productieplanning. Hou in real-time rekening met alle productiefacturen om een optimale productieplanning op te zetten.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/competentiematrix.jpeg",
    tags: ["plannen"],
    bgtag: "lightgray",
    title: "Skills & competenties matchen met uit te voeren taken",
    description: "Zorg ervoor dat een bepaalde taak onmiddellijk gekoppeld wordt aan de medewerker die over de juiste skills beschikt. Zo leg je de ideale basis voor een opleidingsplan of planning.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/qastan-planning.jpeg",
    tags: ["plannen"],
    bgtag: "lightgray",
    title: "Van Excel naar een echte planningsoftware",
    description: "Afstappen van jouw planning in Excel? Of deze laten overzetten naar echte planningsoftware? ",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/scheduling-en-planning.jpeg",
    tags: ["plannen"],
    bgtag: "lightgray",
    title: "Geautomatiseerde werkplekplanning",
    description: "Plan werkplekken geautomatiseerd in op basis van competenties, vaardigheden, bezettinggraad of beschikbaarheden van resources.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/itsupport.jpeg",
    tags: ["IT-infrastructuur"],
    bgtag: "darkblue",
    title: "Eén aanspreekpunt voor jouw volledige IT",
    description: "Op zoek naar een partner die je kan bijstaan op vlak van IT én die altijd bereikbaar is?",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/hardware-leverancier-itpartner.jpeg",
    tags: ["IT-infrastructuur"],
    bgtag: "darkblue",
    title: "Hardware & asset management",
    description: "Is jouw onderneming op zoek naar apparatuur zoals laptops, servers, printers maar ook naar hostingoplossingen? Wij helpen je graag verder en voorzien de nodige toestellen.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/john-schnobrich-FlPc9_VocJ4-unsplash-tab.jpg",
    tags: ["IT-infrastructuur"],
    bgtag: "darkblue",
    title: "IT-audit en future-proof IT-beleid",
    description: "Loop niet achter de feiten aan en geniet van een vlotte service die jou op de hoogte houdt van de laatste nieuwe inzichten in de IT-wereld.",
  },
];
const tags = ["algemeen", "automatiseren", "digitaliseren", "plannen", "IT-infrastructuur"];

function Blog() {
  return (
    <>
      <CardWImage title="Ontdek onze blog" cardWImageData={cardWImageData} tags={tags} />
    </>
  );
}

export default Blog;
