"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ToJoinInput = () => {
  const [meetingLink, setMeetingLink] = useState<string>("");
  const router = useRouter();

  const enterSession = async () => {
    const supabase = createClient();
    const { data: meetingExists, error: meetingError } = await supabase
      .from("reminders")
      .select("shareable_link")
      .eq("shareable_link", meetingLink);

    if (!meetingExists) {
      return;
    }

    try {
    } catch (error) {}
  };

  return (
    <div className=" w-full md:w-8/12 lg:w-6/12 flex flex-col">
      <input
        type="text"
        placeholder="Eg. http://thetutsession.com/2%41./(6^fhdbe"
        value={meetingLink}
        onChange={(e) => setMeetingLink(e.target.value)}
      />
      <button>Go to meeting</button>
    </div>
  );
};

export default ToJoinInput;
