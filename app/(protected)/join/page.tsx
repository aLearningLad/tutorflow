import Notifs from "@/components/forDashboard/Notifs";
import JoinComponent from "@/components/forJoin/JoinComponent";
import React from "react";

const JoinPage = () => {
  return (
    <main className="min-h-screen bg-slate-900 text-black flex flex-col">
      <Notifs />
      <JoinComponent />
    </main>
  );
};

export default JoinPage;
