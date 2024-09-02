import { FaHome } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { TbArrowsJoin2 } from "react-icons/tb";
import { IoChatbubbleEllipses } from "react-icons/io5";

export const sidebardata: TsidebarData[] = [
  {
    linkId: 2776111,
    label: "Home",
    link: "/dashboard",
    linkImg: (
      <FaHome className="text-neutral-200 group-hover:text-white" size={20} />
    ),
  },
  {
    linkId: 65311833,
    label: "Calender",
    link: "/calender",
    linkImg: (
      <BsFillCalendarDateFill
        className=" text-neutral-200 group-hover:text-white"
        size={20}
      />
    ),
  },
  {
    linkId: 3788221098,
    label: "Schedule",
    link: "/schedule",
    linkImg: (
      <MdTipsAndUpdates
        className="text-neutral-200 group-hover:text-white"
        size={20}
      />
    ),
  },
  {
    linkId: 3321164,
    label: "Join a meeting",
    link: "/join",
    linkImg: (
      <TbArrowsJoin2
        className="text-neutral-200 group-hover:text-white"
        size={20}
      />
    ),
  },
  {
    linkId: 4331284,
    label: "Chats",
    link: "/chats",
    linkImg: (
      <IoChatbubbleEllipses
        className="text-neutral-200 group-hover:text-white"
        size={30}
      />
    ),
  },
];
