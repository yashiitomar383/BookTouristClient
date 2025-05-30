import React from 'react'
import Search from './Search'
import BannerCard from './BannerCard'
import TrendingAdventures from './TrendingAdventures'
import AdventureSimplified from './AdventureSimplified'
import Reviews from './Reviews'
import Spotlight from './Spotlight.jsx'
import Destinations from './Destinations.jsx'
import Besttour from './Besttour.jsx'
import World from './World.jsx'
import Support from './Support.jsx'
import Recommended from './Recommended.jsx'
import { TiMessages } from "react-icons/ti";
import  Dayz from './Dayz.jsx'

export default function Home() {
  return (
    <div>
      <div>
        <Search/>
        <BannerCard/>
        <TrendingAdventures/>
        <AdventureSimplified/>
        <Reviews/>
        <Spotlight/>
        <Destinations/>
        <Besttour/>
        <World />
        <Support />
        <Recommended />
        <Dayz/>
      </div>

      {/* Improved Message Icon */}
      <div className="fixed bottom-6 right-6 group">
        <div className="relative">
          <TiMessages className="bg-indigo-600 text-white text-5xl p-2 rounded-full shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:bg-indigo-700" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
            3
          </span>
        </div>
        <div className="absolute right-16 bottom-0 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Need help? Message us!
        </div>
      </div>
    </div>
  )
}