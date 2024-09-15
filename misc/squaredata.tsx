import { IoIosVideocam } from "react-icons/io";
import { FaSquarePlus } from "react-icons/fa6";

export const squaredata: Tsquaredata[] = [
  {
    btnId: 278178121,
    btnTitle: "New meeting",
    btnSub: "Setup a new meeting",
    btnImg: "/assets/new.png",
    btnIcon: <IoIosVideocam size={20} className=" text-white" />,
  },
  {
    btnId: 278178121,
    btnTitle: "Join meeting",
    btnSub: "Via invitation link",
    btnImg: "/assets/join.png",
    btnIcon: <FaSquarePlus size={20} className=" text-white" />,
  },
];
