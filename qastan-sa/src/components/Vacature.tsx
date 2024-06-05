import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { Award, FolderPen, MapPin } from "lucide-react";
import SollicitatieFormulier from "../components/SollicitatieForm";
import CardFullWTwo from "../components/CardFullWTwo";
import jobsData from "../json/jobsData.json";

function Vacature() {
  const sollicitatieRef = useRef<HTMLDivElement>(null);
  const { id } = useParams<{ id: string }>();
  const post = jobsData.vacatures.find((p: any) => p.id === id);

  return (
    <div className="container mx-auto pt-10 px-4">
      <div className="relative">
        <div className="py-10">
          <img src={post?.image} alt={post?.title} className="brightness-50 rounded-lg shadow-lg h-96 w-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 py-2 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold">{post?.title}</h1>
        </div>
        <div className="mb-10 absolute bottom-10 left-10">
          <button onClick={() => sollicitatieRef.current?.scrollIntoView({ behavior: "smooth" })} className="bg-darkorange font-bold text-white px-6 py-3 rounded-lg text-lg hover:bg-lightblue transition duration-300">
            Solliciteer nu
          </button>
        </div>
      </div>
      <div className="bg-slate-50 p-6 rounded-lg shadow-lg mt-6">
        <h1 className="text-xl font-bold mb-4">Jouw profiel</h1>
        <p>{post?.profile}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mb-6 mt-6">
        <div className="bg-slate-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h1 className="text-xl mb-4">Plaats van tewerkstelling</h1>
          <p className="flex items-center font-bold text-center md:flex-row flex-col">
            <span className="bg-orange-200 rounded-full p-2 flex items-center justify-center mr-2">
              <MapPin className="text-orange-500 w-6 h-6" />
            </span>
            {post?.locatie}
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h1 className="text-xl mb-4">Functie</h1>
          <p className="flex items-center font-bold text-center md:flex-row flex-col">
            <span className="bg-orange-200 rounded-full p-2 flex items-center justify-center mr-2">
              <FolderPen className="text-orange-500 w-6 h-6" />
            </span>
            {post?.title}
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h1 className="text-xl mb-4">Ervaring</h1>
          <p className="flex items-center font-bold text-center md:flex-row flex-col">
            <span className="bg-orange-200 rounded-full p-2 flex items-center justify-center mr-2">
              <Award className="text-orange-500 w-6 h-6" />
            </span>
            {post?.vereisten.werkervaring}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-50 rounded-lg shadow-lg p-4">
          <div className="col-span-1 md:col-span-3">
            <h1 className="text-xl font-bold mb-4">Aanbod</h1>
            <p>{post?.aanbod.omschrijving}</p>
            <p>{post?.aanbod.omgeving}</p>
            <p>{post?.aanbod.groeiplan}</p>
          </div>
          <div className="col-span-1 md:col-span-3">
            <h1 className="text-xl font-bold mb-4">Grondige kennis</h1>
            <div className="flex flex-wrap">
              {post?.vereisten.grondige_kennis.map((skill: any) => (
                <div key={skill.naam} className="flex items-center bg-blue-50 text-blue-600 p-2 shadow-md rounded-full mr-2 mb-2 px-4">
                  <img src={skill.logo} alt={skill.naam} className="w-fit h-6 mr-2 object-contain" />
                  <p className="font-semibold">{skill.naam}</p>
                </div>
              ))}
            </div>
          </div>
          {post?.vereisten.extra_kennis && post?.vereisten.extra_kennis.length > 0 && (
            <div className="col-span-1 md:col-span-3">
              <h1 className="text-xl font-bold mb-4">Extra kennis</h1>
              <div className="flex flex-wrap">
                {post?.vereisten.extra_kennis.map((skill: any) => (
                  <div key={skill.naam} className="flex items-center bg-blue-50 shadow-md text-blue-600 p-2 rounded-full mr-2 mb-2">
                    <img src={skill.logo} alt={skill.naam} className="w-fit h-6 mr-2" />
                    <p className="font-semibold">{skill.naam}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="col-span-1 md:col-span-3">
            <h1 className="text-xl font-bold mb-4">Hoe kan een dag bij Qastan er uit zien?</h1>
            <ul className="list-disc ml-5">
              {post?.dagelijkse_taken.map((taak: string, index: number) => (
                <li key={index}>{taak}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-1 bg-slate-50 shadow-lg p-4 rounded-lg">
          <h1 className="text-xl font-bold mb-4">Competenties</h1>
          <ul className="list-disc ml-5">
            {post?.competenties.map((competentie: string, index: number) => (
              <li key={index}>{competentie}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Vacature;
