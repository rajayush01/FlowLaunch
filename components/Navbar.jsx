import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-white bg-opacity-15 mx-4 md:mx-8 lg:mx-20 rounded-3xl mt-3 mb-3 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-16 max-w-6xl mx-auto px-4 py-3">
        <div className="text-white font-bold text-xl mb-2 md:mb-0 hidden md:block">
          Logo
        </div>
        <div className="flex-grow flex items-center justify-center mb-2 md:mb-0 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-lg px-3 py-2 w-full md:w-[300px] lg:w-[500px] text-black"
            onChange={handleSearch}
          />
        </div>
        <div className="flex items-center hidden md:block">
          <a href="/cart" className="text-white hover:text-gray-500 transition-colors duration-300 relative">
            <FaShoppingCart className='text-2xl mr-4 ' />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 mt-[-8px] text-xs">3</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
