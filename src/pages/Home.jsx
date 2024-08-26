import React from 'react'
import { ModeContext } from '@/components/ModeContext';
import { useContext } from 'react';

const Home = () => {

    const {mode} = useContext(ModeContext);

  return (
    // <div className={`${mode === 'dark' ? `bg-[black] text-white` : `bg-gray-200 text-black`} h-[100vh]`}>
            
    // </div>

    <div></div>
  )
}

export default Home
