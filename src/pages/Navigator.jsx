import React, { useState, useContext } from 'react';
import { GoHomeFill, GoHome } from 'react-icons/go';
import { FaRegNewspaper } from 'react-icons/fa';
import { SiBookstack } from 'react-icons/si';
import { RiGraduationCapFill } from 'react-icons/ri';
import { GrResources } from 'react-icons/gr';
import { ModeContext } from '../components/ModeContext';
import { Link } from 'react-router-dom';

const Navigator = () => {
  const { mode, scrollToTop  } = useContext(ModeContext);
  const [clickedIcon, setClickedIcon] = useState(localStorage.getItem('page'));

  const handleIconClick = (iconName) => {
    setClickedIcon(iconName);
    localStorage.setItem('page', iconName);
    scrollToTop();
  };

  const activeColor = mode === 'light' ? 'text-blue-900' : 'text-gray-300';

  return (
    <div className={`${mode === 'light' ? 'bg-gray-200' : 'bg-gray-500'} transition-all duration-1000 z-50 w-full fixed bottom-0 flex justify-around`}>
      <div className=" py-2">
        <Link to="/UniPath" className='flex flex-col items-center' onClick={() => handleIconClick('home')}>
          <GoHomeFill className={`text-2xl ${clickedIcon === 'home' ? activeColor : ''}`} />
          <span className={`text-[12px] font-semibold ${clickedIcon === 'home' ? activeColor : ''}`}>Home</span>
        </Link>
      </div>

      <div className="py-2">
        <Link to="/UniPath/news" className='flex flex-col items-center' onClick={() => handleIconClick('news')}>
          <FaRegNewspaper className={`text-2xl ${clickedIcon === 'news' ? activeColor : ''}`} />
          <span className={`text-[12px] font-semibold ${clickedIcon === 'news' ? activeColor : ''}`}>Latest News</span>
        </Link>
      </div>

      <div className="py-2">
        <Link to="/UniPath/courses" className='flex flex-col items-center ' onClick={() => handleIconClick('courses')}>
          <SiBookstack className={`text-2xl ${clickedIcon === 'courses' ? activeColor : ''}`} />
          <span className={`text-[12px] font-semibold ${clickedIcon === 'courses' ? activeColor : ''}`}>Courses</span>
        </Link>
      </div>

      <div className="py-2">
        <Link to="/UniPath/applications" className='flex flex-col items-center ' onClick={() => handleIconClick('applications')}>
          <RiGraduationCapFill className={`text-2xl ${clickedIcon === 'applications' ? activeColor : ''}`} />
          <span className={`text-[12px] font-semibold ${clickedIcon === 'applications' ? activeColor : ''}`}>Applications</span>
        </Link>
      </div>

      <div className="py-2">
        <Link to="/UniPath/resources" className='flex flex-col items-center ' onClick={() => handleIconClick('resources')}>
          <GrResources className={`text-2xl ${clickedIcon === 'resources' ? activeColor : ''}`} />
          <span className={`text-[12px] font-semibold ${clickedIcon === 'resources' ? activeColor : ''}`}>Resources</span>
        </Link>
      </div>
    </div>
  );
};

export default Navigator;



