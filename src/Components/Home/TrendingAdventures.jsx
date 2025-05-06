import React from 'react'
import { FaStar } from "react-icons/fa6";

export default function TrendingAdventures() {
  const data = [
    { name: 'Costa Rica Quest', image: 'https://cdn.tourradar.com/s3/tour/360x210/5247_5df9cf69aed8e.jpg', discount: '-25% OFF', day: 9, rating: 4.8, price: '₹1,49,999' },
    { name: 'Spanish Wonder (End Barcelona)', image: 'https://cdn.tourradar.com/s3/tour/360x210/89038_30c9e0.jpg', discount: '-10% OFF', day: 4, rating: 4.8, price: '₹99,999' },
    { name: 'Amalfi Coast Walking - Agriturismo', image: 'https://cdn.tourradar.com/s3/tour/360x210/124753_fdf3784b.jpg', discount: '-10% OFF', day: 8, rating: 4.8, price: '₹1,99,999' },
    { name: 'Best Of Vietnam In 14 Days', image: 'https://cdn.tourradar.com/s3/tour/360x210/136789_64700e7b05b73.jpg', discount: '-55% OFF', day: 14, rating: 4.8, price: '₹49,999' },
  ]

  return (
    <div className="mt-12 px-6 md:px-20  md:pt-10 pt-1">
      <div className="pt-8">
        <h1 className="font-bold text-3xl text-center mb-8">Trending Adventures</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="relative w-full h-[130px]">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={item.image}
                  alt={item.name}
                />
                <span className="absolute top-2 right-2 bg-red-600 text-white text-sm px-2 py-1 rounded">
                  {item.discount}
                </span>
              </div>
              <div className="mt-4 text-center">
                <p className="font-bold text-lg">{item.name}</p>
                <div className="flex items-center justify-center gap-2 mt-2 text-gray-600">
                  <p>{item.day} days</p>
                  <div className="flex items-center gap-1">
                    <p>{item.rating}</p>
                    <FaStar className="text-yellow-500" />
                  </div>
                </div>
                <p className="font-semibold text-lg mt-2 text-green-600">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
