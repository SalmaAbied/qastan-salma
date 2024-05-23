import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-[-25%] w-full h-full flex justify-start items-center">
        <span className="text-[1100px] font-bold text-blue-100 opacity-50">Q</span>
      </div>
    </div>
  );
};

export default Background;
