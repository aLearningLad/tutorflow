import Notifs from "@/components/forDashboard/Notifs";
import React from "react";

const CalenderPage = () => {
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col text-white">
      <Notifs />
      <div className=" h-[90vh] flex flex-col p-1 md:p-2 lg:p-5 items-center text-center ">
        <section className=" rounded-lg w-full h-full bg-neutral-300/70 grid grid-cols-1 lg:grid-cols-2 "></section>
      </div>
    </main>
  );
};

export default CalenderPage;
