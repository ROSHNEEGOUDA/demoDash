import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/800px-CyberPeace_Logo_2023.png";

const Message = () => {
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Set a timer to show the button after 10 seconds
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 2000); // 10000 milliseconds = 10 seconds

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    const handleButtonClick = () => {
        navigate('/loginPage');
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <div className="flex flex-col mt-20 items-center mb-8">
                <img src={logo} alt="CyberPeace Corps" className="h-20 w-auto" />
            </div>
            <div>
                <h1 className="text-center text-xl">successfully registered!!!</h1>
                <p className="mt-5 text-center text-gray-800">
                    We have sent a confirmation email to your email address. <br /> Please verify
                    your email address to complete the registration process.
                </p>
            </div>
            {showButton && (
                <div className="mt-5 mb-16">
                    <button 
                        className="bg-blue-500 text-white py-2 px-4 rounded-xl shadow-xl hover:bg-green-700"
                        onClick={handleButtonClick}
                    >
                        Go to Login
                    </button>
                </div>
            )}
        </div>
    );
};

export default Message;
