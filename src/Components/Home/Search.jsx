import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Search() {
  const [startDate, setStartDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const data = [
    {
      name: 'Where to?', icon: <CiLocationOn className="text-lg md:text-xl" />,
      mobileIcon: <CiLocationOn className="text-xl" />, mobileLabel: 'Where'
    },
    {
      name: 'When?', icon: <FaCalendarAlt className="text-lg md:text-xl" />,
      mobileIcon: <FaCalendarAlt className="text-xl" />, mobileLabel: 'When',
      onClick: () => { setShowDatePicker(!showDatePicker); setActiveField(activeField === 'when' ? null : 'when'); }
    },
    {
      name: 'All adventures', icon: <IoMdPerson className="text-lg md:text-xl" />,
      mobileIcon: <IoMdPerson className="text-xl" />, mobileLabel: 'Guests'
    },
  ];

  return (
    <div className='px-4 sm:px-6 md:px-10 lg:px-32 mt-6 md:mt-10 relative'>

      <div className='hidden md:flex items-center justify-between pr-2 shadow-lg rounded-full bg-white overflow-hidden'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex items-center gap-2 px-4 lg:px-6 py-3 lg:py-4 hover:bg-gray-100 transition-all cursor-pointer flex-1'
            onClick={item.onClick}
          >
            {item.icon}
            <span className='text-sm font-medium whitespace-nowrap'>
              {item.name === 'When?' && startDate ?
                startDate.toLocaleDateString() :
                item.name
              }
            </span>
            {index < data.length - 1 && <div className='h-6 border-l border-gray-300 mx-2 lg:mx-4'></div>}
          </div>
        ))}
        <button className='bg-blue-500 text-white px-6 lg:px-10 py-2 lg:py-3 rounded-full hover:bg-blue-600 transition whitespace-nowrap'>
          Search
        </button>
      </div>

      <div className='md:hidden flex flex-col gap-2'>
        <div className='flex items-center shadow-lg rounded-full bg-white overflow-hidden'>
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-1 p-3 hover:bg-gray-100 transition-all cursor-pointer flex-1 ${activeField === item.mobileLabel.toLowerCase() ? 'bg-gray-100' : ''}`}
              onClick={item.onClick}
            >
              {item.mobileIcon}
              <span className='text-xs font-medium'>
                {item.mobileLabel}
              </span>
            </div>
          ))}
        </div>
        <button className='bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition w-full'>
          Search
        </button>
      </div>

      {showDatePicker && (
        <div className="absolute top-full md:top-20 left-0 md:left-1/3 w-full md:w-auto mt-2 z-10">
          <div className="mx-4 md:mx-0">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setShowDatePicker(false);
                setActiveField(null);
              }}
              inline
              minDate={new Date()}
              calendarClassName="shadow-lg rounded-lg w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}