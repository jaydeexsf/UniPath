import React, { useState, useEffect, useReducer } from 'react';
import { Button } from '../components/ui/button';
import courses from '../assets/Data/CoursesData';
import LoadingPage from './Loader';

// Initial state for the reducer
const initialState = {
  courses: [],
  filteredCourses: [],
  searchQuery: '',
  selectedCategory: 'All',
  sortType: 'title',
  currentPage: 1,
  coursesPerPage: 6,
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
        ),
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
        }),
      };
    case 'FILTER_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
        filteredCourses: state.courses.filter(course =>
          action.payload === 'All' || course.category === action.payload
        ),
      };
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

const Courses = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  // Set courses data on component mount
  useEffect(() => {
    // Simulate a delay to show loader (you can remove this in production)
    setTimeout(() => {
      dispatch({ type: 'SET_COURSES', payload: courses });
      setIsLoading(false); // Set loading to false once data is loaded
    }, 1000); // Delay for demonstration
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    dispatch({ type: 'SEARCH', payload: e.target.value });
  };

  // Handle sorting by title or duration
  const handleSort = (e) => {
    dispatch({ type: 'SORT', payload: e.target.value });
  };

  // Handle filtering by category
  const handleFilterCategory = (e) => {
    dispatch({ type: 'FILTER_CATEGORY', payload: e.target.value });
  };

  // Handle pagination
  const indexOfLastCourse = state.currentPage * state.coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - state.coursesPerPage;
  const currentCourses = state.filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => {
    dispatch({ type: 'SET_PAGE', payload: pageNumber });
  };

  // Unique categories for filtering
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const categories = Array.from(new Set(courses.map((course) => course.category)));
    setUniqueCategories(categories);
  }, [courses]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="px-8 sm:px-6 py-8">
      <h1 className="text-[30px] font-bold text-center mb-6">Courses</h1>

      {/* Search, Filter, and Sort Controls */}
      <div className="flex justify-between gap-[5px] mb-8">
        <input
          type="text"
          placeholder="Search courses..."
          className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded"
          value={state.searchQuery}
          onChange={handleSearch}
        />

        <select
          className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded"
          value={state.selectedCategory}
          onChange={handleFilterCategory}
        >
          <option value="All">All Subjects</option>
          {uniqueCategories.map((categoryORSubject, index) => (
            <option key={index} value={categoryORSubject}>
              {categoryORSubject}
            </option>
          ))}
        </select>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentCourses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-900 relative hover:cursor-pointer transition-all duration-500 hover:bg-gray-800 hover:scale-[1.005] shadow-md rounded-lg flex flex-col transition-all duration-300"
          >
            <img
              className="rounded-t-md w-full h-48 object-cover"
              src="https://th.bing.com/th/id/R.f7a1369a3486bf4bf68d75406f2404b5?rik=Kwi%2fMe%2fIKHpwcQ&pid=ImgRaw&r=0"
              alt={course.title}
            />
            <div className="py-2 px-4">
              <h2 className="text-xl font-semibold text-white">{course.title}</h2>
              <p className="text-gray-300">{course.description}</p>
              <p className="text-sm text-gray-400">Instructor: {course.instructor}</p>
              <p className="text-sm text-gray-400">Rating: {course.rating} ★ | Enrolled: {course.studentsEnrolled}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center space-x-2">
        {[...Array(Math.ceil(state.filteredCourses.length / state.coursesPerPage))].map((_, i) => (
          <Button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`py-4 px-2 ${state.currentPage === i + 1 ? 'bg-blue-800 hover:bg-blue-800' : 'bg-gray-700'}`}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Courses;
