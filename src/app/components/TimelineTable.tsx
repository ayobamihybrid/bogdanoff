import React from 'react';
import { timelines } from '../utils';

const TimelineTable = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-10 font-mono">
      <div className="absolute left-1/2 top-0 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>

      {timelines.map((event, index) => (
        <div
          key={index}
          className={`relative flex items-center w-full mb-10 ${
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          }`}
        >
          <div className="absolute left-1/2 w-4 h-4 bg-white border-2 border-gray-600 rounded-full transform -translate-x-1/2"></div>

          <div
            className={`relative w-5/12 p-2 md:p-4 text-white rounded-xl ${
              index % 2 === 0 ? 'ml-auto' : 'mr-auto'
            }`}
          >
            <p
              className={`w-fit mb-2 text-xs px-3 md:px-7 py-1 rounded-full font-bold ${
                index < 2 ? 'bg-white text-black' : 'bg-black text-white'
              }`}
            >
              {event.date}
            </p>
            <h3 className="text-sm md:text-lg font-bold">{event.title}</h3>
            <p className="text-xs md:text-sm mt-2 text-gray-400">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineTable;
