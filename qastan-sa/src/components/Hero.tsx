import React, { useEffect } from "react";
import pattern from "../img/patroon.png";
import Card from "./Card";
import Typed from "typed.js";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Hero: React.FC = () => {
  useEffect(() => {
    const options = {
      strings: ["digitaal", "Qastan"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      showCursor: false,
      loop: true,
    };
    const typed = new Typed(".p2", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <div className="relative">
        <Helmet>
          <title>Qastan - Helemaal Digitaal</title>
          <meta name="description" content="Op zoek naar een IT-partner om de digitalisering van je organisatie in goede banen te leiden? Ontdek onze oplossingen." />
          <meta name="keywords" content="IT-partner, digitalisering, organisatie, oplossingen" />
          <meta name="author" content="Qastan" />
        </Helmet>
        <div className="h-[calc(100vh-90px)] relative bg-darkblue text-white rounded-b-lg 2xl:h-[calc(100vh-300px)]">
          <div
            className="flex flex-col justify-end 2xl:justify-center"
            style={{
              backgroundImage: `url(${pattern})`,
              backgroundPosition: "top left",
              backgroundSize: "contain",
              height: "50vh",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-center">
              <h1 className="h-40 md:text-8xl font-bold text-6xl pb-5 h-30">
                <span className="mx-auto">Helemaal</span> <span className="p2 text-darkorange">digitaal</span>
              </h1>
              <p className="text-base px-5 md:text-xl mx-auto md:w-1/2 pb-5 md:mt-10 lg:mt-2">
                Op zoek naar een <span className="font-bold">IT-partner</span> om de <span className="font-bold">digitalisering</span> van je <span className="font-bold">organisatie</span> in goede banen te leiden? Ontdek onze oplossingen
              </p>
              <a href="/Contact" className="bg-darkorange font-medium py-2 px-4 rounded-full hover:bg-lightblue transition duration-300">
                Vraag een gesprek aan
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-32 w-full -mb-10">
          <Card />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Hero;
