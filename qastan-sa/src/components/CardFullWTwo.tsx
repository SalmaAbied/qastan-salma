import React from "react";
import patroon from "../img/patroon.png";

function CardFullWTwo() {
  return (
    <div className="my-20">
      <div className="grid lg:grid-cols-2 h-auto lg:h-96">
        <div className="bg-darkblue text-white px-6 py-8 md:px-10 md:pt-12 md:pb-5 order-2 lg:order-1 flex flex-col justify-between">
          <p className="text-sm md:text-base lg:text-xl mb-5 xl:ml-20">
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
        <div className="bg-bggray text-black px-6 md:px-10 flex justify-center order-1 lg:order-2" style={{ backgroundImage: `url(${patroon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
          <p className="flex items-center text-4xl md:text-6xl lg:text-8xl text-end xl:mr-20">Maak kennis met ons team</p>
        </div>
      </div>
    </div>
  );
}

export default CardFullWTwo;
