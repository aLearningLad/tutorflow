import { Ipersoncard } from "@/Interfaces";
import React from "react";

const PersonCard: React.FC<Ipersoncard> = ({
  inviteeList,
  removeInvitee,
  emailString,
}) => {
  return (
    <div className=" min-w-20 flex gap-2 max-w-fit h-10 bg-pink-500 text-white rounded-md border-2 border-white">
      <button
        onClick={() => removeInvitee(emailString)}
        className=" rounded-full w-8 h-8 bg-white text-black"
      >
        X
      </button>
      <p>{emailString}</p>
    </div>
  );
};

export default PersonCard;
