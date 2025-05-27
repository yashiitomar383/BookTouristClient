import React from 'react';
import { TiWeatherShower } from "react-icons/ti";
import { GiCargoShip, GiLion } from "react-icons/gi";
import { LuTelescope } from "react-icons/lu";
import { FiFlag } from "react-icons/fi";

const categories = [
    {
        title: "Hiking & Trekking",
        icon: <TiWeatherShower className='text-xl' />,
        data: [
            { name: 'Nepal', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/hQ2YMG.jpg' },
            { name: 'Everest Base Camp', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/WSLACV.jpg' },
            { name: 'Machu Pichhu', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/6DDRFS.jpg' },
            { name: 'Kilimanjaro', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/Dm1DNS.jpg' },
        ]
    },
    {
        title: "River Cruises",
        icon: <GiCargoShip className='text-xl' />,
        data: [
            { name: 'Nile', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/QJgm2K.jpg' },
            { name: 'Danube', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/5BLMof.jpg' },
            { name: 'Rhein', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/QgOsFm.jpg' },
            { name: 'Main', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/kEv7Rr.jpg' },
        ]
    },
    {
        title: "Safari",
        icon: <GiLion className='text-xl' />,
        data: [
            { name: 'Africa', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/lywgUe.jpg' },
            { name: 'Tanzania', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/QP8ro7.jpg' },
            { name: 'Kenya', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/vwDLsB.jpg' },
            { name: 'South Africa', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/Ps1L11.jpg' },
        ]
    },
    {
        title: "Explore Europe",
        icon: <LuTelescope className='text-xl' />,
        data: [
            { name: 'Train & Rail', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/aFN7Ok.jpg' },
            { name: 'River Cruise', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/OzA5Os.jpg' },
            { name: 'Bicycle', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/d27mqF.jpg' },
            { name: 'Budget', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/ROjjdh.jpg' },
        ]
    },
    {
        title: "Popular Adventure Style",
        icon: <FiFlag className='text-xl' />,
        data: [
            { name: 'Sailing', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/4QvD3E.jpg' },
            { name: 'Festival & Events', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/4ZUI1L.jpg' },
            { name: 'Food & Culinary', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/NTekob.jpg' },
            { name: 'Cultural', img: 'https://cdn.tourradar.com/s3/content-pages/391/120x120/oEh1US.jpg' },
        ]
    }
];

export default function World() {
    return (
        <div className='px-10 pb-10'>
            <h1 className='text-4xl font-bold mb-6 text-gray-800'>Travel The World Your Way</h1>
            {categories.map((category, index) => (
                <div key={index} className='mb-8'>
                    <div className='flex items-center gap-2'>
                        {category.icon}
                        <h1 className='font-semibold'>{category.title}</h1>
                    </div>
                    <div className='flex justify-between md:flex-row flex-col md:gap-0 gap-5 space-x-5 mt-5'>
                        {category.data.map((item, idx) => (
                            <div
                                key={idx}
                                className='flex items-center gap-5 bg-white shadow-md w-full sm:w-1/2 lg:w-1/4 hover:shadow-xl rounded-md'>
                                <img className='h-15 w-15 rounded-md' src={item.img} alt={item.name} />
                                <h1>{item.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}