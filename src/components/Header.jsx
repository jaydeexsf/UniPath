// import React from 'react';

// const Header = () => {
//   return (
//     <header className="flex items-center justify-between p-4 bg-white shadow">
//       <h1 className="text-xl font-bold">Hello John Jonson</h1>
//       <div className="flex items-center space-x-4">
//         <img src="/path-to-avatar.png" alt="Avatar" className="w-10 h-10 rounded-full" />
//         <button className="p-2 bg-gray-200 rounded-full">⚙️</button>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useState } from 'react';

const Header = () => {

    const [mode, setMode] = useState('light');

function toDark() {
    if (mode === 'light') {
    setMode('dark')
    localStorage.setItem('mode', mode)
    } else {
        setMode('light')
        localStorage.setItem('mode', mode)
    }
    // console.log(localStorage.getItem('mode'))
}

const currentMode = localStorage.getItem('mode');
console.log(currentMode)

localStorage.setItem('mode', mode)


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
        <div className="dark-light hover:cursor-pointer w-8 h-8 flex justify-center items-center rounded-[50%] bg-gray-300">
            <button onClick={toDark}>
                <CiLight className={`${currentMode === 'dark' ? `hidden` : `block`}`}/>
                <MdDarkMode  className={`${currentMode === 'light' ? `hidden` : `block`}`}/>
            </button>
        </div>
        <div className="noti w-8 h-8 hover:cursor-pointer flex justify-center items-center rounded-[50%] bg-gray-300 relative">
            <span className="bell">
            <IoMdNotificationsOutline size={22}/>
            </span>
            <span className="bell absolute rounded-[50%] h-4 w-4 flex justify-center items-center text-[10px] top-[-3px] text-white right-[-4px] bg-black">
                5
            </span>
        </div>
      </div>
    </div>
  )
}

export default Header
