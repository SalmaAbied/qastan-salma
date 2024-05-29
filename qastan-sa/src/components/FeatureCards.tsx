import React from "react";
import { Database, Printer, Link, WifiOff, Settings, Award, Megaphone, Monitor, Lightbulb, Cloud, Battery, FlaskConical } from "lucide-react";
import Background from "./Background";

const partnersData = [
  {
    title: "CCAPS",
    description: "CCAPS is dé referentie voor alle zakelijk printoplossingen en multifunctionals in West en Oost-Vlaanderen. Met onze eigen digitaliseringsoplossingen (o.a. FITdoc DMS) hebben we tevens een standaard integratie op alle toestellen van CCAPS. Zo geniet je als klant meteen van alle digitaliseringsvoordelen. Printen en scannen zonder zorgen start hier.",
    imgSrc: "https://media.licdn.com/dms/image/D4E0BAQHGcXzlthJLXA/company-logo_200_200/0/1700251787398/ccaps_orange_logo?e=2147483647&v=beta&t=2wiM40UYJ7OKJRpSNtW5mga-RBJiYoQg0vZNh2zEvfs",
    items: [
      { icon: <Printer size={24} />, text: "Zakelijke printoplossingen" },
      { icon: <Database size={24} />, text: "Digitaliseringsvoordelen" },
      { icon: <Link size={24} />, text: "Digitaliseringsvoordelen" },
    ],
  },
  {
    title: "Jorosoft",
    description: "Met meer dan 25 jaar ervaring is Jorosoft onze partner voor alle Industry 4.0-uitdagingen. Als het over RFID's of integraties met machines gaat; is Jorosoft dé expert. Ook voor de implementatie of ondersteuning van Ridder IQ kunnen klanten terecht bij Jorosoft.",
    imgSrc: "https://www.qastan.be/swfiles/files/QastanPartner_Jorosoft-tab.png?nc=1715848923",
    items: [
      { icon: <WifiOff size={24} />, text: "RFID-expertise" },
      { icon: <Settings size={24} />, text: "Integratie met machines" },
      { icon: <Award size={24} />, text: "Industrie 4.0 Expertise" },
    ],
  },
  {
    title: "Signz",
    description: "Signz is een toonaangevende speler op vlak van reclame en digital signage. Signz speelt in op deze noden met een innovatieve en krachtige productlijn: led-schermen voor binnen en buiten, aangestuurd via een cloud-gebaseerd managementsysteem.",
    imgSrc: "https://www.qastan.be/swfiles/files/71aa43_4103f7c99e7d47db98eb263ac8d6cfb1mv2-3-tab.jpg?nc=1715848923",
    items: [
      { icon: <Megaphone size={24} />, text: "Toonaangevende reclameoplossingen" },
      { icon: <Monitor size={24} />, text: "Digitale bewegwijzering" },
      { icon: <Lightbulb size={24} />, text: "Innovatieve productlijn" },
      { icon: <Cloud size={24} />, text: "Cloud-gebaseerd beheersysteem" },
    ],
  },
  {
    title: "Icasa",
    description: "Icasa is als softwarepartner actief op de energie en petrochemie markt. Samen met Icasa ondersteunen we de energiemarkt in hun automatisering, integraties en digitaliseringsoplossingen. Allen geïntegreerd binnen het platform voor end-to-end oplossingen van Icasa.",
    imgSrc: "https://www.qastan.be/swfiles/files/QastanPartner_Icasa-5-mob.png?nc=1715848923",
    items: [
      { icon: <Battery size={24} />, text: "Energie-oplossingen" },
      { icon: <FlaskConical size={24} />, text: "Petrochemische oplossingen" },
      { icon: <Link size={24} />, text: "End-to-end integratie" },
    ],
  },
];

const SimplifiedMarkup = () => {
  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 max-w-screen-xl flex flex-col justify-center">
        <div className="flex flex-col z-40">
          <Background />
          <div className="z-40">
            <h2 className="mb-1 text-4xl font-bold leading-tight text-gray-900 z-40">Partners</h2>
            <p className="mb-12 text-base italic text-gray-500 md:w-5/6 z-40">Sterke partnerships spot je meteen. Samen met onze partners tillen we jouw IT naar een hoger niveau. Kies je voor Qastan, dan geniet je meteen mee van de expertise van onze partners. Allen zijn ze expert in hun vakgebied en versterken ze onze businessoplossingen.</p>
          </div>
          <div className="z-40">
            {partnersData.map((partner, index) => (
              <div key={index} className={`grid grid-cols-1 my-10 gap-8 md:grid-cols-2 md:gap-12 items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                <div className={`${index % 2 === 0 ? "md:order-last" : ""}`}>
                  <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">{partner.title}</p>
                  <p className="text-sm mt-4 text-gray-700 text-balance">{partner.description}</p>
                  <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                    {partner.items.map((item, idx) => (
                      <FeatureItem key={idx} icon={item.icon} text={item.text} />
                    ))}
                  </div>
                </div>
                <div className="h-full">
                  <img src={partner.imgSrc} alt={partner.title} className="bg-white rounded-lg shadow-lg overflow-hidden aspect-video w-full h-full object-contain object-center" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => (
  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
    {icon}
    <span className="text-gray-950 font-medium text-sm">{text}</span>
  </div>
);

export default SimplifiedMarkup;
