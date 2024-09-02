import React from 'react';

const Courses = () => {
//////////////////////// DAatabse will be used instead ///////////

// coursesData.js
const courses = [
  {
    id: 1,
    title: "How to Apply to University",
    description: "A comprehensive guide on how to apply to universities, including tips on filling out applications and writing personal statements.",
    category: "University Applications",
    duration: "4 hours"
  },
  {
    id: 2,
    title: "Mathematics Grade 12",
    description: "An advanced course covering all the essential topics in Grade 12 Mathematics.",
    category: "Mathematics",
    duration: "10 hours"
  },
  {
    id: 3,
    title: "Physical Sciences Grade 12",
    description: "A detailed course that covers Grade 12 Physical Sciences topics with practical examples.",
    category: "Sciences",
    duration: "8 hours"
  },
  {
    id: 4,
    title: "English Language and Literature",
    description: "A course focused on improving your English skills, including essay writing and literary analysis.",
    category: "Language",
    duration: "6 hours"
  },
  {
    id: 5,
    title: "Life Sciences Grade 12",
    description: "An in-depth course on Grade 12 Life Sciences, covering both theory and practical aspects.",
    category: "Sciences",
    duration: "9 hours"
  }
];


/////////////////////////////////////////////////////////////////

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-4 hover:bg-blue-50 transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-800">{course.title}</h2>
            <p className="text-gray-700 mt-2">{course.description}</p>
            <div className="mt-4">
              <span className="text-sm font-medium text-gray-600">Category: </span>
              <span className="text-sm text-blue-700">{course.category}</span>
            </div>
            <div className="mt-2">
              <span className="text-sm font-medium text-gray-600">Duration: </span>
              <span className="text-sm text-blue-700">{course.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;



