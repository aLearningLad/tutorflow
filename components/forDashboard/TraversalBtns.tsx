"use client";

import useStore from "@/app/(store)/store";
import { ItutorStore } from "@/Interfaces";

const TraversalBtns = () => {
  const handleNext = useStore((store: ItutorStore) => store.toNextSlide);
  const handlePrevious = useStore(
    (store: ItutorStore) => store.toPreviousSlide
  );
  const currentSlide = useStore((store: ItutorStore) => store.currentSlide);

  return (
    <div className=" w-full flex-col lg:flex-row flex justify-center items-center">
      {currentSlide === 2 && (
        <button
          onClick={handlePrevious}
          className=" w-full h-7 rounded-md bg-cyan-600 x text-white"
        >
          Previous
        </button>
      )}
      {currentSlide === 1 && (
        <button
          onClick={handleNext}
          className=" w-full h-7 rounded-md bg-cyan-600 x text-white py-2"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default TraversalBtns;
