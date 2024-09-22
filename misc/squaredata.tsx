import { IoIosVideocam } from "react-icons/io";
import { FaSquarePlus } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";
import { FaShare } from "react-icons/fa";

export const squaredata: Tsquaredata[] = [
  {
    btnId: 278178121,
    btnTitle: "New meeting",
    btnSub: "Setup a new meeting",
    btnImg: "/assets/new.png",
    btnIcon: <IoIosVideocam size={20} className=" text-white" />,
  },
  {
    btnId: 1001265521,
    btnTitle: "Join meeting",
    btnSub: "Via invitation link",
    btnImg: "/assets/join.png",
    btnIcon: <FaSquarePlus size={20} className=" text-white" />,
  },
  {
    btnId: 982111837401,
    btnTitle: "Set up with calender",
    btnSub: "Set with calender",
    btnImg: "/assets/calender.png",
    btnIcon: <IoBriefcase size={20} className=" text-white" />,
  },
  {
    btnId: 54667281,
    btnTitle: "Add a reminder",
    btnSub: "Jot down important info",
    btnImg: "/assets/share.png",
    btnIcon: <FaShare size={20} className=" text-white" />,
  },
];
