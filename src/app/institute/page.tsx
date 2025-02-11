import React from 'react';

const Page = () => {
  return (
    <div className="mt-[8rem] w-full flex items-center gap-4">
      <div className="w-[65%] h-[35rem]">
        <div className="h-[35rem]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250">
            <rect
              x="20"
              y="20"
              width="360"
              height="210"
              stroke="#2E8B57"
              stroke-width="2"
              fill="none"
            />

            <line
              x1="20"
              y1="20"
              x2="380"
              y2="230"
              stroke="white"
              stroke-width="1.5"
            />
            <line
              x1="380"
              y1="20"
              x2="20"
              y2="230"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>

      <div className="w-[35%] h-[35rem] bg-gradient-to-r from-white to-[#d8faff] backdrop-blur-sm rounded-2xl text-black flex flex-col gap-12 items-center justify-center py-4 px-12 text-lg">
        <p>
          Welcome to ze pinnacle of quantum-memetic research. At ze Bogdanoff
          Institute, we&#39;ve transcended traditional market dynamics through
          our pioneering work in quantum manipulation theory and advanced
          Ponzinomics.
        </p>
        <p>
          Our groundbreaking research into ze Memetic Singularity - ze
          theoretical point where self-replicating ideas achieve quantum
          supremacy - has revolutionized how we understand market psychology and
          timeline manipulation.
        </p>

        <button className=" mt-9 bg-black min-w-[17rem] p-2 text-white">
          BUY $BOGDANOFF
        </button>
      </div>
    </div>
  );
};

export default Page;
