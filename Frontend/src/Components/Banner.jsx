import React from 'react';
import work from '/work.png';


function Banner() {
  return (
    <>
      <div className='min-h-full w-full bg-gray-100 flex flex-col lg:flex-row'>
        <div className='h-full p-10 w-full lg:w-[60%] bg-green-100'>
          <div className='lg:text-6xl text-3xl font-semibold'>
            <h1 className='lg:py-4 text-green-600'>Mission One Million:</h1>
            <h1 className='lg:py-4'>Empowering Learning</h1>
            <h1 className='lg:py-4'>and <span className='text-green-600'>Growth</span></h1>
          </div>
          <div>
            <p className="text-md mb-6 mt-5">
              <span className="text-green-600 font-semibold">Mission One Million</span> is more than just a learning management system.
              It's a transformative platform designed to empower individuals and
              organizations to achieve their full potential. Our mission is to provide
              accessible, engaging, and effective learning experiences that equip you
              with the skills and knowledge needed to succeed in today's dynamic
              world.
            </p>
            <p className="text-md">
              <span className="text-green-600 font-semibold">Mission One Million</span> offers a comprehensive suite of tools and resources
              that deliver a dynamic and engaging learning experience. Our platform
              features personalized learning paths, interactive courses, and real-time
              progress tracking, enabling users to acquire new skills and knowledge at
              their own pace. We are committed to helping learners succeed in today's
              ever-evolving world.
            </p>
          </div>
          <div>
            <button className="bg-green-600 rounded-lg hover:bg-green-700 text-white font-bold py-2 px-4 text-center text-xl mt-2">
              Explore
            </button>
          </div>
        </div>
        
        {/* Right Section (Image) */}
        <div className='md:h-[80vh] lg:h-[85vh] w-full lg:w-[40%] object-cover'>
          <img
            className="w-full h-full object-cover lg:object-cover"
            src={work} // Assuming `work` is a valid image path
            alt="Placeholder"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;