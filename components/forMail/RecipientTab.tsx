import { Irecipienttab } from "@/Interfaces";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const RecipientTab: React.FC<Irecipienttab> = ({
  emailString,
  index,
  handleToRemove,
}) => {
  return (
    <div
      className={`w-full min-h-12 my-3 ${
        Number(index) === 1 && " bg-pink-500 text-white"
      }  ${Number(index) % 2 === 0 && "bg-orange-500 text-white"} ${
        Number(index) % 3 === 0 && "bg-blue-500 text-white"
      } flex rounded-md ${
        Number(index) % 5 === 0 && "bg-green-500 text-white"
      } py-2 px-5 lg:px-12 flex justify-center items-center gap-2  `}
    >
      <button
        onClick={() => handleToRemove(emailString)}
        className=" p-2 bg-slate-50/50 rounded-md"
      >
        <FaTrashAlt size={18} className=" text-black" />
      </button>
      <p className=" text-neutral-50 text-[12px] ">{Number(index) + 1}.</p>
      <h3 className=" text-lg max-w-[70%] overflow-clip text-ellipsis ">
        {emailString}
      </h3>
    </div>
  );
};

export default RecipientTab;
