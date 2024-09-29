import { createClient } from "@/lib/supabase/server";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";

const LowerNotifs = async () => {
  const supabase = createClient();
  const currentUserData = await currentUser();
  const userId = currentUserData?.id;

  const { data: calenderTutsData, error: calenderTutsDataError } =
    await supabase.from("calendertuts").select("*").eq("author_id", userId);

  console.log("calender tuts data here: ", calenderTutsData);

  const falseNotifs = [1, 2, 3, 4, 5, 6, 7];

  if (calenderTutsDataError) {
    return (
      <div className="w-full h-[35%] flex justify-center flex-col text-center py-2 px-1 lg:px-7">
        <h1>Something went wrong. Please contact the developer, here:</h1>
        <p>mocmanca@gmail.com</p>
      </div>
    );
  }

  if (calenderTutsData && calenderTutsData.length < 1) {
    return (
      <div className="w-full h-[35%] flex justify-center flex-col text-center py-2 px-1 lg:px-7">
        <h1 className=" text-xl text-white">No notifications to show yet</h1>
      </div>
    );
  }

  if (calenderTutsData && calenderTutsData.length > 0) {
    return (
      <div className="w-full h-[35%] flex justify-center flex-col text-center py-2 px-1 lg:px-7">
        <header className=" mt-3">
          <h1 className=" text-[20px]">Notifications</h1>
        </header>
        <section className=" w-full min-h-[85%] flex flex-col gap-3 overflow-auto p-2 ">
          {falseNotifs.map((notif) => (
            <div
              className={`border-2 hover:scale-95 cursor-pointer transition-all duration-300 ease-in min-h-14 lg:min-h-12 bg-slate-600/40 border-neutral-300/40 rounded-md p-1 flex justify-between items-center`}
            >
              <div className=" w-3/12 h-full flex justify-center items-center">
                {/* add a state here, render open envelope if message is viewed */}
                <FaEnvelope size={14} className=" text-white" />
              </div>
              <div>
                <p className=" text-[12px] ">
                  New meeting ID has been generated
                </p>
              </div>
              <button className=" w-fit px-3 lg:px-7 min-h-10 lg:min-h-8 bg-blue-600 text-white rounded-[4px] text-[14px] ">
                Share link
              </button>
            </div>
          ))}
        </section>
      </div>
    );
  }
};

export default LowerNotifs;
