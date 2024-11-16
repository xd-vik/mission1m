import React, { useState } from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="rounded-xl p-1 md:border-[3px] md:border-[#a29e9e] mx-1 md:mx-20 bg-green-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Left Section: Logo */}
        <div className="  flex  justify-start ml-[0%] mb-[60px]  md:ml-20 md:mb-0">
          <div className="ml-0 md:ml-[-250px]">
            <img src={logo} alt="Logo" className="md:ml-[120%]" />
          </div>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black text-xl focus:outline-none mt-[-100px] mr-[-80%] "
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        {/* Main Menu*/}
    
        <div
          className={`flex-col md:flex md:flex-row ${
            isOpen ? "flex" : "hidden"
          } md:flex md:space-x-10 text-2xl  md:mr-[25%] flex justify-start flex-shrink-0 pt-2  `}
        >
          <a
            href="#"
            className="text-black px-3 py-2 rounded-md font-medium hover:bg-green-200 text-xl block"
          >
            Home
          </a>
          <a
            href="#"
            className="px-3 py-2 rounded-md font-medium hover:bg-green-200 text-xl w-[145px] "
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
        <Link 
          to='/login'
            className="text-black px-2 py-3 rounded-md font-medium hover:bg-green-200 text-xl  w-[80px] "
          >
            Sign In </Link>
          
          <Link 
            to='/signUp'
            className="text-black px-2 py-3 rounded-md font-medium hover:bg-green-200 text-xl  w-[90px]"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "flex" : "hidden"
        } flex-col`}
      >
        <a
          href="#"
          className="text-black px-1 py-1 rounded-md font-medium hover:bg-green-200 text-xl"
        >
          Sign In
        </a>
        <a
          href="#"
          className="text-black px-1 py- rounded-md font-medium hover:bg-green-200 text-xl"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;