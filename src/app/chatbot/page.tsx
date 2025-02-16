'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import ClientLayout from '../ClientLayout';

const Page = () => {
  useEffect(() => {
    document.documentElement.classList.add('chatbot-page');
    document.body.classList.add('chatbot-page');

    return () => {
      document.documentElement.classList.remove('chatbot-page');
      document.body.classList.remove('chatbot-page');
    };
  }, []);

  return (
    <ClientLayout>
      <div className="mt-3 border rounded-xl border-gray-600 font-vt323 text-sm">
        <div className="h-[calc(100vh-theme(spacing.28))] bg-[url('/Rectangle.png')] bg-brown-500/50 bg-cover bg-center w-full text-black">
          <div className="h-full w-full flex flex-col-reverse xl:flex-row items-start gap-4 xl:gap-6 p-4">
            <div className="w-full xl:w-[40%] h-full flex flex-col gap-3 pb-4 xl:pb-16">
              <div className="relative w-full flex-1 bg-black shadow-xl ">
                <div className="absolute inset-0 flex flex-col">
                  <div className="w-full border-y px-2 flex flex-col justify-end items-end text-gray-500 ">
                    <p>{'//'} CHAT INTERFACE</p>
                    <p>FEED</p>
                  </div>

                  <div className="flex-1 overflow-y-auto hide-scrollbar">
                    <div className="p-4 space-y-6 font-vt323">
                      <div>
                        <p className="text-white">
                          <span className="text-red-500">IGOR</span> ID: 6537)
                          01/18/25(THU)21:20:45
                        </p>
                        <p className="text-blue-400">No.1677665890</p>
                        <div className="mt-2 text-green-400 whitespace-pre-line">
                          {'>'}Tell us... did you really think ze Boyband twins
                          would
                          {'\n'}make ze greatest trade in quantum market
                          history?
                          {'\n'}
                          {'>'}Ze very fabric of financial reality bends to our
                          will...
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-6 font-vt323">
                      <div>
                        <p className="text-white">
                          <span className="text-red-500">IGOR</span> ID: 6537)
                          01/18/25(THU)21:20:45
                        </p>
                        <p className="text-blue-400">No.1677665890</p>
                        <div className="mt-2 text-green-400 whitespace-pre-line">
                          {'>'}Tell us... did you really think ze Boyband twins
                          would
                          {'\n'}make ze greatest trade in quantum market
                          history?
                          {'\n'}
                          {'>'}Ze very fabric of financial reality bends to our
                          will...
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-6 font-vt323">
                      <div>
                        <p className="text-white">
                          <span className="text-red-500">IGOR</span> ID: 6537)
                          01/18/25(THU)21:20:45
                        </p>
                        <p className="text-blue-400">No.1677665890</p>
                        <div className="mt-2 text-green-400 whitespace-pre-line">
                          {'>'}Tell us... did you really think ze Boyband twins
                          would
                          {'\n'}make ze greatest trade in quantum market
                          history?
                          {'\n'}
                          {'>'}Ze very fabric of financial reality bends to our
                          will...
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-6 font-vt323">
                      <div>
                        <p className="text-white">
                          <span className="text-red-500">IGOR</span> ID: 6537)
                          01/18/25(THU)21:20:45
                        </p>
                        <p className="text-blue-400">No.1677665890</p>
                        <div className="mt-2 text-green-400 whitespace-pre-line">
                          {'>'}Tell us... did you really think ze Boyband twins
                          would
                          {'\n'}make ze greatest trade in quantum market
                          history?
                          {'\n'}
                          {'>'}Ze very fabric of financial reality bends to our
                          will...
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-6 font-vt323">
                      <div>
                        <p className="text-white">
                          <span className="text-red-500">IGOR</span> ID: 6537)
                          01/18/25(THU)21:20:45
                        </p>
                        <p className="text-blue-400">No.1677665890</p>
                        <div className="mt-2 text-green-400 whitespace-pre-line">
                          {'>'}Tell us... did you really think ze Boyband twins
                          would
                          {'\n'}make ze greatest trade in quantum market
                          history?
                          {'\n'}
                          {'>'}Ze very fabric of financial reality bends to our
                          will...
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-6 font-vt323">
                      <div>
                        <p className="text-white">
                          <span className="text-red-500">IGOR</span> ID: 6537)
                          01/18/25(THU)21:20:45
                        </p>
                        <p className="text-blue-400">No.1677665890</p>
                        <div className="mt-2 text-green-400 whitespace-pre-line">
                          {'>'}Tell us... did you really think ze Boyband twins
                          would
                          {'\n'}make ze greatest trade in quantum market
                          history?
                          {'\n'}
                          {'>'}Ze very fabric of financial reality bends to our
                          will...
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-6 font-vt323">
                      <div>
                        <p className="text-white">
                          <span className="text-red-500">IGOR</span> ID: 6537)
                          01/18/25(THU)21:20:45
                        </p>
                        <p className="text-blue-400">No.1677665890</p>
                        <div className="mt-2 text-green-400 whitespace-pre-line">
                          {'>'}Tell us... did you really think ze Boyband twins
                          would
                          {'\n'}make ze greatest trade in quantum market
                          history?
                          {'\n'}
                          {'>'}Ze very fabric of financial reality bends to our
                          will...
                        </div>
                      </div>
                    </div>
                    <div className="p-4 space-y-6 font-vt323">
                      <div>
                        <p className="text-white">
                          <span className="text-red-500">IGOR</span> ID: 6537)
                          01/18/25(THU)21:20:45
                        </p>
                        <p className="text-blue-400">No.1677665890</p>
                        <div className="mt-2 text-green-400 whitespace-pre-line">
                          {'>'}Tell us... did you really think ze Boyband twins
                          would
                          {'\n'}make ze greatest trade in quantum market
                          history?
                          {'\n'}
                          {'>'}Ze very fabric of financial reality bends to our
                          will...
                        </div>
                      </div>
                    </div>
                  </div>
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
                <div className="hidden xl:block absolute -bottom-5 -left-2 text-white font-extrabold">
                  +
                </div>
                <div className="hidden xl:block absolute -bottom-5 -right-2 text-white font-extrabold">
                  +
                </div>
              </div>

              <div className="relative w-full bg-black shadow-xl text-white font-vt323">
                <div className="w-full border-y p-2 flex items-center gap-2">
                  <input
                    placeholder="Type your message here... (use '>' for greentext)"
                    className="bg-black text-white border w-full p-2 h-12 text-xs rounded-none"
                  />
                  <div className="border border-white flex items-center justify-center w-20 h-12 shadow-lg shadow-white/50 hover:shadow-white/75 transition-shadow duration-300 cursor-pointer">
                    <Image
                      src="/micIcon.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="border border-white flex items-center justify-center w-20 h-12 shadow-lg shadow-white/50 hover:shadow-white/75 transition-shadow duration-300 cursor-pointer">
                    <Image
                      src="/sendIcon.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6"
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

              <div className="hidden xl:block relative w-full bg-black shadow-xl text-white font-vt323">
                <div className="w-full border-y p-2 flex justify-end items-end text-gray-500 ">
                  <p>{'//'} SIMULATION RUNNING</p>
                </div>

                <div className="flex items-center justify-between py-1 pl-2 pr-4">
                  <div className="flex flex-col gap-1">
                    <div>
                      <p>ALL SYSTEMS</p>
                      <div className="flex items-center gap-2">
                        <p>ONLINE</p>
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                    </div>
                    <div>
                      <p>SIMULATION</p>
                      <div className="flex items-center gap-2">
                        <p>RUNNING</p>
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p>CLICK HERE TO END SIMULATION</p>
                    <button className="py-2 px-6 bg-[#dc4040] hover:bg-[#dc4040a8]">
                      STOP
                    </button>
                  </div>
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
              </div>
            </div>

            <div className="w-full xl:w-[60%] h-full flex flex-col gap-4">
              <div className="relative w-full flex-1 bg-black shadow-xl">
                <div className="h-full flex flex-col">
                  <div className="w-full border-y px-2 flex flex-col justify-end items-end text-gray-500 ">
                    <p>{'//'} AGENT INTERACTION</p>
                    <p>FEED</p>
                  </div>

                  <div className="flex-1 relative h-full lg:min-h-[15rem] xl:min-h-[20rem]">
                    <Image
                      src="/agents.png"
                      alt="Bogdanoff Agents"
                      width={968}
                      height={961}
                      className="min-w-full h-full object-cover absolute inset-0"
                    />
                  </div>
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
                <div className="hidden xl:block absolute -bottom-3 -left-2 text-white font-extrabold">
                  +
                </div>
                <div className="hidden xl:block absolute -bottom-3 -right-2 text-white font-extrabold">
                  +
                </div>
              </div>

              <div className="hidden xl:flex gap-4 h-1/3 xl:pb-16">
                <div className="relative w-1/2 bg-black shadow-xl text-white">
                  <div className="absolute inset-0 flex flex-col">
                    <div className="w-full border-y px-2 flex flex-col justify-end items-end text-gray-500 ">
                      <p>{'//'} QUANTUM SURVEILLANCE</p>
                      <p>FEED</p>
                    </div>
                    <div className="flex-1 overflow-y-auto hide-scrollbar">
                      <div className="p-4 space-y-2 font-vt323">
                        {Array(19)
                          .fill(0)
                          .map((_, i) => (
                            <p key={i} className="text-blue-300">
                              <span className="text-yellow-400">
                                [1:28:21 PM]
                              </span>{' '}
                              Scanning for anomalies in the space-time
                              continuum...
                            </p>
                          ))}
                      </div>
                    </div>
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
                </div>

                <div className="relative w-1/2 bg-black shadow-xl text-white">
                  <div className="h-full flex flex-col">
                    <div className="w-full border-y px-2 flex flex-col justify-end items-end text-gray-500 ">
                      <p>{'//'} QUANTUM SURVEILLANCE</p>
                      <p>FEED</p>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto hide-scrollbar">
                      <div className="flex flex-col items-end justify-center h-full font-vt323">
                        <p>[DOCUMENT CLASS: QUANTAM CLEARANCE]</p>
                        <p>[BOGDANOFF RESEARCH PROTOCOL 7749]</p>
                        <p>[TIMELINE MANIPULATION MANUAL v2.025]</p>
                        <p>[CAUTION: MEMETIC HAZARD PRESENT]</p>
                      </div>
                    </div>
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
