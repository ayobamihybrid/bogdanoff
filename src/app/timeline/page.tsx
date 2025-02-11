'use client';

import React, { useEffect, useState } from 'react';
import ExpandableSection from '../components/ExpandableSection';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { IoIosArrowUp } from 'react-icons/io';

import { experiences } from '../utils';

const Page = () => {
  const details = [
    {
      title: 'Origin Protocol',
      moreDetail:
        'Our proprietary QMD framework studies ze quantum entanglement between memes and markets. Through careful observation of Wojak emotional states across multiple timelines, we have mapped ze complete taxonomy of market psychology.',
      list: [
        "Schrödinger's Gains: Superposition of profit and loss states, Quantum Tunneling through Support Levels,  Wave Function Collapse in Mass Liquidation Events, Timeline Divergence via FUD Propagation",
      ],
    },
    {
      title: 'Origin Protocol',
      moreDetail:
        'Our proprietary QMD framework studies ze quantum entanglement between memes and markets. Through careful observation of Wojak emotional states across multiple timelines, we have mapped ze complete taxonomy of market psychology.',
    },
    {
      title: 'Origin Protocol',
      moreDetail:
        'Our proprietary QMD framework studies ze quantum entanglement between memes and markets. Through careful observation of Wojak emotional states across multiple timelines, we have mapped ze complete taxonomy of market psychology.',
      list: [
        "Schrödinger's Gains: Superposition of profit and loss states, Quantum Tunneling through Support Levels,  Wave Function Collapse in Mass Liquidation Events, Timeline Divergence via FUD Propagation",
      ],
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-gradient-to-b from-black via-teal-900 to-black min-h-screen px-4 xl:px-8 pb-28">
      <div className="w-full mt-[4rem] xl:mt-[6rem] flex flex-col lg:flex-row items-start justify-center gap-5 ">
        {details.map((detail, index) => (
          <ExpandableSection
            key={index}
            title={detail.title}
            moreDetail={detail.moreDetail}
            list={detail?.list}
          />
        ))}
      </div>

      <div className="mt-16 xl:mt-32 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: '#1d1836', color: '#fff' }}
              date={experience.date}
              iconStyle={{ background: '#fff' }}
            >
              <div>
                <h3 className="text-white text-xl xl:text-2xl font-bold">
                  {experience.title}
                </h3>
              </div>

              <p className="mt-5 text-white-100 txzt-xs xl:text-sm pl-1 tracking-wider">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 p-3 bg-white text-black rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp className="h-3 w-3 xl:w-6 xl:h-6 " />
          <p className="text-xs xl:text-sm font-bold">SCROLL TO TOP</p>
        </button>
      )}
    </div>
  );
};

export default Page;
