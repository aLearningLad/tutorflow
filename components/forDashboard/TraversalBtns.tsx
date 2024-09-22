"use client";

import useStore from "@/app/(store)/store";
import { ItutorStore } from "@/Interfaces";
import { DialogTrigger } from "../ui/dialog";
import CalenderInvitees from "./CalenderInvitees";

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
    // collect invitees from store, send them with other details to DB
    // move to next slide
    handleNext();

    alert("Fabulous, all done!");
  };

  return (
    <div className=" w-full flex-col lg:flex-row flex justify-center items-center">
      {currentSlide === 2 && (
        <div className=" w-full flex flex-col items-center justify-center">
          <button
            onClick={handlePrevious}
            className="w-full rounded-md text-lg bg-orange-400 mb-5 py-2 text-white"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className=" w-full  rounded-md bg-cyan-600 text-lg text-white py-2"
          >
            Next
          </button>
        </div>
      )}

      {currentSlide === 3 && (
        <div>
          <CalenderInvitees />
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

      {currentSlide === 4 && (
        <div className=" w-full flex flex-col items-center justify-center gap-2 ">
          <p className=" text-2xl font-bold ">
            Done! You can now close this modal
          </p>
          <DialogTrigger
            className=" w-full md:w-8/12 lg:w-fit lg:px-7 py-2 text-lg bg-green-400 text-black rounded-md"
            onClick={() => setCurrentSlide(1)}
          >
            Close
          </DialogTrigger>
        </div>
      )}
    </div>
  );
};

export default TraversalBtns;
