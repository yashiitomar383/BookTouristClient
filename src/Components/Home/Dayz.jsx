import React from 'react';

export default function Dayz() {
  const data = [
    {
      h1: 'Denali Returns to McKinley and the Gulf Gets a Patriotic Makeover',
      h2: 'Azaz Sheikh',
      img: 'https://www.tourradar.com/days-to-come/wp-content/uploads/2025/01/GettyImages-831728598-2048x1367.jpg',
    },
    {
      h1: 'Iceland and the (Somewhat Elusive) Northern Lights',
      h2: 'Felipe Rosen Mosquera',
      img: 'https://www.tourradar.com/days-to-come/wp-content/uploads/2023/12/Iceland.KenPhung_Shutterstock-2048x1486.jpg',
    },
    {
      h1: 'Visit These Gloomy Destinations for a Great Time',
      h2: 'Dom',
      img: 'https://www.tourradar.com/days-to-come/wp-content/uploads/2024/08/RS18860_Scotland-Isle-of-Skye-chris-czermak-unsplash-2048x1109.jpg',
    },
  ];

  return (
    <div className="bg-blue-950 flex flex-col md:flex-row py-20 px-10 text-white gap-8">
      {/* Right Div */}
      <div className="md:w-[25%] flex flex-col justify-center items-center text-center">
        <h1 className="tracking-[8px] font-bold text-2xl">DAYS TO COME</h1>
        <h2>A Travel Magazine by TourRadar</h2>
      </div>

      {/* Left Div */}
      <div className="md:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(({ h1, h2, img }, index) => (
          <article key={index} className="relative group">
            <img
              className="h-[200px] w-full object-center object-cover rounded-md"
              src={img}
              alt={h1}
            />
            <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-end p-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold">{h1}</h3>
              <p className="text-sm">{h2}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
