import React from "react";
import ClockSection from "./ClockSection";
import ReminderList from "./ReminderList";

const RightSide = () => {
  return (
    <div className="w-full p-1 md:p-5 lg:p-7 lg:h-full min-h-[70vh] flex flex-col gap-7 lg:w-7/12">
      {/* clock */}
      <ClockSection />

      {/* schedule & reminder list */}
      <ReminderList />
    </div>
  );
};

export default RightSide;
