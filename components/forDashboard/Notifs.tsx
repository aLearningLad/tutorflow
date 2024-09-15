import React from "react";
import NotifsSearchBar from "./NotifsSearchBar";

const Notifs = () => {
  return (
    <header className=" h-16 flex justify-between border-2 border-white gap-4">
      <span className=" h-full">tutorFlow Logo</span>
      <section className=" h-full flex-1 bg-green-500 flex justify-end items-center py-[2px]">
        <div className=" w-4/12 h-full">
          {/* search bar & icon */}
          <NotifsSearchBar />
        </div>
        <div>google account image</div>
      </section>
    </header>
  );
};

export default Notifs;
