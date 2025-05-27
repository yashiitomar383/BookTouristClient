import React from 'react'

export default function Besttour() {
  const data = [
    { name: 'Families', Image: 'https://cdn.tourradar.com/s3/content-pages/518/840x612/lea5ds.png' },
    { name: 'Couples', Image: 'https://media.istockphoto.com/id/816978028/vector/silhouettes-of-a-couple-in-love.jpg?s=1024x1024&w=is&k=20&c=4VZaBTM3bb0NDVsY7LtL1MFEIPvYyRZB08QCPXOvo90=' },
    { name: 'Seniors', Image: 'https://cdn.tourradar.com/s3/content-pages/391/1040x812/ZBGiRY.jpg' },
    { name: 'Young Adult', Image: 'https://cdn.tourradar.com/s3/content-pages/391/1040x812/Hnc8Zp.jpg' },
  ]
  return (
    <div className='px-10 pb-10'>
      <h1 className='text-4xl font-bold mb-6 text-gray-800"'>The Best Tours and Adventures For Everyone</h1>
      <div className='flex flex-wrap justify-between items-center'>
        {
          data.map(({ name, Image }, index) => (
            <div key={index}>
              <img className='h-[200px] w-[270px] rounded-md' src={Image} />
              <h1 className='text-xl font-bold'>{name}</h1>
            </div>
          ))
        }
      </div>

    </div>
  )
}
