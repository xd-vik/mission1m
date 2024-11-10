import React, { useState } from "react";
import logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="rounded-xl p-1 md:border-[3px] md:border-[#a29e9e] mx-1 md:mx-20 bg-green-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  items-center ">
        {/* Left Section: Logo */}
        <div className="  flex  justify-start ml-[-90%] mb-[60px]  md:ml-20 md:mb-0">
          <div className="ml-0 md:ml-[-250px]">
            <img src={logo} alt="Logo" className="md:ml-[100%]" />
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
        {/* <div className="md:hidden ml-[-90%] mt-[-5%]">
            <img src={logo} alt="Logo" />
          </div> */}
        <div
          className={`flex-col md:flex md:flex-row ${
            isOpen ? "flex" : "hidden"
          } md:flex md:space-x-10 text-2xl mr-[70%] md:mr-[25%]`}
        >
          <a
            href="#"
            className="text-black px-3 py-2 rounded-md font-medium hover:bg-green-200 text-xl "
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

      <div
        className={`md:hidden ${
          isOpen ? "flex" : "hidden"
        } flex-col space-y-3 mt-4 ml-[-10%]`}
      >
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
