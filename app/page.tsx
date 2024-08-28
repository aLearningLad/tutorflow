import { nanoid } from "nanoid";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className=" min-h-screen flex justify-center items-center text-xl text-white bg-slate-900">
      {/* <Link href={"/dashboard"} className=" bg-white text-black p-2 rounded-lg">
        Try going to dashboard
      </Link>
      <Link
        className=" bg-red-600 text-white p-3 my-4"
        href={`/tutroom/${nanoid()}`}
      >
        Try entering a room with generated ID
      </Link> */}
    </main>
  );
}
