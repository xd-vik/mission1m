// MissionCard.js
import React from 'react';

export const missionData = [
  {
    title: 'Enable',
    description: 'Provide the students with the right mindset',
    button: 'Know more',
  },
  {
    title: 'Engage',
    description: 'Get to work on live projects',
    button: 'Know more',
  },
  {
    title: 'Empower',
    description: 'Work with industry professionals to gain confidence and describe the work',
    button: 'Know more',
  },
];

const MissionCard = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4">
      <span className="font-semibold mr-2 text-[30px] md:text-[40px]">Three pillars of</span>
      <span className="font-semibold text-green-700 text-[30px] md:text-[40px]">Mission One Million</span>
    </div>
    <div className="flex flex-wrap items-center justify-center min-h-[40vh] pt-10 gap-10 md:gap-20 bg-[rgba(158,155,155,0.122)]">
      {missionData.map((mission, index) => (
        <div className="relative border border-green-600 rounded-lg p-5 w-full max-w-[280px] h-[290px] text-center shadow-lg bg-[#5ca4754d]" key={index}>
          <h2 className="text-3xl md:text-4xl text-green-700 mb-2 font-semibold">{mission.title}</h2>
          <p className="mb-6 py-8 text-xl">{mission.description}</p>
          <button className="absolute bottom-[2vw] left-[10vh] bg-[#369256] text-white rounded-full py-2 px-4 cursor-pointer hover:bg-[#2a683d]">
            {mission.button}
          </button>
        </div>
      ))}
    </div>
    </>
  );
};

export default MissionCard;
