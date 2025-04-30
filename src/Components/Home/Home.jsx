import React from 'react'
import Search from './Search'
import BannerCard from './BannerCard'
import TrendingAdventures from './TrendingAdventures'

export default function Home() {
  return (
    <div>
        <Search/>
        <BannerCard/>
        <TrendingAdventures/>
    </div>
  )
}
