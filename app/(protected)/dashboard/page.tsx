import Notifs from "@/components/forDashboard/Notifs";
import Sidebar from "@/components/forDashboard/Sidebar";
import Upcoming from "@/components/forDashboard/Upcoming";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { nanoid } from "nanoid";
import Link from "next/link";
import React from "react";

const DashBoard = () => {
  return (
    <main className=" min-h-screen bg-slate-900 text-black flex flex-col">
      {/* notifs and navigable options */}
      <Notifs />
      {/* upcoming */}
      <Upcoming />
    </main>
  );
};

export default DashBoard;
