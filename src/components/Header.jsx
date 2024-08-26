import React, { useEffect } from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { ModeContext } from './ModeContext';
import { useContext } from 'react';
// import { useState } from 'react';

const Header = () => {


const { mode, toggleMode } = useContext(ModeContext);

// useEffect(() => {
//     localStorage.setItem('mode', mode);
//   }, [mode]);

    let current = localStorage.getItem('mode') 

  return (
    <div className='flex justify-between'>
      <div className="left flex items-center gap-2">
        <span className='bg-red-300 w-10 h-10 rounded-[50%] flex items-center justify-center'>sj</span>
        <div className="greet flex text-[10px] flex-col">
            <span>Hello</span>
            <span className="name font-bold">Johannes Moloantoa</span>
        </div>
      </div>

      <div className="right flex items-center gap-2">
      <button onClick={toggleMode}> <div className="dark-light hover:cursor-pointer w-8 h-8 flex justify-center items-center rounded-[50%] bg-gray-300">
                <CiLight className={`${mode === 'dark' ? `block text-black` : `hidden`}`}/>
                <MdDarkMode  className={`${mode === 'light' ? `block text-black` : `hidden text-black`}`}/>
        </div></button>
        <div className="noti w-8 h-8 hover:cursor-pointer flex justify-center items-center rounded-[50%] bg-gray-300 relative">
            <span className="bell">
            <IoMdNotificationsOutline className={`${mode === 'light' ? `` : `block text-black`}`} size={22}/>
            </span>
            <span className="bell absolute rounded-[50%] h-4 w-4 flex justify-center items-center text-[10px] top-[-3px] text-white right-[-4px] bg-black">
                5
            </span>
        </div>
      </div>
    </div>
  );
};

export default Header