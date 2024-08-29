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
    <main className=" min-h-screen flex flex-col justify-center px-3 py-8 lg:px-12 lg:py-10 items-center text-xl text-white bg-slate-900 relative">
      {/* <Link href={"/dashboard"} className=" bg-white text-black p-2 rounded-lg">
        Try going to dashboard
      </Link>
      <Link
        className=" bg-red-600 text-white p-3 my-4"
        href={`/tutroom/${nanoid()}`}
      >
        Try entering a room with generated ID
      </Link> */}
      <section className="flex mb-12">
        <h2 className=" text-lg md:text-xl lg:text-3xl">tutor</h2>
        <h1
          className={clsx(dancingScript.className, "text-4xl text-yellow-400")}
        >
          FLOW
        </h1>
      </section>
      <section className="flex flex-col w-full py-3 min-h-[40vh] max-h-fit items-center">
        <span className=" flex items-center gap-1">
          <h2 className="">Learn.</h2>
          <h1 className="">Teach.</h1>
          <h2 className="">Share.</h2>
          <h1 className="">Grow</h1>
        </span>
        <h4 className=" w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 text-center text-neutral-200 text-[14px] lg:text-[16px] ">
          Welcome to tutorFlow—your go-to platform for seamless learning and
          teaching. Connect with passionate educators, share knowledge, and
          watch your skills flourish. Whether you're here to learn or teach,
          tutorFlow empowers you to grow every step of the way. Join now and
          experience a community dedicated to growth through learning, teaching,
          and sharing.
        </h4>
        <LandingDock />
        <p className=" text-[10px]">A HillSawft&copy; project</p>
      </section>
      <footer className=" w-full flex justify-center items-center">
        <p className=" text-[12px]">tutorFlow@2024</p>
      </footer>
    </main>
  );
}
