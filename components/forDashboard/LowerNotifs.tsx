import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";

const LowerNotifs = () => {
  const falseNotifs = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="w-full h-[35%] flex justify-center flex-col text-center py-2 px-1 lg:px-7">
      <header className=" mt-3">
        <h1 className=" text-[20px]">Notifications</h1>
      </header>
      <section className=" w-full min-h-[85%] flex flex-col gap-3 overflow-auto p-2 ">
        {falseNotifs.map((notif) => (
          <div
            className={`border-2 hover:scale-95 cursor-pointer transition-all duration-300 ease-in min-h-12 bg-slate-600/40 border-neutral-300/40 rounded-md p-1 flex justify-between items-center`}
          >
            <div className=" w-3/12 h-full flex justify-center items-center">
              {/* add a state here, render open envelope if message is viewed */}
              <FaEnvelope size={14} className=" text-white" />
            </div>
            <div>
              <p className=" text-[12px] ">New meeting ID has been generated</p>
            </div>
            <button className=" w-fit px-7 h-full bg-blue-600 text-white rounded-[4px] text-[14px] ">
              Share link
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LowerNotifs;
