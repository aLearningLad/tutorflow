"use client";

import { usePathname } from "next/navigation";
import { IoLocation } from "react-icons/io5";

const CurrentPageName = () => {
  const thisPathName = usePathname().slice(1);

  console.log("this path, bruv!", thisPathName);

  return (
    <span className=" h-full text-white flex justify-center items-center gap-2">
      <IoLocation size={16} className=" text-white" />
      <p className=" text-[14px] lg:text-[18px]">
        {thisPathName.slice(0, 1).toUpperCase()}
        {thisPathName.slice(1)}
      </p>
    </span>
  );
};

export default CurrentPageName;
