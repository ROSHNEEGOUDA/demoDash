import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Activity = () => {
    const [showForm, setShowForm] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return (
        <div className="max-w-5xl mx-auto p-4 pb-20 md:pb-4">
            <button onClick={() => window.history.back()} className="text-blue-500">
                ← Back
            </button>
            <h1 className={`font-bold mt-4 ${isMobile ? "text-2xl" : "text-3xl"}`}>Activity Title</h1>
            <div className={`text-gray-500 ${isMobile ? "text-sm" : ""}`}>Category • Points</div>
            <div className="mt-6 bg-gray-200 h-48 flex items-center justify-center">
                <span>Image</span>
            </div>
            <div className="mt-6 flex items-center flex-col sm:flex-row">
                <div className="flex -space-x-4">
                    {/* Replace the img src with actual user images */}
                    <img
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://via.placeholder.com/32"
                        alt="User 1"
                    />
                    <img
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://via.placeholder.com/32"
                        alt="User 2"
                    />
                   
                    <img
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src="https://via.placeholder.com/32"
                        alt="User 4"
                    />
                </div>
                <span className={`ml-2 text-gray-500 mt-2 sm:mt-0 ${isMobile ? "text-sm" : ""}`}>
                    100+ volunteers have completed 
                </span>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-bold">Description of the activity</h2>
                <p className={`mt-2 text-gray-700 ${isMobile ? "text-xs" : ""}`}>
                    m a cute silly girl.
                </p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-bold">Timeline</h2>
                <p className={`mt-2 text-gray-700 ${isMobile ? "text-xs" : ""}`}>x days</p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-bold">Guidelines </h2>
                <p className={`mt-2 text-gray-700 ${isMobile ? "text-xs" : ""}`}>
                    play the art
                </p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-bold">Tasks </h2>
                <ul className={`list-disc list-inside mt-2 text-gray-700 ${isMobile ? "text-xs" : ""}`}>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>
                        i love to travel
                    </li>
                </ul>
            </div>
            {!showForm && (
                <div className="mt-6 flex justify-center">
                    <button
                        className="bg-blue-800 text-white py-2 px-4 rounded-full shadow-xl transform hover:scale-105 active:scale-105 active:shadow-xl transition duration-200"
                        onClick={() => setShowForm(true)}
                    >
                        Start Activity
                    </button>
                </div>
            )}
            {showForm && (
                <div className="mt-6 p-4 border rounded-lg bg-gray-100">
                    <h2 className="text-xl font-bold mb-4">Activity Form</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Topic</label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Date</label>
                            <input
                                type="date"
                                className="mt-1 p-2 w-full border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">City</label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Activity for</label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                Name of the organization
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-2 w-full border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                Expected no. of people
                            </label>
                            <input
                                type="number"
                                className="mt-1 p-2 w-full border rounded-lg"
                            />
                        </div>
                        <Link to="/homepage/activites/activity/documentupload">
                            <div className="mt-6 flex justify-center">
                                <button className="bg-blue-800 text-white py-2 px-4 rounded-full shadow-xl transform hover:scale-105 active:scale-105 active:shadow-xl transition duration-200">
                                    Start Activity
                                </button>
                            </div>
                        </Link>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Activity;
