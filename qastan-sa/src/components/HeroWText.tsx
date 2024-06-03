import React from "react";

const HeroWText: React.FC<HeroWTextProps> = ({ badgeText, heading, paragraph, buttonText, buttonLink, imageUrl }) => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-start mb-4">
        <span className="bg-lightblue text-white text-sm font-bold py-2 px-4 rounded-full">{badgeText}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight break-words">{heading}</h1>
            <p className="mt-4 text-lg mb-10 break-words text-gray-700">{paragraph}</p>
          </div>
          {buttonText && (
            <a href={buttonLink} className="inline-block py-2 px-4 bg-darkorange transition duration-300 rounded-full text-white text-base hover:bg-lightblue font-medium w-fit">
              {buttonText}
            </a>
          )}
        </div>
        <div className="flex justify-center">
          <img src={imageUrl} alt="Hero" className="rounded-lg w-full h-auto max-w-md md:max-w-none object-cover shadow-lg shadow-darkblue/50" />
        </div>
      </div>
    </div>
  );
};

export default HeroWText;
