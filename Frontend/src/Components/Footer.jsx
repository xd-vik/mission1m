import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white py-10">
      {/* Footer Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:text-center sm:items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Quick Links Section */}
          <div className="flex flex-col sm:items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Quick Links
            </h2>
            <Link
              to="/"
              className="text-[0.95rem] text-gray-600 hover:text-blue-600 mb-2"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-[0.95rem] text-gray-600 hover:text-blue-600 mb-2"
            >
              Courses
            </Link>
            <Link
              to="/about"
              className="text-[0.95rem] text-gray-600 hover:text-blue-600 mb-2"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-[0.95rem] text-gray-600 hover:text-blue-600 mb-2"
            >
              Contact Us
            </Link>
            <Link
              to="/privacy-policy"
              className="text-[0.95rem] text-gray-600 hover:text-blue-600 mb-2"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[0.95rem] text-gray-600 hover:text-blue-600 mb-2"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col sm:items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Follow Us
            </h2>
            <Link className="flex items-center text-[0.95rem] font-semibold text-zinc-500 hover:text-blue-500 mb-2">
              <FaFacebook className="m-1" />
              Facebook
            </Link>
            <Link className="flex items-center text-[0.95rem] font-semibold text-zinc-500 hover:text-blue-500 mb-2">
              <FaInstagram className="m-1" />
              Instagram
            </Link>
            <Link className="flex items-center text-[0.95rem] font-semibold text-zinc-500 hover:text-blue-500 mb-2">
              <FaYoutube className="m-1" />
              Youtube
            </Link>
            <Link className="flex items-center text-[0.95rem] font-semibold text-zinc-500 hover:text-blue-500 mb-2">
              <FaLinkedin className="m-1" />
              LinkedIn
            </Link>
            <Link className="flex items-center text-[0.95rem] font-semibold text-zinc-500 hover:text-blue-500 mb-2">
              <FaTwitter className="m-1" />
              Twitter
            </Link>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col sm:items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Contact Information
            </h2>
            <p className="text-[0.95rem] text-gray-600 mb-2 sm:text-center">
              Address:{" "}
              <span className="text-gray-800">
                F-02, C-23, Sector-63, Noida - 201305
              </span>
            </p>
            <p className="text-[0.95rem] text-gray-600 mb-2 sm:text-center">
              Email:{" "}
              <a
                href="mailto:contact@mission1m.com"
                className="text-blue-600 hover:underline"
              >
                contact@mission1m.com
              </a>
            </p>
            <p className="text-[0.95rem] text-gray-600 mb-2 sm:text-center">
              Phone: <span className="text-gray-800">+91 120 499 4499</span>
            </p>
            <p className="text-[0.95rem] text-gray-600 mb-2 sm:text-center">
              Support:{" "}
              <a
                href="mailto:support@mission1m.com"
                className="text-blue-600 hover:underline"
              >
                support@mission1m.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="mt-8 text-center text-lg text-gray-600 sm:text-sm">
        <p>"Empowering Learners, Inspiring Success."</p>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-4 text-sm text-gray-400 sm:text-xs">
        <p>&copy; 2024 Mission1M. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
