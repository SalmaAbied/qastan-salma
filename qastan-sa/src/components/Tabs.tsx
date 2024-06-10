import React, { useState, useEffect } from "react";
import lottie from "lottie-web";
import { Helmet } from "react-helmet";
import digitaliserenAnimation from "../lottie/digitaliseren.json";
import automatiserenAnimation from "../lottie/automatiseren.json";
import plannenAnimation from "../lottie/plannen.json";
import itAnimation from "../lottie/it.json";

interface TabContentProps {
  title: string;
  description: string;
  animationData: any;
  link: string;
}

interface TabProps {
  tabId: string;
  activeTab: string;
  onClick: (tabId: string) => void;
  children: React.ReactNode;
}

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Digitaliseren");

  const tabs = [
    {
      id: "Digitaliseren",
      title: "Digitaliseren",
      description: "Archiveren, document management, digitaal ondertekenen, documentherkenning, structuur, workflow management, … Kies voor een papierloze organisatie!",
      animation: digitaliserenAnimation,
      link: "/Digitaliseren",
    },
    {
      id: "Automatiseren",
      title: "Automatiseren",
      description: "100% focus op het maximaliseren van efficiëntie en productiviteit via integraties, koppelingen tussen systemen of een maatwerktoepassing om jouw organisatie aan te sturen.",
      animation: automatiserenAnimation,
      link: "/Automatiseren",
    },
    {
      id: "Plannen",
      title: "Plannen",
      description: "Reduceer tijdverlies en optimaliseer productiviteit van werknemers, taken of machines. Optimaal aansturen van werknemers op basis van competenties, skills en taken.",
      animation: plannenAnimation,
      link: "/Plannen",
    },
    {
      id: "IT",
      title: "IT-beheer",
      description: "Één aanspreekpunt voor alle IT-uitdagingen in jouw organisatie. Heldere communicatie, sterke expertise en duidelijk visie. Wij zijn de IT-partner die je nodig hebt!",
      animation: itAnimation,
      link: "/IT",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Onze oplossingen - {activeTab}</title>
        <meta name="description" content={tabs.find(tab => tab.id === activeTab)?.description} />
      </Helmet>
      <div className="container mx-auto pt-56 md:pt-24 lg:pt-56 xl:pt-2 sm:pt-5">
        <h2 className="mb-1 text-4xl font-bold leading-tight text-gray-900">Onze oplossingen</h2>
        <p className="mb-12 text-base italic text-gray-500">Ontdek al onze oplossingen en vraag vandaag nog de gepaste oplossing voor uw bedrijf</p>
      </div>
      <div className="flex flex-col justify-center items-center px-4 py-10">
        <nav className="text-xl flex flex-col sm:flex-row gap-2 pt-1 px-3 rounded-md cursor-pointer">
          {tabs.map((tab) => (
            <Tab key={tab.id} tabId={tab.id} activeTab={activeTab} onClick={setActiveTab}>
              {tab.title}
            </Tab>
          ))}
        </nav>
        <main className="w-full text-black max-w-4xl sm:p-10 pt-2 sm:pt-4 overflow-hidden bg-slate-50 p-6 sm:p-10 sm:py-12 shadow-lg shadow-darkblue/50 w-full overflow-hidden rounded-xl duration-500 text-xl space-y-4">
          {tabs.map((tab) => (activeTab === tab.id ? <TabContent key={tab.id} title={tab.title} description={tab.description} animationData={tab.animation} link={tab.link} /> : null))}
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

const TabContent: React.FC<TabContentProps> = ({ title, description, animationData, link }) => {
  const containerId = `${title}-animation`;

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
    <section className="grid md:grid-cols-2 items-center">
      <div>
        <h2 className="font-semibold text-2xl mb-5">{title}</h2>
        <p className="text-base mb-5">{description}</p>
        <a href={link} className="py-2 px-4 bg-darkblue transition duration-300 rounded-full text-white text-base hover:bg-lightblue font-medium">
          Meer informatie
        </a>
      </div>
      <div className="h-96" id={containerId}></div>
    </section>
  );
};

export default Tabs;