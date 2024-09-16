import React, { useState, useEffect } from 'react';
import data from '../assets/Data/ApplicationData'; // Importing the JSON data
import { Button } from './ui/button';

const ApplyUniversity = () => {
  const [apsScore, setApsScore] = useState('');
  const [searchCareer, setSearchCareer] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [visibleCoursesCount, setVisibleCoursesCount] = useState(3); // Initially show 3 courses

  const categories = ['All', 'Science', 'Humanities', 'Engineering', 'Accounting'];

  useEffect(() => {
    // Show all available courses when the page loads
    const filtered = data.universities.flatMap(university =>
      university.courses.filter(course =>
        selectedCategory === 'All' || course.category === selectedCategory
      ).map(course => ({
        ...course,
        universityName: university.name
      }))
    );
    setFilteredCourses(filtered);
  }, [selectedCategory]);

  const handleCalculate = (event) => {
    event.preventDefault();
    // Filter courses based on APS score
    const filtered = data.universities.flatMap(university =>
      university.courses.filter(course =>
        course.aps_required >= apsScore &&
        (selectedCategory === 'All' || course.category === selectedCategory)
      ).map(course => ({
        ...course,
        universityName: university.name
      }))
    );
    setFilteredCourses(filtered);
    setVisibleCoursesCount(3); // Reset to show 3 results at first
  };

  const handleCareerSearch = () => {
    // Search for degrees matching the career
    const filtered = data.universities.flatMap(university =>
      university.courses.filter(course =>
        course.name.toLowerCase().includes(searchCareer.toLowerCase()) &&
        (selectedCategory === 'All' || course.category === selectedCategory)
      ).map(course => ({
        ...course,
        universityName: university.name
      }))
    );
    setFilteredCourses(filtered);
    setVisibleCoursesCount(3); // Reset to show 3 results at first
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleCoursesCount(3); // Reset the visible courses count when changing category
    const filtered = data.universities.flatMap(university =>
      university.courses.filter(course =>
        category === 'All' || course.category === category
      ).map(course => ({
        ...course,
        universityName: university.name
      }))
    );
    setFilteredCourses(filtered);
  };

  const handleShowMore = () => {
    setVisibleCoursesCount(prevCount => prevCount + 3); // Show 3 more courses
  };

  const getHeaderText = () => {
    if (searchCareer) {
      return `Degrees matching "${searchCareer}"`;
    } else if (apsScore) {
      return `Degrees with an APS greater than ${apsScore}`;
    } else {
      return `Available Degrees`;
    }
  };

  return (
    <div className="bg-gra text-white min-h-screen p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Find Your Path</h1>
        <p className="text-gray-400">Calculate your APS score or search for a career to find relevant degrees.</p>
      </header>

      {/* APS Score Section */}
      <section className="mb-8">
        <form onSubmit={handleCalculate} className="flex flex-col md:flex-row gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Enter your APS score:</label>
            <input
              type="number"
              value={apsScore}
              onChange={(e) => setApsScore(e.target.value)}
              className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full"
            />
          </div>
          <button type="submit" className="bg-blue-600 p-2 rounded-lg mt-4 md:mt-0">Calculate</button>
        </form>
      </section>

      {/* Career Search Section */}
      <section className="mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-300">Search by Career:</label>
          <input
            type="text"
            value={searchCareer}
            onChange={(e) => setSearchCareer(e.target.value)}
            className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full"
            placeholder="e.g., Software Engineer"
          />
          <Button onClick={handleCareerSearch} className="bg-gray-800 p-2 rounded-sm mt-4">Search Career</Button>
        </div>
      </section>

      {/* Category Filter */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">Filter by Category:</h2>
        <div className="flex space-x-2">
          {categories.map((category, idx) => (
            <Button
              key={idx}
              className={`p-3 rounded-md  hover:bg-gray-800 light${selectedCategory === category ? ' bg-white text-gray-900 hover:bg-white ' : 'hover:text-white '}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Available Degrees Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">{getHeaderText()}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.slice(0, visibleCoursesCount).map((course, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-bold">{course.name}</h3>
              <p className="text-gray-400">APS Required: {course.aps_required}</p>
              <p className="text-gray-400">Duration: {course.duration} years</p>
              <p className="text-gray-300 mt-2">{course.universityName}</p>
            </div>
          ))}
        </div>
        {visibleCoursesCount < filteredCourses.length && (
          <button onClick={handleShowMore} className="bg-blue-trans p-2 text-md mt-4 rounded-lg">
            Show More...
          </button>
        )}
      </section>
    </div>
  );
};

export default ApplyUniversity;
