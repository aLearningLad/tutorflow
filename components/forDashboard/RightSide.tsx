import React from "react";
import ClockSection from "./ClockSection";

const RightSide = () => {
  return (
    <div className="w-full p-1 md:p-5 lg:p-7 lg:h-full min-h-[70vh] flex flex-col gap-7 lg:w-7/12 border-2 border-pink-400">
      {/* clock */}
      <ClockSection />

      {/* schedule & reminder list */}
    </div>
  );
};

export default RightSide;
