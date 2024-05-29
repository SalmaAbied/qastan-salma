import React from "react";
import patroon from "../img/patroon.png";

function Intro() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:gap-4 md:mt-4 px-2">
      <div className="bg-bggray rounded-b-lg md:rounded-lg sm:mr-0 p-8 flex flex-col justify-between drop-shadow-lg drop-shadow-darkblue/50">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl text-black ">Jouw digitale bouwstenen</h1>
        <p className="mb-5">Op zoek naar een IT-partner om de digitalisering van je organisatie in goede banen te leiden? Software op maat, document management of personeelsplanning, bij Qastan kunnen we het allemaal. We duiken in je business, zwemmen samen richting een optimale digitale workflow en laten je bedrijf vliegen! Wij zijn de digitale architecten voor jouw organisatie of bedrijf. Net als de papegaaiduiker in ons logo, zijn onze medewerkers multi-getalenteerd en kunnen ze het hele spectrum van digitale transformatie aan.</p>
        <a href="/Over" className="rounded-full block flex items-center w-fit font-medium text-white bg-darkorange px-5 py-2 mt-4 sm:mt-0 hover:bg-lightblue hover:text-white transition duration-300">
          Meer over Qastan
        </a>
      </div>
      <div
        className="bg-bggray rounded-b-lg sm:rounded-bl-none md:rounded-lg drop-shadow-lg drop-shadow-darkblue/50"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560961911-ba7ef651a56c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}

export default Intro;
