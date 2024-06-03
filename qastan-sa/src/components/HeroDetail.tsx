import React from "react";
import hero from "../img/oplossingen.jpeg";

function HeroDetail() {
  return (
    <div className="pt-10 container mx-auto px-2">
      <div
        className="relative bg-darkblue rounded-t-lg md:rounded-lg overflow-hidden bg-darkblue shadow-lg shadow-darkblue/50"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          backgroundPosition: "top left",
          backgroundSize: "cover",
          height: "50vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
          <h1 className="text-white text-4xl sm:text-8xl font-bold">Onze oplossingen</h1>
          <p className="text-white text-lg sm:text-xl mt-2 sm:w-1/2">Ontdek al onze oplossingen en vraag vandaag nog de gepaste oplossing voor uw bedrijf</p>
        </div>
      </div>
    </div>
  );
}

export default HeroDetail;
