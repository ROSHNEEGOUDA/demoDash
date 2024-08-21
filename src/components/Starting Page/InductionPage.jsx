import React from 'react';
import Navbar from './navbar01';

const InductionPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pb-4 md:pb-20">
                <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-center text-black">Welcome to our Family!</h1>
                    <div className="mt-10">
                        <div className="flex justify-center">
                            <div className="w-full max-w-lg text-center bg-slate-300 p-6 rounded-lg">
                                <h2 className="text-xl font-semibold mb-4 text-black">Here's how you can be a volunteer:</h2>
                                <ul className="text-left text-gray-700 space-y-2 mb-6">
                                    <li>• What is expected from a volunteer?</li>
                                    <li>• What can I gain?</li>
                                    <li>• What can I give?</li>
                                </ul>
                                <p className="text-gray-500">Video/graphic</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around mt-10 mb-10">
                        <div className="text-center">
                            <p className="text-5xl font-bold text-black">katalyst</p>
                            <p className="text-gray-600">Impact stats</p>
                        </div>
                        <div className="text-center">
                            <p className="text-5xl font-bold text-black">3x</p>
                            <p className="text-gray-600">NGO</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start mb-10">
                        <div className="lg:w-2/3 lg:pr-6 mb-6 lg:mb-0">
                            <h2 className="text-2xl font-semibold text-black">About the Induction Program</h2>
                            <p className="mt-4 text-gray-700">Lorneci.</p>
                            <div className="text-center mt-6">
                                <button className="bg-blue-500 hover:bg-green-600 text-white text-medium py-3 px-4 rounded-2xl shadow-xl transition duration-200">Start Induction</button>
                            </div>
                            <div className="text-center mt-6">
                                <p className="text-gray-700">Done with the session offline?</p>
                                <div className="mt-4">
                                    <input
                                        type="text"
                                        placeholder="Enter code"
                                        className="border border-gray-300 py-3 px-4 rounded-lg w-full lg:w-3/4 text-center"
                                    />
                                    <p className="mt-2 text-sm text-gray-500">Enter code - option for users who have finished the induction </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 flex justify-center lg:justify-start">
                            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
                                <p className="text-gray-500"></p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-300 p-6 rounded-lg">
                        <blockquote className="italic text-gray-700">
                            <p className="font-semibold text-blue-600">Volunteer</p>
                            <p className="mt-4">Loremorbi.</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InductionPage;
