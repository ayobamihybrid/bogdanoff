'use client';

import React, { useEffect, useState } from 'react';
import ExpandableSection from '../components/ExpandableSection';

// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { details } from '../utils';
import ClientLayout from '../ClientLayout';
import TimelineTable from '../components/TimelineTable';

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [isResearchExpanded, setIsResearchExpanded] = useState(false);

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
    <ClientLayout>
      <div className="bg-gradient-to-b from-black via-teal-900 to-black min-h-screen px-4 xl:px-8 pb-28">
        <div className="w-full mt-[4rem] xl:mt-[6rem] flex flex-col lg:flex-row items-start justify-center gap-6 md:gap-[2rem] 2xl:gap-[3rem]  ">
          {details.map((detail, index) => (
            <ExpandableSection
              key={index}
              title={detail.title}
              moreDetail={detail.moreDetail}
              list={detail?.list}
              isExpanded={isResearchExpanded}
              setIsExpanded={setIsResearchExpanded}
            />
          ))}
        </div>

        <div
          className="hidden mt-9 w-full xl:flex justify-center items-center gap-2 text-white cursor-pointer"
          onClick={() => setIsResearchExpanded(!isResearchExpanded)}
        >
          <p>{isResearchExpanded ? 'SEE LESS' : 'CLICK HERE TO EXPAND'}</p>
          {isResearchExpanded ? (
            <IoIosArrowUp size={22} />
          ) : (
            <IoIosArrowDown size={22} />
          )}
        </div>

        <div className="mt-16 xl:mt-32 flex flex-col">
          {/* <VerticalTimeline>
            {timelines.map((timeline, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{ background: '#1d1836', color: '#fff' }}
                date={timeline.date}
                iconStyle={{ background: '#fff' }}
              >
                <div>
                  <h3 className="text-white text-xl xl:text-2xl font-bold">
                    {timeline.title}
                  </h3>
                </div>

                <p className="mt-5 text-white-100 txzt-xs xl:text-sm pl-1 tracking-wider">
                  {timeline.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline> */}

          <TimelineTable />
        </div>

        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 p-3 bg-white text-black rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 z-50 font-momo"
            aria-label="Scroll to top"
          >
            <IoIosArrowUp className="h-3 w-3 xl:w-6 xl:h-6 " />
            <p className="text-xs xl:text-sm font-bold">SCROLL TO TOP</p>
          </button>
        )}
      </div>
    </ClientLayout>
  );
};

export default Page;
