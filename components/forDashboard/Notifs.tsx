"use server";

import NotifsSearchBar from "./NotifsSearchBar";
import { IoNotifications } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import CurrentPageName from "./CurrentPageName";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import NotifsSignOut from "../forMisc/NotifsSignOut";

interface Inotifs {
  remindersData?: any[];
}

const Notifs: React.FC<Inotifs> = async ({ remindersData }) => {
  let user;

  try {
    user = await currentUser();
  } catch (error) {
    console.error("Clerk currentUser error:", error);
    return (
      <div className="h-16 flex justify-between lg:border-b-2 border-neutral-700 gap-4 py-2 px-2 lg:px-12">
        Error fetching user
      </div>
    );
  }

  const dp = user?.imageUrl || "/assets/speaker2.png";

  return (
    <header className=" h-16 flex justify-between lg:border-b-2 border-neutral-700 gap-4 py-2 px-2 lg:px-12">
      <CurrentPageName />
      <section className=" h-full flex-1 flex justify-end items-center py-[2px]">
        <div className=" mx-2 flex justify-center items-center relative">
          <div className=" w-[10px] absolute left-[45%] bottom-[55%] h-[10px] rounded-full bg-red-600 flex justify-center items-center text-[8px] text-white">
            {Array.isArray(remindersData) ? remindersData.length : 1}
          </div>
          <IoNotifications size={20} className="text-white" />
        </div>
        <div className=" w-4/12 h-full flex justify-center items-center gap-2">
          <IoMdSearch size={20} className=" text-white" />
          <NotifsSearchBar />
        </div>
        <div className=" h-full w-12 lg:flex hidden text-white text-[8px] overflow-clip rounded-md border-2 border-white">
          <NotifsSignOut dp={dp} />
          {/* <Image alt="profile image" width={80} height={80} src={dp} /> */}
        </div>
      </section>
    </header>
  );
};

export default Notifs;
