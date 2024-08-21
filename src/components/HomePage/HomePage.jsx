import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    const renderCards = (count, title, content) => {
        return [...Array(count)].map((_, index) => (
            <div
                key={index}
                className={`${isMobile
                    ? "bg-gray-200 p-2 rounded-lg w-56 h-40 flex flex-col justify-center items-center"
                    : "bg-gray-200 p-4 rounded-lg flex-none w-96 h-72 flex flex-col items-center justify-center"
                    }`}
            >
                <div>{title}</div>
                <div>{content}</div>
            </div>
        ));
    };

    // For Destop Views

    const DesktopView = () => (
        <div className="p-6 bg-gray-100 min-h-screen pb-20 md:pb-4">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">Welcome, human</h1>
                        <p className="text-gray-600">1entry level</p>
                    </div>
                    <Link to="/leaderboard" className="text-blue-600 hover:underline">
                        View board
                    </Link>
                </div>
            </div>

            <div className="bg-white h-96 p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Reporting</h2>
                    <Link to="#" className="text-blue-600 hover:underline">
                        View all
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </Link>
                </div>
                <div className="relative overflow-hidden h-72 mb-4">
                    <div className="absolute flex space-x-4 animate-slideLeftContinuous h-72 w-max">
                        {renderCards(8, "Report an Incident", "")}
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Recommended Activities</h2>
                    <Link
                        to="/homepage/activities"
                        className="text-blue-600 hover:underline"
                    >
                        View all
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </Link>
                </div>
                <div className="relative overflow-hidden h-72">
                    <div className="absolute flex space-x-4 animate-slideLeftContinuous h-72 w-max">
                        {renderCards(8, "Activity Title", "Category · Points")}
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6 h-96 flex justify-center">
                <div className="bg-gray-200 p-10 rounded-lg text-center w-5/6 h-80">
                    Activity Happening near 
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Popular Activities</h2>
                    <Link to="#" className="text-blue-600 hover:underline">
                        View all
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </Link>
                </div>
                <div className="relative overflow-hidden h-72">
                    <div className="absolute flex space-x-4 animate-slideLeftContinuous h-72 w-max">
                        {renderCards(8, "Activity Title", "Category · Points")}
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center bg-gray-200 p-4 rounded-lg">
                    <div className="flex-grow">
                        <h3 className="text-lg font-bold">Need help?</h3>
                        <p className="text-gray-600">
                            Seek mentorship 
                        </p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200">
                        Reach out
                    </button>
                </div>
            </div>
        </div>
    );

    // For Mobile Views

    const MobileView = () => (
        <div className=" bg-gray-100 min-h-screen pb-20 md:pb-4">
            <div className="p-2 bg-white mb-12 rounded-xl shadow-lg">
                <div className="flex justify-between items-center text-center">
                    <div>
                        <h1 className="text-base font-medium">Welcome, </h1>
                        <p className="text-gray-600 text-[8px]">1entry level</p>
                    </div>
                    <div>
                        <Link
                            to="/leaderboard"
                            className="text-blue-600 hover:underline text-xs text-end"
                        >
                            Leaderboard
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-3 bg-white mb-16 rounded-lg shadow-lg">
                <div className="flex justify-between">
                    <h2 className="text-base font-bold mb-4 text-center">
                        Incident <br /> Report
                    </h2>
                    <Link
                        to="#"
                        className="text-blue-600 hover:underline flex justify-center text-sm"
                    >
                        View all
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
                    </Link>
                </div>
                <div className="relative overflow-hidden h-40">
                    <div className="absolute flex text-center  space-x-4 animate-slideLeftContinuous ">
                        {renderCards(4, "Report an Incident", "")}
                    </div>
                </div>
            </div>

            <div className="p-3 bg-white mb-16 rounded-lg shadow-lg">
                <div className="flex justify-between">
                    <h2 className="text-lg font-bold mb-4 text-center">
                        Recommended <br /> Act
                    </h2>
                    <Link
                        to="/homepage/activities"
                        className="text-blue-600 hover:underline flex justify-center text-sm"
                    >
                        View all
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
                    </Link>
                </div>
                <div className="relative overflow-hidden h-44">
                    <div className="absolute flex space-x-4 animate-slideLeftContinuous h-72 w-max">
                        {renderCards(4, "Activity Title", "Category · Points")}
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-16 h-64">
                <div className="bg-gray-200 rounded-lg flex justify-center items-center h-48">
                    Activity Happening near <br /> you / Trainer specific activity
                </div>
            </div>

            <div className="p-3 bg-white mb-12 rounded-lg shadow-lg">
                <div className="flex justify-between">
                    <h2 className="text-lg font-bold mb-4 text-center">
                        Popular Activities
                    </h2>
                    <Link
                        to="#"
                        className="text-blue-600 hover:underline flex justify-center text-sm"
                    >
                        View all
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
                    </Link>
                </div>
                <div className="relative overflow-hidden h-44">
                    <div className="absolute flex space-x-4 animate-slideLeftContinuous h-72 w-max">
                        {renderCards(4, "Activity Title", "Category · Points")}
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
    );

    return <>{isMobile ? <MobileView /> : <DesktopView />}</>;
};

export default HomePage;
