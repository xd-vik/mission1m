import React from "react";
import { FaMapMarkerAlt, FaPhone, FaMobileAlt } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center px-4">
      <div className="bg-green-50 p-10 rounded-lg shadow-lg max-w-4xl w-full">
        {/* Heading */}
        <h1 className="font-alexandria text-center text-green-700 text-4xl md:text-5xl font-bold mb-8">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row">
          {/* Our Office Section */}
          <div className="flex-1 text-green-700 space-y-4 md:pr-6">
            <h2 className="text-2xl md:text-3xl font-bold font-alexandria md:font-extraheavy">
              Our Office
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
                <p className="ml-3 text-green-800 hover:underline">
                  F-02, C-23, <br />
                  Sector-63, <br />
                  Noida - 201305
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-green-600 text-xl" />
                <p className="ml-3 text-green-800 hover:underline">
                  +91 120 499 4499
                </p>
              </div>
              <div className="flex items-center">
                <FaMobileAlt className="text-green-600 text-xl" />
                <p className="ml-3 text-green-800 hover:underline">
                  +91 78400 79095
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block border-l border-gray-300"></div>

          {/* Say Hello Section */}
          <div className="flex-1 mt-8 md:mt-0 md:pl-6">
            <h2 className="text-center text-green-700 text-2xl md:text-3xl font-bold font-alexandria">
              Say Hello
            </h2>
            <form className="space-y-4 mt-4">
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
        </div>

        {/* Connect Section */}
        <div className="mt-10 md:mt-8 text-center">
          <h2 className="font-alexandria text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Connect
          </h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-800 hover:text-blue-400"
            >
              <FaTwitter className="text-xl text-green-600 mr-2" />
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-800 hover:text-blue-600"
            >
              <FaFacebook className="text-xl text-green-600 mr-2" />
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-800 hover:text-blue-700"
            >
              <FaLinkedin className="text-xl text-green-600 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
