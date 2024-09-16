import React, { useState, useEffect, useReducer } from 'react';
import { Button } from '../components/ui/button';
import courses from '../assets/Data/CoursesData'

// Initial state for the reducer
const initialState = {
  courses: [],
  filteredCourses: [],
  searchQuery: '',
  selectedCategory: 'All',
  sortType: 'title',
  currentPage: 1,
  coursesPerPage: 6
};

// Reducer function for handling state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COURSES':
      return { ...state, courses: action.payload, filteredCourses: action.payload };
    case 'SEARCH':
      return {
        ...state,
        searchQuery: action.payload,
        filteredCourses: state.courses.filter(course =>
          course.title.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    case 'SORT':
      return {
        ...state,
        sortType: action.payload,
        filteredCourses: [...state.filteredCourses].sort((a, b) => {
          if (action.payload === 'duration') {
            return a.duration.hours - b.duration.hours;
          }
          return a.title.localeCompare(b.title);
        })
      };
    case 'FILTER_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
        filteredCourses: state.courses.filter(course =>
          action.payload === 'All' || course.category === action.payload
        )
      };
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

const Courses = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Set courses data on component mount
  useEffect(() => {
    dispatch({ type: 'SET_COURSES', payload: courses });
  }, []);

  // Handle search input
  const handleSearch = e => {
    dispatch({ type: 'SEARCH', payload: e.target.value });
  };

  // Handle sorting by title or duration
  const handleSort = e => {
    dispatch({ type: 'SORT', payload: e.target.value });
  };

  // Handle filtering by category
  const handleFilterCategory = e => {
    dispatch({ type: 'FILTER_CATEGORY', payload: e.target.value });
  };

  // Handle pagination
  const indexOfLastCourse = state.currentPage * state.coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - state.coursesPerPage;
  const currentCourses = state.filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = pageNumber => {
    dispatch({ type: 'SET_PAGE', payload: pageNumber });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Courses</h1>

      {/* Search, Filter, and Sort Controls */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search courses..."
          className="p-2 border rounded"
          value={state.searchQuery}
          onChange={handleSearch}
        />

        <select className="p-2 border rounded" value={state.selectedCategory} onChange={handleFilterCategory}>
          <option value="All">All Categories</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Sciences">Sciences</option>
          <option value="University Applications">University Applications</option>
          <option value="Language">Language</option>
        </select>

        <select className="p-2 border rounded" value={state.sortType} onChange={handleSort}>
          <option value="title">Sort by Title</option>
          <option value="duration">Sort by Duration</option>
        </select>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentCourses.map(course => (
          <div key={course.id} className="bg-gray-900 shadow-md rounded-lg flex flex-col transition-all duration-300">
            <img className="rounded-t-md w-full h-48 object-cover" src={course.thumbnail} alt={course.title} />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">{course.title}</h2>
              <p className="text-gray-300">{course.description}</p>
              <div className="mt-2 flex justify-between">
                <span className="text-sm text-blue-700 bg-black px-2 rounded">{course.duration.hours}h {course.duration.minutes}m</span>
                <Button className="bg-gray-600 text-xs" onClick={() => setSelectedCourse(course.title)}>Enroll</Button>
              </div>
              <p className="text-sm text-gray-400 mt-2">Instructor: {course.instructor}</p>
              <p className="text-sm text-gray-400">Rating: {course.rating} ★ | Enrolled: {course.studentsEnrolled}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center space-x-2">
        {[...Array(Math.ceil(state.filteredCourses.length / state.coursesPerPage))].map((_, i) => (
          <Button key={i} onClick={() => paginate(i + 1)} className={`p-2 ${state.currentPage === i + 1 ? 'bg-blue-500' : 'bg-gray-500'}`}>
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Courses;



