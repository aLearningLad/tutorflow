"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const ToJoinInput = () => {
  const [meetingLink, setMeetingLink] = useState<string>("");
  const router = useRouter();

  const enterSession = async () => {
    if (meetingLink.length < 10) {
      toast.error("Please provide a valid tutorial session link");
      return;
    }

    const supabase = createClient();

    try {
      const { data: meetingExists, error: meetingError } = await supabase
        .from("reminders")
        .select("shareable_link")
        .eq("shareable_link", meetingLink);

      if (!meetingExists) {
        toast.error("No meeting link found!");
        return;
      }

      if (meetingError) {
        throw new Error(meetingError);
      }

      if (meetingExists.length < 1) {
        toast.error("No meeting scheduled for that link!");
        return;
      }

      toast.success("Joining session . . .");
      router.push(meetingLink);

      console.log("This is the meeting data", meetingExists);
    } catch (error) {
      console.log("Error fetching meeting", error);
    }
  };

  return (
    <div className=" w-full flex flex-col">
      <input
        type="text"
        placeholder="Eg. http://thetutsession.com/2%41./(6^fhdbe"
        value={meetingLink}
        onChange={(e) => setMeetingLink(e.target.value)}
        className=" w-full h-12 bg-slate-600/30 placeholder:text-neutral-700 text-black px-3 py-1 rounded-md"
      />
      <button
        className=" w-full bg-green-500 text-white rounded-md h-10 mt-5"
        onClick={enterSession}
      >
        Go to meeting
      </button>
    </div>
  );
};

export default ToJoinInput;
