import React, { useState, useContext } from 'react';
import { GoHomeFill, GoHome } from 'react-icons/go';
import { FaRegNewspaper } from 'react-icons/fa';
import { SiBookstack } from 'react-icons/si';
import { RiGraduationCapFill } from 'react-icons/ri';
import { GrResources } from 'react-icons/gr';
import { ModeContext } from '../components/ModeContext';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Navigator = () => {
  const { mode } = useContext(ModeContext);
  const [clickedIcon, setClickedIcon] = useState(localStorage.getItem('page'));

  const handleIconClick = (iconName) => {
    setClickedIcon(iconName);
    localStorage.setItem('page', iconName);
  };

  return (
    <div className={`${mode === 'light' ? 'bg-gray-200 dark' : 'bg-gray-500 light'} transition-all duration-1000 z-50 w-[100%] sticky bottom-[-0px] flex justify-around`}>
      <div className="flex-col py-2">
        <Link to="/home" onClick={() => handleIconClick('home')}>
          <Button className={`flex-col px-3 py-7 ${clickedIcon === 'home' ? 'scale-110' : ''}`}>
            <div className="navIcons flex flex-col items-center">
              <GoHome className={`text-2xl ${clickedIcon === 'home' ? 'hidden' : ''}`} />
              <GoHomeFill className={`text-2xl ${clickedIcon === 'home' ? '' : 'hidden'}`} />
              <span className="iconText text-[10px] font-semibold">Home</span>
            </div>
          </Button>
        </Link>
      </div>

      <div className="flex-col py-2">
        <Link to="/news" onClick={() => handleIconClick('news')}>
          <Button className={`flex-col px-2 py-7 ${clickedIcon === 'news' ? 'scale-110' : ''}`}>
            <div className="navIcons flex flex-col items-center">
              <FaRegNewspaper className="text-2xl" />
              <span className="iconText text-[10px] font-semibold">Latest News</span>
            </div>
          </Button>
        </Link>
      </div>

      <div className="flex-col py-2">
        <Link to="/courses" onClick={() => handleIconClick('courses')}>
          <Button className={`flex-col py-7 ${clickedIcon === 'courses' ? 'scale-110' : ''}`}>
            <div className="navIcons flex flex-col items-center">
              <SiBookstack className="text-2xl" />
              <span className="iconText text-[10px] font-semibold">Courses</span>
            </div>
          </Button>
        </Link>
      </div>

      <div className="flex-col py-2">
        <Link to="/applications" onClick={() => handleIconClick('applications')}>
          <Button className={`flex-col px-2 py-7 ${clickedIcon === 'applications' ? 'scale-110' : ''}`}>
            <div className="navIcons flex flex-col items-center">
              <RiGraduationCapFill className="text-2xl" />
              <span className="iconText text-[10px] font-semibold">Applications</span>
            </div>
          </Button>
        </Link>
      </div>

      <div className="flex-col px-0 py-2">
        <Link to="/resources" onClick={() => handleIconClick('resources')}>
          <Button className={`flex-col py-7 ${clickedIcon === 'resources' ? 'scale-110' : ''}`}>
            <div className="navIcons flex flex-col items-center">
              <GrResources className="text-2xl" />
              <span className="iconText text-[10px] font-semibold">Resources</span>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navigator;


