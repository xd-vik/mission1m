import React from "react";
import logo from "/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-nav shadow-lg w-full rounded-xl p-4 border-[2px] border-[#b75757]">
      <div className="max-w-7xl mx-auto px-5 flex justify-between">
        {/* Left Section: Logo and Main Menu Items */}
        <div className="flex items-center space-x-20 w-full ">
          {/* Logo */}
          <div className="flex align-start w-[15%]">
            <img src={logo} alt="Logo" />
          </div>

          {/* Main Menu Items */}
          <div className="flex space-x-20 justify-center items-center w-[65%]">
            <a
              href="#"
              className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              All Courses
            </a>
            <a
              href="#"
              className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Pages
            </a>
            <a
              href="#"
              className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Blogs
            </a>
          </div>
        </div>

        {/* Right Section: Sign In and Sign Up */}
        <div className="flex space-x-4 w-[20%]">
          <a
            href="#"
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Sign In
          </a>
          <a
            href="#"
            className="text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
