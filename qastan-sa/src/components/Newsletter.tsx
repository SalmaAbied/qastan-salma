import React from "react";

const SubscribeToNewsletter = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden p-8">
      <div className="w-full max-w-4xl rounded-lg shadow-lg bg-slate-50 p-14">
        <div className="flex flex-col items-center">
          <span className="rounded-lg bg-lightblue py-px px-2 text-sm text-blue-800">Maandelijkse nieuwsbrief</span>
          <h3 className="mt-2 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-4xl md:leading-tight">Blijf op de hoogte door je in te schrijven voor onze nieuwsbrief</h3>
          <form action="" className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0">
            <input type="email" name="email" id="email" className="grow rounded-full border-2 border-gray-300 py-3 px-3 focus:border-darkblue focus:outline-none sm:rounded-l-full sm:rounded-r-none sm:border-r-0" placeholder="E-mailadres" />
            <button type="submit" className="rounded-full bg-darkblue hover:bg-lightblue transition duration-300 px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-full">
              Schrijf je in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeToNewsletter;
