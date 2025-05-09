import React from 'react'
import LOGO1 from '../../assets/1.png'
import LOGO2 from '../../assets/2.png'

export default function Reviews() {
  return (
    <div className='flex md:flex-row flex-col md:px-20 px-5 mt-10 mb-5'>
      {/* left div */}
      <div className='flex items-center md:w-1/2 w-full px-5'>

        <div className='flex flex-col '>
          <h1 className='text-2xl font-bold md:text-start text-center'>Real traveler Reviews</h1>
          <p className='mt-5 max-w-[480px]'>Make every booking with peace of mind, thanks to genuine reviews from fellow travelers.
            Explore firsthand accounts of trips, operators, and destinations to ensure your next adventure is exactly what you’re looking for.
            Real experiences, real feedback, real inspiration.</p>
        </div>

        <img className='h-30 w-30' src={LOGO1} alt="" />

      </div>


      <div className='flex items-center md:w-1/2 w-full px-5'>

        <div className='flex flex-col '>
          <h1 className='text-2xl font-bold md:text-start text-center'>Trust and Confidence</h1>
          <p className='mt-5 max-w-[480px]'>Shop and book thousands of operators in one place with direct messaging,
            secure and flexible payment options, booking protection, 24/7 customer support,
            and additional perks. We’ve got your back</p>
        </div>
        <img className='h-40 w-40' src={LOGO2} alt="" />

      </div>
    </div>
  )
}
