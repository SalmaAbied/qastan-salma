import React from "react";
import pattern from "../img/patroon.png";
import { Helmet, HelmetProvider } from "react-helmet-async";

function CardFullW() {
  return (
    <HelmetProvider>
      <div className="lg:grid grid-cols-2 h-96 my-20 relative">
        <Helmet>
          <title>Jouw Digitale Bouwstenen - Qastan</title>
          <meta
            name="description"
            content="Op zoek naar een IT-partner om de digitalisering van je organisatie in goede banen te leiden? Ontdek hoe Qastan je kan helpen met software op maat, document management en personeelsplanning."
          />
          <meta name="keywords" content="IT-partner, digitalisering, software op maat, document management, personeelsplanning, Qastan" />
        </Helmet>
        <div
          className="bg-darkblue px-10 flex justify-center"
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundPosition: "top left",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        >
          <p className="flex items-center text-6xl md:text-8xl text-white mx-10 xl:ml-20">Jouw digitale bouwstenen</p>
        </div>
        <div className="bg-bggray px-10 pt-12 pb-5 flex flex-col justify-between">
          <p className="text-base lg:text-xl mb-5 xl:mr-20">
            Op zoek naar een <span className="font-bold">IT-partner</span> om de <span className="font-bold">digitalisering</span> van je organisatie in goede banen te leiden? <span className="font-bold">Software op maat, document management of personeelsplanning</span>, bij Qastan kunnen we het allemaal. We duiken in je business, zwemmen samen richting een optimale digitale workflow en laten je bedrijf vliegen! Wij zijn de <span className="font-bold">digitale architecten</span> voor jouw organisatie of bedrijf. Net als de papegaaiduiker in ons logo, zijn onze medewerkers multi-getalenteerd en kunnen ze het hele spectrum van digitale transformatie aan.
          </p>
          <div className="flex flex-col">
            <a href="/Over" className="bg-darkblue text-white font-medium rounded-full py-2 px-4 hover:bg-lightblue transition duration-300 w-fit" title="Ontdek meer over Qastan">
              Ontdek meer
            </a>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default CardFullW;
