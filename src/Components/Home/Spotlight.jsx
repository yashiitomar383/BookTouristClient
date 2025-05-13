import React from "react";
import { FcBiotech, FcBiohazard, FcCustomerSupport } from "react-icons/fc";

export default function Spotlight() {
  const Data = [
    {
      name: "TourRadar Spotlight",
      img: "https://cdn.tourradar.com/s3/content-pages/391/848x404/ArXK9V.png",
      des: "Find out what happening at TourRadar—from the latest travel news to our special offers.",
      btn: "View Deals",
    },
    {
      name: "Guide of the Year 2024",
      img: "https://cdn.tourradar.com/s3/content-pages/391/848x404/6BdXyR.png",
      des: "Hey guides, keep collecting those 5-star reviews, because the clock is ticking!",
      btn: "Discover more",
    },
    {
      name: "Empowering Solo Travelers",
      img: "https://cdn.tourradar.com/s3/content-pages/391/848x404/BtyJnK.jpg",
      des: "Organized adventures are inherently social, bringing explorers together to share safe, enriching, and unforgettable journeys. With curated itineraries and opportunities to connect with travelers, the operators we partner with make solo tours memorable.",
      btn: "Find Your Solo Trip",
    },
  ];

  const data2 = [
    { icons: <FcBiotech className="text-5xl" />, name: "Travel Insurance" },
    { icons: <FcBiohazard className="text-5xl" />, name: "Travel & Earn" },
    { icons: <FcCustomerSupport className="text-5xl" />, name: "24/7 Customer Support" },
  ];

  return (
    <div>
      {/* Section One */}
      <section className="px-6 md:px-20 py-10 bg-gray-50">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">TourRadar Spotlight</h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Find out what’s happening at TourRadar—from the latest travel news to our special offers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Data.map(({ img, name, des, btn }, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 bg-white overflow-hidden flex flex-col"
            >
              <img className="w-full h-48 object-cover" src={img} alt={name} />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{name}</h2>
                <p className="text-gray-700 text-sm mb-4">{des}</p>
                <button className="mt-auto px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
                  {btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Two */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col gap-6">
            {data2.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition p-4 hover:bg-blue-50"
              >
                <div className="p-4 bg-blue-100 rounded-lg text-blue-600">
                  {item.icons}
                </div>
                <div className="ml-4">
                  <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
                  <button className="text-blue-500 text-sm font-medium hover:underline mt-1">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
