'use client';

import Image from 'next/image';
import React from 'react';
import CardGrid from './Card';

const Hero = () => {
  return (
    <div className="h-full w-full bg-[url('/bg_img.png')] bg-cover bg-center rounded-t-3xl flex flex-col items-center xl:items-start gap-8 xl:gap-16 text-black font-mono p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col items-center xl:items-start w-full pt-4 xl:pt-8">
        <div className="relative">
          <Image
            src="/bogdanoff_logo.png"
            alt="Bogdanoff Logo"
            width={368}
            height={361}
            className="w-48 sm:w-64 xl:w-[32.5rem] h-auto"
          />
        </div>

        <div className="-mt-3 xl:-mt-6 ml-8 sm:ml-12 xl:ml-[16rem] bg-white rounded-3xl py-1 sm:py-2 px-3 sm:px-4">
          <p className="tracking-[0.5em] sm:tracking-[1em] text-sm xl:text-lg font-bold">
            SIMULATOR
          </p>
        </div>
      </div>

      <div className="flex-1 w-full">
        <CardGrid />
      </div>
    </div>
  );
};

export default Hero;
