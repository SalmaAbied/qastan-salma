import React, { useState } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  imageUrl: string;
  tags: string[];
  bgtag: string;
  title: string;
  description: string;
}

const cardData: CardProps[] = [
  {
    imageUrl: "https://www.qastan.be/swfiles/files/documenten-centraliseren.jpeg",
    tags: ["digitaliseren"],
    bgtag: "lightblue",
    title: "Bestanden centraliseren",
    description: "Nooit meer op zoek naar dossiers of documenten. Verzamel al je informatie op één centrale plek.",
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

const tagColors: { [key: string]: string } = {
  digitaliseren: "bg-lightblue",
  automatiseren: "bg-bggray",
  plannen: "bg-lightgray",
  "IT-infrastructuur": "bg-darkblue",
};

const textColors: { [key: string]: string } = {
  digitaliseren: "text-darkblue",
  automatiseren: "text-darkblue",
  plannen: "text-darkblue",
  "IT-infrastructuur": "text-white",
};

const FilterButton: React.FC<{ tag: string; selectedTags: string[]; toggleTag: (tag: string) => void }> = ({ tag, selectedTags, toggleTag }) => {
  const isSelected = selectedTags.includes(tag);
  const bgColor = isSelected ? "bg-darkorange shadow-lg shadow-black/50" : tagColors[tag];
  const textColor = isSelected ? "text-white" : textColors[tag];

  return (
    <button className={`rounded-full px-4 py-2 font-semibold shadow-lg shadow-blue-200/50 hover:brightness-75 transition duration-500 text-xs mr-2 mb-2 ${bgColor} ${textColor}`} onClick={() => toggleTag(tag)}>
      {tag}
    </button>
  );
};

const CardWImage: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) => (prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]));
    setCurrentPage(1);
  };

  const cardsPerPage = 12;
  const filteredCardData = selectedTags.length === 0 ? cardData : cardData.filter((card) => card.tags.some((tag) => selectedTags.includes(tag)));
  const totalPages = Math.ceil(filteredCardData.length / cardsPerPage);
  const currentCards = filteredCardData.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tags = ["digitaliseren", "automatiseren", "plannen", "IT-infrastructuur"];

  return (
    <>
      <div className="pb-20">
        <div className="container mx-auto pt-56 md:pt-5 pb-10">
          <h1 className="pl-5 text-4xl">Ontdek onze toepassingen</h1>
          <hr className="ml-5 w-12 h-1 border-0 bg-darkorange block mt-2 mb-6" />
          <div className="pl-5">
            <h2 className="text-2xl font-semibold mb-4">Filters</h2>
            {tags.map((tag) => (
              <FilterButton key={tag} tag={tag} selectedTags={selectedTags} toggleTag={toggleTag} />
            ))}
          </div>
        </div>
        <div className="px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container mx-auto">
          {currentCards.map((card, index) => (
            <div key={index} className="bg-slate-50 shadow-lg shadow-darkblue/50 rounded-3xl shadow-lg mb-8 flex flex-col">
              <div className="sm:w-fit h-80 object-contain overflow-hidden flex items-center rounded-t-3xl">
                <img src={card.imageUrl} alt={card.title} />
              </div>
              <div className="overflow-hidden relative flex-grow px-4">
                <ul className="list-none my-5 flex">
                  {card.tags.map((tag, index) => (
                    <li key={index} className={`rounded-full ${tagColors[tag]} ${textColors[tag]} px-4 py-2 font-semibold text-xs mr-2`}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-black mb-2">{card.title}</h1>
                  <p className="text-base font-light text-black mb-4">{card.description}</p>
                </div>
              </div>
              <div className="mt-auto justify-end p-4">
                <Link to={`/detail/${card.title}`} className="rounded-full block h-10 flex items-center w-fit md:mt-0 mt-2 font-medium text-white bg-darkorange px-5 py-2 hover:bg-lightblue hover:text-white transition duration-300">
                  Meer informatie
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 mx-2 rounded-full text-black font-semibold hover:text-darkorange transition duration-300">
            Vorige
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)} className={`px-4 py-2 mx-2 rounded-full ${currentPage === index + 1 ? "font-black text-darkorange" : "font-medium"} text-black font-semibold hover:text-darkorange transition duration-300`}>
              {index + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 mx-2 rounded-full text-black font-semibold hover:text-darkorange transition duration-300">
            Volgende
          </button>
        </div>
      </div>
    </>
  );
};

export default CardWImage;
