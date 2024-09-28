import React from "react";
import TopSquares from "./TopSquares";
import LowerNotifs from "./LowerNotifs";

const LeftSide = () => {
  return (
    <div className="w-full flex flex-col items-center lg:h-full h-fit lg:min-h-[70vh] lg:w-5/12">
      <TopSquares />
      <LowerNotifs />
    </div>
  );
};

export default LeftSide;
