import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const CreateContentPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const isMobile = useMediaQuery({maxWidth : 480});

    const handleTitleChange = (e) => {
        const titleText = e.target.value;
        setTitle(titleText);
        checkSubmitEnable(content, titleText);
    };

    const handleContentChange = (e) => {
        const text = e.target.value;
        setContent(text);
        checkSubmitEnable(text, title);
    };

    const checkSubmitEnable = (contentText, titleText) => {
        setIsSubmitEnabled(countWords(contentText) >= 1 && titleText.trim().length >= 0);
    };

    const countWords = (text) => {
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    };

    const handleClick = () => {
        setContent("");
        setIsSubmitEnabled(false);
    };

    return (
        <div className={`max-w-5xl mx-auto ${isMobile ? "p-1 pb-20" : "p-4"}`}>
            <button onClick={() => window.history.back()} className="text-blue-500">← Back</button>
            <h1 className="text-3xl font-bold mt-4">Activity Title</h1>
            <div className="text-gray-500">Category • Points</div>
            <div className={`mt-6 bg-white rounded shadow-lg ${isMobile ? "p-3" : "p-6"}`}>
                <div className="flex justify-between items-center mb-4">
                    <input
                        className={` p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 ${isMobile ? "w-40" : "w-1/2"}`}
                        placeholder="Untitled Document"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <button className="text-gray-400 hover:text-gray-600 ml-4" onClick={handleClick}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>
                <textarea
                    className="w-full h-64 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Type your content here"
                    value={content}
                    onChange={handleContentChange}
                />
            </div>
            <div className="mt-6 flex justify-center">
                <button
                    className={`bg-blue-800 text-white py-3 px-6 rounded-full shadow-lg transition duration-200 ${isSubmitEnabled ? 'hover:scale-105' : 'opacity-50 cursor-not-allowed'}`}
                    disabled={!isSubmitEnabled}
                >
                    Submit Document
                </button>
            </div>
        </div>
    );
};

export default CreateContentPage;
