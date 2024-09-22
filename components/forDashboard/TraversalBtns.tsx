"use client";

import useStore from "@/app/(store)/store";
import { ItutorStore } from "@/Interfaces";
import { DialogTrigger } from "../ui/dialog";
import CalenderInvitees from "./CalenderInvitees";
import { createClient } from "@/lib/supabase/client";
import { nanoid } from "nanoid";

const TraversalBtns = () => {
  const handleNext = useStore((store: ItutorStore) => store.toNextSlide);
  const handlePrevious = useStore(
    (store: ItutorStore) => store.toPreviousSlide
  );
  const currentSlide = useStore((store: ItutorStore) => store.currentSlide);
  const setCurrentSlide = useStore(
    (store: ItutorStore) => store.setCurrentSlide
  );

  const emails = useStore((store: ItutorStore) => store.emails);

  const handleFinish = async () => {
    const supabase = createClient();

    try {
      if (emails.length < 1) {
        alert("Nah fam! That email list is soooo short!");
        return;
      }

      const { data: calenderEntryData, error: calenderError } = await supabase
        .from("calendertuts")
        .insert({
          authorid: nanoid(),
          date_of_tut: "22 July 2025",
          start_time: "07:30",
          tut_id: nanoid(),
          invited_emails: emails,
          session_link: "dummy link here",
        });

      if (calenderError) {
        throw new Error(calenderError.details);
      }
    } catch (error) {
      console.log(
        "Error while saving calender tut details to database: ",
        error
      );
    }
    // collect invitees from store, send them with other details to DB
    // move to next slide
    handleNext();
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
        <div className=" w-full">
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
