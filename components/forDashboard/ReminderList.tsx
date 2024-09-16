import React from "react";

const ReminderList = () => {
  const reminders = [1, 2, 3, 4, 5, 6];
  return (
    <div className=" w-full h-[50vh] overflow-auto flex flex-col gap-5 lg:gap-7">
      {reminders.map((reminder) => (
        <div className=" w-full min-h-60 rounded-lg bg-slate-700 p-5 flex flex-col">
          This is a card
        </div>
      ))}
    </div>
  );
};

export default ReminderList;
