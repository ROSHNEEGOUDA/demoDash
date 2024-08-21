// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
//import Logo from "../../assets/Logo.svg";
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    return (
        <nav className="bg-blue-400 shadow-md py-4 px-6 flex justify-between items-center flex-wrap">
            <div className="flex items-center">
                {/* <img src={Logo} alt="katalyst" className={`h-12 ${isMobile ? "w-32" : "w-40"}`} /> */}
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
                <div className={`relative flex items-center ${isMobile ? " space-x-4" : "space-x-20"}`}>
                    <Link>
                        <p className={` ${isMobile ? "text-sm" : "text-lg"}`}>
                            Resource
                        </p>
                    </Link>
                    <Link to="/loginPage">
                        <div className={` ${isMobile ? "text-sm" : "text-lg"}`}>Login</div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
