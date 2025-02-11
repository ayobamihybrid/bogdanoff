'use client';

import Image from 'next/image';
import React from 'react';
import CardGrid from './Card';


const Hero = () => {


  return (
    <div className="mt-6 p-4 md:p-8 bg-[url('/bg_img.png')] bg-cover bg-center rounded-t-3xl w-full min-h-screen text-black font-mono">
      <div className="w-full flex flex-col items-center xl:items-start">
        <div className="relative flex flex-col items-center xl:items-start">
          <div className="relative">
            <Image
              src="/bogdanoff_logo.png"
              alt="Bogdanoff Logo"
              width={368}
              height={361}
              className="w-[18rem] xl:mt-32 xl:w-[32.5rem] xl:h-[6.3rem]"
            />
          </div>

          <div className="-mt-4 xl:-mt-6 ml-[4rem] xl:ml-[16rem] bg-white rounded-3xl py-[0.4rem] xl:py-2 px-3 xl:px-6">
            <p className="tracking-[1rem] text-sm xl:text-lg font-bold">
              SIMULATOR
            </p>
          </div>
        </div>

        <div className="mt-20 xl:mt-28 w-full">
          <CardGrid />
        </div>
      </div>
    </div>
  );
};

export default Hero;
