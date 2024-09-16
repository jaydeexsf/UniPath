// src/components/ApplyUniversity.js

import React from 'react';

const ApplyUniversity = () => {
  return (
    <div className="bg-gray-800 text-white min-h-screen p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Apply to University</h1>
        <p className="text-gray-400 mt-2">Find out which universities you qualify for based on your APS score.</p>
      </header>

      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <p className="mb-4">Check the universities you qualify for:</p>
        <button className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-700 transition">
          Calculate APS Score to See University Options
        </button>
      </div>
    </div>
  );
};

export default ApplyUniversity;
