import React from 'react';
import AdventureStylesDropDownMenu from './AdventureStylesDropDownMenu';
import DestinationsDropDownMenu from './DestinationsDropDownMenu';
import MegaSalesDropDownMenu from './MegaSalesDropDownMenu';
import ProfileDropDownMenu from './ProfileDropDownMenu';

import { GrLanguage } from "react-icons/gr";
import { IoIosHeartEmpty } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center w-full py-6 px-10 shadow-md bg-white'>
      {/* Logo */}
      <h1 className='logoFont text-4xl text-[#3ccaca] font-bold tracking-wide cursor-pointer'>
        TravelRoot
      </h1>

      {/* Navigation Links */}
      <div className='flex items-center gap-8'>
        <ul className='flex gap-6 text-lg font-medium text-gray-700'>
          <li className='hover:text-[#3ccaca] transition-colors duration-200 cursor-pointer'>
            <DestinationsDropDownMenu />
          </li>
          <li className='hover:text-[#3ccaca] transition-colors duration-200 cursor-pointer'>
            <AdventureStylesDropDownMenu />
          </li>
          <li className='hover:text-[#3ccaca] transition-colors duration-200 cursor-pointer'>
            <MegaSalesDropDownMenu />
          </li>
          <li className='hover:text-[#3ccaca] transition-colors duration-200 cursor-pointer'>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Icons & Profile */}
        <div className='flex items-center gap-4 text-xl ml-6'>

          {/* Language Selector */}
          <div
            className='flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-200'
            title='Select Language'
          >
            <GrLanguage />
            <span className='text-sm'>EN</span>
          </div>

          {/* Wishlist Icon */}
          <div
            className='hover:text-[#3ccaca] cursor-pointer transition-colors duration-200'
            title='Wishlist'
          >
            <IoIosHeartEmpty />
          </div>

          {/* Profile Dropdown */}
          <ProfileDropDownMenu />
        </div>
      </div>
    </nav>
  );
}
