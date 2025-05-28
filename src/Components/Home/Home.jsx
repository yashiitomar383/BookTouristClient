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

export default function Home() {
  return (
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
    </div>
  )
}
