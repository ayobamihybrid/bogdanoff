export default function Timeline() {
  const events = [
    { year: '1940', text: 'BOGDANOFF TWINS EMERGE FROM QUANTUM FOAM' },
    { year: '1949', text: 'BOGDANOFF TWINS EMERGE FROM QUANTUM FOAM' },
    { year: '1950', text: 'BOGDANOFF TWINS EMERGE FROM QUANTUM FOAM' },
    { year: '1969', text: 'BOGDANOFF TWINS EMERGE FROM QUANTUM FOAM' },
  ];

  return (
    <div className="relative flex flex-col items-center bg-gradient-to-b from-green-900 to-gray-900 min-h-screen py-12 px-4">
      <div className="w-full ">
        <div className="relative border-l-2 border-gray-300 pl-6">
          {events.map((event, index) => (
            <div key={index} className="mb-8 flex flex-col gap-2 relative">
              <div className="absolute left-[-9px] w-4 h-4 bg-white border-2 border-gray-400 rounded-full" />
              <div
                className={`p-4 bg-black text-white rounded-lg w-60 ${
                  index % 2 === 0 ? 'self-start' : 'self-end'
                }`}
              >
                <p className="text-sm font-bold">{event.year}</p>
                <p className="text-xs">{event.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="mt-6 px-4 py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200">
        Scroll to Top
      </button>
    </div>
  );
}
