"use client";

import { useState } from "react";
import { FaLink } from "react-icons/fa";

const JoinComponent = () => {
  // later additions
  // add functionality so that when user pastes link, a check is done to
  // confirm via database status that the session is in-fact live/ongoing
  // prompt user to wait a bit if the session is not yet live.
  // NB ===> requires new column in sessions table, called "is_live", will be boolean
  // and determine whether attendees can join it

  const [pastedLink, setPastedLink] = useState<string>("");

  return (
    <div className=" w-full min-h-[90vh] border-4 flex-col border-white flex justify-center items-center text-white ">
      <div className=" w-full flex flex-col items-center justify-center text-center mb-2 lg:mb-5">
        <h1 className=" text-2xl">Paste your tutorial session link below</h1>
        <p>You will be directed to the session if it is live</p>
      </div>
      <div className=" w-full md:w-10/12 lg:w-8/12 xl:w-1/2 py-5 px-1 md:px-3 lg:px-8 flex justify-center items-center ">
        <div className=" w-full flex items-center justify-center gap-2 ">
          <FaLink size={18} className="text-white" />
          <input
            type="text"
            className=" w-full h-12 rounded-md bg-slate-600 focus:outline-none px-4 lg:px-7"
            placeholder="Eg. https://tutorflow.com/tutroom/tut-session-id-here"
            value={pastedLink}
            onChange={(e) => setPastedLink(e.target.value)}
          />
        </div>
      </div>
      <div className=" w-full flex justify-center items-center">
        <button
          disabled={pastedLink.length < 10}
          className={`text-lg py-2 w-full md:w-6/12 lg:w-fit lg:px-5 ${
            pastedLink.length > 10
              ? "bg-orange-500 transition-all duration-300 ease-in"
              : " bg-neutral-200/40 text-neutral-400 scale-95 transition-all duration-300 ease-in"
          } rounded-md`}
        >
          Join Session
        </button>
      </div>
    </div>
  );
};

export default JoinComponent;
