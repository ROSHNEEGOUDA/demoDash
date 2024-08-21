import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const Chapter = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    const DesktopView = () => {
        return (
            <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-3xl font-semibold">Course Title</h1>
                    <button className="text-blue-600">Switch to English</button>
                </div>
                <div className="mb-4 text-gray-500 text-sm">
                    Some content may not be translated
                </div>
                <div className="mb-4">
                    <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">Chapter 1</h2>
                            <p className="text-lg">Lor</p>
                            <FontAwesomeIcon
                                icon={faPlayCircle}
                                className="text-6xl text-gray-600 mt-4"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-gray-700">
                        excited for the hackathon in person
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Take Notes</h3>
                    <textarea
                        className="w-full h-32 p-2 border rounded"
                        placeholder="Take notes here..."
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <Link to="/courses/courseDis">
                        <button className="bg-yellow-400 px-6 py-3 rounded-lg hover:translate-x-1 hover:translate-y-1 transition duration-200 hover:bg-green-600 hover:shadow-xl hover:text-white">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-4">
                        FAQs
                    </h3>
                    <p className="text-gray-600 mb-4">
                        A list of questions 
                    </p>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">How can I understand </li>
                        <li className="mb-2">Lor</li>
                        <li className="mb-2">What does abc mean?</li>
                        <li className="mb-2">What does abc mean?</li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }

    const MobileView = () => {
        return (
            <div className="min-h-screen bg-gray-100 p-1 pb-20">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-3">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-lg font-semibold">Course Title</h1>
                    <button className="text-blue-600 text-xs">Switch to English</button>
                </div>

                <div className="mb-4">
                    <div className="w-full h-40 rounded-xl bg-gray-300 flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-medium font-semibold">Chapter 1</h2>
                            <p className="text-xs">Lorem Ipsum</p>
                            <FontAwesomeIcon
                                icon={faPlayCircle}
                                className="text-3xl text-gray-600 mt-4"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <p className="text-gray-700 text-xs">
                        it will be gr8.
                    </p>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Take Notes</h3>
                    <textarea
                        className="w-full h-32 p-2 border rounded"
                        placeholder="Take notes here..."
                    ></textarea>
                </div>
                <div className="flex justify-end">
                    <Link to="/courses/courseDis">
                        <button className="bg-yellow-400 px-3 py-1.5 rounded-lg hover:translate-x-1 hover:translate-y-1 transition duration-200 hover:bg-green-600 hover:shadow-xl hover:text-white">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4">
                        doubts
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        A list of every session
                    </p>
                    <ul className="list-disc list-inside text-sm">
                        <li className="mb-2">How can I understand ?</li>
                        <li className="mb-2">Lorem Ipsum</li>
                        <li className="mb-2">What does abc mean?</li>
                        {/* <li className="mb-2">What does abc mean?</li> */}
                    </ul>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div>
            {isMobile ? <MobileView /> : <DesktopView />}
        </div>
    )
}

export default Chapter