import { createClient } from "@/lib/supabase/server";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const ScheduleComp = async () => {
  const supabase = createClient();
  const user = await currentUser();

  const { data: remindersData, error: remindersDataError } = await supabase
    .from("reminders")
    .select("*")
    .eq("authorid", user?.id);

  if (remindersData && remindersData.length > 0) {
    return <div>ScheduleComp</div>;
  }

  if (remindersDataError) {
    return <div>Something went wrong. Contact developer!</div>;
  }

  return (
    <div>
      Nothing to show yet. Would you like to create a new reminder to add to
      your schedule?
    </div>
  );
};

export default ScheduleComp;
