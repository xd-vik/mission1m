import React from 'react';
import Misisoncard from './Misisoncard';

const About = () => {
  return (
    <div className="bg-gray-100 px-4 py-8 sm:px-6 md:px-8 lg:px-12">
      
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-8">
          About Us
        </h1>
        <p className="mt-4 text-gray-700 text-left text-sm sm:text-base md:text-lg leading-relaxed">
          We are a focused team of veteran professionals with over 
          <span className="font-semibold"> 25 years of global experience </span> 
          in industries including 
          <span className="font-semibold"> Finance, Information Technology, Business Management, and Performance Management.</span>
          <br />
          With a clear vision, we are on a mission to create 
          <span className="font-semibold text-green-600"> one million man-days of employment </span> 
          by 2025 to enable, engage, and empower talented graduates.
        </p>
      </div>

      
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-left">
          Our Mission & Vision
        </h2>
        <p className="mt-4 text-gray-700 text-left text-sm sm:text-base md:text-lg leading-relaxed">
          We believe that our initiative will make a meaningful difference in addressing unemployment for future generations. By utilizing human resources in innovative ways, we provide talented youth with opportunities that transform their potential into success.
          <br />
          <br />
          At <span className="font-semibold">Mission One Million</span>, we hold that success is achievable in any field through a clear vision, strategic planning, and dedicated implementation. Our focus is not only on creating jobs but on providing a path to sustained career growth and professional achievement.
        </p>
      </div>

      
      <div className="mb-8">
        <Misisoncard />
      </div>

      
      <div className="text-center">
        <p className="text-base sm:text-lg text-gray-700 font-bold mt-4">
          Join Us on Our Journey to Make a Difference
        </p>
        <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-lg">
          Together, we can bridge the gap between education and employment, paving the way for a brighter future for the next generation.
        </p>
        <button className="mt-4 bg-green-800 text-white py-2 px-6 rounded-full text-sm sm:text-base md:text-lg hover:bg-green-900 transition-all duration-300">
          Learn More About Our Mission
        </button>
      </div>
    </div>
  );
};

export default About;
