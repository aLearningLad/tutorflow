import Notifs from "@/components/forDashboard/Notifs";
import Sidebar from "@/components/forDashboard/Sidebar";
import Upcoming from "@/components/forDashboard/Upcoming";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { nanoid } from "nanoid";
import Link from "next/link";
import React from "react";

const DashBoard = () => {
  return (
    <main className=" min-h-screen bg-yellow-600 text-black flex flex-col">
      {/* <h3>If you see this, it means you are allowed in!</h3>
      <SignedIn>
        <SignOutButton>Click here to sign out!</SignOutButton>
      </SignedIn>
      <Link
        className=" bg-red-600 text-white p-3 my-4"
        href={`/tutroom/${nanoid()}`}
      >
        Try entering a room with generated ID
      </Link> */}

      {/* notifs and navigable options */}
      <Notifs />
      {/* upcoming */}
      <Upcoming />
    </main>
  );
};

export default DashBoard;
