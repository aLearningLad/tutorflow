import Notifs from "@/components/forDashboard/Notifs";
import MailComp from "@/components/forMail/MailComp";
import React from "react";

const MailPage = () => {
  return (
    <main className="min-h-screen bg-slate-900 text-black flex flex-col">
      <Notifs />
      <MailComp />
    </main>
  );
};

export default MailPage;
