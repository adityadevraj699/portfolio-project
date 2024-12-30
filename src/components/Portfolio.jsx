import React from "react";
import { useTheme } from '../utils/ThemeContext.jsx'; // Adjust the path as per your project structure

const Portfolio = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`main-container w-full px-4 py-10 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Title Section */}
      <div className={` mt-11 title-container w-full p-6 shadow-lg rounded-t-lg ${darkMode ? "bg-gradient-to-r from-gray-700 to-gray-800" : "bg-gradient-to-r from-blue-500 to-blue-400 text-white"}`}>
        <h2 className="text-3xl font-extrabold text-center">
          My RC Car Project Documentation
        </h2>
      </div>

      {/* Content Sections */}
      <div className="content-section">
        {/* Introduction Section */}
        <div className="content-container w-full p-6 shadow-lg rounded-lg mb-4">
          <h3 className="text-2xl font-bold mb-3">Introduction</h3>
          <p className="text-lg">
            This project is about creating a Raspberry Pi-powered RC car with an ultrasonic sensor and radar visualization. It showcases the integration of hardware components with software, resulting in a fully functional remote-controlled car.
          </p>
        </div>

        {/* Project Components Section */}
        <div className="content-container w-full p-6 shadow-lg rounded-lg mb-4">
          <h3 className="text-2xl font-bold mb-3">Project Components</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Raspberry Pi</li>
            <li>L298N Motor Driver</li>
            <li>Ultrasonic Sensor (HC-SR04)</li>
            <li>Servo Motor</li>
            <li>DC Motors</li>
            <li>Power Supply</li>
          </ul>
        </div>

        {/* Software Implementation Section */}
        <div className="content-container w-full p-6 shadow-lg rounded-lg mb-4">
          <h3 className="text-2xl font-bold mb-3">Software Implementation</h3>
          <p className="text-lg mb-4">
            The software implementation is divided into several parts including setting up the environment, Flask web interface, and radar visualization.
          </p>
          <div className="code-snippet bg-gray-900 text-white p-4 rounded-md mb-2">
            <code className="block">
              # Example Flask Code<br />
              from flask import Flask, render_template, request<br />
              app = Flask(__name__)<br /><br />
              @app.route('/')<br />
              def index():<br />
              &nbsp;&nbsp;&nbsp;&nbsp;return render_template('index.html')
            </code>
          </div>
        </div>

        {/* Testing and Troubleshooting Section */}
        <div className="content-container w-full p-6 shadow-lg rounded-lg mb-4">
          <h3 className="text-2xl font-bold mb-3">Testing and Troubleshooting</h3>
          <p className="text-lg">
            To ensure the RC car functions correctly, follow these testing procedures. If you encounter any issues, refer to the troubleshooting tips provided.
          </p>
        </div>

        {/* Conclusion Section */}
        <div className="content-container w-full p-6 shadow-lg rounded-lg mb-4">
          <h3 className="text-2xl font-bold mb-3">Conclusion</h3>
          <p className="text-lg">
            This project demonstrates the integration of hardware and software to create a functional RC car. Future improvements could include adding a camera for live streaming or enhancing the web interface for better user control.
            <br />
            GitHub Link{" "}
            <a
              href="https://github.com/shivajee98/raspi-car"
              className="text-blue-600 font-bold hover:underline"
            >
              Click Here
            </a>
          </p>
        </div>

        {/* Video Demonstration Section */}
        <div className="content-container w-full p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-3">Video Demonstration</h3>
          <div className="video-placeholder bg-gray-200 h-64 w-full rounded-md flex items-center justify-center">
          <iframe
      className="w-full h-64 sm:h-96 rounded-md"
      src="https://www.youtube.com/embed/ttt0VK9vW5U"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
