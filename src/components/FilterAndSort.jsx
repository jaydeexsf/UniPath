// src/components/FilterAndSort.js

import React from 'react';

const FilterAndSort = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Filter and Sort Courses</h2>
      <form>
        <label className="block mb-4">
          <span className="text-gray-300">Sort by APS Score:</span>
          <select className="form-select mt-1 block w-full bg-gray-600 border-gray-500">
            <option value="greater">Greater than</option>
            <option value="less">Less than</option>
          </select>
        </label>
        <label className="block mb-4">
          <span className="text-gray-300">Course Category:</span>
          <select className="form-select mt-1 block w-full bg-gray-600 border-gray-500">
            <option value="computer-science">Computer Science</option>
            <option value="engineering">Engineering</option>
            <option value="information-tech">Information Technology</option>
          </select>
        </label>
        <button className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-700 transition">
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default FilterAndSort;
