import React from 'react';
import work from '/work.png';

function Banner() {
  return (

    <div className="md:p-10 p-1 flex flex-col md:flex-row bg-green-100 ">
        <div>
      <h1 className="text-5xl font-bold text-green-500 mb-6">Mission One Million:</h1>
      <h2 className="text-5xl font-bold mb-6">Empowering Learning </h2>
      <span className="text-5xl font-bold mb-6">and</span>
      <span  className="text-5xl text-green-500 font-bold mb-8"> Growth </span>
      <p className="text-2xl mb-6 mt-10">
        <span className="text-green-500">Mission One Million</span> is more than just a learning management system.
        It's a transformative platform designed to empower individuals and
        organizations to achieve their full potential. Our mission is to provide
        accessible, engaging, and effective learning experiences that equip you
        with the skills and knowledge needed to succeed in today's dynamic
        world.
      </p>
      <p className="text-2xl mb-4">
      <span className="text-green-500">Mission One Million</span> offers a comprehensive suite of tools and resources
        that deliver a dynamic and engaging learning experience. Our platform
        features personalized learning paths, interactive courses, and real-time
        progress tracking, enabling users to acquire new skills and knowledge at
        their own pace. We are committed to helping learners succeed in today's
        ever-evolving world
      </p>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-xl mt-5">
        Explore
      </button>
      </div>
      
      
  
      <div>
      <img
            className="mt-[40px] h-[500px] w-[1000px] mr-[600px]"
            src={work}
            alt="Placeholder"
          />
          </div>
    </div>
  );
}

export default Banner;
