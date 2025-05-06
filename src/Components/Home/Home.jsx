import React from 'react'
import Search from './Search'
import BannerCard from './BannerCard'
import TrendingAdventures from './TrendingAdventures'
import AdventureSimplified from './AdventureSimplified'

export default function Home() {
  return (
    <div>
        <Search/>
        <BannerCard/>
        <TrendingAdventures/>
        <AdventureSimplified/>
    </div>
  )
}
