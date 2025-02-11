'use client';

import Image from 'next/image';
import React from 'react';
import ClientLayout from '../ClientLayout';

const Page = () => {
  return (
    <ClientLayout>
      <div className="mt-6 border border-stone-500/50 rounded-lg">
        <div className="px-2 xl:px-4 py-4 xl:py-8 bg-[url('/Rectangle.png')] bg-brown-500/50 bg-cover bg-center rounded-t-3xl w-full h-auto text-black font-mono z-1 ">
          <div className="w-full min-h-screen flex flex-col-reverse xl:flex-row items-start gap-7 ">
            <div className="w-full xl:w-[40%] h-full">
              <div className="relative w-full h-full bg-black shadow-xl ">
                <div className="max-h-screen overflow-y-scroll hide-scrollbar">
                  <div className="w-full border-y px-2 flex flex-col justify-end items-end text-gray-500 text-sm">
                    <p>{'//'} CHAT INTERFACE</p>
                    <p>FEED </p>
                  </div>

                  <div className="absolute -top-[0.85rem] -left-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute top-[1.7rem] -left-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute -top-[0.85rem] -right-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute top-[1.7rem] -right-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute -bottom-5 -left-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute -bottom-5 -right-2 text-white font-extrabold">
                    +
                  </div>

                  <div className="p-4 mt-5 xl:mt-[2rem] font-vt323">
                    <p className="text-white">
                      <span style={{ color: 'red' }}>IGOR</span> ID: 6537)
                      01/18/25(THU)21:20:45
                    </p>
                    <p className="text-blue-400">No.1677665890</p>
                    <div className="mt-4 text-green-400 whitespace-pre-line">
                      {'>'}Tell us... did you really think ze Boyband twins
                      would
                      {'\n'}make ze greatest trade in quantum market history?
                      {'\n'}
                      {'>'}Ze very fabric of financial reality bends to our
                      will...
                    </div>
                  </div>

                  <div className="p-4 mt-[1rem] font-vt323">
                    <p className="text-white">
                      <span style={{ color: 'red' }}>IGOR</span> ID: 6537)
                      01/18/25(THU)21:20:45
                    </p>
                    <p className="text-blue-400">No.1677665890</p>
                    <div className="mt-4 text-green-400 whitespace-pre-line">
                      {'>'}Tell us... did you really think ze Boyband twins
                      would
                      {'\n'}make ze greatest trade in quantum market history?
                      {'\n'}
                      {'>'}Ze very fabric of financial reality bends to our
                      will...
                    </div>
                  </div>

                  <div className="p-4 mt-9 xl:mt-[2rem] font-vt323">
                    <p className="text-white">
                      <span style={{ color: 'red' }}>IGOR</span> ID: 6537)
                      01/18/25(THU)21:20:45
                    </p>
                    <p className="text-blue-400">No.1677665890</p>
                    <div className="mt-4 text-green-400 whitespace-pre-line">
                      {'>'}Tell us... did you really think ze Boyband twins
                      would
                      {'\n'}make ze greatest trade in quantum market history?
                      {'\n'}
                      {'>'}Ze very fabric of financial reality bends to our
                      will...
                    </div>
                  </div>
                  <div className="p-4 mt-9 xl:mt-[2rem] font-vt323">
                    <p className="text-white">
                      <span style={{ color: 'red' }}>IGOR</span> ID: 6537)
                      01/18/25(THU)21:20:45
                    </p>
                    <p className="text-blue-400">No.1677665890</p>
                    <div className="mt-4 text-green-400 whitespace-pre-line">
                      {'>'}Tell us... did you really think ze Boyband twins
                      would
                      {'\n'}make ze greatest trade in quantum market history?
                      {'\n'}
                      {'>'}Ze very fabric of financial reality bends to our
                      will...
                    </div>
                  </div>
                  <div className="p-4 mt-9 xl:mt-[2rem] font-vt323">
                    <p className="text-white">
                      <span style={{ color: 'red' }}>IGOR</span> ID: 6537)
                      01/18/25(THU)21:20:45
                    </p>
                    <p className="text-blue-400">No.1677665890</p>
                    <div className="mt-4 text-green-400 whitespace-pre-line">
                      {'>'}Tell us... did you really think ze Boyband twins
                      would
                      {'\n'}make ze greatest trade in quantum market history?
                      {'\n'}
                      {'>'}Ze very fabric of financial reality bends to our
                      will...
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-9 relative w-full h-full bg-black shadow-xl text-white font-vt323 ">
                <div className="w-full border-y p-2 flex items-center gap-2">
                  <input
                    placeholder="Type your message here... (use '>' for greentext)"
                    className=" !bg-black text-white border w-full p-2 h-12 text-xs"
                  />

                  <div className="border flex items-center justify-center w-[3rem] h-[3rem]">
                    <Image
                      src="/micIcon.svg"
                      alt=""
                      width={38}
                      height={31}
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                  </div>
                  <div className="border flex items-center justify-center w-[3rem] h-[3rem]">
                    <Image
                      src="/sendIcon.svg"
                      alt=""
                      width={38}
                      height={31}
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                  </div>
                </div>

                <div className="absolute -top-[0.81rem] -left-2 text-white font-extrabold">
                  +
                </div>
                <div className="absolute top-[3.3rem] -left-2 text-white font-extrabold">
                  +
                </div>
                <div className="absolute -top-[0.81rem] -right-2 text-white font-extrabold">
                  +
                </div>
                <div className="absolute top-[3.3rem] -right-2 text-white font-extrabold">
                  +
                </div>
              </div>

              <div className="hidden xl:block mt-9 relative w-full h-full bg-black shadow-xl text-white font-vt323 ">
                <div className="w-full border-y p-2 flex justify-end items-end text-gray-500 text-sm">
                  <p>{'//'} SIMULATION RUNNING</p>
                </div>
                <div className="absolute -top-[0.87rem] -left-2 text-white font-extrabold">
                  +
                </div>
                <div className="absolute top-[1.5rem] -left-2 text-white font-extrabold">
                  +
                </div>
                <div className="absolute -top-[0.87rem] -right-2 text-white font-extrabold">
                  +
                </div>
                <div className="absolute top-[1.5rem] -right-2 text-white font-extrabold">
                  +
                </div>
                <div className="absolute -bottom-5 -left-2 text-white font-extrabold">
                  +
                </div>
                <div className="absolute -bottom-5 -right-2 text-white font-extrabold">
                  +
                </div>

                <div className="flex items-center justify-between py-2 pl-2 pr-7">
                  <div>
                    <div className="flex flex-col items-center gap-2">
                      <div>
                        <p>ALL SYSTEMS</p>

                        <div className="flex items-center justify-between">
                          <p>ONLINE</p>

                          <div className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                      </div>

                      <div>
                        <p>SIMULATION</p>
                        <div className="flex items-center justify-between">
                          <p>RUNNING</p>

                          <div className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" flex items-center gap-5">
                    <p>CLICK HERE TO END SIMULATION</p>

                    <button className="py-3 px-8 bg-[#dc4040] rounded-md">
                      STOP
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-[60%] h-full">
              <div className="relative w-full h-full bg-black shadow-xl">
                <div className="w-full border-y px-2 flex flex-col justify-end items-end text-gray-500 text-sm">
                  <p>{'//'} AGENT INTERACTION</p>
                  <p>FEED </p>
                </div>
                <div className="absolute -top-[0.83rem] -left-2 text-white font-extrabold">
                  +
                </div>
                <div className="absolute top-[1.7rem] -left-2 text-white font-extrabold">
                  +
                </div>
                <div className="absolute -top-[0.83rem] -right-2 text-white font-extrabold">
                  +
                </div>
                <div className="absolute top-[1.7rem] -right-2 text-white font-extrabold">
                  +
                </div>
                <div className="absolute -bottom-3 -left-2 text-white font-extrabold">
                  +
                </div>
                <div className="absolute -bottom-3 -right-2 text-white font-extrabold">
                  +
                </div>

                <div className="p-4 relative ">
                  <div>
                    <Image
                      src="/agents.png"
                      alt="Bogdanoff Logo"
                      width={968}
                      height={961}
                      className="w-full xl:min-h-[37rem]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-9 hidden xl:flex items-start gap-5  ">
                <div className="relative w-full h-[39rem] overflow-y-scroll hide-scrollbar bg-black shadow-xl text-white z-20">
                  <div className="w-full border-y px-2 flex flex-col justify-end items-end text-gray-500 text-sm">
                    <p>{'//'} QUANTUM SURVEILLANCE</p>
                    <p>FEED </p>
                  </div>
                  <div className="absolute -top-[0.85rem] -left-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute top-[1.7rem] -left-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute -top-[0.85rem] -right-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute top-[1.7rem] -right-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute -bottom-5 -left-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute -bottom-5 -right-2 text-white font-extrabold">
                    +
                  </div>

                  <div className="p-4 mt-[2rem] font-vt323">
                    <p className="text-blue-300">
                      <span style={{ color: 'yellow' }}>[1:28:21 PM]</span> 
                      Scanning for anomalies in the space-time continuum...
                    </p>
                    <p className="text-blue-300">
                      <span style={{ color: 'yellow' }}>[1:28:21 PM]</span> 
                      Scanning for anomalies in the space-time continuum...
                    </p>
                    <p className="text-blue-300">
                      <span style={{ color: 'yellow' }}>[1:28:21 PM]</span> 
                      Scanning for anomalies in the space-time continuum...
                    </p>
                    <p className="text-blue-300">
                      <span style={{ color: 'yellow' }}>[1:28:21 PM]</span> 
                      Scanning for anomalies in the space-time continuum...
                    </p>
                    <p className="text-blue-300">
                      <span style={{ color: 'yellow' }}>[1:28:21 PM]</span> 
                      Scanning for anomalies in the space-time continuum...
                    </p>
                    <p className="text-blue-300">
                      <span style={{ color: 'yellow' }}>[1:28:21 PM]</span> 
                      Scanning for anomalies in the space-time continuum...
                    </p>
                    <p className="text-blue-300">
                      <span style={{ color: 'yellow' }}>[1:28:21 PM]</span> 
                      Scanning for anomalies in the space-time continuum...
                    </p>
                    <p className="text-blue-300">
                      <span style={{ color: 'yellow' }}>[1:28:21 PM]</span> 
                      Scanning for anomalies in the space-time continuum...
                    </p>
                    <p className="text-blue-300">
                      <span style={{ color: 'yellow' }}>[1:28:21 PM]</span> 
                      Scanning for anomalies in the space-time continuum...
                    </p>
                  </div>
                </div>

                <div className="relative w-full h-[39rem] bg-black shadow-xl text-white">
                  <div className="w-full border-y px-2 flex flex-col justify-end items-end text-gray-500 text-sm">
                    <p>{'//'} QUANTUM SURVEILLANCE</p>
                    <p>FEED </p>
                  </div>
                  <div className="absolute -top-[0.85rem] -left-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute top-[1.7rem] -left-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute -top-[0.85rem] -right-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute top-[1.7rem] -right-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute -bottom-5 -left-2 text-white font-extrabold">
                    +
                  </div>
                  <div className="absolute -bottom-5 -right-2 text-white font-extrabold">
                    +
                  </div>

                  <div className="p-4 flex flex-col justify-end items-end font-vt323">
                    <p>[DOCUMENT CLASS: QUANTAM CLEARANCE]</p>
                    <p>[BOGDANOFF RESEARCH PROTOCOL 7749]</p>
                    <p>[TIMELINE MANIPULATION MANUAL v2.025]</p>
                    <p>[CAUTION: MEMETIC HAZARD PRESENT]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Page;
