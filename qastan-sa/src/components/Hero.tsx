import React, { useEffect } from "react";
import pattern from "../img/patroon.png";
import Card from "./Card";
import Typed from "typed.js";


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
    <div className="relative">
      <div className="h-[calc(100vh-90px)] relative bg-darkblue text-white rounded-b-3xl">
        <div
          className="flex flex-col justify-end"
          style={{
            backgroundImage: `url(${pattern})`,
            backgroundPosition: "top left",
            backgroundSize: "contain",
            height: "50vh",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center">
            <h1 className="text-8xl font-bold text-6xl pb-5">
              Helemaal <span className="p2 text-darkorange">digitaal</span>
            </h1>
            <p className="mx-auto md:w-1/2 xl:w-1/3 pb-5">
              Op zoek naar een <span className="font-bold">IT-partner</span> om de <span className="font-bold">digitalisering</span> van je <span className="font-bold">organisatie</span> in goede banen te leiden? Ontdek onze oplossingen
            </p>
            <a href="#" className="bg-lightgray py-2 px-4 rounded-full hover:bg-lightblue transition duration-300">
              Vraag een gesprek aan
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-32 w-full -mb-10">
        <Card />
      </div>
    </div>
  );
};

export default Hero;
