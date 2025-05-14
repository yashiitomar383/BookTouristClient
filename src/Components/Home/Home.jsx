import React from 'react'
import Search from './Search'
import BannerCard from './BannerCard'
import TrendingAdventures from './TrendingAdventures'
import AdventureSimplified from './AdventureSimplified'
import Reviews from './Reviews'
import Spotlight from './Spotlight.jsx'
import Destinations from './Destinations.jsx'

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
    </div>
  )
}
