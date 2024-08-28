import React, { useEffect, useState } from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { ModeContext } from './ModeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser  } from "@clerk/clerk-react";
import { Button } from './ui/button';


const Header = () => {


const { mode, toggleMode } = useContext(ModeContext);

    const { user, isLoaded  } = useUser();
    const [name, setName] = useState('')
 
    useEffect(() => {
        if (isLoaded  && user) {
          setName(user.fullName || 'Johannes'); // Default to 'Johannes' if fullName is not available
        }
      }, [isLoaded , user]);


    // console.log(theName)


  return (
    <div className='flex justify-between'>
      <div className="flex items-center gap-2">
        
        <SignedOut>
        <Button>
            <SignInButton className="text-2xl" />
            </Button>    
        </SignedOut>
        
        <SignedIn>
            <UserButton className=""/>
            <div className="greet flex text-[10px] flex-col">
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
        <div className="noti w-8 h-8 hover:cursor-pointer flex justify-center items-center rounded-[50%] bg-gray-300 relative">
            <Link to="/notifications"><span className="bell">
            <IoMdNotificationsOutline className={`${mode === 'light' ? `` : `block text-black`}`} size={22}/>
            </span></Link>
            <span className="bell absolute rounded-[50%] h-4 w-4 flex justify-center items-center text-[10px] top-[-3px] text-white right-[-4px] bg-black">
                5
            </span>
        </div>
      </div>
    </div>
  );
};

export default Header

