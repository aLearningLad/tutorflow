import Sidebar from "@/components/forDashboard/Sidebar";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { nanoid } from "nanoid";
import Link from "next/link";
import React from "react";

const DashBoard = () => {
  return (
    <main className=" min-h-screen relative bg-yellow-600 text-black flex flex-col lg:flex-row">
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

      {/* sidebar */}
      <Sidebar />
      {/* notifs and navigable options */}

      {/* upcoming */}
    </main>
  );
};

export default DashBoard;
