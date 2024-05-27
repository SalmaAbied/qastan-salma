import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const handleAcceptPrivacy = () => {
    setAcceptedPrivacy(true);
  };

  return (
    <>
      <div className="container mx-auto pt-10 relative z-20">
        <h1 className="text-4xl pl-5">Nieuwsbrief</h1>
        <hr className="ml-5 w-12 h-1 border-0 bg-darkorange block mt-2 mb-6" />
      </div>
      <div className="flex flex-col container items-center mx-auto relative z-20 py-20">
        <div className="z-10 flex flex-col w-full max-w-4xl rounded-xl shadow-lg md:flex-row">
          <div className="flex flex-col justify-between p-8 md:w-1/2 bg-darkblue text-white rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none">
            <div>
              <h3 className="text-2xl font-semibold">Schrijf je in voor onze nieuwsbrief</h3>
              <p className="text-base font-regular">Blijf altijd op de hoogte door je in te schrijven op onze nieuwsbrief</p>
            </div>
            <form className="space-y-4" autoComplete="off">
              <div className="relative">
                <input type="text" name="name" placeholder="Naam" className="w-full p-3 border-2 border-transparent rounded bg-gray-200 focus:outline-none focus:border-darkorange" />
              </div>
              <div className="relative">
                <input type="email" name="email" placeholder="E-mailadres" className="w-full p-3 border-2 border-transparent rounded bg-gray-200 focus:outline-none focus:border-darkorange" />
              </div>
              <button type="submit" className="w-full p-3 text-white bg-lightblue rounded focus:outline-none hover:bg-lightgray transition duration-300">
                Inschrijven
              </button>
            </form>
            <div className="mt-4">
              <label className="flex items-center">
                <input type="checkbox" checked={acceptedPrivacy} onChange={handleAcceptPrivacy} className="form-checkbox" />
                <span className="ml-2 text-sm">Ik accepteer de <a href="/Privacy" className="underline hover:text-darkorange transition duration-300">privacyvoorwaarden</a></span>
              </label>
            </div>
          </div>
          <div className="flex justify-center p-8 bg-white md:w-1/2 rounded-b-xl md:rounded-br-xl md:rounded-tr-xl">
            <img src="https://th.bing.com/th/id/OIG3.lCU3ZjQk.WN4v9DRhRpw?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Nieuwsbrief Afbeelding" className="rounded-lg shadow-lg shadow-lightblue/50" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
