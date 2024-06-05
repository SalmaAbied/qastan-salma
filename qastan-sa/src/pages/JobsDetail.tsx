// import React, { useRef } from "react";
// import { useParams } from "react-router-dom";
// import jobsData from "../json/jobsData.json";
// import CardFullWTwo from "../components/CardFullWTwo";
// import SollicitatieFormulier from "../components/SollicitatieForm";

// const JobsDetail: React.FC = () => {
//   const sollicitatieRef = useRef<HTMLDivElement>(null);
//   const { id } = useParams<{ id: string }>();
//   const post = jobsData.vacatures.find((p: any) => p.id === id);

//   if (!post) {
//     return <div className="text-center py-20 text-2xl text-gray-500">Post not found</div>;
//   }

//   return (
//     <div className="container mx-auto px-6 my-12">
//       <div className="bg-white rounded-lg shadow-xl overflow-hidden">
//         <div className="relative">
//           <img className="w-full h-64 object-cover" src={post.image} alt={`Image about ${post.title}`} />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <h1 className="text-4xl font-bold text-white">{post.title}</h1>
//           </div>
//         </div>
//         <div className="p-8">
//           <p className="text-lg text-gray-700 mb-6">{post.description}</p>
//           <button
//             onClick={() => sollicitatieRef.current?.scrollIntoView({ behavior: "smooth" })}
//             className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
//           >
//             Solliciteer nu
//           </button>
//         </div>
//         <div className="p-8 bg-gray-50 grid md:grid-cols-2 gap-8">
//           <div className="bg-white rounded-lg p-8 shadow-md">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vereisten</h2>
//             <div className="mb-6">
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">Grondige kennis:</h3>
//               <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {post.vereisten.grondige_kennis.map((item: any, index: number) => (
//                   <li key={index} className="flex items-center">
//                     <img src={item.logo} alt={item.naam} className="w-12 h-12 mr-4 object-contain" />
//                     <span className="text-gray-700">{item.naam}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             {post.vereisten.extra_kennis && (
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">Extra kennis:</h3>
//                 <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                   {post.vereisten.extra_kennis.map((item: any, index: number) => (
//                     <li key={index} className="flex items-center">
//                       <img src={item.logo} alt={item.naam} className="w-12 h-12 mr-4 object-contain" />
//                       <span className="text-gray-700">{item.naam}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//           <div className="bg-white rounded-lg p-8 shadow-md">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Competenties</h2>
//             <ul className="list-disc pl-6 text-gray-700">
//               {post.competenties.map((item: string, index: number) => (
//                 <li key={index} className="mb-2">{item}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="bg-white rounded-lg p-8 shadow-md">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dagelijkse taken</h2>
//             <ul className="list-decimal pl-6 text-gray-700">
//               {post.dagelijkse_taken.map((item: string, index: number) => (
//                 <li key={index} className="mb-2">{item}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="bg-white rounded-lg p-8 shadow-md md:col-span-2">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ons aanbod</h2>
//             <p className="text-gray-700 mb-4">{post.aanbod.omschrijving}</p>
//             <p className="text-gray-700 mb-2">
//               <strong>Omgeving:</strong> {post.aanbod.omgeving}
//             </p>
//             <p className="text-gray-700">
//               <strong>Groeiplan:</strong> {post.aanbod.groeiplan}
//             </p>
//           </div>
//         </div>
//     </div>
//   );
// };

// export default JobsDetail;import React from "react";import React from "react";import jobsData from "../json/jobsData.json";
import { useParams } from "react-router-dom";
import { Award, FolderPen, MapPin } from "lucide-react";
import { useRef } from "react";
import SollicitatieFormulier from "../components/SollicitatieForm";
import CardFullWTwo from "../components/CardFullWTwo";
import jobsData from "../json/jobsData.json";
function JobsDetail() {
  const sollicitatieRef = useRef<HTMLDivElement>(null);
  const { id } = useParams<{ id: string }>();
  const post = jobsData.vacatures.find((p: any) => p.id === id);

  return (
    <>
      <div className="container mx-auto pt-10">
        <div className="relative">
          <div className="py-10">
            <img src={post?.image} alt={post?.title} className="brightness-50 rounded-lg shadow-lg h-96 w-full object-cover" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 py-2 rounded-lg shadow-lg">
            <h1 className="text-5xl font-bold">{post?.title}</h1>
          </div>
          <div className="mb-10 absolute bottom-10 left-10">
            <button onClick={() => sollicitatieRef.current?.scrollIntoView({ behavior: "smooth" })} className="bg-darkorange font-bold text-white px-6 py-3 rounded-lg text-lg hover:bg-lightblue transition duration-300">
              Solliciteer nu
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mt-5 mb-10">
          <div className="bg-slate-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h1 className="text-xl mb-4">Plaats van tewerkstelling</h1>
            <p className="flex items-center font-bold text-center">
              <span className="bg-orange-200 rounded-full p-2 flex items-center justify-center mr-2">
                <MapPin className="text-orange-500 w-6 h-6" />
              </span>
              {post?.locatie}
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h1 className="text-xl mb-4">Functie</h1>
            <p className="flex items-center font-bold text-center">
              <span className="bg-orange-200 rounded-full p-2 flex items-center justify-center mr-2">
                <FolderPen className="text-orange-500 w-6 h-6" />
              </span>
              {post?.title}
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h1 className="text-xl mb-4">Ervaring</h1>
            <p className="flex items-center font-bold text-center">
              <span className="bg-orange-200 rounded-full p-2 flex items-center justify-center mr-2">
                <Award className="text-orange-500 w-6 h-6" />
              </span>
              {post?.vereisten.werkervaring}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-3">
              <h1 className="text-2xl font-bold mb-4">Aanbod</h1>
              <p className="">{post?.aanbod.omschrijving}</p>
              <p className="">{post?.aanbod.omgeving}</p>
              <p className="">{post?.aanbod.groeiplan}</p>
            </div>
            <div className="col-span-4">
              <h1 className="text-2xl font-bold mb-4">Grondige kennis</h1>
              <div className="flex flex-wrap">
                {post?.vereisten.grondige_kennis.map((skill: any) => (
                  <div key={skill.naam} className="flex items-center bg-blue-50 text-blue-600 p-2 rounded-full mr-2 mb-2 px-4">
                    <img src={skill.logo} alt={skill.naam} className="w-fit h-6 mr-2 object-contain" />
                    <p className="font-semibold">{skill.naam}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-3">
              <h1 className="text-2xl font-bold mb-4">Extra kennis</h1>
              <div className="flex flex-wrap">
                {post?.vereisten.extra_kennis.map((skill: any) => (
                  <div key={skill.naam} className="flex items-center bg-blue-50 text-blue-600 p-2 rounded-full mr-2 mb-2">
                    <img src={skill.logo} alt={skill.naam} className="w-6 h-6 mr-2" />
                    <p className="font-semibold">{skill.naam}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-3">
              <h1 className="text-2xl font-bold mb-4">Dagelijkse taken</h1>
              <ul className="list-disc ml-5">
                {post?.dagelijkse_taken.map((taak: string, index: number) => (
                  <li key={index} className="">
                    {taak}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-1 bg-white shadow-lg p-4 rounded-lg">
            <div>
              <h1 className="text-2xl font-bold mb-4">Competenties</h1>
              <ul className="list-disc ml-5">
                {post?.competenties.map((competentie: string, index: number) => (
                  <li key={index} className="">
                    {competentie}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div ref={sollicitatieRef} className="p-8 bg-white">
        <SollicitatieFormulier />
      </div>
      <CardFullWTwo />
    </>
  );
}

export default JobsDetail;
