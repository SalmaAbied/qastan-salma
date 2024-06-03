import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../json/blogData.json";
import bg from "../img/cirkel.png";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find((p: any) => p.id === id);

  if (!post) {
    return (
      <>
        <div className="my-20 p-10 container mx-auto bg-slate-50 rounded-lg shadow-lg" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right'}}>
          <Link to="/Blog" className="text-darkblue font-medium hover:text-lightblue transition duration-300 mb-8 inline-block">
            &larr; Terug naar blogoverzicht
          </Link>
          <div className="flex flex-col items-center justify-center">
            <div className="text-center text-6xl font-semibold mb-10">Artikel niet gevonden</div>
            <div>
              <img src="https://images.unsplash.com/photo-1609741200064-2ef87d5eb200?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="confused lego" className="h-72 rounded-lg shadow-lg " />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto md:pt-20">
      <Link to="/Blog" className="text-blue-500 mb-8 inline-block">
        &larr; Terug naar overzicht
      </Link>
      <h1 className="font-bold text-4xl mb-6">{post.title}</h1>
      <div className="flex items-center text-gray-500 mb-6">
        <span className="mr-2 italic">{post.author}</span>
        <span className="mx-2 font-light italic">-</span>
        <span className="mx-2 italic">{post.date}</span>
      </div>
      <div className="flex flex-wrap -mx-4">
        {Array.isArray(post.imageUrl) ? (
          post.imageUrl.map((image: string, index: number) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-8">
              <img className="w-full h-96 object-cover rounded-lg shadow-lg" src={image} alt={`image about ${post.title}`} />
            </div>
          ))
        ) : (
          <div className="w-full px-4 mb-8">
            <img className="w-full h-96 object-cover rounded-lg" src={post.imageUrl} alt={`image about ${post.title}`} />
          </div>
        )}
        <div className="w-full md:grid grid-cols-2 gap-6 px-4 mb-8">
          <p className="text-lg mb-4 leading-relaxed italic">{post.description}</p>
          {post.subtitles.map((subtitle: string, index: number) => (
            <div key={index} className="mb-6">
              <h2 className="font-bold text-xl mb-2">{subtitle}</h2>
              <p className="text-lg">{post.content[index]}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pb-20">
        <Link to="/Blog" className="bg-darkblue hover:bg-lightblue py-2 px-4 rounded-full transition duration-300 text-white inline-block">
          Terug naar overzicht
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
