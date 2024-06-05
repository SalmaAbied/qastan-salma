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
    <>
      <div className="container mx-auto py-20">
        {post.title}
        <div className="flex flex-wrap items-center justify-between p-8">
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-3xl font-bold mb-4">{post.probleem.title}</h1>
            <p className="text-lg text-gray-700 mb-6">{post.probleem.description}</p>
            <h2 className="text-3xl font-bold mb-2">{post.oplossing.title}</h2>
            <p className="text-lg text-gray-700 mb-6">{post.oplossing.description}</p>
            <a href={post.href} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              {post.buttontext}
            </a>
          </div>
          <div>{post.uitleg}</div>
          <div className="w-full md:w-1/2">
            <img src={post.imageURL} alt={`image about ${post.probleem.title}`} className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToepassingenDetail;
