import React from "react";
import pattern from "../img/patroon.png";

function CardFullWTwo() {
  return (
    <div className="my-20">
      <div className="lg:grid grid-cols-2 h-96 my-20 relative">
        <div className="bg-darkblue text-white px-6 py-8 md:px-10 md:pt-12 md:pb-5 lg:order-1 flex flex-col justify-between">
          <p className="text-base lg:text-xl mb-5 xl:ml-20">
            Bij Qastan zijn we dol op <span className="font-bold">automatisering</span> en <span className="font-bold">digitalisering</span>. Maar een geweldig team bestaat natuurlijk uit échte mensen met een passie voor IT en bakken ervaring! Ze hebben elk hun eigen sterktes, maar delen allemaal dezelfde mindset: <span className="font-bold">enthousiast</span> en <span className="font-bold">gemotiveerd</span> om jouw onderneming te <span className="font-bold">ondersteunen</span>.
          </p>
          <div className="flex flex-col sm:flex-row xl:ml-20">
            <a href="/Team" className="bg-darkorange text-white font-medium rounded-full py-2 px-4 hover:bg-lightblue transition duration-300 mb-2 sm:mb-0 sm:mr-5 w-fit flex items-center">
              Ontmoet het team
            </a>
            <a href="/Jobs" className="bg-lightgray text-white font-medium rounded-full py-2 px-4 hover:bg-lightblue transition duration-300 w-fit flex items-center">
              Deel uitmaken van ons team
            </a>
          </div>
        </div>
        <div
          className="bg-bggray text-black px-6 md:px-10 flex justify-center lg:order-2"
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundPosition: "top left",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            transform: "scaleX(-1)",
          }}
        >
          <p className="flex items-center text-6xl md:text-8xl text-black mx-10 xl:ml-20 scale-x-[-1] text-end">Maak kennis met ons team</p>
        </div>
      </div>
    </div>
  );
}

export default CardFullWTwo;
