import Image from 'next/image';
import React from 'react';

interface StatusProps {
  status: string;
  action: string;
}

interface CardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  icons?: string[];
  status?: StatusProps;
}

const StatusBadge: React.FC<StatusProps> = ({ status, action }) => (
  <div className="absolute w-full top-0 xl:-top-[4.8rem] right-0 flex items-center justify-between bg-white rounded-xl px-3 py-2 shadow-lg">
    <div className="text-xs font-mono">
      <div className="opacity-70">BOGDANOFF SIMULATION</div>
      <div className="font-bold">{status}</div>
    </div>
    <button className="bg-black text-white px-6 py-2 text-xs font-bold">
      {action}
    </button>
  </div>
);

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  buttonText,
  icons = [],
  status,
}) => (
  <div className="relative">
    {status && <StatusBadge {...status} />}
    <div
      className={` bg-white/90 rounded-xl p-3 xl:p-5 flex flex-col justify-between min-h-[13rem] xl:min-h-[17.5rem] ${
        status ? 'mt-[4.2rem] lg:mt-[5rem] xl:mt-0' : ''
      }`}
    >
      <div className="space-y-2">
        <p className="text-sm font-mono uppercase">{title}</p>
        <p className="text-lg font-mono font-bold tracking-wider">{subtitle}</p>
      </div>
      <div className="flex justify-between gap-1 items-center">
        <div className="flex gap-1 xl:gap-2">
          {icons.map((icon, index) => (
            <div
              key={index}
              className=" bg-black p-1 xl:p-2 flex items-center justify-center"
            >
              <Image
                src={icon}
                alt=""
                width={38}
                height={31}
                className="w-9 h-9"
              />
            </div>
          ))}
        </div>

        <button
          className={`px-4 py-2 font-mono text-sm font-bold ${
            buttonText === 'BUY BOGDANOFF'
              ? 'bg-yellow-200 text-black py-3 xl:py-4'
              : 'bg-black text-white'
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  </div>
);

const CardGrid: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: 'EMPTY YOUR',
      subtitle: 'WALLET HERE!',
      buttonText: 'BUY BOGDANOFF',
      icons: ['/falcon.svg', 'Vectorrr.svg', 'em.svg'],
    },
    {
      title: 'STUDY THE',
      subtitle: 'BOGDANOFF TIMELINE',
      buttonText: 'TIMELINE',
    },
    {
      title: 'ENTER',
      subtitle: 'MEMETIC/ENGINE',
      buttonText: 'MEME/ENG',
    },
    {
      title: 'JOIN THE',
      subtitle: 'BOGCOUNCIL',
      buttonText: 'COMING SOON...',
      status: {
        status: 'READY',
        action: 'RUN',
      },
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 ">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
