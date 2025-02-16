'use client';

import Image from 'next/image';
import React from 'react';
import CardGrid from './Card';

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex xl:items-center xl:justify-center bg-[url('/bg_img.png')] bg-cover bg-center rounded-t-3xl text-black font-mono p-4 sm:p-6 lg:p-8">
      <div className="mt-9 xl:-mt-20 w-full h-full flex flex-col items-center justify-center gap-8 xl:gap-16">
        <div className="flex flex-col items-center xl:items-start w-full">
          <div className="relative">
            <Image
              src="/bogdanoff_gif.gif"
              alt="Bogdanoff Logo"
              width={368}
              height={361}
              className="w-72 sm:w-80 md:w-96 xl:w-[33rem] h-auto"
            />
          </div>

          <div className="-mt-3 md:-mt-4 xl:-mt-6 ml-12 xl:ml-[12rem] bg-white rounded-3xl py-1 sm:py-2 px-3 sm:px-4">
            <p className="tracking-[0.5em] sm:tracking-[1em] text-sm xl:text-lg font-bold">
              SIMULATOR
            </p>
          </div>
        </div>

        <div className="flex-1 w-full">
          <CardGrid />
        </div>
      </div>
    </div>
  );
};

export default Hero;
