import { nanoid } from "nanoid";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Dancing_Script } from "next/font/google";
import clsx from "clsx";
import { Dock } from "@/components/magicui/dock";
import { LandingDock } from "@/components/forLanding/LandingDock";

const dancingScript = Dancing_Script({
  weight: "400", // Specify the desired weight
  subsets: ["latin"], // Optional, specify subsets if needed
});

export default async function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className=" min-h-screen flex flex-col justify-center px-3 py-8 lg:px-12 lg:py-10 items-center text-xl text-white bg-slate-900">
      {/* <Link href={"/dashboard"} className=" bg-white text-black p-2 rounded-lg">
        Try going to dashboard
      </Link>
      <Link
        className=" bg-red-600 text-white p-3 my-4"
        href={`/tutroom/${nanoid()}`}
      >
        Try entering a room with generated ID
      </Link> */}
      <section className=" flex">
        <h2 className=" text-lg md:text-xl lg:text-3xl">tutor</h2>
        <h1
          className={clsx(dancingScript.className, "text-4xl text-yellow-400")}
        >
          FLOW
        </h1>
      </section>
      <section className=" flex flex-col">
        <h4 className=" text-xl text-neutral-300">
          Unlock your full potential with our simplistic video tutoring app
        </h4>
        <LandingDock />
      </section>
    </main>
  );
}
