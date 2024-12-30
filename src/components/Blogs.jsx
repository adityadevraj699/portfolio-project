import React from 'react';

const Blogs = () => {
  return (
    <div className="main-container flex flex-col items-center justify-center mt-4 select-text mb-8">
      <div className="title-container w-full max-w-2xl bg-gray-200 dark:bg-gray-800 p-4 shadow-lg rounded-t-lg">
        <h2 className="text-2xl font-bold text-center md:text-left text-gray-800 dark:text-gray-200">How "shivajee.dev" works</h2>
      </div>
      <div className="content-container w-full max-w-2xl bg-gray-200 dark:bg-gray-800 p-4 shadow-lg rounded-b-lg">
        <p className="text-base md:text-lg text-gray-800 dark:text-gray-200">
          Here I will be sharing how I launched this website under $9 which included domain name purchase and hosting on aws ec2 instance.<br /> <b>Wait for my story...</b>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
