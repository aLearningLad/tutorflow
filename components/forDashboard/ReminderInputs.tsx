"use client";

import { useEffect, useState } from "react";

const ReminderInputs = () => {
  // to get author email
  useEffect(() => {
    const getAuthor = async () => {
      alert("Author getting function called!");
    };

    getAuthor();
  }, []);

  const [reminderDetails, setReminderDetails] = useState<TreminderCard>({
    author: "", // get from clerk
    reminderId: "", // call nanoid here
    title: "", // get from user input here
    startsAt: "", // get from user input here
    endsAt: "", // get from user input here
    detail: "", // get from user input here
    shareableLink: "", // generate by attaching using nanoid to create roomId
    is_private: false, // allow user to change this via selector
  });

  return (
    <div className="w-full h-[70vh] border-4 border-white flex flex-col relative gap-4">
      {/* inputs ===> scrollable */}
      <div className="w-full lg:h-[90%] bg-pink-400/40">
        {/* inputs needed are from type IreminderCard
      
      */}
      </div>

      {/* submit button  */}
      <div className=" flex justify-center items-center w-full lg:h-[10%] ">
        <button className=" w-full h-full bg-orange-400 text-white text-lg rounded-md ">
          Save reminder
        </button>
      </div>
    </div>
  );
};

export default ReminderInputs;
