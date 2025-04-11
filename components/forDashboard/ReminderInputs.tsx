"use client";

import { createClient } from "@/lib/supabase/client";
import { useUser } from "@clerk/nextjs";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { DialogTrigger } from "../ui/dialog";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";

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
    reminderid: nanoid(), // call nanoid here
    title: "", // get from user input here
    startsat: "", // get from user input here
    endsat: "", // get from user input here
    detail: "", // get from user input here
    shareable_link: "",
    is_private: false, // allow user to change this via selector
  });

  const router = useRouter();

  const handleDetailsChange = (e: any) => {
    setReminderDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log("The reminder details, currently: ", reminderDetails);
  };

  const submitReminder = async () => {
    const supabase = createClient();

    const { detail, endsat, startsat, title } = reminderDetails;

    if (
      detail.length < 10 ||
      endsat.length < 3 ||
      startsat.length < 3 ||
      title.length < 3
    ) {
      toast.error("Values are missing or non-descriptive");
      return;
    }
    try {
      const { data: reminderDataSubmitted, error: reminderSubmissionError } =
        await supabase.from("reminders").insert({
          author: authorName,
          reminderid: reminderDetails.reminderid,
          authorid: idValue,
          title: title,
          startsat: startsat,
          endsat: endsat,
          detail: detail,
          shareable_link: reminderDetails.shareable_link,
          is_private: reminderDetails.is_private,
          author_email: authorEmailValue,
        });

      if (reminderSubmissionError) {
        throw new Error(reminderSubmissionError.message);
      }

      toast.success("Bravo! Submitted successfully!");
      setIsSubmitted(true); //use this state to toggle prompt to close modal
      router.refresh();
    } catch (error) {
      console.log("Error submitting reminder to DB: ", error);
    }
  };

  if (!isSubmitted) {
    return (
      <div className="w-full h-[70vh] flex flex-col relative gap-4">
        {/* inputs ===> scrollable */}
        <div className="w-full overflow-auto lg:h-[90%] gap-y-4 flex flex-col items-center justify-start ">
          <section className="w-full min-h-24 flex flex-col items-center text-center justify-center">
            <label
              className=" text-[18px] flex justify-center text-center gap-1 items-center "
              htmlFor="title"
            >
              Title
              {reminderDetails.title.length > 3 && <TiTick color="green" />}
            </label>
            <input
              type="text"
              name="title"
              placeholder="Eg. call Mr. Anderson"
              className=" bg-slate-600/20 h-[70%] lg:h-[60%] text-[14px] placeholder:text-neutral-700 rounded-md text-black focus:text-white px-2 py-1 w-full focus:outline-none focus:bg-black focus:scale-95 transition duration-300 ease-in"
              onChange={handleDetailsChange}
            />
          </section>
          <section className="w-full min-h-24 flex flex-col items-center text-center justify-center">
            <label
              className=" text-[18px] flex justify-center items-center text-center gap-1 "
              htmlFor="startsAt"
            >
              Starts at{" "}
              {reminderDetails.startsat.length > 4 && <TiTick color="green" />}
            </label>
            <input
              type="text"
              name="startsat"
              placeholder="Eg. 18h00"
              className=" bg-slate-600/20 h-[70%] lg:h-[60%] text-[14px] placeholder:text-neutral-700 rounded-md text-black focus:text-white px-2 py-1 w-full focus:outline-none focus:bg-black focus:scale-95 transition duration-300 ease-in"
              onChange={handleDetailsChange}
            />
          </section>
          <section className="w-full min-h-24 flex flex-col items-center text-center justify-center">
            <label
              className=" text-[18px] flex justify-center items-center text-center gap-1"
              htmlFor="endsAt"
            >
              Ends at{" "}
              {reminderDetails.endsat.length > 4 && <TiTick color="green" />}
            </label>
            <input
              type="text"
              name="endsat"
              placeholder="Eg. 19h30"
              className=" bg-slate-600/20 h-[70%] lg:h-[60%] text-[14px] placeholder:text-neutral-700 rounded-md text-black focus:text-white px-2 py-1 w-full focus:outline-none focus:bg-black focus:scale-95 transition duration-300 ease-in"
              onChange={handleDetailsChange}
            />
          </section>
          <section className="w-full min-h-[40vh] lg:min-h-[45vh] flex flex-col items-center text-center justify-center">
            <label
              className=" text-[18px] flex justify-center items-center text-center gap-1"
              htmlFor="detail"
            >
              Reminder details{" "}
              {reminderDetails.detail.length > 30 && <TiTick color="green" />}
            </label>
            <textarea
              name="detail"
              placeholder="Add more information here"
              className=" bg-slate-600/30 h-[90%] lg:h-[85%] rounded-md text-black focus:text-white px-2 py-1 w-full focus:outline-none focus:bg-black focus:scale-95 transition duration-300 ease-in"
              onChange={handleDetailsChange}
            />
          </section>
          <section className="w-full min-h-24 flex flex-col items-center text-center justify-center">
            <label
              className=" text-[18px] flex justify-center items-center text-center gap-1"
              htmlFor="shareable_link"
            >
              Attach a link{" "}
              {reminderDetails.shareable_link.length > 3 && (
                <TiTick color="green" />
              )}
            </label>
            <input
              type="text"
              name="shareable_link"
              placeholder="Eg. https://instagram.com"
              className=" bg-slate-600/20 h-[70%] lg:h-[60%] text-[14px] placeholder:text-neutral-700 rounded-md text-black focus:text-white px-2 py-1 w-full focus:outline-none focus:bg-black focus:scale-95 transition duration-300 ease-in"
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
        <h1 className=" text-xl font-semibold text-black ">Submitted!</h1>
        <h3 className=" text-[14px] text-black ">
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
