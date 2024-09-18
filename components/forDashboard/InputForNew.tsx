"use client";

import { ChangeEvent, useState } from "react";

const InputForNew = () => {
  const [email, setEmail] = useState<string>("");
  const [inviteList, setInviteList] = useState<string[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);

  const addToInviteList = () => {
    setInviteList((prev) => [...prev, email]);
    console.log("this is the invite list: ", inviteList);
  };

  if (!isDone) {
    return (
      <section className=" w-full flex flex-col items-center justify-center text-center mt-6 lg:mt-9">
        <h2 className={` ${isDone ? "hidden" : "flex"} text-[16px]`}>
          Invite participants by email
        </h2>
        <div className=" w-full">
          <input
            type="text"
            placeholder="Eg. isaac44@tutorflow.com"
            className=" w-full h-12 rounded-md bg-slate-500/70 mt-3 px-3 py-1"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className=" w-full flex justify-center items-center flex-col gap-3">
          <button
            onClick={addToInviteList}
            className=" w-full h-12 mt-3 lg:mt-5 md:w-6/12 py-1 flex justify-center items-center text-[16px] bg-orange-400 text-white rounded-md "
          >
            Add to invite list
          </button>
          <button
            onClick={(e) => setIsDone(true)}
            className=" w-full h-12 mt-3 lg:mt-5 md:w-6/12 py-1 flex justify-center items-center text-[16px] bg-green-500 text-white rounded-md "
          >
            Finish
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className=" w-full flex flex-col items-center justify-center text-center mt-6 lg:mt-9">
      <h1>Done!</h1>
      <p>Click the arrow in the top-left corner close</p>
    </section>
  );
};

export default InputForNew;
