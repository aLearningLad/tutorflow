import { Ipersoncard } from "@/Interfaces";
import React from "react";

const PersonCard: React.FC<Ipersoncard> = ({
  inviteeList,
  removeInvitee,
  emailString,
}) => {
  return (
    <div className="min-w-20 px-7 justify-center items-center flex gap-2 max-w-34 h-10 bg-pink-500 text-white rounded-md border-2 border-white">
      <button
        onClick={() => removeInvitee(emailString)}
        className=" rounded-full w-4 h-4 flex justify-center items-center text-[8px] bg-white text-black"
      >
        X
      </button>
      <p>{emailString}</p>
    </div>
  );
};

export default PersonCard;
