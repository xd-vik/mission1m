import React from 'react';

const MissionPage = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="bg-white max-w-3xl w-full shadow-lg rounded-lg p-6 md:p-12 text-center">
        <h1 className="text-green-700 text-4xl md:text-4xl font-bold mb-4">Enable</h1>
        <p className="text-gray-600 italic mb-6 text-2xl md:text-base">
          "Empowering minds, igniting change – equipping each student with the mindset to achieve the unimaginable."
        </p>
         <div className="flex items-start"> <h2 className="text-green-700 text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2></div>
        
        <p className="text-gray-700 mb-6 text-sm md:text-base">
          At <strong>Mission One Million</strong>, we believe that unlocking a student’s potential starts with cultivating the right mindset.
          Our mission is to build resilience, inspire a growth mindset, and foster a lifelong passion for learning.
          With guidance and hands-on opportunities, we empower students to transform ideas into impact, build confidence, and step forward as visionary leaders.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h3 className="text-green-700 text-xl font-semibold">Resilience</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Through challenges and guided support, we teach students to persevere, adapt, and thrive in any situation.
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h3 className="text-green-700 text-xl font-semibold">Innovation</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We inspire creativity and encourage students to turn their ideas into actionable plans, fostering innovation at every step.
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h3 className="text-green-700 text-xl font-semibold">Leadership</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We help students develop skills to lead, inspire others, and make a positive impact in their communities and beyond.
            </p>
          </div>
        </div>
        <div className="flex items-start"> <h2 className="text-green-700 text-2xl md:text-3xl font-semibold mb-4">Join the Movement</h2></div>
    
        <p className="text-gray-700 mb-6 text-sm md:text-base">
          Become a part of Mission One Million and start your journey to greatness. Embrace the opportunity to think big, develop a growth mindset,
          and unlock the endless possibilities that lie ahead. Let's shape a future filled with empowered, confident, and capable individuals.
        </p>

        <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition text-sm md:text-base">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default MissionPage;