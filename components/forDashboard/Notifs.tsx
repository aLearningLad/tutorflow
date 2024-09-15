import NotifsSearchBar from "./NotifsSearchBar";
import { IoNotifications } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import CurrentPageName from "./CurrentPageName";

const Notifs = () => {
  return (
    <header className=" h-16 flex justify-between lg:border-b-2 border-neutral-700 gap-4 py-2 px-2 lg:px-12">
      <CurrentPageName />
      <section className=" h-full flex-1 flex justify-end items-center py-[2px]">
        <div className=" mx-2 flex justify-center items-center relative">
          {/* notifications icon */}
          <div className=" w-[10px] absolute left-[45%] bottom-[55%] h-[10px] rounded-full bg-red-600 flex justify-center items-center text-[8px] text-white  ">
            2
          </div>
          <IoNotifications size={20} className="text-white " />
        </div>
        <div className=" w-4/12 h-full flex justify-center items-center gap-2">
          {/* search bar & icon */}
          <IoMdSearch size={20} className=" text-white" />
          <NotifsSearchBar />
        </div>
        <div className=" h-full w-12 lg:flex hidden text-white text-[8px] rounded-md border-2 border-white">
          google account image
        </div>
      </section>
    </header>
  );
};

export default Notifs;
