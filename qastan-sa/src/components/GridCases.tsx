import React from "react";

function TestimoniesSection() {
  return (
    <section id="testimonies" className="py-20">
      <div className="container relative flex flex-col justify-between h-full px-10 mx-auto xl:px-0 mt-5">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Lees onze klanten hun ervaringen</h2>
        <p className="mb-12 text-base italic text-gray-500">Lees hier enkele reviews van onze trouwe klanten</p>
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <div className="relative h-full p-5 bg-slate-50 rounded-lg shadow-lg">
                  <div className="flex items-center -mt-1">
                    <img src="https://media.licdn.com/dms/image/D4E0BAQGrN84NZA-KIQ/company-logo_200_200/0/1714979889219/interieur_avenue_gaverzicht_logo?e=2147483647&v=beta&t=vFh3qDgsE82Obq4Yme-LRhdDG87o0cRpiQvBMxcs-Xg" alt="" className="w-12 h-12 rounded-full shadow-lg object-cover" />
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Gaverzicht</h3>
                  </div>
                  <p className="mb-2 text-gray-600">Als een retailbedrijf vertrouwen we op Qastan voor onze IT-oplossingen en ze stellen nooit teleur! De samenwerking met hen heeft onze operationele efficiëntie aanzienlijk verbeterd. Hun expertise en toewijding zijn echt indrukwekkend.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <div className="relative h-full p-5 bg-slate-50 rounded-lg shadow-lg">
                  <div className="flex items-center -mt-1">
                    <img src="https://cdn.worldvectorlogo.com/logos/avia-5.svg" alt="" className="w-12 h-12 rounded-full shadow-lg object-cover" />
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">AVIA</h3>
                  </div>
                  <p className="mb-2 text-gray-600">Qastan heeft ons geholpen bij het optimaliseren van onze operationele processen met behulp van geavanceerde IT-oplossingen. Hun team is zeer professioneel en responsief. We zijn zeer tevreden met hun diensten en kijken uit naar verdere samenwerking.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <div className="relative h-full p-5 bg-slate-50 rounded-lg shadow-lg">
                  <div className="flex items-center -mt-1">
                    <img src="https://www.qastan.be/swfiles/files/Frame.svg?nc=1709650208" alt="" className="w-12 h-12 rounded-full shadow-lg object-cover" />
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Frame</h3>
                  </div>
                  <p className="mb-2 text-gray-600">Qastan heeft ons geholpen bij het implementeren van innovatieve IT-oplossingen die onze workflow aanzienlijk hebben verbeterd. Hun team is zeer bekwaam en staat altijd klaar om te helpen. We zijn erg blij met hun service.</p>
                </div>
              </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <div className="relative h-full p-5 bg-slate-50 rounded-lg shadow-lg">
                  <div className="flex items-center -mt-1">
                    <img src="https://www.qastan.be/swfiles/files/Brouwerij-Van-Honsebrouck.jpg?nc=1709650208" alt="" className="w-12 h-12 rounded-full shadow-lg object-cover" />
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Brouwerij Van Honsebrouck</h3>
                  </div>
                  <p className="mb-2 text-gray-600">Qastan heeft ons geholpen bij het implementeren van innovatieve IT-oplossingen die onze workflow aanzienlijk hebben verbeterd. Hun team is zeer bekwaam en staat altijd klaar om te helpen. We zijn erg blij met hun service</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <div className="relative h-full p-5 bg-slate-50 rounded-lg shadow-lg">
                  <div className="flex items-center -mt-1">
                    <img src="https://www.qastan.be/swfiles/files/club-logo-kv-kortrijk-qastan.png?nc=1709650208" alt="" className="w-12 h-12 rounded-full shadow-lg object-cover" />
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">KV Kortrijk</h3>
                  </div>
                  <p className="mb-2 text-gray-600">Als een professionele voetbalclub vertrouwen we op Qastan voor onze IT-infrastructuur en -ondersteuning. Hun toegewijde team heeft ons geholpen om onze digitale activiteiten te stroomlijnen en te verbeteren. We waarderen hun expertise en betrokkenheid bij ons succes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimoniesSection;
