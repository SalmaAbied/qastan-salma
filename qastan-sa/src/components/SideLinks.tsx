import React from "react";
import blogData from "../json/blogData.json";
import { Link, useParams } from "react-router-dom";

function Links() {
  const { id } = useParams<{ id: string }>();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const otherPosts = blogData.filter((p) => p.id !== id);

  const getRandomPosts = (posts: typeof blogData, max: number) => {
    return posts.sort(() => 0.5 - Math.random()).slice(0, max);
  };

  const randomPosts = getRandomPosts(otherPosts, 5);

  return (
    <div className="md:col-span-1">
      <div className="bg-gradient-to-b from-slate-50 to-stone-50 p-6 rounded-lg shadow-lg">
        <h2 className="font-bold text-xl mb-4">Ontdek meer interessante artikelen!</h2>
        <ul className="list-none pl-0">
          {randomPosts.map((otherPost) => (
            <li key={otherPost.id} className="mb-4">
              <Link to={`/Blog/${otherPost.id}`} onClick={handleClick} className="text-darkblue hover:text-lightblue transition duration-300">
                {otherPost.title} &#8594;
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Links;
