import React, { useRef, useState } from "react";
import SollicitatieFormulier from "../components/SollicitatieForm";
import CardFullWTwo from "../components/CardFullWTwo";
import Vacature from "../components/Vacature";

function JobsDetail() {
  const [error, setError] = useState(false);
  const sollicitatieRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Vacature setError={setError} />
      {!error && (
        <div ref={sollicitatieRef} className="mt-5 bg-white">
          <SollicitatieFormulier />
        </div>
      )}
      <CardFullWTwo />
    </>
  );
}

export default JobsDetail;
