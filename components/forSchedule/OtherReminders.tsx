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
    <div className="w-full h-[40%] bg-green-400/20 py-2 px-3 md:px-5 lg:px-12 flex justify-center items-center flex-col ">
      <h2 className=" text-2xl mb-2 lg:mb-3">
        Nothing more to show for now...
      </h2>
      <p className="mb-4 md:mb-7 lg:mb-12">
        When you create reminders, they will be collected, sorted and shown
        here. You'll be able to easily curate you reminders by priority,
        removing them as needed.
      </p>
      <Link
        className=" w-full md:w-10/12 lg:w-fit lg:px-3 flex justify-center items-center py-2 bg-orange-500 border-4 border-orange-500 rounded-md hover:bg-transparent transition-all duration-300 ease-in "
        href={"/dashboard"}
      >
        Head over to your Dashboard for more options
      </Link>
    </div>
  );
};

export default OtherReminders;
