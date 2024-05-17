import React from "react";
import patroon from "../img/patroon.png";

function CardFullWTwo() {
  return (
    <>
      <div className="lg:grid grid-cols-2 h-96 my-20">
        <div className="bg-darkblue text-white px-10 pt-12 pb-5">
          <p className="text-base lg:text-xl mb-5">
            Bij Qastan zijn we dol op <span className="font-bold">automatisering</span> en <span className="font-bold">digitalisering</span>. Maar een geweldig team bestaat natuurlijk uit échte mensen met een passie voor IT en bakken ervaring! Ze hebben elk hun eigen sterktes, maar delen allemaal dezelfde mindset: <span className="font-bold">enthousiast</span> en <span className="font-bold">gemotiveerd</span> om jouw onderneming te <span className="font-bold">ondersteunen</span>.
          </p>
          <a href="/Team" className="bg-darkorange text-white font-medium rounded-full py-2 px-4 hover:bg-lightblue transition duration-300 mr-5">
            Ontmoet het team
          </a>
          <a href="/Jobs" className="bg-lightgray text-white font-medium rounded-full py-2 px-4 hover:bg-lightblue transition duration-300">
            Deel uitmaken van ons team
          </a>
        </div>
        <div className="bg-bggray text-black px-10 flex justify-center" style={{ backgroundImage: `url(${patroon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
          <p className="flex items-center text-6xl md:text-8xl mx-10">Maak kennis met ons team</p>
        </div>
      </div>
    </>
  );
}

export default CardFullWTwo;
