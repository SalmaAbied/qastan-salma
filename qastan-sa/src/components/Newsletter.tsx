import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <div className="z-10 bg-gradient-to-t from-bggray to-darkblue p-6 rounded-3xl shadow-lg max-w-4xl mx-auto text-white my-20">
      <h2 className="text-2xl font-semibold mb-2 text-center">Schrijf je in voor de nieuwsbrief</h2>
      <p className="mb-4 text-center">Blijf op de hoogte van het laatste nieuws!</p>
      <form className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Je e-mailadres"
          className="w-full p-2 mb-4 text-gray-700 rounded shadow focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="w-fit bg-darkblue hover:bg-lightblue text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Inschrijven
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
