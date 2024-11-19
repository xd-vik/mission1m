// MissionCard.js
import React, { useState } from "react";
import { Card } from "./Card";
export const missionData = [
  {
    title: "Enable",
    description: "Provide the students with the right mindset",
    isButtonElement: true,
    button: "Know more",
  },
  {
    title: "Engage",
    description: "Get to work on live projects",
    button: "Know more",
    isButtonElement: true,
  },
  {
    title: "Empower",
    description:
      "Work with industry professionals to gain confidence and describe the work",
    button: "Know more",
    route:'/empower',
    isButtonElement: true,
  },
];

const MissionCard = () => {
  const [data, setData] = useState(missionData);
  console.log(data);
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4">
        <span className="font-semibold mr-2 text-[30px] md:text-[40px]">
          Three pillars of
        </span>
        <span className="font-semibold text-green-700 text-[30px] md:text-[40px]">
          Mission One Million
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center min-h-[40vh] pt-10 gap-10 md:gap-20 bg-[rgba(158,155,155,0.122)]">
        {data.map((item, index) => (
          <Card item={item} key={index} id={index} />
        ))}
      </div>
    </>
  );
};

export default MissionCard;
