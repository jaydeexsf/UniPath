import React from 'react';
import { Link } from 'react-router-dom';

const Applications = () => {
  return (
    <div className="text-white min-h-screen py-8 p-6">
      <header className="flex justify-between gap-8 mb-8">
        <h1 className="text-2xl font-bold  text-white">Portal</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/calculate-aps" className="text-blue-400 hover:underline">Calculate APS Score</Link></li>
            <li><Link to="/apply-university" className="text-blue-400 hover:underline">Apply to University</Link></li>
            <li><Link to="/apply-college" className="text-blue-400 hover:underline">Apply to College</Link></li>
            <li><Link to="/apply-bursaries" className="text-blue-400 hover:underline">Apply to Bursaries</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2 className="text-xl font-semibold mb-4">Welcome to the Student Portal</h2>
        <p className="mb-6">Select an option below to get started:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/calculate-aps" className="bg-sky-900 p-6 rounded-lg shadow-lg hover:bg-sky-800 transition">
            <h3 className="text-lg font-semibold">Calculate APS Score</h3>
            <p className="mt-2">Find out which universities or courses you qualify for based on your APS score.</p>
          </Link>
          <Link to="/UniPath/apply-university" className="bg-purple-950 p-6 rounded-lg shadow-lg hover:bg-purple-900 transition">
            <h3 className="text-lg font-semibold">Apply to University</h3>
            <p className="mt-2">Start your application and get recommendations based on your APS score.</p>
          </Link>
          <Link to="/apply-college" className="bg-slate-900 p-6 rounded-lg shadow-lg hover:bg-slate-800 transition">
            <h3 className="text-lg font-semibold">Apply to College</h3>
            <p className="mt-2">Explore college application options and see what fits your APS score.</p>
          </Link>
          <Link to="/apply-bursaries" className="bg-red-800 p-6 rounded-lg shadow-lg hover:bg-red-700 transition">
            <h3 className="text-lg font-semibold">Apply to Bursaries</h3>
            <p className="mt-2">Find and apply for bursaries based on your APS score and needs.</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Applications;
