// src/components/CalculateAPS.js

import React, { useState } from 'react';

const CalculateAPS = () => {
  const [score, setScore] = useState('');

  const handleCalculate = () => {
    // Implement APS calculation logic
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Calculate Your APS Score</h1>
        <p className="text-gray-400 mt-2">Enter your marks to calculate your APS score.</p>
      </header>

      <form onSubmit={handleCalculate} className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <label className="block mb-4">
          <span className="text-gray-300">Enter your marks:</span>
          <input
            type="text"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="form-input mt-1 block w-full bg-gray-600 border-gray-500"
            placeholder="e.g., 80, 70, 75"
          />
        </label>
        <button type="submit" className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-700 transition">
          Calculate APS
        </button>
      </form>
    </div>
  );
};

export default CalculateAPS;
