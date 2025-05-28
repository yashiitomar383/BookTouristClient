import React from 'react';

export default function Recommended() {
    const data = [
        { name: 'Europe', no: '11,862 tours', img: 'https://cdn.tourradar.com/s3/serp/1436x180/230_8iHJe7dn.jpg' },
        { name: 'Nepal', no: '2,805 tours', img: 'https://cdn.tourradar.com/s3/serp/1436x180/3505_tfSF79JY.jpg' },
        { name: 'Austria', no: '259 tours', img: 'https://cdn.tourradar.com/s3/serp/1436x180/735_U33n5NCA.jpg' },
        { name: 'Italy', no: '1,254 tours', img: 'https://cdn.tourradar.com/s3/serp/1436x180/2583_bijswBKK.jpg' },
        { name: 'Asia', no: '15,208 tours', img: 'https://cdn.tourradar.com/s3/serp/1436x180/75_RCUhrKb3.jpg' },
        { name: 'Spain', no: '619 tours', img: 'https://cdn.tourradar.com/s3/serp/1436x180/4309_ffELtUY5.jpg' },
        { name: 'Boppard', no: '19 tours', img: 'https://cdn.tourradar.com/s3/serp/1436x180/9594_LRGxg5XR.jpg' },
        { name: 'Paris', no: '109 tours', img: 'https://cdn.tourradar.com/s3/serp/1436x180/6263_TYfcq2l8.jpg' },
        { name: 'Amster', no: '64 tours', img: 'https://cdn.tourradar.com/s3/serp/1436x180/6515_Jlkgpq4Q.jpg' },
        { name: 'Amalfi Coast Tours', no: '174 tours', img: 'https://cdn.tourradar.com/s3/serp/1436x180/209263_YiFcnDN2.jpg' },
        { name: 'South Italy Tours', no: '610 tours', img: 'https://cdn.tourradar.com/s3/serp/1436x180/209328_QgZR4Ev9.jpg' },
        { name: 'Egypt', no: '1,665 tours', img: 'https://cdn.tourradar.com/s3/serp/1436x180/1766_ARgendEA.jpg' },
    ];

    return (
        <div className="mt-10 mb-5">
            <h1 className="md:text-4xl text-xl md:w-full w-[] font-bold mb-6 text-gray-800">
                Destinations Recommended By Our Travel Experts
            </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:px-10 px-5">
                {data.map(({ name, no, img }, index) => (
                    <div
                        key={index}
                        className="relative md:w-40 md:h-40 h-[200px] rounded-lg shadow-md overflow-hidden"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="relative p-4">
                            <h2 className="text-lg font-bold text-balck">{name}</h2>
                            <p className="text-sm text-black">{no}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
