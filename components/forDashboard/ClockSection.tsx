import Image from "next/image";
import React from "react";

const ClockSection = () => {
  return (
    <div className=" w-full h-52 bg-gray-400/40 p-2 lg:p-5 rounded-lg relative flex flex-col justify-end items-center lg:items-start">
      <div className=" absolute bottom-0 right-0 ">
        {/* plant image  */}
        <Image src="/assets/water.png" width={150} height={150} alt="plant" />
      </div>

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
