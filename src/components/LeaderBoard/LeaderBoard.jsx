import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const LeaderBoard = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    const DestopView = () => {
        return (
            <div className="min-h-screen bg-gray-100 p-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                        <div>
                            <h1 className="text-2xl font-semibold">Name</h1>
                            <p className="text-gray-600">points | Level</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                        <h2 className="text-xl font-semibold mb-2">Overview</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <p className="text-lg font-bold">05</p>
                                <p className="text-gray-600">activities</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-bold">05</p>
                                <p className="text-gray-600">courses</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-bold">8hrs 15mins</p>
                                <p className="text-gray-600">Total</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-bold">02</p>
                                <p className="text-gray-600">Certificates</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-bold">5</p>
                                <p className="text-gray-600">Reports</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4">
                        <div>
                            <p className="text-xl font-semibold">400pts</p>
                            <p className="text-gray-600">points earned</p>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Redeem</button>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Leaderboard</h2>
                        <div className="flex border-b mb-4">
                            <Link to="/global" className="flex-1">
                                <button className="w-full py-2 border-r">Global</button>
                            </Link>
                            <Link to="/national" className="flex-1">
                                <button className="w-full py-2">National</button>
                            </Link>
                        </div>
                        <div>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className="flex items-center mb-2 p-2 border rounded hover:bg-gray-100">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                                    <div className="flex-1">
                                        <p className="text-lg font-semibold">Name</p>
                                        <p className="text-gray-600">Activity</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">Rank {index + 1}</p>
                                        <p className="text-gray-600">{1500 - index * 100} pts</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex items-center p-2 border rounded bg-yellow-100">
                            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                            <div className="flex-1">
                                <p className="text-lg font-semibold">Me</p>
                                <p className="text-gray-600">level</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">Rank 15</p>
                                <p className="text-gray-600">100 pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">Need help?</h2>
                        <p className="text-gray-600 mb-4">You can reach out</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Contact us</button>
                    </div>
                </div>
            </div>
        )
    }

    const MobileView = () => {
        return (
            <div className="min-h-screen bg-gray-100 p-1 pb-20">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-3">
                    <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                        <div>
                            <h1 className="text-lg font-semibold">Name</h1>
                            <p className="text-gray-600 text-xs">No of points | Level</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                        <h2 className="text-lg text-center font-semibold mb-2">Overview</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <p className="text-medium font-bold">05</p>
                                <p className="text-gray-600 text-sm">No of activities</p>
                            </div>
                            <div className="text-center">
                                <p className="text-medium font-bold">05</p>
                                <p className="text-gray-600 text-sm">No of courses</p>
                            </div>
                            <div className="text-center">
                                <p className="text-medium font-bold">8hrs 15mins</p>
                                <p className="text-gray-600 text-sm">Total time </p>
                            </div>
                            <div className="text-center">
                                <p className="text-medium font-bold">02</p>
                                <p className="text-gray-600 text-sm">Certificates</p>
                            </div>
                            <div className="text-center">
                                <p className="text-medium font-bold">5</p>
                                <p className="text-gray-600 text-sm">submitted</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4">
                        <div>
                            <p className="text-lg font-semibold">400pts</p>
                            <p className="text-gray-600 text-sm">Total<br /> earned</p>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Redeem</button>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2">Leaderboard</h2>
                        <div className="flex border-b mb-4">
                            <Link to="/global" className="flex-1">
                                <button className="w-full py-2 border-r">Global</button>
                            </Link>
                            <Link to="/national" className="flex-1">
                                <button className="w-full py-2">National</button>
                            </Link>
                        </div>
                        <div>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className="flex items-center mb-2 p-1 border rounded hover:bg-gray-100">
                                    <div className="w-9 h-9 bg-gray-300 rounded-full mr-4"></div>
                                    <div className="flex-1">
                                        <p className="text-medium font-semibold">Name</p>
                                        <p className="text-gray-600 text-xs">Activity</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-medium font-semibold">Rank {index + 1}</p>
                                        <p className="text-gray-600 text-xs">{1500 - index * 100} pts</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex items-center p-1 border rounded bg-yellow-100">
                            <div className="w-9 h-9 bg-gray-300 rounded-full mr-4"></div>
                            <div className="flex-1">
                                <p className="text-medium font-semibold">Me</p>
                                <p className="text-gray-600 text-xs">My level</p>
                            </div>
                            <div className="text-right">
                                <p className="text-medium font-semibold">Rank 15</p>
                                <p className="text-gray-600 text-xs">100 pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold mb-2">Need help?</h2>
                        <p className="text-gray-600 mb-4">You can reach out to</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Contact us</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {isMobile ? <MobileView /> : <DestopView />}
        </div>
    )
}

export default LeaderBoard;