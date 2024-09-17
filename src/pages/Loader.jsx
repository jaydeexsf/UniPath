import React, { useState, useEffect } from 'react';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress > 90) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + (0.4^2);
      });
    }, 100); // Adjust timing to simulate loading speed

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="flex items-center transition-all duration-1000 justify-center min-h-[100vh] bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="text-center">
        <div
          className={` ${progress === 100 ? 'block' : 'hidden'} w-12 h-12 border-4 border-t-4 border-t-blue-700 border-solid rounded-full animate-spin mx-auto`}
          aria-label="Loading spinner"
          role="status"
        ></div>
        {/* <div className="mt-4 text-white text-lg">Loading, please wait...</div> */}
        <div className={ ` ${progress === 100 ? 'hidden' : ''} ${progress > 80 ? 'opacity-20' : ''} transition-all duration-1000 mt-4`}>
          <div
            className="relative pt-1"
            aria-label="Loading progress bar"
          >
            <div className="flex items-center justify-end">
              <div className="text-xs text-white">{progress}%</div>
              {/* <div className="text-xs text-white">100%</div> */}
            </div>
            <div className={ ` ${progress === 100 ? 'hidden' : ''} flex items-center w-[200px] bg-gray-700 rounded-full`}>
              <div
                className="flex-shrink-0 h-2 bg-blue-700 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
