import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/800px-CyberPeace_Logo_2023.png";

const OathFormPage = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleAgreeChange = () => {
    setAgree(!agree);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agree) {
      console.log("User agreed to the oath and submitted the form.");
    } else {
      console.log("User must agree to the oath before submitting.");
    }
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center mb-8">
        <img src={logo} alt="CyberPeace Corps" className="h-20 w-auto" />
      </div>
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Volunteer Oath</label>
          <div className="w-full h-48 bg-gray-200 flex justify-center items-center">
            <button type="button" className="w-12 h-12 bg-black text-white rounded-full flex justify-center items-center">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={agree}
              onChange={handleAgreeChange}
              className="form-checkbox h-5 w-5 text-gray-600"
            />
            <span className="ml-2 text-gray-700">I hereby agree to abide by the Mastercard Volunteer oath and perform the necessary duties</span>
          </label>
        </div>
        <div className="mb-4">
          <a href="#" className="text-blue-600 hover:underline">NGO K</a>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleBackClick} // Handle back button click
            className="bg-gray-300 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Back
          </button>
          <Link to='/message'>
            <button
              type="submit"
              className={`font-bold py-2 px-4 rounded ${agree ? 'bg-blue-700 text-white' : 'bg-gray-400 text-gray-800 cursor-not-allowed'}`}
              disabled={!agree}
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default OathFormPage;
