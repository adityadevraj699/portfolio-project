// eslint-disable-next-line no-unused-vars
import React from 'react';
import { saveAs } from 'file-saver'; // FileSaver.js library
import { useTheme } from '../utils/ThemeContext.jsx'; // Correct the import path to your theme provider

const Button = () => {
  const { darkMode } = useTheme(); // Access darkMode from ThemeContext

  const handleDownload = () => {
    saveAs('/resume.pdf', 'Resume.pdf'); // Trigger the download
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={`px-4 py-3 rounded-xl outline-none focus:ring-4 transform active:scale-95 transition-transform duration-300 ease-in-out mx-5 flex items-center ${
        darkMode
          ? 'text-white bg-gradient-to-r from-sky-500 via-sky-400 to-sky-300 hover:bg-gradient-to-l hover:from-sky-500 hover:via-sky-400 hover:to-sky-300'
          : 'text-black bg-gradient-to-r from-blue-400 via-blue-350 to-sky-300 hover:bg-gradient-to-l hover:from-blue-500 hover:via-blue-400 hover:to-sky-300'
      }`}
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <span className="ml-2">Resume</span>
    </button>
  );
};

export default Button;
