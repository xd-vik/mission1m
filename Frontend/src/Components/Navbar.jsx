import { useState } from 'react';
import logo from "/logo.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-xl  rounded-[20px] border-[3px] border-gray-300 md:mx-[2px] lg:mx-10 ">
      <div className="flex justify-between  items-center  px-3">
        <div className="flex items-center">
          <div className=" ">
            <img src={logo} alt="Logo" className="w-[50px] h-[50px] " />
          </div>
          <ul className="hidden md:flex space-x-[40px] font-medium justify-center ">
            <li className="lg:pl-[160px] md:pl-[10]" >
              <a href="/" className="hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg ml-10">
                Home
              </a>
            </li>
            <li className=" w-[110px] ">
              <a href="/courses" className="hover:text-gray-900 hover:bg-gray-100 p-[4px] rounded-lg ">
                All Courses
              </a>
            </li>
            <li>
              <a href="/pages" className="hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg ">
                Pages
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg ">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex space-x-4 ml-[20px]">
          <button className=" hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-[110px]">
           <Link to='/login'> <span>Sign In</span> </Link>
          </button>
          <button className=" hover:bg-gray-100 font-bold py-2 px-4 rounded inline-flex items-center w-[110px]">
           <Link to='/signup'> <span>Sign Up</span></Link> 
          </button>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col ">
          <ul className="flex flex-col space-y-2 px-4 py-2">
            <li>
              <a href="/" className="block hover:text-gray-900 hover:bg-gray-100">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="block hover:text-gray-900 hover:bg-gray-100 ">
                All Courses
              </a>
            </li>
            <li>
              <a href="/pages" className="block hover:text-gray-900 hover:bg-gray-100 ">
                Pages
              </a>
            </li>
            <li>
              <a href="/blog" className="block hover:text-gray-900 hover:bg-gray-100 ">
                Blog
              </a>
            </li>
          </ul>
          
          <button className=" hover:bg-gray-100 text-gray-800  px-4 rounded inline-flex items-center">
            <span>Sign In</span>
          </button>
          <button className=" hover:bg-gray-100  py-2 px-4 rounded inline-flex items-center">
            <span>Sign Up</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;