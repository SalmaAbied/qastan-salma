import React from "react";

function Title({ title, description }: TitleProps) {
  return (
    <>
      <div className="container py-20 mx-auto grid grid-cols-4">
        <h1 className="text-4xl col-span-3 font-bold">{title}</h1>
        <p className="text-sm col-span-1 text-gray-600">{description}</p>
      </div>
    </>
  );
}

export default Title;
