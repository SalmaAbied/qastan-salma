import React from "react";

const cardData: CardProps[] = [
  {
    imageUrl: "https://www.qastan.be/swfiles/files/documenten-centraliseren.jpeg",
    tags: ["FITdoc"],
    title: "Bestanden centraliseren",
    description: "Nooit meer op zoek naar dossiers of documenten. Verzamel al je informatie op één centrale plek.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/Cyberawarenesstraining-ITpartner.png",
    tags: ["Veiligheid", "Phising"],
    title: "Cyberveiligheid: awarenesstraining",
    description: "Behoed jouw bedrijf op mogelijk cyberaanvallen door alle medewerkers attent te maken op de gevaren van phishing en het belang van een veilig werkomgeving.",
  },
  {
    imageUrl: "https://www.qastan.be/swfiles/files/itsupport.jpeg",
    tags: ["IT"],
    title: "Eén aanspreekpunt voor jouw volledige IT",
    description: "Op zoek naar een partner die je kan bijstaan op vlak van IT én die altijd bereikbaar is?",
  },
];

const CardWImage: React.FC = () => {
  return (
    <>
      <div className="pb-20">
        <div className="container mx-auto pt-56 sm:pt-5 pb-10">
          <h1 className="pl-5 text-4xl">Ontdek onze toepassingen</h1>
          <hr className="ml-5 w-12 h-1 border-0 bg-darkorange block mt-2 mb-6" />
        </div>
        <div className="flex flex-wrap container mx-auto justify-around xxl:w-3/4">
          {cardData.map((card, index) => (
            <div key={index} className="bg-darkblue shadow-lg shadow-darkblue/50 rounded-xl shadow-lg md:ml-5 lg:ml-0 w-3/4 sm:w-min mb-8 flex flex-col">
              <div className="sm:w-96 sm:h-96 overflow-hidden flex items-center rounded-t-xl">
                <img src={card.imageUrl} alt={card.title} />
              </div>
              <div className="overflow-hidden relative flex-grow p-4">
                <ul className="list-none my-5 flex">
                  {card.tags.map((tag, index) => (
                    <li key={index} className="rounded-full bg-lightblue text-darkblue px-4 py-2 font-semibold text-xs mr-2">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-white mb-2">{card.title}</h1>
                  <p className="text-base font-light text-white mb-4">{card.description}</p>
                </div>
              </div>
              <div className="mt-auto justify-end p-4">
                <a href="#" className="rounded-full block h-10 flex items-center w-fit md:mt-0 mt-2 font-medium text-white bg-darkorange px-5 py-2 hover:bg-lightblue hover:text-white transition duration-300">
                  Meer informatie
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardWImage;