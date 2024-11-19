import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Card = ({ item, index, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <Link
        to={`/card/${id}`}
        className="relative border border-green-600 rounded-lg p-5 w-full max-w-[280px] h-[290px] text-center shadow-lg bg-[#5ca4754d]"
        key={index}
      >
        <h2 className="text-3xl md:text-4xl text-green-700 mb-2 font-semibold">
          {item.title}
        </h2>
        <p className="mb-6 py-8 text-xl">{item.description}</p>
        {item.isButtonElement && (
          <Link
            to={`/card/${id}`}
            className="absolute bottom-[2vw] left-[10vh] bg-[#369256] text-white rounded-full py-2 px-4 cursor-pointer hover:bg-[#2a683d]"
            onClick={() => navigate(item.route)}
          >
            {item.button}
          </Link>
        )}
      </Link>
    </>
  );
};
