import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const CourseContent = () => {
    const [selectedChapters, setSelectedChapters] = useState([]);
    const [isStartCourse, setIsStartCourse] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 480 });

    const navigate = useNavigate();

    const handleCollectCertificate = () => {
        localStorage.setItem('collectCertificate', 'true');
        navigate('/certificate');
    };

    const handleChapterSelect = (index) => {
        const isSelected = selectedChapters.includes(index);
        let updatedChapters = [];

        if (isSelected) {
            // Deselect the chapter if already selected
            updatedChapters = selectedChapters.filter((item) => item !== index);
        } else {
            // If the chapter is not selected, deselect all other chapters and select this one
            updatedChapters = [index];
        }

        setSelectedChapters(updatedChapters);
        setIsStartCourse(updatedChapters.length > 0);
    };

    const handleStart = () => {
        if (selectedChapters.length > 0) {
            setIsStartCourse(true);
            // Start course logic here
        } else {
            alert("Please select at least one chapter to start the course.");
        }
    };

    const DesktopView = () => (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <h1 className="text-3xl font-semibold">Course Title</h1>
                    <button className="text-blue-600 mt-4 md:mt-0">Switch to English</button>
                </div>

                <div className="mb-4 w-full flex justify-center">
                    <div className="w-full md:w-2/3 h-72 bg-gray-300 flex items-center justify-center">
                        Thumbnail for the video
                    </div>
                </div>
                <div className="mb-4 mt-7">
                    <h1 className="text-3xl font-serif font-medium">Description</h1>
                    <p className="text-gray-700">
                        m a female student of ait pune.
                    </p>
                </div>
                <div className="flex items-center mb-4 flex-wrap">
                    <span className="text-yellow-500">4.7 </span>
                    <span className="mx-2">•</span>
                    <span>7hrs</span>
                    <button className="ml-4 text-blue-600 md:mb-0 mb-2">Read a review</button>

                    {/* if and only if the course is completed */}
                    <div className="flex-grow"></div>
                    <button className="ml-auto px-4 py-2 bg-green-600 rounded-xl transition duration-200 hover:shadow-xl hover:text-white hover:translate-x-1 hover:-translate-y-2 md:ml-2"
                        onClick={handleCollectCertificate}
                    >
                        Collect Certificate
                    </button>
                </div>
                <div className="mb-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className={`flex items-center mb-2 p-2 border rounded hover:bg-gray-100 cursor-pointer ${selectedChapters.includes(index) ? 'bg-gray-200' : ''}`}
                            onClick={() => handleChapterSelect(index)}
                        >
                            <div className="w-12 h-12 bg-gray-300 rounded mr-4"></div>
                            <div>
                                <h2 className="text-lg font-semibold">Chapter {index + 1}</h2>
                                <p className="text-gray-600">Lorem Ipsum</p>
                            </div>
                        </div>
                    ))}
                </div>

                {isStartCourse && (
                    <Link to="/courses/courseDis/chapter">
                        <div className="flex justify-center">
                            <button
                                className={`w-64 bg-blue-800 text-white py-2 rounded transition duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-xl hover:bg-green-800`}
                                onClick={handleStart}
                            >
                                Start Course
                            </button>
                        </div>
                    </Link>
                )}

                <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-4">Similar Courses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="border p-4 rounded hover:bg-gray-100">
                                <div className="w-full h-32 bg-gray-300 mb-2"></div>
                                <h4 className="text-lg font-semibold">Course Title</h4>
                                <p className="text-gray-600">Category</p>
                                <p className="text-gray-600">Length of the course</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const MobileView = () => (
        <div className="min-h-screen bg-gray-100 p-1 pb-20">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-3">
                <div className="flex flex-row justify-between items-center mb-4">
                    <h1 className="text-lg font-semibold">Course Title</h1>
                    <button className="text-blue-600 text-xs">Switch to English</button>
                </div>

                <div className="mb-4 w-full flex justify-center">
                    <div className="w-full h-40 rounded-lg bg-gray-300 flex items-center justify-center">
                        Thumbnail for the video
                    </div>
                </div>
                <div className="mb-4 mt-7">
                    <h1 className="text-2xl font-serif font-medium">Description</h1>
                    <p className="text-gray-700 text-xs">
                        i like cycling n painting.
                    </p>
                </div>
                <div className="flex items-center mb-4 flex-wrap">
                    <span className="text-yellow-500 text-xs">4.7 </span>
                    <span className="mx-2 texr-xs">•</span>
                    <span className="text-xs">7hrs</span>
                    <button className="ml-4 text-blue-600 text-xs mb-2">Read a review</button>

                    {/* if and only if the course is completed */}
                    <div className="flex"></div>
                    <button className="ml-auto w-32 h-8 text-xs bg-green-600 rounded-xl transition duration-200 hover:shadow-xl hover:text-white hover:translate-x-1 hover:-translate-y-2 md:ml-2"
                        onClick={handleCollectCertificate}
                    >
                        Collect Certificate
                    </button>
                </div>
                <div className="mb-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className={`flex items-center w-full h-16 mb-2 p-2 border rounded hover:bg-gray-100 cursor-pointer ${selectedChapters.includes(index) ? 'bg-gray-200' : ''}`}
                            onClick={() => handleChapterSelect(index)}
                        >
                            <div className="w-10 h-10 bg-gray-300 rounded mr-4"></div>
                            <div>
                                <h2 className="text-medium font-semibold">Chapter {index + 1}</h2>
                                <p className="text-gray-600 text-xs">Lor</p>
                            </div>
                        </div>
                    ))}
                </div>

                {isStartCourse && (
                    <Link to="/courses/courseDis/chapter">
                        <div className="flex justify-center">
                            <button
                                className={`w-36 bg-blue-800 text-white py-2 rounded-xl transition duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-xl hover:bg-green-800`}
                                onClick={handleStart}
                            >
                                Start Course
                            </button>
                        </div>
                    </Link>
                )}

                <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-4">Similar Courses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="border p-4 rounded hover:bg-gray-100">
                                <div className="w-full h-32 bg-gray-300 mb-2"></div>
                                <h4 className="text-lg font-semibold">Course Title</h4>
                                <p className="text-gray-600">Category</p>
                                <p className="text-gray-600">Length of the course</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {isMobile ? <MobileView /> : <DesktopView />}
        </div>
    );
};

export default CourseContent;
