import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import toepassingenData from "../json/toepassingenData.json";
import { Link } from "react-router-dom";
import Error from "./Error";

function ArtikelToepassingen() {
  const { id } = useParams<{ id: string }>();
  const post = toepassingenData.find((p: any) => p.id === id);
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (!post) {
    return <Error />;
  }

  return (
    <div className="container mx-auto py-20">
      <button onClick={() => navigate(-1)} className="text-darkblue font-medium hover:text-lightblue transition duration-300 mb-8 inline-block">
        &larr; Terug naar overzicht
      </button>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex flex-wrap items-center p-8">
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-6 text-darkblue">{post.title}</h1>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">{post.probleem.title}</h2>
              <p className="text-lg text-gray-700">{post.probleem.description}</p>
            </div>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">{post.oplossing.title}</h2>
              <p className="text-lg text-gray-700">{post.oplossing.description}</p>
            </div>
            <a href={post.href} className="inline-block bg-darkorange text-white py-2 px-4 rounded-full hover:bg-lightblue transition duration-300 font-medium">
              {post.buttontext}
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img src={post.imageURL} alt={`image about ${post.probleem.title}`} className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="p-8 border-t border-blue-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800"></h2>
          <p className="text-lg text-gray-700">{post.uitleg}</p>
        </div>
      </div>
      <div className="flex justify-center md:pb-20 mt-10">
        <Link onClick={handleClick} to="/Blog" className="bg-darkblue hover:bg-lightblue py-2 px-4 rounded-full transition duration-300 text-white inline-block">
          Terug naar overzicht
        </Link>
      </div>
    </div>
  );
}

export default ArtikelToepassingen;
