import { SignedIn, SignOutButton } from "@clerk/nextjs";
import React from "react";

const DashBoard = () => {
  return (
    <main className=" min-h-screen bg-yellow-600 text-black flex justify-center items-center flex-col">
      <h3>If you see this, it means you are allowed in!</h3>
      <SignedIn>
        <SignOutButton>Click here to sign out!</SignOutButton>
      </SignedIn>
    </main>
  );
};

export default DashBoard;
