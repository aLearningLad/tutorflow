import Link from "next/link";
import React from "react";

const OtherReminders: React.FC<Totherremindercard> = ({ allreminders }) => {
  if (allreminders && allreminders.length > 0) {
    return (
      <div className=" w-full h-[40%] bg-green-400/20 py-2 px-3 md:px-5 lg:px-12 flex overflow-auto ">
        {allreminders.map((reminder) => (
          <div>{reminder.detail}</div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-[40%] bg-green-400/20 py-2 px-3 md:px-5 lg:px-12 flex justify-center items-center flex-col gap-4 md:gap-7 lg:gap-12">
      <h2 className=" text-xl">Nothing more to show</h2>
      <Link href={"/dashboard"}>
        Head over to your Dashboard for more options
      </Link>
    </div>
  );
};

export default OtherReminders;
