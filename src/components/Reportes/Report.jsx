import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import {useMediaQuery} from "react-responsive"

const Report = () => {

    const isMobile = useMediaQuery({maxWidth : 480});
    
    return (
        <div className={`min-h-screen bg-gray-100 ${isMobile ? "p-1 pb-20" : "p-4"}`}>
            <div className={`max-w-4xl mx-auto bg-white rounded-lg shadow-md ${isMobile ? "p-3" : "p-6"}`}>
                <div className="flex items-center mb-6">
                    <FontAwesomeIcon icon={faFileAlt} className="text-blue-600 mr-2" size={`${isMobile ? "1x" : "2x"}`} />
                    <Link to="/reportForm">
                        <button className={`bg-gray-200 text-black px-4 py-2 rounded-full flex items-center ${isMobile ? "text-sm ml-1" : ""}`}>
                            <FontAwesomeIcon icon={faFileAlt} className={`mr-2 ${isMobile ? "text-sm" : ""}`} />
                            File a report
                        </button>
                    </Link>
                </div>

                {[1, 2, 3].map((item, index) => (
                    <div key={index} className={`mb-6 ${isMobile ? "" : "flex"}`}>
                        <div className="w-11 h-11 bg-gray-300 rounded-full mr-4"></div>
                        <div className={`${isMobile ? "mt-4" : "flex-1"}`}>
                            <div className="bg-gray-300 h-40 mb-4 rounded-xl flex items-center justify-center">
                                Thumbnail of vid/photo/graphic
                            </div>
                            <div>
                                <p className={`text-lg font-semibold ${isMobile ? "text-medium" : ""}`}>type  </p>
                                <p className={`text-gray-600 ${isMobile ? "text-xs" : ""}`}>Lorenec</p>
                                <p className={`text-gray-600 ${isMobile ? "text-medium mt-2" : ""}`}>Source: Google <a href="#" className="text-blue-600">Link</a></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Report;