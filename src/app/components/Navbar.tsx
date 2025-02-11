'use client';

import Image from 'next/image';
import React from 'react';

import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isChatbotPage =
    pathname === '/chatbot' ||
    pathname === '/timeline' ||
    pathname === '/institute';

  return (
    <div className="w-full flex items-center justify-center xl:justify-between text-black font-mono">
      {isChatbotPage ? (
        <button className="hidden xl:block bg-white py-2 px-6 rounded-3xl text-sm font-bold">
          {'<'} BACK TO MAIN
        </button>
      ) : (
        <div className="hidden xl:block"></div>
      )}

      {isChatbotPage && (
        <div className="relative flex flex-col items-center xl:items-start">
          <div className="relative">
            <Image
              src="/bogdanoff_logo.png"
              alt="Bogdanoff Logo"
              width={368}
              height={361}
              className="w-[12rem] h-[3.4rem] xl:w-[30rem] xl:h-[5rem]"
            />
          </div>

          <div className="-mt-4 xl:-mt-6 ml-[2rem] xl:ml-[13rem] bg-white rounded-3xl py-[0.4rem] xl:py-2 px-3 xl:px-6">
            <p className="tracking-[0.6rem] text-sm xl:text-lg font-bold">
              SIMULATOR
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-5">
        <div className=" hidden xl:block bg-white rounded-md p-2">
          <Image
            src="/telegram_icon.svg"
            alt=""
            width={38}
            height={31}
            className="w-[1.5rem] h-[1.5rem]"
          />
        </div>

        <div className="hidden xl:block bg-white rounded-md p-2">
          <Image
            src="/twitter_icon.svg"
            alt=""
            width={38}
            height={31}
            className="w-[1.5rem] h-[1.5rem]"
          />
        </div>

        <button className="hidden xl:block bg-white rounded-3xl px-4 py-2 xl:px-7 text-xs xl:text-sm font-medium ">
          CONNECT
        </button>
      </div>
    </div>
  );
};

export default Navbar;
