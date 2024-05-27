import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute top-0 left-[-15%] w-full h-full flex justify-start items-center">
        <span className="text-[900px] font-bold text-blue-100 opacity-50">Q</span>
      </div>
    </div>
  );
};

export default Background;
