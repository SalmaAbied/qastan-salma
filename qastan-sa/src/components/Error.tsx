import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
      <div className="px-2 text-sm rounded rotate-12 absolute bg-darkorange">Pagina niet gevonden</div>
      <button className="mt-5">
        <span className="bg-darkblue text-white font-medium rounded-full py-2 px-4 hover:bg-lightblue transition duration-300 w-fit">
          <Link to="/">Startpagina</Link>
        </span>
      </button>
    </main>
  );
}

export default Error;
