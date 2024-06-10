import { CheckCheck } from "lucide-react";
import React from "react";

const solutions = [
  {
    title: "Digitaliseren",
    bgImage: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Al je documenten op één plaats maar toch overal bij de hand hebben? Documenten sneller terugvinden, delen en beheren? Efficiënter werk en de administratieve last verkleinen? Kleine digitaliseringsoplossingen of grote automatiseringstrajecten, we passen onze oplossing aan naar de grootte van jouw onderneming. De mogelijkheden zijn eindeloos!",
    points: ["Zorgt voor eenvoudig document management", "Garandeert een efficiëntere werking", "Creëert orde en netheid in je documenten", "Minimaliseert repetitief en manueel werk"],
    links: [
      { href: "/Toepassingen", text: "Praktische voorbeelden", bg: "bg-darkorange", textColor: "text-white" },
      { href: "/Digitaliseren", text: "Meer info", bg: "bg-bggray", textColor: "text-black" },
    ],
    shadow: "shadow-darkblue/50",
  },
  {
    title: "Automatiseren",
    bgImage: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Automatisering zorgt voor sterkere integraties tussen verschillende systemen en pakketten waardoor jouw IT-omgeving ten volle kan renderen via ons ERP, CRM, Power apps-toepassingen of webportalen. Bedrijfsprocessen worden gesystematiseerd of manueel en repetitief werk wordt geminimaliseerd.",
    points: ["Verhoogt de productiviteit", "Zorgt voor een vlottere samenwerking", "Bespaart kostbare tijd binnen je onderneming", "Creëert meer inzicht"],
    links: [
      { href: "/Toepassingen", text: "Praktische voorbeelden", bg: "bg-darkorange", textColor: "text-white" },
      { href: "/Automatiseren", text: "Meer info", bg: "bg-bggray", textColor: "text-black" },
    ],
    shadow: "shadow-blue-300/50",
  },
  {
    title: "Plannen",
    bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    description: "Plannen is een tijdrovende klus waarbij het vaak moeilijk is om het overzicht te bewaren. Kleine of grote organisaties hebben steeds andere noden en zoeken schaalbare oplossingen die kunnen meegroeien binnen de organisatie. Planningsystemen die ontzorgen? Daar gaan we voor.",
    points: ["Garandeert real-time synchronisatie", "Zoekt automatisch patronen en relaties in bestaande informatie", "Voorspelt beschikbaarheden en bezettingsgraad", "Ondersteunt jouw HR en/of planningsteams"],
    links: [
      { href: "/Toepassingen", text: "Praktische voorbeelden", bg: "bg-darkorange", textColor: "text-white" },
      { href: "/Plannen", text: "Meer info", bg: "bg-bggray", textColor: "text-black" },
    ],
    shadow: "shadow-darkblue/50",
  },
  {
    title: "IT-beheer",
    bgImage: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "We staan jouw organisatie bij in de dagdagelijkse taken. Bij ons ben je geen nummer maar praat je rechtstreeks met jouw contactpersonen. Echte mensen die jouw vanop afstand of ter plaatse helpen waar nodig. Zo ontzorgen wij jouw organisatie.",
    points: ["Ontzorgen van jouw IT-beheer", "Focus op duurzaamheid en lange termijnperspectief", "Advies op maat: procesanalyse, GDPR, cyberveiligheid, keuze ERP-implementatie,…", "Technische ondersteuning waar nodig: helpdesking, cloud, netwerk,… Vanop afstand of ter plaatse"],
    links: [
      { href: "/Toepassingen", text: "Praktische voorbeelden", bg: "bg-darkorange", textColor: "text-white" },
      { href: "/IT", text: "Meer info", bg: "bg-bggray", textColor: "text-black" },
    ],
    shadow: "shadow-blue-300/50",
  },
];

function Grid() {
  return (
    <div className="container mx-auto pt-20 px-2 sm:px-6 lg:px-8">
      <div>
        <h2 className="mb-1 text-4xl font-bold leading-tight text-gray-900 mb-10">Ontdek onze oplossingen</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-2">
        {solutions.map((solution, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              <>
                <div className={`relative bg-darkblue text-white p-6 hidden md:block rounded-lg md:row-span-2 flex items-center justify-center shadow-lg ${solution.shadow}`}>
                  <div className="absolute inset-0 bg-cover bg-center rounded-lg " style={{ backgroundImage: `url(${solution.bgImage})`, filter: "brightness(50%)" }}></div>
                </div>
                <div className={`bg-bggray p-6 rounded-t-lg md:rounded-lg shadow-lg ${solution.shadow}`}>
                  <h1 className="text-3xl font-bold">{solution.title}</h1>
                  <p className="mb-5 text-black">{solution.description}</p>
                </div>
                <div className={`bg-darkblue p-6 mb-8 md:mb-0 rounded-b-lg md:rounded-lg shadow-lg ${solution.shadow}`}>
                  <ul className="space-y-3 text-white">
                    {solution.points.map((point, idx) => (
                      <li className="flex items-center" key={idx}>
                        <CheckCheck className="text-darkorange mr-2" /> {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row mt-4 space-y-2 sm:space-y-0 sm:space-x-4 ">
                    {solution.links.map((link, idx) => (
                      <a key={idx} href={link.href} className={`${link.bg} ${link.textColor} font-medium rounded-full py-2 px-4 hover:bg-lightblue transition duration-300 flex items-center w-fit`}>
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={`bg-bggray p-6 rounded-t-lg md:rounded-lg shadow-lg ${solution.shadow}`}>
                  <h1 className="text-3xl font-bold">{solution.title}</h1>
                  <p className="mb-5 text-black">{solution.description}</p>
                </div>
                <div className={`relative bg-darkblue text-white p-6 hidden md:block rounded-lg md:row-span-2 flex items-center justify-center shadow-lg ${solution.shadow}`}>
                  <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${solution.bgImage})`, filter: "brightness(50%)" }}></div>
                </div>
                <div className={`bg-darkblue p-6 mb-8 md:mb-0 rounded-b-lg md:rounded-lg shadow-lg ${solution.shadow}`}>
                  <ul className="space-y-3 text-white">
                    {solution.points.map((point, idx) => (
                      <li className="flex items-center" key={idx}>
                        <CheckCheck className="text-darkorange mr-2" /> {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
                    {solution.links.map((link, idx) => (
                      <a key={idx} href={link.href} className={`${link.bg} ${link.textColor} font-medium rounded-full py-2 px-4 hover:bg-lightblue transition duration-300 flex items-center w-fit`}>
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Grid;
