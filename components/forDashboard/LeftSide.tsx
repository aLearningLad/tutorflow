import React from "react";
import TopSquares from "./TopSquares";
import LowerNotifs from "./LowerNotifs";

const LeftSide = () => {
  return (
    <div className="w-full flex flex-col items-center lg:h-full min-h-[70vh] lg:w-5/12 border-2 border-green-400 ">
      <TopSquares />
      <LowerNotifs />
    </div>
  );
};

export default LeftSide;
