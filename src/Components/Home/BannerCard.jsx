import React from 'react';

export default function BannerCard() {
  const cards = [
    { name: 'Mega Sale', img: 'https://cdn.tourradar.com/s3/content-pages/391/438x292/ma9IA0.jpg', discount: 'Up to 70% savings' },
    { name: 'Europe Deals', img: 'https://cdn.tourradar.com/s3/content-pages/391/438x292/0CjxqM.jpg', discount: 'Up to 50% off' },
    { name: 'Italy Deals', img: 'https://cdn.tourradar.com/s3/content-pages/391/438x292/8tdc3G.jpg', discount: 'Up to 50% off' },
    { name: 'Japan Deals', img: 'https://cdn.tourradar.com/s3/content-pages/391/438x292/i1YPAB.jpg', discount: 'Up to 50% off' },
    { name: 'Egypt Deals', img: 'https://cdn.tourradar.com/s3/content-pages/391/438x292/DhjRLc.jpg', discount: 'Up to 65% off' },
  ];

  return (
    <div className="px-10 relative mb-40"> 
      <div className="relative flex items-center pl-10 bg-cover bg-center h-[300px] mt-10 rounded-3xl"
        style={{  backgroundImage: 'url("https://cdn.tourradar.com/s3/content-pages/391/2048x700/3K2rOm.png")',}}>
        <div>
          <h1 className="text-white text-5xl font-bold">Book the Best Tours & River Cruises</h1>
          <h2 className="text-white font-bold text-2xl mt-4">Mega Sale</h2>
          <h3 className="text-white text-xl mt-2">Final deals up to 70% OFF</h3>
        </div>
      </div>

      <div className="absolute hidden md:block -bottom-50 left-1/2 transform -translate-x-1/2 w-full px-10">
        <div className="flex gap-6 justify-center">
          {cards.map((card, index) => (
            <div key={index} className="bg-white shadow-xl p-4 rounded-xl hover:scale-105 transition-transform duration-300 w-[200px]" >
              <img
                className="h-[150px] w-[200px] rounded-xl object-cover"
                src={card.img}
                alt={card.name}
              />
              <h2 className="pt-4 text-center font-bold text-lg">{card.name}</h2>
              <p className="text-center text-sm text-red-500 font-semibold mt-2">{card.discount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}