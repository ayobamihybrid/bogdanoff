'use client';

import React, { useState, useEffect } from 'react';

interface ExpandableProps {
  title: string;
  moreDetail: string;
  list?: string[];
  isExpanded?: boolean;
  setIsExpanded?: (isExpanded: boolean) => void;
  sectionType?: 'research' | 'academic';
}

// Custom hook for window width
const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(1280); // Default to desktop size

  useEffect(() => {
    // Set initial width
    setWidth(window.innerWidth);

    // Handle resize
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

const ExpandableSection: React.FC<ExpandableProps> = ({
  title,
  moreDetail,
  isExpanded,
  setIsExpanded,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sectionType,
}) => {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 1280;

  const handleClick = () => {
    if (isMobile) {
      setIsMobileExpanded(!isMobileExpanded);
    } else if (setIsExpanded) {
      setIsExpanded(!isExpanded);
    }
  };

  const shouldExpand = isMobile ? isMobileExpanded : isExpanded;

  return (
    <div className="w-full text-black font-mono">
      <button
        onClick={handleClick}
        className="w-full h-auto xl:h-[7rem] bg-gradient-to-r from-white to-[#d8faff] backdrop-blur-sm cursor-pointer rounded-2xl px-4 pt-2 md:pt-4 pb-6 md:pb-9 flex flex-col gap-2 transition-all duration-300 hover:bg-white"
        style={{
          boxShadow:
            '0 10px 30px 8px rgba(70, 141, 141, 0.6), 0 0 30px 12px rgba(229, 229, 128, 0.4)',
        }}
      >
        <div className="text-sm md:text-lg font-bold">{title}</div>
        <div className="text-xs md:text-sm text-gray-600">LEARN MORE</div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          shouldExpand ? 'max-h-96 mt-2' : 'max-h-0'
        }`}
      >
        <div className="bg-gradient-to-r from-white to-[#d8faff] backdrop-blur-sm rounded-2xl px-4 py-6">
          <p className="text-sm md:text-lg">{moreDetail}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpandableSection;
