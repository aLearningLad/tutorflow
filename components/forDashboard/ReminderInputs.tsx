"use client";

import { useEffect, useState } from "react";

const ReminderInputs = () => {
  // to get author email
  useEffect(() => {
    const getAuthor = async () => {
      // alert("Author getting function called!");
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

  const handleDetailsChange = () => {};

  return (
    <div className="w-full h-[70vh] border-4 border-white flex flex-col relative gap-4">
      {/* inputs ===> scrollable */}
      <div className="w-full overflow-auto lg:h-[90%] bg-pink-400/40 gap-y-4 flex flex-col justify-center">
        <section className="w-full min-h-24 border-2 border-white flex flex-col items-center text-center gap-1">
          <label className=" text-[14px] " htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Call Mr. Anderson"
            className=" bg-slate-600 h-[70%] lg:h-[60%] rounded-md text-white px-2 py-1 w-full "
            onChange={handleDetailsChange}
          />
        </section>
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
