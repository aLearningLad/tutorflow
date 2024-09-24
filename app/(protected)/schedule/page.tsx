import Notifs from "@/components/forDashboard/Notifs";
import ScheduleComp from "@/components/forSchedule/ScheduleComp";
import React from "react";

const SchedulePage = () => {
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col text-white">
      <Notifs />
      <ScheduleComp />
    </main>
  );
};

export default SchedulePage;
