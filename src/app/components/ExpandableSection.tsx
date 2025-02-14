/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState, useEffect } from 'react';

interface ExpandableProps {
  title: string;
  moreDetail: string;
  lists?: string[];
  imageSource?: string;
  isExpanded?: boolean;
  setIsExpanded?: (isExpanded: boolean) => void;
  sectionType?: 'research' | 'academic';
}

const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(1280);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

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
  lists,
  imageSource,
  sectionType,
}) => {
  console.log('imageSource:', imageSource);
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
        className={`w-full relative overflow-hidden cursor-pointer rounded-2xl px-4 transition-all duration-300 ${
          shouldExpand ? 'pt-4 pb-6' : 'pt-2 pb-4 xl:py-8'
        }`}
        style={{
          boxShadow:
            '0 10px 30px 8px rgba(70, 141, 141, 0.6), 0 0 30px 12px rgba(229, 229, 128, 0.4)',
        }}
      >
        {imageSource && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
            style={{ backgroundImage: `url(${imageSource})` }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-[#d8faff]/90 " />

        <div className="relative z-10">
          <div className="font-bold">{title}</div>
          <div className={`text-gray-600 mb-2 ${shouldExpand && 'hidden'}`}>
            LEARN MORE
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              shouldExpand ? 'max-h-96 xl:h-60' : 'max-h-0'
            }`}
          >
            <p className="mt-4 text-start">{moreDetail}</p>

            {lists && lists.length > 0 && (
              <ul className="list-disc pl-6 mt-4 text-left">
                {lists.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default ExpandableSection;
