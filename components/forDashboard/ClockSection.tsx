import Image from "next/image";
import React from "react";

const ClockSection = () => {
  return (
    <div className=" w-full h-52 bg-neutral-300/20 p-2 rounded-lg relative">
      <div className=" absolute bottom-0 right-0">
        {/* plant image  */}
        <Image src="/assets/water.png" width={150} height={150} alt="plant" />
      </div>
    </div>
  );
};

export default ClockSection;
