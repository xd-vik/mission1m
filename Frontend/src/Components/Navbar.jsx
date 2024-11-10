import React, { useState } from "react";
import logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="rounded-xl p-1 md:border-[3px] md:border-[#a29e9e] mx-1 md:mx-20 bg-green-100">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center ">
        {/* Left Section: Logo */}
        <div className="flex  justify-between ml-[-270px] w-full">
          <div className="">
            <img src={logo} alt="Logo" />
          </div>


          {/* Toggle Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black text-xl focus:outline-none mt-[1px] mr-[-100px] "
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Main Menu*/}
        <div className="md:hidden ml-[-90%] mt-[-50px]">
            <img src={logo} alt="Logo" />
          </div>
        <div className={`flex-col md:flex md:flex-row ${isOpen ? "flex" : "hidden"} md:flex md:space-x-10 text-2xl mr-[400px]`}>
          <a
            href="#"
            className="text-black px-3 py-2 rounded-md font-medium hover:bg-green-200 text-xl "
          >
            Home
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded-md font-medium hover:bg-green-200 text-xl w-[150px] "
          >
          All Courses
          </a>
          <a
            href="#"
            className="text-black px-3 py-2 rounded-md font-medium hover:bg-green-200 text-xl"
          >
            Pages
          </a>
          <a
            href="#"
            className="text-black px-3 py-2 rounded-md font-medium hover:bg-green-200 text-xl"
          >
            Blogs
          </a>
        </div>

        {/*  Sign In and Sign Up */}
        <div className="hidden md:flex space-x-7 mt-4 md:mt-0 ">
          <a
            href="#"
            className="text-black px-2 py-3 rounded-md font-medium hover:bg-green-200 text-xl  w-[80px] "
          >
            Sign In
          </a>
          <a
            href="#"
            className="text-black px-2 py-3 rounded-md font-medium hover:bg-green-200 text-xl  w-[90px]"
          >
            Sign Up
          </a>
        </div>
      </div>

    
      <div className={`md:hidden ${isOpen ? "flex" : "hidden"} flex-col space-y-3 mt-4`}>
        <a
          href="#"
          className="text-black px-2 py-3 rounded-md font-medium hover:bg-green-200 text-xl ml-20"
        >
          Sign In
        </a>
        <a
          href="#"
          className="text-black px-2 py-3 rounded-md font-medium hover:bg-green-200 text-xl ml-20"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;