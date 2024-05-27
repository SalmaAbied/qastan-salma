import React from "react";

function Intro() {
  return (
    <div className="bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-6">Over Ons</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-base mb-6">
            Qastan is een <span className="font-bold">Belgisch familiebedrijf</span> dat <span className="font-bold">gespecialiseerd</span> is in het <span className="font-bold">ontwikkelen en aanbieden van software en hardware</span>. We noemen onszelf ook wel de digitale architecten voor jouw organisatie of bedrijf. Net als de papegaaiduiker in ons logo, zijn onze medewerkers multi-getalenteerd en kunnen ze het hele spectrum van digitale transformatie aan. Onze skills zijn de bouwstenen om de nodige digitale fundamenten van je onderneming te bouwen. Zo kan jij als ondernemer verder doen waar je echt goed in bent en je <span className="font-bold">business laten groeien en versterken</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
