import React from "react";

function Title({ title, description }: TitleProps) {
  return (
    <>
      <div className="container py-5 lg:py-10 mx-auto px-5 grid lg:grid-cols-4">
        <h1 className="text-4xl md:col-span-3 font-bold pb-4">{title}</h1>
        <p className="text-sm md:col-span-1 text-gray-600">{description}</p>
      </div>
    </>
  );
}

export default Title;
