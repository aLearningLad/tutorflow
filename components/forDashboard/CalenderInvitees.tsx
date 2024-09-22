import React, { ChangeEvent, useState } from "react";
import PersonCard from "./PersonCard";

const CalenderInvitees = () => {
  const [calenderInviteList, setCalenderInviteList] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");

  const addToInviteList = () => {
    setCalenderInviteList((prev) => [...prev, email]);
    console.log("this is the invite list: ", calenderInviteList);
  };

  const removeInvitee = (emailToRemove: string) => {
    if (!calenderInviteList.includes(emailToRemove)) return;

    setCalenderInviteList((prevList) =>
      prevList.filter((anEmailString) => anEmailString !== emailToRemove)
    );
  };

  return (
    <section className=" w-full flex flex-col items-center justify-center text-center mt-6 lg:mt-9">
      <h2 className=" text-[16px]">Invite participants by email</h2>
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
      </div>
      <div
        className={` h-16 px-1 ${
          calenderInviteList.length > 0 ? "flex" : "hidden"
        } gap-2 w-full border-4 border-white mt-4`}
      >
        <div className="w-max h-full flex items-center justify-start gap-3 overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            {calenderInviteList.length > 0 &&
              calenderInviteList.map((person) => (
                <PersonCard
                  emailString={person}
                  inviteeList={calenderInviteList}
                  removeInvitee={() => removeInvitee(person)}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalenderInvitees;
