import React from "react";
import cirkel from "../img/cirkel.png";

function Banner() {
  return (
    <div className="relative bg-darkblue shadow-lg shadow-darkblue/50 h-auto container mx-auto rounded-2xl my-10 text-white p-8 md:p-12 lg:p-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">Samen duiken in de digitalisering van jouw onderneming?</h1>
          <p className="text-base md:text-lg lg:text-xl mb-5">We helpen je graag verder na een verkennend gesprek. We luisteren naar jouw noden, stellen een gepaste oplossing voor en laten je bedrijf vliegen!</p>
          <a href="/Contact" className="bg-darkorange font-medium py-2 px-4 rounded-full hover:bg-lightblue transition duration-300">
            Vraag gesprek aan
          </a>
        </div>
        <div className="mt-8 lg:mt-0 lg:absolute lg:right-12 lg:top-1/2 lg:transform lg:-translate-y-1/2">
          <img src={cirkel} alt="Cirkel" className="h-24 w-auto md:h-32 lg:h-72" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
