import Notifs from "@/components/forDashboard/Notifs";
import ScheduleComp from "@/components/forSchedule/ScheduleComp";
import { createClient } from "@/lib/supabase/server";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const SchedulePage = async () => {
  const supabase = createClient();
  const user = await currentUser();

  const { data: remindersData, error: remindersDataError } = await supabase
    .from("reminders")
    .select("*")
    .eq("authorid", user?.id);

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col text-white justify-center items-center">
        Something went wrong
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 flex flex-col text-white">
      <Notifs />
      <ScheduleComp
        remindersData={remindersData}
        remindersDataError={remindersDataError}
      />
    </main>
  );
};

export default SchedulePage;
