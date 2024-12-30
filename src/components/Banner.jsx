import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/profileImage.jpeg';
import Button from './Button';

const Banner = () => {
  return (
    <div
      className="main-container flex justify-center mt-11 mb-10 sm:mb-20 "
      style={{ height: 'calc(100vh - 00px)' }}
    >
      <div className="max-w-screen-xl w-full flex flex-col sm:flex-row justify-around items-center space-y-8 sm:space-y-0 sm:space-x-8">
        {/* Image Section */}
        <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 display: flex justify-center items-center pt-8">
          <img
            className="w-full rounded-full"
            src={profileImage}
            alt="Profile"
            style={{ maxWidth: '380px', height: 'auto' }}
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 p-7 my-8 sm:my-0">
          <h2 className="text-3xl font-bold">I am </h2>
          <h1 className="text-3xl font-bold pt-1 pb-1">SHIVA JEE</h1>
          <div className="flex items-center text-xl sm:text-4xl">
            <h1 className="leading-loose font-bold mr-2">I&apos;M</h1>
            <h2 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-300">
              <Typewriter
                words={[
                  'Web Developer',
                  'Software Engineer',
                  'Tech Enthusiast',
                  'Open Source Contributor',
                  'Problem Solver',
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>
          <p className="text-lg sm:text-2xl mt-4">
            I am a Software Engineer and a Web Developer with a passion for
            problem-solving and Open Source Contribution.
          </p>
          {/* Download resume */}
          <div className="mt-8 display: flex justify-center items-center w-1/2">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
