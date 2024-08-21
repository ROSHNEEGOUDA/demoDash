import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/800px-CyberPeace_Logo_2023.png"

const FormPage = () => {
    const [formData, setFormData] = useState({
        profession: '',
        organization: '',
        motivation: '',
        hours: '',
        referralCode: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
            <div className="flex flex-col items-center mb-8">
                <img src={logo} alt="CyberPeace Corps" className="h-20 w-auto" />
            </div>
            <form className="bg-white p-6 rounded shadow-md w-full max-w-md mb-16" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Profession</label>
                    <input
                        type="text"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Name of organization/ Institution</label>
                    <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">What motivates you</label>
                    <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">No. of hours </label>
                    <input
                        type="text"
                        name="hours"
                        value={formData.hours}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Referral </label>
                    <input
                        type="text"
                        name="referralCode"
                        value={formData.referralCode}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={handleBackClick} // Handle back button click
                        className="bg-gray-300 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded"
                    >
                        Back
                    </button>
                    <Link to="/volunteerOath">
                        <button
                            type="submit"
                            className="bg-gray-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                        >
                            Next
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default FormPage;
