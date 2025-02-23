import Image from "next/image";
import React from "react";

const ClockSection = () => {
  return (
    <div className=" w-full h-52 bg-white text-black overflow-clip p-2 lg:p-5 rounded-lg relative flex flex-col justify-end items-center lg:items-start">
      <div className=" absolute bottom-0 right-0 ">
        {/* plant image  */}
        <Image src="/assets/water.png" width={150} height={150} alt="plant" />
      </div>

      {/* bubble one */}
      <div className="secondaryBubble absolute top-3 left-7 bg-gradient-to-t from-red-800 via-red-800/20 to-transparent " />

      {/* bubble two */}
      <div className=" primaryBubble absolute bottom-[70%] right-2 bg-gradient-to-l from-blue-800 via-blue-800/20 to-transparent " />

      <div>
        {/* computer image */}
        <Image
          src="/assets/learning.png"
          alt="learning"
          width={70}
          height={70}
          className=" absolute top-4 right-[40%] rotate-12 "
        />
      </div>

      <section className=" w-fit px-2">
        {/* attach real clock time here */}
        <h1 className=" text-[26px] md:text-[32px] lg:text-[42px] font-bold  ">
          02:00
        </h1>
      </section>
      <section className=" w-fit px-2">Tuesday, 22 April 2023</section>
    </div>
  );
};

export default ClockSection;
