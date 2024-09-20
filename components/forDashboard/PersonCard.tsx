import { Ipersoncard } from "@/Interfaces";
import React from "react";

const PersonCard: React.FC<Ipersoncard> = ({
  inviteeList,
  removeInvitee,
  emailString,
}) => {
  return (
    <div className=" min-w-20 max-w-fit h-10 bg-pink-500 text-white rounded-md border-2 border-white">
      <button>Remove this person</button>
    </div>
  );
};

export default PersonCard;
