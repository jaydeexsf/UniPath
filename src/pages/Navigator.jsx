import React from 'react';
import { GoHomeFill, GoHome  } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { RiGraduationCapFill } from "react-icons/ri";
import { GrResources } from "react-icons/gr";
import { ModeContext } from '@/components/ModeContext';
import { useContext } from 'react';
import { Button } from '@/components/ui/button';

const Navigator = () => {

  const { mode } = useContext(ModeContext);
  console.log(mode + 'this sied')

  return (
  <div className={`${mode === `light` ? `bg-gray-200 light` : `bg-gray-500 dark` } w-[100%] sticky bottom-0 flex py-3 justify-around`}>
      <Button className="flex flex-col py-7"><div className="navIcons  flex flex-col items-center hover:cursor-pointer">
      <GoHome className="text-3xl "/> 
        <GoHomeFill className="hidden"/>
       <span className="iconText  text-[10px] font-semibold">Home</span>
      </div></Button>

      <Button className="flex flex-col py-7"><div className="navIcons flex flex-col items-center hover:cursor-pointer">
        <FaRegNewspaper className=" text-3xl"/>
        <span className="iconText text-[10px] font-semibold">Latest News</span>
      </div></Button>

      <div className="navIcons flex flex-col items-center hover:cursor-pointer">
        <SiBookstack  className="text- text-3xl"/>
        <span className="iconText text-[10px] font-semibold">Courses</span>
      </div>

      <div className="navIcons flex flex-col items-center hover:cursor-pointer">
         <RiGraduationCapFill  className="text-black text-3xl"/>
          <span className="iconText text-[10px] font-semibold">Applications</span>
      </div>

      <div className="navIcons flex flex-col items-center hover:cursor-pointer">
        <GrResources   className="text-black text-3xl"/>
        <span className="iconText text-[10px] font-semibold">Resources</span>
      </div>
</div>
  )
}

export default Navigator
