import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaMobileAlt, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-green-50 p-6 sm:p-10 rounded-lg shadow-lg max-w-5xl w-full">
        
        {/* Heading */}
        <h1 className="font-alexandria text-center text-green-700 text-4xl sm:text-5xl font-bold mb-8">Contact Us</h1>

        <div className="flex flex-col md:flex-row">
          
          {/* Left Section */}
          <div className="flex-1 text-green-700 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-alexandria">Our Office</h2>
            <div className="space-y-2">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
                <p className="ml-3 text-green-800 hover:underline">
                  F-02, C-23, <br />
                  Sector-63, <br />
                  Noida - 201305 <br />
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-green-600 text-xl" />
                <p className="ml-3 text-green-800 hover:underline">+91 120 499 4499</p>
              </div>
              <div className="flex items-center">
                <FaMobileAlt className="text-green-600 text-xl" />
                <p className="ml-3 text-green-800 hover:underline">+91 78400 79095</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block border-l border-gray-300 mx-8"></div>

          {/* Middle Section */}
          <div className="flex-1 space-y-4 mt-8 md:mt-0">
            <h2 className="text-center text-green-700 text-2xl sm:text-3xl font-bold font-alexandria">Say Hello</h2>
            <form className="space-y-4">
              <input  
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border border-green-200 rounded-2xl focus:outline-none focus:border-green-400"
              />
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="w-full p-3 border border-green-200 rounded-2xl focus:outline-none focus:border-green-400"
              />
              <textarea 
                placeholder="Message" 
                className="w-full p-3 border border-green-200 rounded-2xl h-32 resize-none focus:outline-none focus:border-green-400"
              ></textarea>
              <div className="text-center">
                <button className="bg-green-600 text-white px-6 py-2 rounded-2xl hover:bg-green-700 transition">
                  Know More
                </button>
              </div>
            </form>
          </div>
          <div className="hidden md:block border-l border-gray-300 mx-8"></div>

          {/* Right Section */}
          <div className="flex-1 mt-8 md:mt-0 flex flex-col items-center">
            <h2 className="font-alexandria text-2xl sm:text-3xl font-bold text-green-700 mb-4">Connect</h2>
            <div className="flex flex-col space-y-3 text-center">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-green-800 hover:text-blue-400">
                <FaTwitter className="text-xl text-green-600 mr-2" /> Twitter
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-green-800 hover:text-blue-600">
                <FaFacebook className="text-xl text-green-600 mr-2" /> Facebook
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-green-800 hover:text-blue-700">
                <FaLinkedin className="text-xl text-green-600 mr-2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
