import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from "react-responsive"

const Courses = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    // Desktop View

    const DesktopView = () => {
        return (
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                        <h1 className="text-2xl sm:text-3xl font-bold font-serif mb-4 sm:mb-0">Courses</h1>
                        <a href="#" className="text-blue-600 hover:underline">Completed</a>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center">
                        <input
                            type="text"
                            placeholder="Search Courses..."
                            className="w-full sm:w-96 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                        <button className="mt-4 sm:mt-0 sm:ml-4 bg-blue-600 text-white w-10 h-10 rounded-full hover:bg-blue-700 transition duration-200 hover:translate-x-1 hover:translate-y-0.5 hover:shadow-xl hover:scale-105 flex items-center justify-center">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Recommended Courses</h2>
                        <Link to="#" className="text-blue-600 hover:underline">
                            View all
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </Link>
                    </div>
                    <div className="flex flex-wrap -mx-2">
                        {Array(6).fill(0).map((_, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-5">
                                <Link to="/courses/courseDis">
                                    <div className="bg-gray-200 h-48 rounded-lg mb-2"></div>
                                    <h2 className="text-lg font-bold">Course Title</h2>
                                    <p className="text-gray-600">Category · 8hr</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Most Popular Courses</h2>
                        <Link to="#" className="text-blue-600 hover:underline">
                            View all
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </Link>
                    </div>
                    <div className="flex flex-wrap -mx-2">
                        {Array(6).fill(0).map((_, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-5">
                                <Link to="/homepage/activites/activity">
                                    <div className="bg-gray-200 h-48 rounded-lg mb-2"></div>
                                    <h2 className="text-lg font-bold">Course Title</h2>
                                    <p className="text-gray-600">Category · 8hr</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Category of Course</h2>
                        <Link to="#" className="text-blue-600 hover:underline">
                            View all
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </Link>
                    </div>
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-5">
                            <Link to="">
                                <div className="bg-gray-200 h-48 rounded-lg mb-2"></div>
                                <h2 className="text-lg font-bold">Topic A</h2>
                            </Link>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-5">
                            <Link to="">
                                <div className="bg-gray-200 h-48 rounded-lg mb-2"></div>
                                <h2 className="text-lg font-bold">B</h2>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center bg-gray-200 p-4 rounded-lg">
                        <div className="flex-grow">
                            <h3 className="text-lg font-bold">Need help?</h3>
                            <p className="text-gray-600">Seek mentorship</p>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200">
                            Reach out
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // Mobile View

    const MobileView = () => {
        return (
            <div className=" bg-gray-100 min-h-screen pb-20">
                <div className="bg-white p-2 mt-3 rounded-lg shadow-md mb-12">
                    <div className="flex flex-row sm:flex-row justify-between items-center mb-4">
                        <h1 className="text-2xl sm:text-3xl font-bold font-serif mb-4 sm:mb-0">Courses</h1>
                        <Link href="#" className="text-blue-600 hover:underline text-sm">Completed <br /> Courses</Link>
                    </div>
                    <div className="flex justify-between">
                        <div className='flex gap-2'>
                            <input
                                type="text"
                                placeholder="Search Courses..."
                                className="w-40 h-10 mt-3 px-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            />
                            <button className="mt-4 mr-14 bg-blue-600 text-white w-10 h-10 rounded-full hover:bg-blue-700 transition duration-200 hover:translate-x-1 hover:translate-y-0.5 hover:shadow-xl hover:scale-105 flex items-center justify-center">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-md mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-medium font-bold">Recommended <br /> Courses</h2>
                        <Link to="#" className="text-blue-600 hover:underline text-xs">
                            View all
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
                        {Array(6).fill(0).map((_, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-4">
                                <Link to="/courses/courseDis">
                                    <div className="bg-gray-200 h-28 rounded-lg mb-2"></div>
                                    <h2 className="text-sm font-bold">Course Title</h2>
                                    <p className="text-gray-600 text-xs">Category · 8hr</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-md mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">Most Popular <br />Courses</h2>
                        <Link to="#" className="text-blue-600 hover:underline text-xs">
                            View all
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2">
                        {Array(6).fill(0).map((_, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-5">
                                <Link to="/homepage/activites/activity">
                                    <div className="bg-gray-200 h-28 rounded-lg mb-2"></div>
                                    <h2 className="text-sm font-bold">Course Title</h2>
                                    <p className="text-gray-600 text-xs">Category · 8hr</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-3 rounded-lg shadow-md mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">Category of <br /> Course</h2>
                        <Link to="#" className="text-blue-600 hover:underline text-xs">
                            View all
                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-5">
                            <Link to="">
                                <div className="bg-gray-200 h-32 rounded-lg mb-2"></div>
                                <h2 className="text-lg font-bold">Topic A</h2>
                            </Link>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-5">
                            <Link to="">
                                <div className="bg-gray-200 h-32 rounded-lg mb-2"></div>
                                <h2 className="text-lg font-bold">B</h2>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md">
                    <div className="flex justify-between p-4 rounded-lg">
                        <div className="flex-grow text-center">
                            <h3 className="text-sm font-bold">Need help?</h3>
                            <p className="text-gray-600 text-xs">
                                Seek mentorship from <br /> our 
                            </p>
                        </div>
                        <button className="bg-blue-600 text-white w-20 h-10 rounded-lg mt-1 text-sm hover:bg-blue-700 transition duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-xl">
                            Reach out
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {isMobile ? <MobileView /> : <DesktopView />}
        </div>
    );
};

export default Courses;
