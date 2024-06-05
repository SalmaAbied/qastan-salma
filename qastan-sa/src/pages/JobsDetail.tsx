import React, { useRef } from "react";
import SollicitatieFormulier from "../components/SollicitatieForm";
import CardFullWTwo from "../components/CardFullWTwo";
import Vacature from "../components/Vacature";

function JobsDetail() {
  const sollicitatieRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Vacature />
      <div ref={sollicitatieRef} className="mt-5 bg-white">
        <SollicitatieFormulier />
      </div>
      <CardFullWTwo />
    </>
  );
}

export default JobsDetail;
