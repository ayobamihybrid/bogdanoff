'use client';

import React, { useState } from 'react';

interface ExpandableProps {
  title: string;
  moreDetail: string;
  list?: string[];
}

const ExpandableSection: React.FC<ExpandableProps> = ({
  title,
  moreDetail,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full text-black">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-gradient-to-r from-white to-[#d8faff] backdrop-blur-md cursor-pointer rounded-2xl px-4 pt-2 md:pt-4 pb-6 md:pb-9 flex flex-col gap-2 transition-all duration-300 hover:bg-white"
        style={{
          boxShadow:
            '0 0 30px 5px rgba(255, 255, 255, 0.5), 0 0 60px 10px rgba(240, 255, 253, 0.3)',
        }}
      >
        <div className="text-sm xl:text-lg font-bold ">{title}</div>
        <div className="text-xs xl:text-sm text-gray-600">READ MORE</div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 mt-2' : 'max-h-0'
        }`}
      >
        <div className="bg-gradient-to-r from-white to-[#d8faff] backdrop-blur-sm rounded-2xl px-4 py-6">
          <p className="text-sm xl:text-lg">{moreDetail}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpandableSection;
