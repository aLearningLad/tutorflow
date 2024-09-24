import { createClient } from "@/lib/supabase/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import ReminderBtn from "./ReminderBtn";
import { SlOptions } from "react-icons/sl";
import DeleteReminderBtn from "./DeleteReminderBtn";
import { FaLink } from "react-icons/fa";

const ReminderList = async () => {
  const supabase = createClient();

  const userDetails = await currentUser();

  const email = userDetails?.emailAddresses[0].emailAddress;
  const id = userDetails?.id;

  const { data: allReminders, error: remindersError } = await supabase
    .from("reminders")
    .select("*")
    .eq("authorid", id);
  console.log("These are the reminders: ", allReminders);

  if (allReminders && allReminders.length > 0) {
    return (
      <div className=" w-full h-[50vh] overflow-auto flex flex-col gap-5 lg:gap-7">
        {allReminders.map((reminder) => (
          <div className=" w-full min-h-60 rounded-lg bg-slate-700 p-5 flex flex-col px-1 md:px-2 lg:px-3 py-2 lg:py-3">
            {/* top section */}
            <section className=" w-full flex justify-between items-center h-[20%] border-b-2 border-slate-600">
              <h3 className=" text-2xl text-white text-left ">
                {reminder.title}
              </h3>
              <DeleteReminderBtn reminderId={reminder.reminderid} />
            </section>

            {/* middle section */}
            <section className=" w-full flex text-left h-[60%] ">
              <p className=" text-[16px] text-neutral-200 ">
                {reminder.detail}
              </p>
            </section>

            {/* lower section */}
            <section className=" w-full flex flex-col lg:flex-row justify-between h-[20%] ">
              <span className=" w-full lg:w-1/2 flex justify-start gap-1">
                <p className=" text-[14px] text-neutral-200">
                  {reminder.startsat}
                </p>
                <p>until</p>
                <p className=" text-[14px] text-neutral-200">
                  {reminder.endsat}
                </p>
              </span>

              <span className=" w-full lg:w-1/2 flex justify-end gap-1 px-3 ">
                <button className=" w-32 flex h-full bg-blue-600 rounded-md justify-center items-center gap-1 ">
                  <FaLink size={14} />
                  <p className=" w-9/12 h-full overflow-clip flex text-[14px] rounded-md text-ellipsis items-center justify-center ">
                    {reminder.shareable_link}
                  </p>
                </button>
              </span>
            </section>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-[50vh] items-center justify-center text-center flex flex-col gap-5 lg:gap-7">
      <h1 className=" text-xl">No reminders stored yet</h1>
      <p>
        Create some to keep track of important tasks or discussions to be
        addressed within your tutorials
      </p>
      <ReminderBtn />
    </div>
  );
};

export default ReminderList;
