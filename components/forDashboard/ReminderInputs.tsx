"use client";

import { createClient } from "@/lib/supabase/client";
import { useUser } from "@clerk/nextjs";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { DialogTrigger } from "../ui/dialog";

const ReminderInputs = () => {
  // to get author email
  const { user, isLoaded, isSignedIn } = useUser();
  const [authorName, setAuthorName] = useState<string>("");
  const [idValue, setIdValue] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [authorEmailValue, setAuthorEmailValue] = useState<string>("");

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      console.log("This is the user: ", user);
    }

    if (user && user.fullName) {
      setAuthorName(user.fullName);
      setAuthorEmailValue(user.emailAddresses[0].emailAddress);
      setIdValue(user.id);
    }
  }, [isLoaded, isSignedIn, user]);

  const [reminderDetails, setReminderDetails] = useState<TreminderCard>({
    author: authorName, // get from clerk
    reminderId: nanoid(), // call nanoid here
    title: "", // get from user input here
    startsAt: "", // get from user input here
    endsAt: "", // get from user input here
    detail: "", // get from user input here
    shareableLink: "",
    is_private: false, // allow user to change this via selector
  });

  const handleDetailsChange = (e: any) => {
    setReminderDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log("The reminder details, currently: ", reminderDetails);
  };

  const submitReminder = async () => {
    const supabase = createClient();

    const { detail, endsAt, startsAt, title } = reminderDetails;

    if (
      detail.length < 1 ||
      endsAt.length < 3 ||
      startsAt.length < 3 ||
      title.length < 3
    ) {
      alert("Values are missing or non-descriptive");
      return;
    }
    try {
      const { data: reminderDataSubmitted, error: reminderSubmissionError } =
        await supabase.from("reminders").insert({
          author: authorName,
          reminderid: reminderDetails.reminderId,
          authorid: idValue,
          title: title,
          startsat: startsAt,
          endsat: endsAt,
          detail: detail,
          shareable_link: reminderDetails.shareableLink,
          is_private: reminderDetails.is_private,
          author_email: authorEmailValue,
        });

      if (reminderSubmissionError) {
        throw new Error(reminderSubmissionError.message);
      }

      alert("Bravo! Submitted successfully!");
      setIsSubmitted(true); //use this state to toggle prompt to close modal
    } catch (error) {
      console.log("Error submitting reminder to DB: ", error);
    }
  };

  if (!isSubmitted) {
    return (
      <div className="w-full h-[70vh] border-4 border-white flex flex-col relative gap-4">
        {/* inputs ===> scrollable */}
        <div className="w-full overflow-auto lg:h-[90%] bg-pink-400/40 gap-y-4 flex flex-col items-center justify-start ">
          <section className="w-full min-h-24 flex flex-col items-center text-center justify-center">
            <label className=" text-[18px] " htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Eg. call Mr. Anderson"
              className=" bg-slate-600 h-[70%] lg:h-[60%] rounded-md text-white px-2 py-1 w-full focus:outline-none focus:bg-black focus:scale-95 transition duration-300 ease-in"
              onChange={handleDetailsChange}
            />
          </section>
          <section className="w-full min-h-24 border-2 border-white flex flex-col items-center text-center justify-center">
            <label className=" text-[18px] " htmlFor="startsAt">
              Starts at
            </label>
            <input
              type="text"
              name="startsAt"
              placeholder="Eg. 18h00"
              className=" bg-slate-600 h-[70%] lg:h-[60%] rounded-md text-white px-2 py-1 w-full focus:outline-none focus:bg-black focus:scale-95 transition duration-300 ease-in"
              onChange={handleDetailsChange}
            />
          </section>
          <section className="w-full min-h-24 border-2 border-white flex flex-col items-center text-center justify-center">
            <label className=" text-[18px] " htmlFor="endsAt">
              Ends at
            </label>
            <input
              type="text"
              name="endsAt"
              placeholder="Eg. 19h30"
              className=" bg-slate-600 h-[70%] lg:h-[60%] rounded-md text-white px-2 py-1 w-full focus:outline-none focus:bg-black focus:scale-95 transition duration-300 ease-in"
              onChange={handleDetailsChange}
            />
          </section>
          <section className="w-full min-h-[40vh] lg:min-h-[45vh] border-2 border-white flex flex-col items-center text-center justify-center">
            <label className=" text-[18px] " htmlFor="detail">
              Reminder details
            </label>
            <textarea
              name="detail"
              placeholder="Add more information here"
              className=" bg-slate-600 h-[90%] lg:h-[85%] rounded-md text-white px-2 py-1 w-full focus:outline-none focus:bg-black focus:scale-95 transition duration-300 ease-in"
              onChange={handleDetailsChange}
            />
          </section>
          <section className="w-full min-h-24 border-2 border-white flex flex-col items-center text-center justify-center">
            <label className=" text-[18px] " htmlFor="shareableLink">
              Attach a link
            </label>
            <input
              type="text"
              name="shareableLink"
              placeholder="Eg. 19h30"
              className=" bg-slate-600 h-[70%] lg:h-[60%] rounded-md text-white px-2 py-1 w-full focus:outline-none focus:bg-black focus:scale-95 transition duration-300 ease-in"
              onChange={handleDetailsChange}
            />
          </section>
        </div>

        {/* submit button  */}
        <div className=" flex justify-center items-center w-full lg:h-[10%] ">
          <button
            onClick={submitReminder}
            className=" w-full h-full bg-orange-400 text-white text-lg rounded-md "
          >
            Save reminder
          </button>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="w-full h-fit flex flex-col items-center text-center relative gap-4">
        <h1 className=" text-xl font-semibold text-white ">Submitted!</h1>
        <h3 className=" text-[14px] text-neutral-200 ">
          You may now close this modal
        </h3>
        <DialogTrigger className="mt-3 bg-cyan-500 hover:bg-orange-400 transition-all duration-300 ease-in text-white text-lg w-full h-12 rounded-md flex justify-center items-center">
          Close
        </DialogTrigger>
      </div>
    );
  }
};

export default ReminderInputs;
