import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <main className=" min-h-screen flex justify-center items-center bg-black text-white flex-col">
      <h2 className=" text-white">Hi there!</h2>
      <div>
        <SignIn />
      </div>
    </main>
  );
};

export default SignInPage;
