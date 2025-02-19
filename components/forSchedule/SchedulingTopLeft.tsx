"use client";

import { motivations } from "@/misc/motivations";
import Image from "next/image";
import { useEffect, useState } from "react";

const SchedulingTopLeft = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const theInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(theInterval);
  }, []);

  return (
    <div className=" h-full relative flex w-full border-4 border-white rounded-lg flex-col bg-white text-black">
      {/* top div  */}
      <div className=" relative h-full w-full flex flex-col justify-center items-center text-center px-2 md:px-3 lg:px-5 py-2 lg:py-4 ">
        <h2 className=" text-4xl z-[5]  ">{motivations[currentIndex].quote}</h2>{" "}
        x <p className="z-[5]">{motivations[currentIndex].speaker}</p>
        <div className=" absolute top-6 right-7 bg-black z-[1] ">
          <Image
            src={motivations[currentIndex].quoteImg}
            width={120}
            height={120}
            alt="motivational image"
            className="  "
          />
        </div>
      </div>

      {/* lower div ---> next tut schedule in x days */}
      <div className=" absolute bottom-1 w-full flex justify-end items-center px-3 ">
        <p className=" text-[14px]">Next tutorial: </p>{" "}
        <h2 className=" text-[18px] ">21/03/2024</h2>
      </div>
    </div>
  );
};

export default SchedulingTopLeft;
