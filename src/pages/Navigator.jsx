// import React, { useState, useContext } from 'react';
// import { GoHomeFill, GoHome } from 'react-icons/go';
// import { FaRegNewspaper } from 'react-icons/fa';
// import { SiBookstack } from 'react-icons/si';
// import { RiGraduationCapFill } from 'react-icons/ri';
// import { GrResources } from 'react-icons/gr';
// import { ModeContext } from '@/components/ModeContext';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// const Navigator = () => {

//   // localStorage.setItem('page', 'home')
  
//   const { mode } = useContext(ModeContext);
//   const [clickedIcon, setClickedIcon] = useState(localStorage.getItem('page'));

//   const handleIconClick = (iconName) => {
//     setClickedIcon(iconName);
//     localStorage.setItem('page', iconName)
//     setTimeout(()=> {
//       // window.location.href = `/${localStorage.getItem('page')}`
//       <Link to={`/${localStorage.getItem('page')}`}></Link>
//       console.log(iconName)
//     }, 10)
   
//   };
  
// console.log(clickedIcon)
//   return (
//     <div className={`${mode === 'light' ? 'bg-gray-200 dark' : 'bg-gray-500 light'} z-50 w-[100%] sticky bottom-[-15px] flex justify-around`}>
//       <div className="flex-col py-2">
//         {clickedIcon === 'home' ? (
//           <Button className="flex-col scale-110 px-4 py-7">
//             <div className="navIcons flex flex-col items-center hover:cursor-pointer" >
//               <GoHome className="text-2xl" />
//               <GoHomeFill className="hidden" />
//               <span className="iconText text-[10px] font-semibold">Home</span>
//             </div>
//           </Button>
//         ) : (
//           <div className="navIcons flex flex-col items-center hover:cursor-pointer" onClick={() => handleIconClick('home')}>
//             <GoHome className="text-2xl" />
//             <GoHomeFill className="hidden" />
//             <span className="iconText text-[10px] font-semibold">Home</span>
//           </div>
//         )}
//       </div>

//       <div className="flex-col py-2">
//         {clickedIcon === 'news' ? (
//           <Button className="flex-col scale-110  px-2 py-7">
//             <div className="navIcons flex flex-col items-center hover:cursor-pointer" >
//               <FaRegNewspaper className="text-2xl" />
//               <span className="iconText text-[10px] font-semibold">Latest News</span>
//             </div>
//           </Button>
//         ) : (
//           <div className="navIcons flex flex-col items-center hover:cursor-pointer" onClick={() => handleIconClick('news')}>
//             <FaRegNewspaper className="text-2xl" />
//             <span className="iconText text-[10px] font-semibold">Latest News</span>
//           </div>
//         )}
//       </div>

//       <div className="flex-col py-2">
//         {clickedIcon === 'courses' ? (
//           <Button className="flex-col scale-110  py-7">
//             <div className="navIcons flex flex-col items-center hover:cursor-pointer" >
//               <SiBookstack className="text-2xl" />
//               <span className="iconText text-[10px] font-semibold">Courses</span>
//             </div>
//           </Button>
//         ) : (
//           <div className="navIcons flex flex-col items-center hover:cursor-pointer" onClick={() => handleIconClick('courses')}>
//             <SiBookstack className="text-2xl" />
//             <span className="iconText text-[10px] font-semibold">Courses</span>
//           </div>
//         )}
//       </div>

//       <div className="flex-col py-2">
//         {clickedIcon === 'applications' ? (
//           <Button className="flex-col scale-110  px-2 py-7">
//             <div className="navIcons flex flex-col items-center hover:cursor-pointer" >
//               <RiGraduationCapFill className=" text-2xl" />
//               <span className="iconText text-[10px] font-semibold">Applications</span>
//             </div>
//           </Button>
//         ) : (
//           <div className="navIcons flex flex-col items-center hover:cursor-pointer" onClick={() => handleIconClick('applications')}>
//             <RiGraduationCapFill className=" text-2xl" />
//             <span className="iconText text-[10px] font-semibold">Applications</span>
//           </div>
//         )}
//       </div>

//       <div className="flex-col px-2 py-2">
//         {clickedIcon === 'resources' ? (
//           <Button className="flex-col scale-110  py-7">
//             <div className="navIcons flex flex-col items-center hover:cursor-pointer" >
//               <GrResources className=" text-2xl" />
//               <span className="iconText text-[10px] font-semibold">Resources</span>
//             </div>
//           </Button>
//         ) : (
//           <div className="navIcons flex flex-col items-center hover:cursor-pointer" onClick={() => handleIconClick('resources')}>
//             <GrResources className=" text-2xl" />
//             <span className="iconText text-[10px] font-semibold">Resources</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navigator;

import React, { useState, useContext } from 'react';
import { GoHomeFill, GoHome } from 'react-icons/go';
import { FaRegNewspaper } from 'react-icons/fa';
import { SiBookstack } from 'react-icons/si';
import { RiGraduationCapFill } from 'react-icons/ri';
import { GrResources } from 'react-icons/gr';
import { ModeContext } from '@/components/ModeContext';
import { Button } from '@/components/ui/button';
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
          <Button className={`flex-col px-4 py-7 ${clickedIcon === 'home' ? 'scale-110' : ''}`}>
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

      <div className="flex-col px-2 py-2">
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


