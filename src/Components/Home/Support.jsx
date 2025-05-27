import React from 'react'

export default function Support() {
  return (
    <div className='px-10 pb-5'>
            <h1 className='text-4xl font-bold  text-gray-800'>24/7 Customer Support</h1>
            
            <div className='flex md:flex-row flex-col items-center justify-between'>
                <div className='w-3/4 max-w-[60%]'>
                    Our team of experienced adventure specialists have travelled to hundreds of countries
                     around the globe and have decades of first-hand travel experience to share. Contact us 
                     now to have all of your adventure-related questions answered!
                </div>
                <div className='w-1/4'>
                    <img className='rounded-full' src="https://cdn.tourradar.com/s3/team/original/116_X7vUqJpc.jpg" alt="" />
                </div>
            </div>

            <div><button className='bg-blue-300 hover:bg-blue-400 px-3 py-2 rounded-full text-blue-950 font-bold'>Contact Us</button></div>
        </div>
  )
}
