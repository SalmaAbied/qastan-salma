import React from "react";
import { useParams } from "react-router-dom";
import toepassingenData from "../json/toepassingenData.json";

const ToepassingenDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = toepassingenData.find((p: any) => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto py-20">
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
            <a
              href={post.href}
              className="inline-block bg-darkorange text-white py-2 px-4 rounded hover:bg-lightblue transition duration-300"
            >
              {post.buttontext}
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={post.imageURL}
              alt={`image about ${post.probleem.title}`}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="p-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Uitleg</h2>
          <p className="text-lg text-gray-700">{post.uitleg}</p>
        </div>
      </div>
    </div>
  );
};

export default ToepassingenDetail;
