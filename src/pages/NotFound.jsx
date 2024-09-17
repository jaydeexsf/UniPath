import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-purple-900 to-blue-900 text-white">
      <div className="text-center">
        {/* Bot illustration */}
        <div className="relative mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-purple-700 to-blue-600 flex items-center justify-center animate-bounce">
          <div className="relative w-24 h-24">
            {/* Bot face */}
            <div className="absolute top-0 left-0 w-full h-full bg-white rounded-full shadow-lg">
              {/* Eyes */}
              <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-black rounded-full animate-blink"></div>
              <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-black rounded-full animate-blink"></div>
            </div>
            {/* Bot antennas */}
            <div className="absolute -top-4 left-1/3 w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="absolute -top-4 right-1/3 w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* 404 text */}
        <h1 className="mt-8 text-6xl font-bold">404</h1>
        <p className="mt-4 text-2xl">Bot Not Found</p>
        <p className="mt-2 text-gray-400">
          Oops! The page you are looking for doesn't exist.
        </p>

        {/* Buttons */}
        <div className="mt-8 space-x-4">
          <a
            href="/"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Go Home
          </a>
          <a
            href="#"
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
