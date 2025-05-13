import React from 'react';

export default function Spotlight() {
  const Data = [
    {
      name: 'TourRadar Spotlight',
      img: 'https://cdn.tourradar.com/s3/content-pages/391/848x404/ArXK9V.png',
      des: 'Find out what happening at TourRadar—from the latest travel news to our special offers.',
      btn: 'View Deals',
    },
    {
      name: 'Guide of the Year 2024',
      img: 'https://cdn.tourradar.com/s3/content-pages/391/848x404/6BdXyR.png',
      des: 'Hey guides, keep collecting those 5-star reviews, because the clock is ticking!',
      btn: 'Discover more',
    },
    {
      name: 'Empowering Solo Travelers',
      img: 'https://cdn.tourradar.com/s3/content-pages/391/848x404/BtyJnK.jpg',
      des: 'Organized adventures are inherently social, bringing explorers together to share safe, enriching, and unforgettable journeys. With curated itineraries and opportunities to connect with travelers, the operators we partner with make solo tours memorable.',
      btn: 'Find Your Solo Trip',
    },
  ];

  return (
    <div>
      {/* Section One */}
      <section className="px-6 md:px-20 py-10">
        <h1 className="text-4xl font-bold text-center mb-6">TourRadar Spotlight</h1>
        <p className="text-center text-gray-600 mb-10">
          Find out what’s happening at TourRadar—from the latest travel news to our special offers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Data.map(({ img, name, des, btn }, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow bg-white overflow-hidden flex flex-col"
            >
              <img
                className="w-full h-48 object-cover"
                src={img}
                alt={name}
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-700 text-sm mb-4">{des}</p>
                <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  {btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Two */}
   <div className='pb-10'>
    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M41.7429 3.8168C36.1243 1.23729 30.0881 0.437064 24 0.499434C17.912 0.437064 11.8758 1.23728 6.25716 3.81678L6.25212 3.81914C5.58616 4.13007 5.0178 4.64913 4.61748 5.31199C4.21716 5.97484 4.00249 6.75233 4.00007 7.54811L4.90915 7.55146H4.00006L4 22.8247L4.00012 22.8363C4.05572 28.088 5.57727 33.194 8.35875 37.4629C11.1389 41.7297 15.0435 44.3054 19.5441 46.0513L21.5776 46.8773C23.1415 47.509 24.8601 47.5084 26.4241 46.8767L28.4559 46.0513C32.9566 44.3054 36.8612 41.7297 39.6413 37.4629C42.4228 33.194 43.9444 28.088 44 22.8363L44 7.55146L44 7.54811C43.9976 6.75233 43.7829 5.97484 43.3826 5.31199C42.9823 4.64914 42.4139 4.13007 41.7479 3.81912L41.7429 3.8168ZM5.81824 22.8188V7.5533C5.81974 7.14948 5.9288 6.75498 6.13195 6.41859C6.3349 6.08256 6.62284 5.81925 6.96023 5.66114C12.3535 3.18557 18.1476 2.43841 23.9914 2.49951L24.0087 2.49933C29.8524 2.43823 35.6466 3.18557 41.0399 5.66116C41.3772 5.81927 41.6652 6.08257 41.8681 6.41859C42.0713 6.75511 42.1804 7.15083 42.1818 7.5548L42.1818 22.8189C42.1295 27.6586 40.7268 32.3638 38.1635 36.2979C35.5991 40.2336 31.9971 42.5584 27.8452 44.1675L25.7951 45.0002C24.6362 45.4682 23.3632 45.468 22.2043 45L20.1677 44.1726L20.1549 44.1676C16.003 42.5585 12.4009 40.2336 9.83658 36.2979C7.27324 32.3638 5.87054 27.6585 5.81824 22.8188ZM23 12.1818C21.0581 12.1818 19.1599 12.7576 17.5453 13.8365C15.9307 14.9153 14.6723 16.4487 13.9292 18.2427C13.1861 20.0368 12.9916 22.0109 13.3705 23.9154C13.7493 25.82 14.6844 27.5694 16.0575 28.9425C17.4306 30.3156 19.18 31.2507 21.0846 31.6295C22.9891 32.0084 24.9632 31.8139 26.7573 31.0708C28.5513 30.3277 30.0847 29.0693 31.1635 27.4547C32.2424 25.8401 32.8182 23.9418 32.8182 22C32.8182 21.3975 33.3066 20.9091 33.9091 20.9091C34.5116 20.9091 35 21.3975 35 22C35 24.3734 34.2962 26.6934 32.9776 28.6668C31.6591 30.6402 29.7849 32.1783 27.5922 33.0865C25.3995 33.9948 22.9867 34.2324 20.6589 33.7694C18.3311 33.3064 16.193 32.1635 14.5147 30.4853C12.8365 28.807 11.6936 26.6688 11.2306 24.3411C10.7676 22.0133 11.0052 19.6005 11.9135 17.4078C12.8217 15.2151 14.3598 13.3409 16.3332 12.0224C18.3066 10.7038 20.6266 10 23 10C23.6025 10 24.0909 10.4884 24.0909 11.0909C24.0909 11.6934 23.6025 12.1818 23 12.1818ZM34.6177 11.2551C35.0685 11.6442 35.1294 12.3382 34.7537 12.8051L24.7748 25.208C24.4261 25.6414 23.9301 25.9196 23.3891 25.9851C22.8482 26.0506 22.3036 25.8985 21.8678 25.5602L21.8675 25.56L18.4251 22.8857C17.9556 22.521 17.8605 21.8312 18.2126 21.345C18.5646 20.8587 19.2306 20.7602 19.7001 21.1249L23.1423 23.7989L23.1423 23.7989L33.1213 11.396C33.4969 10.9291 34.1669 10.866 34.6177 11.2551Z" />
              </svg>
   </div>

    </div>
  );
}
