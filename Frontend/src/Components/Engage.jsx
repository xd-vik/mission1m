import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const EngageData = [
  {
    title: 'Real World Skills',
    description: 'Working on live projects develop problem solving, team work, technical skills essential for a successful career.',
  },
  {
    title: 'Confidence Building',
    description: 'Tackling real challenges in a supportive environment empowers students building their confidence to take on future projects',
  },
  {
    title: 'Portfolio Development',
    description: 'Each project adds to a student professional portfolio, showcasing their skills and dedication to prospective employers',
  }
];

const Engage = () => {
  return (
  
      <div className="min-h-screen p-5 sm:p-10 overflow-x-hidden  ">
         <div className="pb-4"> 
         <Navbar />
         </div>
  
       
      
        <div className="bg-white w-full max-w-5xl rounded-lg mx-auto "> 
          <div className="flex flex-col items-center pt-6"> 
            <h1 className="text-green-600 font-black text-center text-4xl sm:text-6xl">
              Engage
            </h1>
            <p className="p-5 mx-auto text-xl sm:text-2xl w-full sm:w-[50vw] leading-8 sm:leading-10 text-center">
              <i>"Experience the power of learning by doing-where every project brings knowledge to life"</i>
            </p>
          </div>

          <div className="flex flex-col items-start p-5 sm:p-10">
            <h1 className="pl-5 sm:pl-10 text-3xl sm:text-4xl text-green-500 font-bold">Our Approach</h1>
            <p className="pl-5 sm:pl-10 text-base sm:text-lg leading-[4vh] sm:leading-[5vh] mt-2">
              At mission one million, we believe that the best way to learn is through hands-on experience. By working on real-world projects, students develop skills, gain confidence and apply their knowledge in meaningful ways. Our approach helps them build a portfolio, learn through practical challenges, and see the impact of their work.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-around p-5 sm:p-10 min-h-[40vh] gap-5 sm:gap-10 bg-white">
            {EngageData.map((engage, index) => (
              <div
                className="border border-green-600 rounded-lg p-5 w-full sm:w-[280px] h-[290px] text-center shadow-lg bg-[#5ca4754d] mb-8 sm:mb-0"
                key={index}
              >
                <h2 className="text-2xl sm:text-3xl text-green-700 mb-2 font-semibold">{engage.title}</h2>
                <p className="mb-6 py-8 text-lg sm:text-xl">{engage.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start p-5 sm:p-10">
            <h1 className="pl-5 sm:pl-10 text-3xl sm:text-4xl text-green-500 font-bold">Join the Experience</h1>
            <p className="pl-5 sm:pl-10 text-base sm:text-lg w-[60vw] leading-[4vh] sm:leading-[5vh] mt-2">
              Ready to make your mark? Dive into live projects that challenge and grow your skills. Experience the thrill of your work coming to life and gain the practical insights needed to succeed in the real world. Let's get to work and make an impact together.
            </p>
          </div>

          <div className="flex items-center justify-center pb-10">
            <button className="bg-[#369256] text-white rounded-full py-2 px-4 cursor-pointer hover:bg-[#2a683d]">
              Start Working on Live Projects
            </button>
          </div>
        </div>
        <Footer />
      </div>
    
  );
};

export default Engage;
