import React from 'react';
import ExpandableSection from '../components/ExpandableSection';
import Timeline from '../components/Timeline';

const Page = () => {
  const details = [
    {
      title: 'Origin Protocol',
      moreDetail:
        'Our proprietary QMD framework studies ze quantum entanglement between memes and markets. Through careful observation of Wojak emotional states across multiple timelines, we have mapped ze complete taxonomy of market psychology.',
      list: [
        "Schrödinger's Gains: Superposition of profit and loss states, Quantum Tunneling through Support Levels,  Wave Function Collapse in Mass Liquidation Events, Timeline Divergence via FUD Propagation",
      ],
    },
    {
      title: 'Origin Protocol',
      moreDetail:
        'Our proprietary QMD framework studies ze quantum entanglement between memes and markets. Through careful observation of Wojak emotional states across multiple timelines, we have mapped ze complete taxonomy of market psychology.',
    },
    {
      title: 'Origin Protocol',
      moreDetail:
        'Our proprietary QMD framework studies ze quantum entanglement between memes and markets. Through careful observation of Wojak emotional states across multiple timelines, we have mapped ze complete taxonomy of market psychology.',
      list: [
        "Schrödinger's Gains: Superposition of profit and loss states, Quantum Tunneling through Support Levels,  Wave Function Collapse in Mass Liquidation Events, Timeline Divergence via FUD Propagation",
      ],
    },
  ];
  return (
    <div className="bg-[linear-gradient(to_bottom,#000,#003333,#2F4F4F,#556B2F,#000)] h-screen px-4 ">
      <div className="w-full mt-[6rem] flex items-start justify-center gap-5 ">
        {details.map((detail, index) => (
          <ExpandableSection
            key={index}
            title={detail.title}
            moreDetail={detail.moreDetail}
            list={detail?.list}
          />
        ))}
      </div>

      <div className="mt-[6rem]">
        <Timeline />
      </div>
    </div>
  );
};

export default Page;
