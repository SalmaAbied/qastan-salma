import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const CardDetail: React.FC<{ cardData: CardProps[] }> = ({ cardData }) => {
  return (
    <>
      <div className="container mx-auto md:py-10 grid grid-cols-1 px-4  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <div key={index} className="relative py-4 flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
            <div className="relative h-80 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={card.imageUrl} alt="card-image" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">{card.title}</h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardDetail;
