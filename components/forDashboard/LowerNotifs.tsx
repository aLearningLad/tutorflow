import { createClient } from "@/lib/supabase/server";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { FaEnvelope, FaEnvelopeOpenText } from "react-icons/fa";
import NotifShareLinkBtn from "./NotifShareLinkBtn";

const LowerNotifs = async () => {
  const supabase = createClient();
  const currentUserData = await currentUser();
  const userId = currentUserData?.id;

  const { data: calenderTutsData, error: calenderTutsDataError } =
    await supabase.from("calendertuts").select("*").eq("author_id", userId);

  console.log("calender tuts data here: ", calenderTutsData);

  if (!currentUserData) {
    return (
      <div className="w-full h-[35%] flex justify-center flex-col text-center py-2 px-1 lg:px-7">
        <h1>You're not authorized to access notifications. Sign in</h1>
      </div>
    );
  }
  if (!currentUserData && !calenderTutsDataError) {
    return (
      <div className="w-full h-[35%] flex justify-center flex-col text-center py-2 px-1 lg:px-7">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (calenderTutsDataError) {
    return (
      <div className="w-full h-[35%] flex justify-center flex-col text-center py-2 px-1 lg:px-7">
        <h1>
          Your notifications would normally show up here. But it seems something
          went wrong. Please contact the developer, here:
        </h1>
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
          {calenderTutsData.map((notif: Tcalendertutdata) => (
            <div
              className={`border-2 hover:scale-95 cursor-pointer transition-all duration-300 ease-in min-h-14 lg:min-h-12 bg-slate-600/40 border-neutral-300/40 rounded-md p-1 lg:p-2 flex justify-between items-center`}
              key={notif.tut_id}
            >
              <div className=" w-3/12 h-full flex justify-center items-center ">
                {/* add a state here, render open envelope if message is viewed */}
                {notif.is_reminded ? (
                  <div className=" p-1 rounded-sm bg-green-500">
                    <FaEnvelopeOpenText size={14} className=" text-white " />
                  </div>
                ) : (
                  <FaEnvelope className=" text-white" />
                )}
              </div>
              <div className=" w-full flex justify-center">
                {notif.is_reminded ? (
                  <div className="text-[12px]">Reminders already sent</div>
                ) : (
                  <p className=" text-[12px]">
                    Tut scheduled for {notif.date_of_tut}, from{" "}
                    {notif.start_time}
                  </p>
                )}
              </div>
              <NotifShareLinkBtn
                author_id={notif.author_id}
                date_of_tut={notif.date_of_tut}
                invited_emails={notif.invited_emails}
                session_link={notif.session_link}
                start_time={notif.start_time}
                tut_id={notif.tut_id}
                key={notif.tut_id}
                is_reminded={notif.is_reminded}
              />
            </div>
          ))}
        </section>
      </div>
    );
  }
};

export default LowerNotifs;
