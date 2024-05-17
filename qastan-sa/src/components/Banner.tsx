import React from "react";
import cirkel from "../img/cirkel.png";

function Banner() {
  return (
    <>
      <div className="relative bg-darkblue h-64 container mx-auto rounded-2xl my-10 text-white pt-12 pl-20">
        <h1 className="text-3xl font-semibold mb-2">Samen duiken in de digitalisering van jouw onderneming?</h1>
        <p className="text-lg mb-5 w-1/2">We helpen je graag verder na een verkennend gesprek. We luisteren naar jouw noden, stellen een gepaste oplossing voor en laten je bedrijf vliegen!</p>
        <a href="#" className="bg-darkorange font-medium py-2 px-4 rounded-full hover:bg-lightblue transition duration-300">
          Ontdek meer
        </a>
        <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
          <img src={cirkel} alt="Cirkel" className="h-36 w-auto" />
        </div>
      </div>
    </>
  );
}

export default Banner;
