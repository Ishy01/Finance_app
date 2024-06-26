import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const NavBar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="flex justify-between items-center text-white h-24 px-2  mx-auto max-w-[1240px]">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT</h1>
      <ul className="hidden md:flex md:gap-8">
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {
            nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>
        }
      </div>
      <div className={nav ? "fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"}>
      <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};
