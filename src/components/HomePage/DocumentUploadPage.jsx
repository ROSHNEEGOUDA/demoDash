import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

const DocumentUploadPage = () => {
    const [files, setFiles] = useState([]);
    const [uploadingFiles, setUploadingFiles] = useState([]);
    const isMobile = useMediaQuery({maxWidth : 480});

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        const newFiles = selectedFiles.map(file => ({ file, isUploading: true, fileURL: URL.createObjectURL(file) }));
        setFiles(prevFiles => [...prevFiles, ...newFiles]);

        selectedFiles.forEach(file => {
            // Simulate file upload
            setTimeout(() => {
                setUploadingFiles(prevUploadingFiles => prevUploadingFiles.filter(f => f.name !== file.name));
                setFiles(prevFiles => prevFiles.map(f => f.file.name === file.name ? { ...f, isUploading: false } : f));
            }, 2000); // Adjust time as needed to simulate upload duration
        });

        setUploadingFiles(prevUploadingFiles => [...prevUploadingFiles, ...selectedFiles]);
    };

    const handleUploadClick = () => {
        document.getElementById('file-input').click();
    };

    const handleSubmitActivity = () => {
        // Logic to submit activity
        alert('Activity submitted successfully!');
    };

    return (
        <div className="max-w-5xl mx-auto pb-20 md:pb-4">
            <button onClick={() => window.history.back()} className="text-blue-500">← Back</button>
            <h1 className={`font-bold mt-4 ${isMobile ? "text-2xl" : "text-3xl"}`}>Activity Title</h1>
            <div className={`text-gray-500 ${isMobile ? "text-sm" : ""}`}>Category • Points</div>
            <div className="mt-6 flex flex-col items-center">
                <Link to="/homepage/activites/activity/contentpage">
                    <button className={`bg-gray-200 text-gray-700 rounded-lg mb-6 ${isMobile ? "py-2 px-4" : "py-4 px-8"}`}>
                        Click HERE to create your document
                    </button>
                </Link>
                <span className="text-gray-500 mb-6">OR</span>
                <div
                    onClick={handleUploadClick}
                    className="cursor-pointer border-2 border-dashed border-gray-300 p-10 rounded-lg w-full max-w-md text-center"
                >
                    <div className="flex flex-col items-center">
                        <FontAwesomeIcon icon={faCloudUploadAlt} className="text-3xl" />
                        <span className="font-semibold text-gray-700">Upload</span>
                        <p className="mt-2 text-sm text-gray-500">
                            Supported formats: JPEG, PNG, GIF, MP4, PDF, AI, Word, PPT, JPG
                        </p>
                    </div>
                </div>
                <input
                    type="file"
                    id="file-input"
                    accept=".jpeg,.jpg,.png,.gif,.mp4,.pdf,.psd,.ai,.doc,.docx,.ppt,.pptx"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    multiple
                />
            </div>
            <div className="mt-4 w-full max-w-md">
                {files.map((fileWrapper, index) => (
                    <div key={index} className="mt-2 flex items-center justify-between bg-gray-100 p-2 rounded-lg">
                        <a href={fileWrapper.fileURL} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
                            {fileWrapper.file.name}
                        </a>
                        {fileWrapper.isUploading ? (
                            <FontAwesomeIcon icon={faSpinner} className="text-blue-500 animate-spin" />
                        ) : (
                            <span className="text-green-500">Uploaded</span>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-center">
                <button
                    onClick={handleSubmitActivity}
                    className="bg-blue-800 text-white py-3 px-6 rounded-full shadow-lg hover:scale-105 transition duration-200"
                >
                    Submit Activity
                </button>
            </div>
        </div>
    );
};

export default DocumentUploadPage;
