'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useMetamask, useAddress, useDisconnect } from '@thirdweb-dev/react';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isChatbotPage =
    pathname === '/chatbot' ||
    pathname === '/timeline' ||
    pathname === '/institute';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Thirdweb hooks
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnectWallet = useDisconnect();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleConnect = () => {
    if (address) {
      disconnectWallet();
    } else {
      connectWithMetamask();
    }
    setIsMenuOpen(false); // Close the menu after connecting/disconnecting
  };

  return (
    <div className="w-full flex items-center justify-between p-2 xl:py-4 xl:px-8 text-black font-mono">
      {isChatbotPage ? (
        <button
          className="hidden xl:block bg-white py-2 px-6 rounded-3xl text-sm font-bold"
          onClick={() => router.push('/')}
        >
          {'<'} BACK TO MAIN
        </button>
      ) : (
        <div className="hidden xl:block"></div>
      )}

      {isChatbotPage && (
        <div className="relative flex flex-col items-center xl:items-start">
          <div
            className="relative cursor-pointer"
            onClick={() => router.push('/')}
          >
            <Image
              src="/bogdanoff_logo.png"
              alt="Bogdanoff Logo"
              width={368}
              height={361}
              className="w-[12rem] h-[3.4rem] xl:w-[30rem] xl:h-[5rem]"
            />
          </div>

          <div className="hidden xl:block -mt-4 xl:-mt-6 ml-[2rem] xl:ml-[13rem] bg-white rounded-3xl py-[0.4rem] xl:py-2 px-3 xl:px-6">
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

        <button
          className="hidden xl:block bg-white rounded-3xl px-4 py-2 xl:px-7 text-xs xl:text-sm font-medium"
          onClick={handleConnect}
        >
          {address ? `DISCONNECT (${address.slice(0, 6)}...)` : 'CONNECT'}
        </button>
      </div>

      <GiHamburgerMenu
        size={30}
        className="xl:hidden text-white"
        onClick={toggleMenu}
      />

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        className={`fixed right-0 top-0 h-full w-full bg-neutral-900 shadow-xl transition-transform duration-300 ease-in-out transform xl:hidden z-[999] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="opacity-0">Menu</h2>
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-8 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="pt-24 border-t border-gray-800">
          <div className="w-full flex items-center justify-center gap-5">
            <div className="bg-white rounded-md p-2">
              <Image
                src="/telegram_icon.svg"
                alt=""
                width={38}
                height={31}
                className="w-[1.5rem] h-[1.3rem] md:h-[1.5rem]"
              />
            </div>

            <div className="bg-white rounded-md p-2">
              <Image
                src="/twitter_icon.svg"
                alt=""
                width={38}
                height={31}
                className="w-[1.5rem] h-[1.3rem] md:h-[1.5rem]"
              />
            </div>

            <button
              className="bg-white font-instrument text-lg text-black font-medium px-3 md:px-6 py-1 md:py-2 rounded-lg transition-colors duration-200"
              onClick={handleConnect}
            >
              {address ? `(${address.slice(0, 6)}...)` : 'CONNECT'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
