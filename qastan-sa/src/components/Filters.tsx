import React, { useState } from "react";
import { Link } from "react-router-dom";

interface CardWImageProps {
  cardWImageData: CardProps[];
  tags: string[];
  title: string; 
}

const tagColors: { [key: string]: string } = {
  digitaliseren: "bg-lightblue",
  automatiseren: "bg-bggray",
  plannen: "bg-lightgray",
  "IT-infrastructuur": "bg-darkblue",
  ontwikkelaar: "bg-lightblue",
  engineer: "bg-bggray",
};

const textColors: { [key: string]: string } = {
  digitaliseren: "text-darkblue",
  automatiseren: "text-darkblue",
  plannen: "text-darkblue",
  "IT-infrastructuur": "text-white",
  ontwikkelaar: "text-darkblue",
  engineer: "text-darkblue",
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

const CardWImage: React.FC<CardWImageProps> = ({ cardWImageData, tags, title }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) => (prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]));
    setCurrentPage(1);
  };

  const cardsPerPage = 8;
  const filteredCardWImageData = selectedTags.length === 0 ? cardWImageData : cardWImageData.filter((card) => card.tags.some((tag) => selectedTags.includes(tag)));
  const totalPages = Math.ceil(filteredCardWImageData.length / cardsPerPage);
  const currentCards = filteredCardWImageData.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="pb-20">
        <div className="container mx-auto pt-56 md:pt-5 pb-10">
          <h1 className="pl-5 text-4xl">{title}</h1> 
          <hr className="ml-5 w-12 h-1 border-0 bg-darkorange block mt-2 mb-6" />
          <div className="pl-5">
            <h2 className="text-2xl font-semibold mb-4">Filters</h2>
            {tags.map((tag) => (
              <FilterButton key={tag} tag={tag} selectedTags={selectedTags} toggleTag={toggleTag} />
            ))}
          </div>
        </div>
        <div className="px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 container mx-auto">
          {currentCards.map((card, index) => (
            <div key={index} className="bg-slate-50 shadow-lg shadow-darkblue/50 rounded-lg shadow-lg mb-8 flex flex-col">
              <div className="sm:w-fit h-80 object-contain overflow-hidden flex items-center rounded-t-lg">
                <img src={card.imageUrl} alt={card.title} className="md:h-96 object-cover" />
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
