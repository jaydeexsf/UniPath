import React, { useEffect, useState } from 'react';
import { IoIosLogIn, IoMdNotificationsOutline } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { ModeContext } from './ModeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser  } from "@clerk/clerk-react";
import { Button } from './ui/button';


const Header = () => {


const { mode, toggleMode, gettingthelastpathname } = useContext(ModeContext);

    const { user, isLoaded  } = useUser();
    const [name, setName] = useState('')
 
    useEffect(() => {
        if (isLoaded  && user) {
          setName(user.fullName || 'profile'); 
        }
      }, [isLoaded ]);

      if (SignedIn === true) {
      window.location.href = '/';
      }

  return (
    <div className='flex fixed z-[10000] top-0 left-0 w-full bg-gray-950 mt-0 py-4 px-4 justify-between'>
      <div className="flex items-center gap-2">
        
        <SignedOut>
        <Button>
            <Link to='home'><SignInButton className="text-[12px]" /></Link>
        </Button>    
        </SignedOut>
        
        <SignedIn>
            <UserButton className=""/>
          <div className="greet flex text-[10px] text-white flex-col">
            <span>Hello</span>
            <span className="name font-bold"> {name}</span>
        </div>
        </SignedIn>
       
      </div>

      <div className="right flex items-center gap-2">
      <button onClick={toggleMode}> <div className="dark-light hover:cursor-pointer w-8 h-8 flex justify-center items-center rounded-[50%] bg-gray-300">
                <CiLight className={`${mode === 'dark' ? `block text-black` : `hidden`} text-lg`}/>
                <MdDarkMode  className={`${mode === 'light' ? `block text-black` : `hidden text-black`} text-lg`}/>
        </div></button>
        <div className="noti w-8 h-8 hover:cursor-pointer flex justify-center items-center rounded-[50%] hover:bg-gray-700 bg-opacity-25 hover:p-[16px] rounded-full relative">
            <Link to="/notifications"> <button onClick={gettingthelastpathname()}> <span className="bell">
            <IoMdNotificationsOutline className='font-extrabold ' size={26}/>
            </span> </button> </Link>
            <span className="bell font-extralight absolute flex-row rounded-[50%] py-[0]  h-fit w-fit px-[3px] flex justify-center items-center text-[10px] top-[0px] translate-y-[18%] text-white right-[0px] bg-blue-800">
                <span>9</span>
                <span className='translate-y-[-5%]'>+</span>
            </span>
        </div>
      </div>
    </div>
  );
};

export default Header

