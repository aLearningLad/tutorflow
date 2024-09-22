"use client";

import useStore from "@/app/(store)/store";
import { Planner } from "./Planner";
import { ItutorStore } from "@/Interfaces";

const Scheduling = () => {
  const currentSlide = useStore((store: ItutorStore) => store.currentSlide);

  return (
    <section className=" w-full flex flex-col items-center justify-center gap-1 lg:gap-2 text-center">
      <h3>Set a date & time to host your tutorial on</h3>
      {currentSlide === 1 && <Planner />}

      {currentSlide === 2 && <>Time component here</>}
    </section>
  );
};

export default Scheduling;
