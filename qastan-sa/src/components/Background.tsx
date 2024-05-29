import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute -top-40 left-[-15%] w-full h-full flex justify-start items-center">
        <span className="text-[180px] sm:text-[300px] md:text-[420px] 2xl:text-[600px] font-bold text-gray-100 opacity-50 -z-50">QASTAN</span>
      </div>
    </div>
  );
};

export default Background;
