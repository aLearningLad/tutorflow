"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ToJoinInput = () => {
  const [meetingLink, setMeetingLink] = useState<string>("");
  const router = useRouter();

  const enterSession = async () => {
    if (meetingLink.length < 5) {
      return;
    }

    const supabase = createClient();

    try {
      const { data: meetingExists, error: meetingError } = await supabase
        .from("reminders")
        .select("shareable_link")
        .eq("shareable_link", meetingLink);

      if (!meetingExists) {
        alert("No meeting link found!");
        return;
      }

      if (meetingError) {
        throw new Error(meetingError);
      }

      if (meetingExists.length < 1) {
        alert("No Meeting Found!"); //use a toaster here instead
      }

      console.log("This is the meeting data", meetingExists);
    } catch (error) {
      console.log("Error fetching meeting", error);
    }
  };

  return (
    <div className=" w-full md:w-8/12 lg:w-6/12 flex flex-col">
      <input
        type="text"
        placeholder="Eg. http://thetutsession.com/2%41./(6^fhdbe"
        value={meetingLink}
        onChange={(e) => setMeetingLink(e.target.value)}
        className=" w-full h-12 bg-slate-600 text-white px-3 py-1 rounded-md"
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
