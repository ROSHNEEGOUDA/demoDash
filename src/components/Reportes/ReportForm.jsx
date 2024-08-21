import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { useMediaQuery } from 'react-responsive';

const ReportForm = () => {
    const [rating, setRating] = useState(0);
    const isMobile = useMediaQuery({maxWidth : 480});

    return (
        <div className={`min-h-screen bg-gray-100 ${isMobile ? "p-1 pb-20" : "p-4"}`}>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-3">
                <h1 className="text-2xl font-semibold mb-6 text-center">File A Report</h1>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="reportTitle">Report Title</label>
                        <input
                            type="text"
                            id="reportTitle"
                            className="w-full p-2 border rounded-lg"
                            placeholder="Report Title"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="incidentType">Type of Incident</label>
                        <select
                            id="incidentType"
                            className="w-full p-2 border rounded-lg"
                        >
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="incidentDescription">Describe </label>
                        <textarea
                            id="incidentDescription"
                            className="w-full p-2 border rounded-lg"
                            placeholder="Describe the Incident"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="source">Mention </label>
                        <input
                            type="text"
                            id="source"
                            className="w-full p-2 border rounded-lg"
                            placeholder="Mention the Source"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="supportingLinks">Links</label>
                        <input
                            type="text"
                            id="supportingLinks"
                            className="w-full p-2 border rounded-lg"
                            placeholder="Supporting Links"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="keywords">Keywords/Filters</label>
                        <input
                            type="text"
                            id="keywords"
                            className="w-full p-2 border rounded-lg"
                            placeholder="Keywords/Filters"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="uploads">Upload Photos (if any)</label>
                        <input
                            type="file"
                            id="uploads"
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2 text-center">COOL</label>
                        <div className="flex justify-center">
                            {[...Array(10)].map((_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={index < rating ? solidStar : regularStar}
                                    className="text-yellow-500 cursor-pointer mx-1"
                                    onClick={() => setRating(index + 1)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button className="bg-blue-800 text-white px-4 py-2 rounded-lg w-full md:w-64 transition duration-200 hover:translate-x-1 hover:shadow-xl hover:-translate-y-1">
                            Report
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReportForm;
