import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import jobsData from "../json/jobsData.json";
import CardFullWTwo from "../components/CardFullWTwo";
import SollicitatieFormulier from "../components/SollicitatieForm";

const JobsDetail: React.FC = () => {
  const sollicitatieRef = useRef<HTMLDivElement>(null);
  const { id } = useParams<{ id: string }>();
  const post = jobsData.vacatures.find((p: any) => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div className="container mx-auto px-8 my-12 py-8 rounded-lg shadow-xl mt-6">
        <div className="grid gap-4 md:grid-cols-2 ">
          <div>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg mb-8">{post.description}</p>
          </div>
          <div className="flex justify-around flex-col">
            <img className="w-full h-auto rounded-lg shadow-md" src={post.image} alt={`image about ${post.title}`} />
            <a href="#" onClick={() => sollicitatieRef.current?.scrollIntoView({ behavior: "smooth" })} className="text-lg">
              Solliciteer nu
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-100 rounded-lg p-6 mb-2 md:col-span-2">
  <h2 className="text-xl font-bold mb-4">Vereisten</h2>
  <div>
    <h3 className="text-lg font-semibold mb-2">Grondige kennis:</h3>
    <ul className="grid grid-cols-3 gap-4">
      {post.vereisten.grondige_kennis.map((item: any, index: number) => (
        <li key={index} className="flex items-center">
          <img src={item.logo} alt={item.naam} className="w-12 h-fit mr-2 object-contain" />
          {item.naam}
        </li>
      ))}
    </ul>
  </div>
  {post.vereisten.extra_kennis && (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Extra kennis:</h3>
      <ul className="grid grid-cols-3 gap-4">
        {post.vereisten.extra_kennis.map((item: any, index: number) => (
          <li key={index} className="flex items-center">
            <img src={item.logo} alt={item.naam} className="w-12 h-fit mr-2 object-contain" />
            {item.naam}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>


          <div className="bg-slate-100 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Competenties</h2>
            <ul className="list-disc list-inside">
              {post.competenties.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-100 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Dagelijkse taken</h2>
            <ul className="list-decimal list-inside">
              {post.dagelijkse_taken.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-100 rounded-lg p-6 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Ons aanbod</h2>
            <p className="mb-2">{post.aanbod.omschrijving}</p>
            <p className="mb-2">
              <strong>Omgeving:</strong> {post.aanbod.omgeving}
            </p>
            <p>
              <strong>Groeiplan:</strong> {post.aanbod.groeiplan}
            </p>
          </div>
        </div>
      </div>
      <div ref={sollicitatieRef}>
        <SollicitatieFormulier />
      </div>
      <CardFullWTwo />
    </>
  );
};

export default JobsDetail;
