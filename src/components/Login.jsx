import React from 'react';
//import logo from '../assets/Logo.png'; // Adjust the path as needed
import { Link } from 'react-router-dom';
import {useMediaQuery} from "react-responsive"

const Login = () => {
    const isMobile = useMediaQuery({maxWidth : 480})
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
            <div className="flex flex-col items-center mb-8">
                {/* <img src={logo} alt="logo of mc" className="h-20 w-auto" /> */}
            </div>
            <div className={`bg-white rounded-lg shadow-xl ${isMobile ? "p-5 w-5/6 mb-16" : "p-10 w-96 mb-16"}`}>
                <h2 className={` font-bold mb-6 text-center text-gray-800 ${isMobile ? "text-xl" : "text-3xl"}`}>Welcome Back!</h2>
                <form>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email ID or Mobile Number
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            placeholder="Enter your email or mobile number"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                        <div className="flex justify-between">
                            <a href="#" className="inline-block align-baseline text-sm text-blue-600 hover:text-blue-800">
                                Forgot Password?
                            </a>
                            <Link to="/register" className="inline-block align-baseline text-sm text-blue-600 hover:text-blue-800">
                                Register
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link to="/homepage">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                            >
                                Log In
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
