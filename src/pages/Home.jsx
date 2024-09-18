import React, { useContext, useState } from 'react';
import { ModeContext } from '../components/ModeContext';
import { FaSearch, FaChevronLeft, FaChevronRight, FaCalculator, FaUniversity, FaBook, FaArrowRight } from 'react-icons/fa';
import { Button } from '../components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import courses from '../assets/Data/CoursesData';
import newsData from '../assets/Data/NewsData';
import { FaCheckCircle } from 'react-icons/fa';
import { FaInfoCircle, FaCalendarAlt, } from 'react-icons/fa';
import Button1 from '../components/Button1';
// import { IoMdDownload } from "react-icons/io";
import { IoMdDownload, IoMdDocument, IoMdFolderOpen } from 'react-icons/io'; // Importing icons
import { IoIosPaper } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa";


// import { FaBook } from "react-icons/fa";



const Home = () => {
  const { mode } = useContext(ModeContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);

  const handleNextNews = () => {
    setActiveNewsIndex((prevIndex) => (prevIndex + 1) % newsData.length);
  };

  const handlePrevNews = () => {
    setActiveNewsIndex((prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length);


    // the floating news thibg

    const [activeNewsIndex, setActiveNewsIndex] = useState(0);

    // Function to handle Next button click
    const handleNextNews = () => {
      setActiveNewsIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    };
  
    // Function to handle Prev button click
    const handlePrevNews = () => {
      setActiveNewsIndex((prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length);
    };
  
    // Auto-slide every 15 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        handleNextNews();
      }, 15000); // 15 seconds
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  };

  return (
    <div className={`${mode === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen`}>

      {/* Floating News Section */}
      <section className="relative my-8 py-4 px-6">
      {/* <h2 className="text-[23px] font-bold mb-6">Latest News</h2> */}

      <div className="relative bg-gray-800 text-white p-6 rounded-lg shadow-lg overflow-hidden">
        {newsData.length > 0 && (
          <>
            {/* Background Image with a Gradient Overlay */}
            <img
              src='https://th.bing.com/th/id/OIP.CcRbbBG1WplUtTHkXK60kgHaEz?rs=1&pid=ImgDetMain' // {newsData[activeNewsIndex]?.image}
              alt={newsData[activeNewsIndex]?.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>

            {/* Content (Text) */}
            <div className="relative z-10 p-6 md:p-10 lg:p-16 flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {newsData[activeNewsIndex]?.title}
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl">
                {newsData[activeNewsIndex]?.description}
              </p>
              <button className="bg-blue-900 duration-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105">
                Read More
              </button>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevNews}
              className="absolute left-2 z-[10000] md:left-6 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 hover:bg-opacity-70 p-3 md:p-4 rounded-full transition"
            >
              <FaChevronLeft className="text-white text-2xl" />
            </button>
            <button
              onClick={handleNextNews}
              className="absolute z-[10000] right-2 md:right-6 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 hover:bg-opacity-70 p-3 md:p-4 rounded-full transition"
            >
              <FaChevronRight className="text-white text-2xl" />
            </button>

            {/* Dots for Carousel Navigation */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {newsData.map((_, index) => (
                <span
                  key={index}
                  className={`h-3 w-3 rounded-full ${activeNewsIndex === index ? 'bg-white' : 'bg-gray-500'} transition`}
                ></span>
              ))}
            </div>
          </>
        )}
      </div>
    </section>


      {/* Courses Section */}
      <section className="my-8 px-6 w-fit overflow-x-collapse">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Featured Courses</h2>
          <Button className="bg-blue-700 hover:bg-slate-800 text-white px-4 py-2 rounded-lg flex items-center">
            More Courses <FaArrowRight className="ml-2" />
          </Button>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5 },
          }}
          className="mt-4  overflow-x-collapse"
        >
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src='https://th.bing.com/th/id/OIP.CcRbbBG1WplUtTHkXK60kgHaEz?rs=1&pid=ImgDetMain'
                    alt={course.title}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="px-4 py-3">
                    <h3 className="font-bold text-lg">{course.title}</h3>
                    <p className="text-gray-300">Duration: {course.duration.hours} hours</p>
                    <Button className="mt-2 bg-slate-950 hover:bg-slate-800 text-white">Enroll Now</Button>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>No courses available right now</p>
          )}
        </Swiper>
      </section>

      {/* APS Calculator Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-gray-800 text-white py-[100px] px-6 mt-[400px] rounde shadow-xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://th.bing.com/th/id/OIP.vltIALCe9-tHk2vwlO0qXAAAAA?rs=1&pid=ImgDetMain"
            alt="APS Calculator Background"
            className="absolute x-[3] inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gray-950 bg-opacity-100"></div>
        </div>

        {/* Floating Calculator Icon */}

        <div className="absolute -top-20 -right-20 transform rotate-[20deg] z-[2] opacity-5 lg:opacity-30">
          <FaCalculator className="text-[400px] text-white" />
        </div>
 
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-2xl font-bold mb-8 -mt-16 tacking-wide leading-tight animate-fadeIn">
            Calculate Your APS
          </h2>

          {/* Description */}
          <p className="text-gray-200 mb-6 text-lg tracking-wider leading-relaxed">
            Find out if you qualify for your desired course. Use our APS calculator to check your eligibility in just a few clicks.
          </p>

          {/* Button */}
          <Button className="relative mt-4 bg-blue-700 hover:bg-blue-700 px-8 py-6 text-lg font-semibold rounded-full transition-all transform duration-700 hover:scale-105 hover:bg-blue-600 shadow-lg focus:ring-4 focus:ring-blue-300 focus:outline-none animate">
            <FaCalculator className="inline-block mr-2 text-2xl" /> Start Calculating
          </Button>

          {/* Subtle Info Icons (e.g., tooltips for APS explanation) */}
          <div className="mt-10 -mb-16 flex justify-center items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaInfoCircle className="text-blue-400 text-xl" />
              <span className="text-sm text-gray-300">APS helps you calculate your scores for university qualification.</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-400 text-xl" />
              <span className="text-sm text-gray-300">Easy to use, just enter your subjects and grades.</span>
            </div>
          </div>
        </div>

        {/* Floating Background Elements for Extra Design */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute top-10 right-10">
          <div className="w-16 h-16 bg-blue-600 rounded-full opacity-50"></div>
        </div>
        <div className="absolute bottom-10 left-10">
          <div className="w-32 h-32 bg-blue-900 rounded-full opacity-40"></div>
        </div>
      </section>


      {/* University Applications Section */}
      <section className="relative bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900 text-white py-16 px-8 rounded-lg shadow-lg my-12 mx-auto max-w-6xl">
  {/* Background Image */}
  <div className="absolute inset-0 opacity-5">
    {/* <img
      src="https://th.bing.com/th/id/OIP.2z0F_8WwB_c8AZD6gw9VsQHaHQ?rs=1&pid=ImgDetMain"
      alt="University"
      className="w-full h-full object-cover"
    /> */}
    <div className="absolute inset-0 bg-black bg-opacity-100"></div>
  </div>

  {/* Content Section */}
  <div className="relative flex flex-col justify-center items-center z-10">
    <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-6">
      {/* Title */}
      <h2 className="text-3xl font-bold mt-[-70px] animate-fadeIn text-center md:text-left">
        University Applications
      </h2>

      {/* Apply Now Button */}
      <Button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 shadow-lg focus:ring-4 focus:ring-indigo-300">
        Apply Now
      </Button>
    </div>

    {/* Description */}
    <p className="text-[14px] text-gray-300 mb-6 leading-relaxed text-center md:text-left">
      Discover universities with open applications and apply directly to your desired courses. Start your academic journey now.
    </p>

    {/* Additional Info or Features */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
      {/* List of Universities Open */}
      <div className="text-sm w-full text-gray-400 space-y-2 ">
        <p className="flex flex-nowrap items-center">
          <FaUniversity className="text-indigo-400 size-10 md:text-16 mr-2" /> Open Applications
        </p>
        <p className="flex items-center">
          <FaCheckCircle className="text-green-400 size-10 mr-2" /> Real-Time Updates
        </p>
        <p className="flex items-center">
          <FaCalendarAlt className="text-yellow-400 size-8 mr-2" /> Key Deadlines
        </p>
      </div>

      {/* Image/Icon - Optional */}
      <div className="flex-shrink-0 mt-8 flex w-full justify-center gap-[6vw]">
        <img
          src="https://th.bing.com/th/id/OIP.0wLFBTqsr_bXmSrHeRTebQHaE8?w=245&h=180&c=7&r=0&o=5&pid=1.7"
          alt="Students applying"
          className="w-48 h-48 rounded-lg shadow-lg object-cover"
        />
        <img
          src="https://th.bing.com/th/id/OIP.aOvQhH6EfHjjXn7bsRNvqAHaE8?rs=1&pid=ImgDetMain"
          alt="Students applying"
          className="w-48 h-48 rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  </div>    

  {/* Decorative Elements */}
  <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 animate-pulse"></div>
  <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full opacity-40"></div>
</section>


      {/* Resources Section */}
      <section className=" py-10">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-4">Matric Resources Hub</h2>
        <p className="text-[14px] mb-6 text-gray-700">
          Access textbooks, past papers, and more to help you succeed in Matric!
        </p>

        {/* Grid Layout for Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Textbooks Section */}
          <div className="bg-sky-900 flex flex-col items-center gap-[5px] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <FaBook className='size-12 text-purple-700' />

            <h3 className="text-xl font-semibold mb-2 text-white">
              Download Textbooks
            </h3>
            <p className="text-gray-300 mb-4">
              Find all the textbooks you need for your subjects.
            </p>
            <Button1
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              href="/textbooks"
              text="Download Textbooks"
              xmlns={<IoMdDownload />} // Using the download icon
            />
          </div>

          {/* Past Papers Section */}
          <div className="bg-purple-950 p-6 flex flex-col items-center rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
           <IoIosPaper className='size-12 text-slate-900'/>
            <h3 className="text-xl font-semibold mb-2">Past Papers & Memos</h3>
            <p className="text-gray-400 mb-4">
              Practice with past exam papers and check your answers.
            </p>
            <Button1
              className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
              href="/past-papers"
              text="Access Past Papers"
              xmlns={<IoMdDocument />} // Using a file document icon
            /> 
          </div>

          {/* Subject Resources Section */}
          <div className="bg-slate-900 p-6 flex flex-col items-center  rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <FaFolderOpen className='size-12 text-center text-purple-700' />
            <h3 className="text-xl font-semibold mb-2">Subject Resources</h3>
            <p className="text-gray-400 mb-4">
              Get additional materials for your subjects.
            </p>
            <Button1
              className="px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
              href="/subject-resources"
              text="View Resources"
              xmlns={<IoMdFolderOpen />} // Using a folder open icon
            />
          </div>
        </div>
      </div>
    </section>
  
      {/* Footer */}
      {/* <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center">
        <p>&copy; 2024 Guidance | All Rights Reserved</p>
      </footer> */}
    </div>
  );
};

export default Home;
