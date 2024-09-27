import { Irecipienttab } from "@/Interfaces";
import React from "react";

const RecipientTab: React.FC<Irecipienttab> = ({ emailString, index }) => {
  return (
    <div
      className={`w-full min-h-12 my-3 ${
        Number(index) === 1 && " bg-pink-500 text-white"
      }  ${Number(index) % 2 === 0 && "bg-orange-500 text-white"} ${
        Number(index) % 3 === 0 && "bg-blue-500 text-white"
      } flex rounded-md ${
        Number(index) % 5 === 0 && "bg-green-500 text-white"
      } p-1 lg:p-2 flex justify-center items-center text-ellipsis  `}
    >
      <p>{index}.</p>
      <h3>{emailString}</h3>
    </div>
  );
};

export default RecipientTab;
