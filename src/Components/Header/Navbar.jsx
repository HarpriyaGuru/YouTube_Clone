import React, { useState } from 'react';
import { FaBars, FaMicrophone, FaSearch, FaUser } from 'react-icons/fa'; // Importing the icons
import { BsThreeDotsVertical } from "react-icons/bs";


import Hamburger from './Hamburger';
import Sidebar from './Sidebar';

const Navbar = () => {
  // State for hamburger menu 
  const [clicked, setClicked] = useState(false);
  const handelHamburger = () => {
    setClicked(!clicked); 
  };

  return (
    <div className="relative">
      {clicked ? (
        <div className="fixed top-12 left-0 z-10 w-24 h-full bg-gray-800 text-white">
          <Hamburger />
        </div>
      ) : (
        <div className=" fixed top-12 left-0 z-10 w-64 h-full bg-gray-800 text-white ">
          <Sidebar />
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white px-4 py-2 flex items-center justify-between z-20">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 text-xl" onClick={handelHamburger}>
            <FaBars />
          </button>
          <div className="flex items-center">
            <img
              className="h-6"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="YouTube Logo"
            />
            <span className="text-xs text-gray-500 p-1">IN</span>
          </div>
        </div>

        {/* Center section (Search bar) */}
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-96">
          <input
            type="text"
            placeholder="Search"
            className=" px-4 py-2 w-full outline-none"
          />
          <button className="px-4 py-2 bg-gray-100 border-l border-gray-300">
            <FaSearch className="w-10 h-5 text-gray-600" />
          </button>
        </div>
        <button className="p-2 bg-gray-100 rounded-full ml-2">
          <FaMicrophone className="w-5 h-5 text-gray-600" />
        </button>

        {/* Right section */}
        <div className="flex items-center gap-4">
        <BsThreeDotsVertical />

          <button className="border border-gray-300 px-4 py-2 rounded-full text-sm flex items-center gap-2 text-blue-700">
            <FaUser /> Sign in
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
