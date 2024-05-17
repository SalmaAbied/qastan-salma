import React, { useState } from "react";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("option-1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="pl-5 text-4xl">Onze toepassingen</h1>
        <hr className="ml-5 w-12 h-1 border-0 bg-darkorange block mt-2 mb-6" />
      </div>
      <div className="flex flex-col justify-center items-center px-4 py-20">
        <nav className="text-xl flex flex-row gap-2 py-1 px-3 rounded-md  cursor-pointer">
          <Tab tabId="option-1" activeTab={activeTab} onClick={handleTabClick}>
            Digitalisering
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

        <main className="w-full max-w-3xl sm:p-10 pt-2 sm:pt-4 overflow-hidden bg-white p-6 sm:p-10 sm:py-12 sm:shadow-xl w-full overflow-hidden rounded-xl duration-500 text-sm space-y-4">
          {activeTab === "option-1" && <DigitaliseringTab />}
          {activeTab === "option-2" && <AutomatiseringTab />}
          {activeTab === "option-3" && <PlannenTab />}
          {activeTab === "option-4" && <ITTab />}
        </main>
      </div>
    </>
  );
};

const Tab: React.FC<TabProps> = ({ tabId, activeTab, onClick, children }) => {
  const isActive = tabId === activeTab;
  return (
    <div id={`${tabId}-nav`} className={`px-3 py-1 rounded-md text-center cursor-pointer transition duration-300 hover:text-darkorange ${isActive ? "bg-white border-2 border-darkorange text-darkorange" : ""}`} onClick={() => onClick(tabId)}>
      {children}
    </div>
  );
};

const DigitaliseringTab: React.FC = () => (
  <section id="option-1-panel" className="tab-content">
    <h2>Digitalisering</h2>
    {/* Content for Products Tab */}
  </section>
);

const AutomatiseringTab: React.FC = () => (
  <section id="option-2-panel" className="tab-content">
    <h2>Automatisering</h2>
    {/* Content for Solutions Tab */}
  </section>
);

const PlannenTab: React.FC = () => (
  <section id="option-3-panel" className="tab-content">
    <h2>Plannen</h2>
    {/* Content for Resources Tab */}
  </section>
);

const ITTab: React.FC = () => (
  <section id="option-4-panel" className="tab-content">
    <h2>IT-beheer</h2>
    {/* Content for Pricing Tab */}
  </section>
);

export default Tabs;
