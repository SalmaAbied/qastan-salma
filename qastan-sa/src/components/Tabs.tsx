import React, { useState, useEffect } from "react";
import lottie from "lottie-web";
import digitaliserenAnimation from "../lottie/digitaliseren.json";
import automatiserenAnimation from "../lottie/automatiseren.json";
import plannenAnimation from "../lottie/plannen.json";
import itAnimation from "../lottie/it.json";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("option-1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="container mx-auto pt-56 md:pt-24 lg:pt-56 xl:pt-2 sm:pt-5">
        <h1 className="pl-5 text-4xl">Onze oplossingen</h1>
        <hr className="ml-5 w-12 h-1 border-0 bg-darkorange block mt-2 mb-6" />
      </div>
      <div className="flex flex-col justify-center items-center px-4 py-10">
        <nav className="text-xl flex flex-col sm:flex-row gap-2 pt-1 px-3 rounded-md cursor-pointer">
          <Tab tabId="option-1" activeTab={activeTab} onClick={handleTabClick}>
            Digitaliseren
          </Tab>
          <Tab tabId="option-2" activeTab={activeTab} onClick={handleTabClick}>
            Automatiseren
          </Tab>
          <Tab tabId="option-3" activeTab={activeTab} onClick={handleTabClick}>
            Plannen
          </Tab>
          <Tab tabId="option-4" activeTab={activeTab} onClick={handleTabClick}>
            IT-beheer
          </Tab>
        </nav>
        <main className="w-full text-black max-w-4xl sm:p-10 pt-2 sm:pt-4 overflow-hidden bg-slate-50 p-6 sm:p-10 sm:py-12 shadow-lg shadow-darkblue/50 w-full overflow-hidden rounded-xl duration-500 text-xl space-y-4">
          {activeTab === "option-1" && <DigitaliseringTab animationData={digitaliserenAnimation} />}
          {activeTab === "option-2" && <AutomatiseringTab animationData={automatiserenAnimation} />}
          {activeTab === "option-3" && <PlannenTab animationData={plannenAnimation} />}
          {activeTab === "option-4" && <ITTab animationData={itAnimation} />}
        </main>
      </div>
    </>
  );
};

const Tab: React.FC<TabProps> = ({ tabId, activeTab, onClick, children }) => {
  const isActive = tabId === activeTab;
  return (
    <div id={`${tabId}-nav`} className={`px-3 py-1 rounded-b-lg sm:rounded-b-none rounded-t-lg text-center cursor-pointer transition duration-300 hover:bg-slate-50 hover:shadow-lg hover:shadow-darkblue/50 ${isActive ? "bg-slate-50 shadow-lg shadow-darkblue/50 text-black" : ""}`} onClick={() => onClick(tabId)}>
      {children}
    </div>
  );
};

const DigitaliseringTab: React.FC<{ animationData: any }> = ({ animationData }) => {
  const containerId = "digitaliseren-animation";
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, [animationData, containerId]);

  return (
    <section id="option-1-panel" className="grid md:grid-cols-2 items-center">
      <div>
        <h2 className="font-semibold text-2xl mb-5">Digitalisering</h2>
        <p className="text-base mb-5">Archiveren, document management, digitaal ondertekenen, documentherkenning, structuur, workflow management, … Kies voor een papierloze organisatie!</p>
        <a href="/Digitaliseren" className="py-2 px-4 bg-darkblue transition duration-300 rounded-full text-white text-base hover:bg-lightblue font-medium">
          Meer informatie
        </a>
      </div>
      <div className="h-96" id={containerId}></div>
    </section>
  );
};

const AutomatiseringTab: React.FC<{ animationData: any }> = ({ animationData }) => {
  const containerId = "automatisering-animation";
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, [animationData, containerId]);

  return (
    <section id="option-2-panel" className="grid md:grid-cols-2 items-center">
      <div>
        <h2 className="font-semibold text-2xl mb-5">Automatisering</h2>
        <p className="text-base mb-5">100% focus op het maximaliseren van efficiëntie en productiviteit via integraties, koppelingen tussen systemen of een maatwerktoepassing om jouw organisatie aan te sturen.</p>
        <a href="/Automatiseren" className="py-2 px-4 bg-darkblue transition duration-300 rounded-full text-white text-base hover:bg-lightblue font-medium">
          Meer informatie
        </a>
      </div>
      <div className="h-96" id={containerId}></div>
    </section>
  );
};

const PlannenTab: React.FC<{ animationData: any }> = ({ animationData }) => {
  const containerId = "plannen-animation";
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, [animationData, containerId]);

  return (
    <section id="option-3-panel" className="grid md:grid-cols-2 items-center">
      <div>
        <h2 className="font-semibold text-2xl mb-5">Plannen</h2>
        <p className="text-base mb-5">Reduceer tijdverlies en optimaliseer productiviteit van werknemers, taken of machines. Optimaal aansturen van werknemers op basis van competenties, skills en taken.</p>
        <a href="/Plannen" className="py-2 px-4 bg-darkblue transition duration-300 rounded-full text-white text-base hover:bg-lightblue font-medium">
          Meer informatie
        </a>
      </div>
      <div className="h-96" id={containerId}></div>
    </section>
  );
};

const ITTab: React.FC<{ animationData: any }> = ({ animationData }) => {
  const containerId = "it-animation";
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (container) {
      lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, [animationData, containerId]);

  return (
    <section id="option-4-panel" className="grid md:grid-cols-2 items-center">
      <div>
        <h2 className="font-semibold text-2xl mb-5">IT-beheer</h2>
        <p className="text-base mb-5">Één aanspreekpunt voor alle IT-uitdagingen in jouw organisatie. Heldere communicatie, sterke expertise en duidelijk visie. Wij zijn de IT-partner die je nodig hebt!</p>
        <a href="/IT" className="py-2 px-4 bg-darkblue transition duration-300 rounded-full text-white text-base hover:bg-lightblue font-medium">
          Meer informatie
        </a>
      </div>
      <div className="h-96" id={containerId}></div>
    </section>
  );
};

export default Tabs;
