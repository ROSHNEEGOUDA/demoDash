// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
//import Logo from "./assets/Logo.svg";
import { useMediaQuery } from 'react-responsive';
import Profile from "./assets/Profile.webp"

const Navbar = () => {
  const isMobile = useMediaQuery({maxWidth : 480})
  return (
    <nav className="bg-blue-400 shadow-md py-4 px-6 flex justify-between items-center flex-wrap">
      <div className="flex items-center">
        {/* <img src={Logo} alt="katalyst ngo" className={`h-12 ${isMobile ? "w-32" : "w-40"}`} /> */}
      </div>
      <div className="flex items-center mt-4 sm:mt-0">
        <div className="relative">
          <FontAwesomeIcon icon={faBell} className="w-6 h-6 text-gray-700 md:w-9 md:h-9" />
          <span className="absolute top-0 right-0 -mt-1 -mr-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">05</span>
        </div>
        <Link to="/profile">
          <img src={Profile} alt="" className='ml-4 sm:ml-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-900' />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
