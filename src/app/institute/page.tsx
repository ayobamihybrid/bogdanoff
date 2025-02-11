import Image from 'next/image';
import React from 'react';
import { details } from '../utils';
import ExpandableSection from '../components/ExpandableSection';
import ClientLayout from '../ClientLayout';

const Page = () => {
  return (
    <ClientLayout>
      <div className="w-full px-2 xl:px-4 pb-9">
        <div className="mt-9 xl:mt-[8rem] w-full flex flex-col xl:flex-row items-center gap-8">
          <div className="w-full xl:w-[65%] h-auto xl:h-[35rem] border border-blue-400 rounded-2xl overflow-hidden">
            <Image
              src="/agents.png"
              alt="Agents"
              width={368}
              height={361}
              className="w-full h-auto xl:h-full"
            />
          </div>

          <div className="w-full xl:w-[65%] h-auto xl:h-[35rem] bg-gradient-to-r from-white to-[#d8faff] backdrop-blur-sm rounded-2xl text-black flex flex-col gap-12 items-center justify-center py-4 px-7 xl:px-12 text-sm xl:text-lg">
            <p>
              Welcome to ze pinnacle of quantum-memetic research. At ze
              Bogdanoff Institute, we&#39;ve transcended traditional market
              dynamics through our pioneering work in quantum manipulation
              theory and advanced Ponzinomics.
            </p>
            <p>
              Our groundbreaking research into ze Memetic Singularity - ze
              theoretical point where self-replicating ideas achieve quantum
              supremacy - has revolutionized how we understand market psychology
              and timeline manipulation.
            </p>

            <button className=" mt-9 bg-black min-w-[17rem] p-2 text-white">
              BUY $BOGDANOFF
            </button>
          </div>
        </div>

        <div className="w-full mt-[4rem] xl:mt-[6rem]">
          <div className="w-full mb-1 flex flex-col items-end justify-end text-sm xl:text-lg ">
            <p className="text-gray-500">{'//'} RESEARCH</p>
            <p> PILLARS</p>
          </div>

          <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-5 ">
            {details.map((detail, index) => (
              <ExpandableSection
                key={index}
                title={detail.title}
                moreDetail={detail.moreDetail}
                list={detail?.list}
              />
            ))}
          </div>
        </div>

        <div className="w-full mt-[4rem] xl:mt-[6rem]">
          <div className="w-full mb-1 flex flex-col items-end justify-end">
            <p className="text-gray-500">{'//'} ACADEMIC</p>
            <p> PROGRAMS & RESEARCH</p>
          </div>

          <div className="w-full flex flex-col lg:flex-row items-start justify-center gap-5 ">
            {details.map((detail, index) => (
              <ExpandableSection
                key={index}
                title={detail.title}
                moreDetail={detail.moreDetail}
                list={detail?.list}
              />
            ))}
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Page;
