"use client";

import { Planner } from "./Planner";
import { useState } from "react";

const Scheduling = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section className=" w-full flex flex-col items-center justify-center gap-1 lg:gap-2 text-center">
      <h3>Set a date & time to host your tutorial on</h3>
      {currentSlide === 1 && <Planner />}

      {currentSlide === 2 && 2}
    </section>
  );
};

export default Scheduling;
