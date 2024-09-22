"use client";

import useStore from "@/app/(store)/store";
import { ItutorStore } from "@/Interfaces";
import { DialogTrigger } from "../ui/dialog";

const TraversalBtns = () => {
  const handleNext = useStore((store: ItutorStore) => store.toNextSlide);
  const handlePrevious = useStore(
    (store: ItutorStore) => store.toPreviousSlide
  );
  const currentSlide = useStore((store: ItutorStore) => store.currentSlide);
  const setCurrentSlide = useStore(
    (store: ItutorStore) => store.setCurrentSlide
  );

  const handleFinish = async () => {
    handleNext();
    alert("Fabulous, all done!");
  };

  return (
    <div className=" w-full flex-col lg:flex-row flex justify-center items-center">
      {currentSlide === 2 && (
        <div className=" w-full flex flex-col items-center justify-center">
          <button
            onClick={handlePrevious}
            className=" w-full rounded-md text-lg bg-cyan-600 py-2 text-white"
          >
            Previous
          </button>
          <button onClick={handleFinish}>Finish</button>
        </div>
      )}
      {currentSlide === 1 && (
        <button
          onClick={handleNext}
          className=" w-full  rounded-md bg-cyan-600 text-lg text-white py-2"
        >
          Next
        </button>
      )}

      {currentSlide === 3 && (
        <div>
          Done! You can now close this modal
          <DialogTrigger onClick={() => setCurrentSlide(1)}>
            Close
          </DialogTrigger>
        </div>
      )}
    </div>
  );
};

export default TraversalBtns;
