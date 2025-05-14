import React from 'react';

export default function Destinations() {
  const data = [
    { name: 'Africa', img: 'https://cdn.tourradar.com/images/seo-destination-links/africa-desktop.jpg', place: ['Egypt', 'Kenya', 'Morocco', 'Namibia', 'South Africa', 'Tanzania'] },
    { name: 'Europe', img: 'https://cdn.tourradar.com/images/seo-destination-links/europe-desktop.jpg', place: ['Amalfi Coast', 'Austria', 'Croatia', 'Eastern Europe', 'England', 'Finland', 'France', 'Germany', 'Great Britain & UK', 'Greece', 'Greek Islands', 'Iceland', 'Ireland', 'Italy', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Portugal & Spain', 'Scandinavia', 'Scotland', 'Sicily', 'Spain', 'Switzerland', 'Turkey', 'Tuscany'] },
    { name: 'Asia', img: 'https://cdn.tourradar.com/images/seo-destination-links/asia-desktop.jpg', place:  ['Bali', 'Bhutan', 'Cambodia', 'China', 'Georgia', 'Holy Land','India', 'Indonesia', 'Israel', 'Japan', 'Jordan', 'Malaysia','Nepal', 'South Korea', 'Southeast Asia', 'Sri Lanka', 'Thailand', 'Vietnam']},
    { name: 'Latin America', img: 'https://cdn.tourradar.com/images/seo-destination-links/latin-america-desktop.jpg', place: ['Argentina', 'Brazil', 'Chile', 'Colombia', 'Costa Rica', 'Ecuador', 'Machu Picchu', 'Mexico', 'Panama', 'Patagonia', 'Peru', 'South America'] },
    { name: 'North America', img: 'https://cdn.tourradar.com/images/seo-destination-links/north-america-desktop.jpg', place: ['Alaska', 'California', 'Canada', 'Grand Canyon', 'USA'] },
    { name: 'Australia/Oceania', img: 'https://cdn.tourradar.com/images/seo-destination-links/australia-desktop.jpg', place: ['Australia','Great Barrier Reef', 'New Zealand'] },
    { name: 'Polar', img: 'https://cdn.tourradar.com/images/seo-destination-links/arctics-desktop.jpg', place: ['Antarctica', 'The Arctic'] },
  ];


  const oddData = data.filter((_, index) => index % 2 !== 0);
  const evenData = data.filter((_, index) => index % 2 === 0);

  return (
    <div className="px-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Popular Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Odd Data */}
        <div>
          {oddData.map((item, index) => (
            <div className="bg-white rounded-2xl shadow-lg mb-6" key={index}>
              <div
                className="flex justify-between items-center py-8 bg-center bg-cover rounded-t-2xl text-white"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <h1 className="pl-5 font-bold text-2xl">{item.name}</h1>
                <div className="flex gap-3 px-5">
                  <button className="border px-4 py-1 rounded-2xl bg-[#ffffff56] hover:bg-white hover:text-black">
                    All Adventures
                  </button>
                  <button className="border px-4 py-1 rounded-2xl bg-[#ffffff56] hover:bg-white hover:text-black">
                    Deals
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800 text-lg">
                  {item.place.map((value, idx) => (
                    <h1 key={idx} className="hover:text-black cursor-pointer">
                      {value}
                    </h1>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Even Data */}
        <div>
          {evenData.map((item, index) => (
            <div className="bg-white rounded-2xl shadow-lg mb-6" key={index}>
              <div
                className="flex justify-between items-center py-8 bg-center bg-cover rounded-t-2xl text-white"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <h1 className="pl-5 font-bold text-2xl">{item.name}</h1>
                <div className="flex gap-3 px-5">
                  <button className="border px-4 py-1 rounded-2xl bg-[#ffffff56] hover:bg-white hover:text-black">
                    All Adventures
                  </button>
                  <button className="border px-4 py-1 rounded-2xl bg-[#ffffff56] hover:bg-white hover:text-black">
                    Deals
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800 text-lg">
                  {item.place.map((value, idx) => (
                    <h1 key={idx} className="hover:text-black cursor-pointer">
                      {value}
                    </h1>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
