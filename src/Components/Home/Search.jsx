import React, { useState, useRef, useEffect } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt, FaSearch, FaChevronDown } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// Sample state data
const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", 
  "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export default function Search() {
  const [startDate, setStartDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [destination, setDestination] = useState('');
  const [showDestinationInput, setShowDestinationInput] = useState(false);
  const [showStatesDropdown, setShowStatesDropdown] = useState(false);
  const [filteredStates, setFilteredStates] = useState(STATES);
  const datePickerRef = useRef(null);
  const destinationInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowDatePicker(false);
        setActiveField(null);
      }
      if (destinationInputRef.current && !destinationInputRef.current.contains(event.target)) {
        setShowDestinationInput(false);
        setShowStatesDropdown(false);
        setActiveField(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStateSearch = (e) => {
  const searchTerm = e.target.value.toLowerCase();
  setDestination(searchTerm);
  setFilteredStates(STATES.filter(state => state.toLowerCase().includes(searchTerm)));
};

  const selectState = (state) => {
    setDestination(state);
    setShowStatesDropdown(false);
  };

  const toggleStatesDropdown = () => {
    setShowStatesDropdown(!showStatesDropdown);
    setFilteredStates(STATES);
  };

  const searchFields = [
    {
      id: 'where',
      name: 'Where to?',
      icon: <CiLocationOn className="text-lg md:text-xl" />,
      mobileIcon: <CiLocationOn className="text-xl" />,
      mobileLabel: 'Where',
      onClick: () => {
        setShowDestinationInput(!showDestinationInput);
        setActiveField(activeField === 'where' ? null : 'where');
        setShowDatePicker(false);
        setShowStatesDropdown(!showDestinationInput);
      },
    },
    {
      id: 'when',
      name: 'When?',
      icon: <FaCalendarAlt className="text-lg md:text-xl" />,
      mobileIcon: <FaCalendarAlt className="text-xl" />,
      mobileLabel: 'When',
      onClick: () => {
        setShowDatePicker(!showDatePicker);
        setActiveField(activeField === 'when' ? null : 'when');
        setShowDestinationInput(false);
        setShowStatesDropdown(false);
      },
    },
    {
      id: 'guests',
      name: 'All adventures',
      icon: <IoMdPerson className="text-lg md:text-xl" />,
      mobileIcon: <IoMdPerson className="text-xl" />,
      mobileLabel: 'Guests',
      onClick: () => {
        setActiveField(activeField === 'guests' ? null : 'guests');
        setShowDestinationInput(false);
        setShowDatePicker(false);
        setShowStatesDropdown(false);
      },
    },
  ];

  const formatDate = (date) => {
    if (!date) return 'When?';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const handleSearch = () => {
    console.log({ destination, startDate });
    // Close all open panels
    setShowDestinationInput(false);
    setShowStatesDropdown(false);
    setShowDatePicker(false);
    setActiveField(null);
  };

  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 mt-6 md:mt-10 relative'>
      {/* Desktop View */}
      <div className='hidden md:flex items-center justify-between pr-2 shadow-lg rounded-full bg-white overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300'>
        {searchFields.map((field, index) => (
          <React.Fragment key={field.id}>
            <div
              className={`flex items-center gap-3 px-4 lg:px-5 py-3 lg:py-3.5 transition-all cursor-pointer flex-1 ${activeField === field.id ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
              onClick={field.onClick}
              aria-expanded={activeField === field.id}
              aria-controls={`${field.id}-panel`}
            >
              <div className="text-blue-500">{field.icon}</div>
              <div className="flex flex-col w-full">
                <span className='text-xs font-medium text-gray-500'>{field.mobileLabel}</span>
                {field.id === 'where' && showDestinationInput ? (
                  <div className="relative w-full" ref={destinationInputRef}>
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Search states..."
                        value={destination}
                        onChange={handleStateSearch}
                        className="w-full px-1 py-0.5 text-sm focus:outline-none bg-transparent"
                        autoFocus
                        onFocus={() => setShowStatesDropdown(true)}
                      />
                      <FaChevronDown 
                        className={`text-gray-400 text-xs transition-transform ${showStatesDropdown ? 'transform rotate-180' : ''}`}
                        onClick={toggleStatesDropdown}
                      />
                    </div>
                    {showStatesDropdown && (
                      <div className="absolute left-0 right-0 mt-1 max-h-60 overflow-auto bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                        {filteredStates.map((state) => (
                          <div
                            key={state}
                            className=" absolute px-4 py-2 hover:bg-blue-50 cursor-pointer"
                            onClick={() => selectState(state)}
                          >
                            {state}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <span className='text-sm font-medium whitespace-nowrap'>
                    {field.id === 'when' ? formatDate(startDate) : field.name}
                  </span>
                )}
              </div>
            </div>
            {index < searchFields.length - 1 && (
              <div className='h-6 border-l border-gray-200 mx-1 lg:mx-2'></div>
            )}
          </React.Fragment>
        ))}
        <button 
          className='bg-blue-600 text-white px-5 lg:px-8 py-3 rounded-full hover:bg-blue-700 transition-all flex items-center gap-2'
          onClick={handleSearch}
        >
          <FaSearch />
          <span>Search</span>
        </button>
      </div>

      {/* Mobile View */}
      <div className='md:hidden flex flex-col gap-3'>
        <div className='flex items-center shadow-lg rounded-full bg-white overflow-hidden border border-gray-200'>
          {searchFields.map((field) => (
            <div
              key={field.id}
              className={`flex flex-col items-center justify-center gap-1 p-3 transition-all cursor-pointer flex-1 ${activeField === field.id ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
              onClick={field.onClick}
              aria-expanded={activeField === field.id}
              aria-controls={`${field.id}-panel`}
            >
              <div className="text-blue-500">{field.mobileIcon}</div>
              <span className='text-xs font-medium'>
                {field.mobileLabel}
              </span>
            </div>
          ))}
        </div>
        
        {/* Mobile Input Panels */}
        {showDestinationInput && (
          <div 
            className="bg-white p-4 rounded-xl shadow-lg border border-gray-200"
            ref={destinationInputRef}
            id="where-panel"
          >
            <h3 className="font-medium mb-2">Where to?</h3>
            <div className="relative">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search states..."
                  value={destination}
                  onChange={handleStateSearch}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                  onFocus={() => setShowStatesDropdown(true)}
                />
                <FaChevronDown 
                  className={`text-gray-400 text-xs ml-2 transition-transform ${showStatesDropdown ? 'transform rotate-180' : ''}`}
                  onClick={toggleStatesDropdown}
                />
              </div>
              {showStatesDropdown && (
                <div className="absolute left-0 right-0 mt-1 max-h-60 overflow-auto bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                  {filteredStates.map((state) => (
                    <div
                      key={state}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                      onClick={() => selectState(state)}
                    >
                      {state}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        
        <button 
          className='bg-blue-600 text-white py-3.5 rounded-full hover:bg-blue-700 transition flex items-center justify-center gap-2'
          onClick={handleSearch}
        >
          <FaSearch />
          <span>Search</span>
        </button>
      </div>

      {/* DatePicker */}
      {showDatePicker && (
        <div 
          className="absolute top-full md:top-20 left-0 md:left-auto right-0 md:right-auto mt-2 z-10 w-full md:w-auto"
          ref={datePickerRef}
          id="when-panel"
        >
          <div className="mx-2 md:mx-0 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
            <h3 className="font-medium mb-3">Select date</h3>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setShowDatePicker(false);
                setActiveField(null);
              }}
              inline
              minDate={new Date()}
              calendarClassName="react-datepicker--custom"
              showPopperArrow={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}