import React from 'react';

export default function Spotlight() {
  const Data = [
    {
      name: 'TourRadar Spotlight',
      img: 'https://cdn.tourradar.com/s3/content-pages/391/848x404/ArXK9V.png',
      des: 'Find out what happening at TourRadar—from the latest travel news to our special offers.',
      btn: 'View Deals',
    },
    {
      name: 'Guide of the Year 2024',
      img: 'https://cdn.tourradar.com/s3/content-pages/391/848x404/6BdXyR.png',
      des: 'Hey guides, keep collecting those 5-star reviews, because the clock is ticking!',
      btn: 'Discover more',
    },
    {
      name: 'Empowering Solo Travelers',
      img: 'https://cdn.tourradar.com/s3/content-pages/391/848x404/BtyJnK.jpg',
      des: 'Organized adventures are inherently social, bringing explorers together to share safe, enriching, and unforgettable journeys. With curated itineraries and opportunities to connect with travelers, the operators we partner with make solo tours memorable.',
      btn: 'Find Your Solo Trip',
    },
  ];

  return (
    <section className="px-6 md:px-20 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">TourRadar Spotlight</h1>
      <p className="text-center text-gray-600 mb-10">
        Find out what’s happening at TourRadar—from the latest travel news to our special offers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Data.map(({ img, name, des, btn }, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow bg-white overflow-hidden flex flex-col"
          >
            <img
              className="w-full h-48 object-cover"
              src={img}
              alt={name}
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2">{name}</h2>
              <p className="text-gray-700 text-sm mb-4">{des}</p>
              <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                {btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
