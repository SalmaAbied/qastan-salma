import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../json/blogData.json";
import Links from "./SideLinks";
import VideoPlayer from "./VideoPlayer";
import Error from "./Error";

// link in text omvormen naar link
const parseLinks = (text: string) => {
  const urlRegex = /(\bhttps?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part: string, index) =>
    urlRegex.test(part) ? (
      <a key={index} href={part} className="text-darkorange font-bold hover:text-lightblue transition duration-300" target="_blank" rel="noopener noreferrer">
        {part}
      </a>
    ) : (
      part
    )
  );
};

const Artikel: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find((p) => p.id === id);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!post) {
    return <Error />;
  }

  return (
    <>
      <div className="bg-slate-50 relative pt-16 md:pb-44 px-8">
        <div className="container mx-auto py-10">
          <Link to="/Blog" onClick={handleClick} className="text-darkblue hover:text-lightblue transition duration-300 mb-8 inline-block">
            &larr; Terug naar overzicht
          </Link>
          <h1 className="font-bold text-4xl mb-6 md:w-1/2">{post.title}</h1>
          <div className="flex items-center text-gray-500 mb-6">
            <span className="italic">{post.author}</span>
            <span className="mx-2 font-light italic">-</span>
            <span className="italic">{post.date}</span>
          </div>
          <div className="md:absolute -bottom-36 right-28 mb-8">
            {Array.isArray(post.imageUrl) ? (
              post.imageUrl.map((image, index) => (
                <div key={index} className="mb-8 w-full">
                  <img className="w-full h-96 object-cover rounded-lg shadow-lg" src={image} alt={`image about ${post.title}`} />
                </div>
              ))
            ) : (
              <div className="w-full mb-8">
                <img className="w-full h-96 object-cover rounded-lg shadow-lg" src={post.imageUrl} alt={`image about ${post.title}`} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-16 md:pt-56">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="md:col-span-3">
            <div className="max-w-none mb-8">
              <p className="text-lg mb-4 leading-relaxed italic">{parseLinks(post.description)}</p>
              {post.subtitles.map((subtitle, index) => (
                <div key={index} className="mb-6">
                  <h2 className="font-bold text-xl mb-2">{subtitle}</h2>
                  <p className="text-lg">{parseLinks(post.content[index])}</p>
                </div>
              ))}
            </div>
            {post.videoUrl && <VideoPlayer />}
            {post.tips && (
              <div className="mb-8">
                <h2 className="font-bold text-xl mb-4">{post.tipsTitle}</h2>
                <p className="text-lg">{post.tipsDescription}</p>
                <ul className="list-disc list-inside pl-4">
                  {post.tips.map((tip, index) => (
                    <li key={index} className="text-lg mb-2 leading-7">
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {post.note && (
              <div className="mb-8">
                <p className="text-lg leading-relaxed italic">{parseLinks(post.note)}</p>
              </div>
            )}
            {post.tipsTwo && (
              <div className="mb-8">
                <h2 className="font-bold text-xl mb-4">{post.tipsTitleTwo}</h2>
                <p className="text-lg">{post.tipsDescriptionTwo}</p>
                <ul className="list-disc list-inside pl-4">
                  {post.tips.map((tip, index) => (
                    <li key={index} className="text-lg mb-2 leading-7">
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {post.note && (
              <div className="mb-8">
                <p className="text-lg leading-relaxed italic">{parseLinks(post.note)}</p>
              </div>
            )}
            {post.noteTwo &&
              post.noteTwo.map((noteTwo, index) => (
                <div key={index} className="mb-6">
                  <p className="text-xl mb-2">{noteTwo}</p>
                </div>
              ))}
            {post.tipsThree && (
              <div className="mb-8">
                <h2 className="font-bold text-xl mb-4">{post.tipsTitleThree}</h2>
                <p className="text-lg">{post.tipsDescriptionThree}</p>
                <ul className="list-disc list-inside pl-4">
                  {post.tips.map((tip, index) => (
                    <li key={index} className="text-lg mb-2 leading-7">
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {post.conslusion && (
              <div className="mb-8">
                <h1 className="font-bold text-xl mb-4">{post.conclusionTitle}</h1>
                <p className="text-lg leading-relaxed italic">{parseLinks(post.conslusion)}</p>
              </div>
            )}
            <div className="flex justify-center md:pb-20">
              <Link onClick={handleClick} to="/Blog" className="bg-darkblue hover:bg-lightblue py-2 px-4 rounded-full transition duration-300 text-white inline-block">
                Terug naar overzicht
              </Link>
            </div>
          </div>
          <Links />
        </div>
      </div>
    </>
  );
};

export default Artikel;