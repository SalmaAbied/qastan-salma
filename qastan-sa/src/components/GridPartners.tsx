import React from "react";

function GridPartners() {
  return (
    <>
      <section id="testimonies" className="py-20">
        <div className="container relative flex flex-col justify-between h-full px-10 mx-auto xl:px-0 mt-5">
          <h2 className="mb-1 text-4xl font-bold leading-tight text-gray-900">Partners</h2>
          <p className="mb-12 text-base italic text-gray-500 md:w-1/2">Sterke partnerships spot je meteen. Samen met onze partners tillen we jouw IT naar een hoger niveau. Kies je voor Qastan, dan geniet je meteen mee van de expertise van onze partners. Allen zijn ze expert in hun vakgebied en versterken ze onze businessoplossingen.</p>
          <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <div className="relative h-full p-5 bg-slate-50 rounded-lg drop-shadow-lg">
                    <div className="flex items-center -mt-1">
                      <img src="https://www.qastan.be/swfiles/files/cropped-cropped-cropped-cropped-ccaps-icon-1-mob.png?nc=1715848923" alt="" className="w-24 h-24 rounded-full drop-shadow-lg object-cover" />
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">CCAPS</h3>
                    </div>
                    <p className="my-2 text-gray-600">CCAPS is dé referentie voor alle zakelijk printoplossingen en multifunctionals in West en Oost-Vlaanderen. Met onze eigen digitaliseringsoplossingen (o.a. FITdoc DMS) hebben we tevens een standaard integratie op alle toestellen van CCAPS. Zo geniet je als klant meteen van alle digitaliseringsvoordelen. Printen en scannen zonder zorgen start hier.</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <div className="relative h-full p-5 bg-lightblue/20 rounded-lg drop-shadow-lg">
                    <div className="flex items-center -mt-1">
                      <img src="https://www.qastan.be/swfiles/files/QastanPartner_Jorosoft-tab.png?nc=1715848923" alt="" className="w-12 h-12 rounded-full drop-shadow-lg object-cover" />
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Jorosoft</h3>
                    </div>
                    <p className="mb-2 text-gray-600">Met meer dan 25 jaar ervaring is Jorosoft onze partner voor alle Industry 4.0-uitdagingen. Als het over RFID's of integraties met machines gaat; is Jorosoft dé expert. Ook voor de implementatie of ondersteuning van Ridder IQ kunnen klanten terecht bij Jorosoft.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <div className="relative h-full p-5 bg-lightblue/50 rounded-lg drop-shadow-lg">
                    <div className="flex items-center -mt-1">
                      <img src="https://www.qastan.be/swfiles/files/71aa43_4103f7c99e7d47db98eb263ac8d6cfb1mv2-3-tab.jpg?nc=1715848923" alt="" className="w-12 h-12 rounded-full drop-shadow-lg object-cover" />
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Signz</h3>
                    </div>
                    <p className="mb-2 text-gray-600">Signz is een toonaangevende speler op vlak van reclame en digital signage. Signz speelt in op deze noden met een innovatieve en krachtige productlijn: led-schermen voor binnen en buiten, aangestuurd via een cloud-gebaseerd managementsysteem.</p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <div className="relative h-full p-5 bg-slate-200 rounded-lg drop-shadow-lg">
                    <div className="flex items-center -mt-1">
                      <img src="https://www.qastan.be/swfiles/files/QastanPartner_Icasa-5-mob.png?nc=1715848923" alt="" className="w-12 h-12 rounded-full drop-shadow-lg object-cover" />
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Icasa</h3>
                    </div>
                    <p className="mb-2 text-gray-600">Icasa is als softwarepartner actief op de energie en petrochemie markt. Samen met Icasa ondersteunen we de energiemarkt in hun automatisering, integraties en digitaliseringsoplossingen. Allen geïntegreerd binnen het platform voor end-to-end oplossingen van Icasa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GridPartners;
