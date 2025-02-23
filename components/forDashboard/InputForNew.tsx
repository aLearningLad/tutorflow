"use client";

import { ChangeEvent, useState } from "react";
import PersonCard from "./PersonCard";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const InputForNew = () => {
  const [email, setEmail] = useState<string>("");
  const [inviteList, setInviteList] = useState<string[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [sessionLink, setSessionLink] = useState(nanoid());
  const router = useRouter();

  const addToInviteList = () => {
    // don't allow addition of empty value
    if (email.length < 1) {
      toast.error("Provide an email to invite");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please check the email you're trying to invite");
      return;
    }

    setInviteList((prev) => [...prev, email]);
    console.log("this is the invite list: ", inviteList);
  };

  const removeInvitee = (emailToRemove: string) => {
    if (!inviteList.includes(emailToRemove)) return;

    setInviteList((prevList) =>
      prevList.filter((anEmailString) => anEmailString !== emailToRemove)
    );
  };

  // send invites to room, for each person on invite list via nodemailer, then
  // router.push() to the tutroom
  const handleSessionCreation = async () => {
    try {
      if (inviteList.length < 1) {
        toast.error(
          "You are attempting to open an empty tutorial session. Please invite attendees"
        );
        return;
      }

      // add nodemailer functionality here
      const response = await fetch("/api/tutInvites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inviteList,
          sessionLink,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Invites sent successfully", data);
        // push to tuturial room
        router.push(`/tutroom/${sessionLink}`);
        toast.success("Opening new tutorial room");
      } else {
        console.error("Failed to send invites: ", data.message);
        toast.error("Error sending invites");
      }
    } catch (error) {
      console.log("Error while creating a new tutorial session", error);
    }
  };

  // if (!isDone) {
  return (
    <section className=" w-full flex flex-col items-center justify-center text-center mt-6 lg:mt-9">
      <h2 className=" text-[16px]">Invite participants by email</h2>
      <div className=" w-full">
        <input
          type="text"
          placeholder="Eg. isaac44@tutorflow.com"
          className=" w-full h-12 rounded-md bg-slate-300/50 text-black placeholder:text-neutral-700 mt-3 px-3 py-1"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </div>
      <div className=" w-full flex justify-center items-center flex-col gap-3">
        <button
          onClick={addToInviteList}
          className=" w-full h-12 mt-3 lg:mt-5 md:w-6/12 py-1 hover:scale-95 transition-all duration-300 ease-in-out hover:bg-black flex justify-center items-center text-[16px] bg-orange-500 text-white rounded-md "
        >
          Add to invite list
        </button>
        <button
          onClick={handleSessionCreation}
          className=" w-full h-12 mt-3 lg:mt-5 md:w-6/12 py-1 hover:scale-95 transition-all duration-300 ease-in-out hover:bg-black flex justify-center items-center text-[16px] bg-green-500 text-white rounded-md "
        >
          Start Tutorial Session
        </button>
      </div>
      <div
        className={` h-16 px-1 ${
          inviteList.length > 0 ? "flex" : "hidden"
        } gap-2 w-full border-4 border-white mt-4`}
      >
        <div className="w-full h-[70px] flex overflow-auto">
          <div className="flex gap-3 min-w-max">
            {inviteList.length > 0 &&
              inviteList.map((person) => (
                <PersonCard
                  key={person}
                  emailString={person}
                  inviteeList={inviteList}
                  removeInvitee={() => removeInvitee(person)}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
  // }

  // return (
  //   <section className=" w-full flex flex-col items-center justify-center text-center mt-6 lg:mt-9">
  //     <h1>Done!</h1>
  //     <p>Click the arrow in the top-left corner close</p>
  //   </section>
  // );
};

export default InputForNew;
