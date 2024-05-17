import React from "react";
import patroon from "../img/patroon.png";

function CardFullW() {
  return (
    <>
      <div className="lg:grid grid-cols-2 h-96 my-20">
        <div className="bg-darkblue px-10 flex justify-center" style={{ backgroundImage: `url(${patroon})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
          <p className="flex items-center text-6xl md:text-8xl text-white mx-10">Jouw digitale bouwstenen</p>
        </div>
        <div className="bg-bggray px-10 pt-12 pb-5">
          <p className="text-base lg:text-xl mb-5">Op zoek naar een <span className="font-bold">IT-partner</span> om de <span className="font-bold">digitalisering</span> van je organisatie in goede banen te leiden? <span className="font-bold">Software op maat, document management of personeelsplanning</span>, bij Qastan kunnen we het allemaal. We duiken in je business, zwemmen samen richting een optimale digitale workflow en laten je bedrijf vliegen! Wij zijn de <span className="font-bold">digitale architecten</span> voor jouw organisatie of bedrijf. Net als de papegaaiduiker in ons logo, zijn onze medewerkers multi-getalenteerd en kunnen ze het hele spectrum van digitale transformatie aan.</p>
          <a href="/Over" className="bg-darkblue text-white font-medium rounded-full py-2 px-4 hover:bg-lightblue transition duration-300">
            Ontdek meer
          </a>
        </div>
      </div>
    </>
  );
}

export default CardFullW;
