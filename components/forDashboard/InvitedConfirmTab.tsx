import { Irecipienttab } from "@/Interfaces";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const InvitedConfirmTab: React.FC<Irecipienttab> = ({
  emailString,
  handleToRemove,
  index,
}) => {
  return (
    <div className=" w-full h-12 my-3 bg-slate-800 text-white flex p-2 lg:p-3 rounded-md">
      <button>
        <FaTrashAlt size={26} className="text-red-600 " />
      </button>
      <section className=" w-full h-full flex justify-center items-center "></section>
    </div>
  );
};

export default InvitedConfirmTab;
