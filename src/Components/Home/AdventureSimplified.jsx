import React from 'react';

export default function AdventureSimplified() {
    
    const textStyles = 'max-w-[480px] mt-5';
    const buttonStyles = 'mt-5 bg-blue-200 px-3 py-2 mb-5 rounded-3xl hover:bg-blue-300 font-semibold';

    return (
        <div className="flex md:flex-row flex-col md:px-20 px-5 mt-10">
           
            <div className="md:w-1/2 w-full">
                <h1 className="text-3xl font-bold">Adventure Simplified</h1>
                <p className={textStyles}>
                    TourRadar makes exploring and booking organized adventures effortless. Whether through
                    our mobile app or website, we streamline your booking experience, so you can focus on
                    what truly matters: your next great adventure.
                </p>

                <h2 className="font-bold text-xl mt-5">Adventure at Your Fingertips</h2>
                <p className={textStyles}>
                    The TourRadar mobile app puts adventure in your pocket. Explore thousands of trips,
                    receive real-time updates, and manage bookings effortlessly. Your next adventure is
                    just a tap away.
                </p>

                <p className={textStyles}>Download the TourRadar app and enjoy app-exclusive perks:</p>
                <ul className={`${textStyles} list-disc pl-5`}>
                    <li>🌍 Book 50,000+ multi-day tours, safaris, river cruises, and more</li>
                    <li>🎁 Win up to $3,000 every month in app-only giveaways</li>
                    <li>🔥 Save up to 50% with app-exclusive deals</li>
                </ul>

                <button className={buttonStyles}>Download app</button>
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 w-full">
                <img
                    className="rounded-2xl"
                    src="https://cdn.tourradar.com/s3/content-pages/391/1112x/pbRONE.png"
                    alt="TourRadar promotional visual"
                />
            </div>
        </div>
    );
}
