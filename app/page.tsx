import { nanoid } from "nanoid";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-screen flex justify-center items-center text-xl text-white bg-black">
      <Link href={"/dashboard"} className=" bg-white text-black p-2 rounded-lg">
        Try going to dashboard
      </Link>
      <Link
        className=" bg-red-600 text-white p-3 my-4"
        href={`/tutroom/${nanoid()}`}
      >
        Try entering a room with generated ID
      </Link>
    </main>
  );
}
