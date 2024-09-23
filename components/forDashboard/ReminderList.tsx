import { createClient } from "@/lib/supabase/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import ReminderBtn from "./ReminderBtn";
import { SlOptions } from "react-icons/sl";
import DeleteReminderBtn from "./DeleteReminderBtn";

const ReminderList = async () => {
  const supabase = createClient();

  const userDetails = await currentUser();

  const email = userDetails?.emailAddresses[0].emailAddress;

  const { data: allReminders, error: remindersError } = await supabase
    .from("reminders")
    .select("*")
    .eq("author_email", email);
  console.log("These are the reminders: ", allReminders);

  if (allReminders && allReminders.length > 0) {
    return (
      <div className=" w-full h-[50vh] overflow-auto flex flex-col gap-5 lg:gap-7">
        {allReminders.map((reminder: TreminderCard) => (
          <div className=" w-full min-h-60 rounded-lg bg-slate-700 p-5 flex flex-col px-1 md:px-2 lg:px-3 py-2 lg:py-3">
            {/* top section */}
            <section className=" w-full flex justify-between items-center h-[20%]">
              <h3>{reminder.title}</h3>
              <DeleteReminderBtn reminderId={reminder.reminderId} />
            </section>

            {/* middle section */}
            <section className=" w-full flex text-left  "></section>

            {/* lower section */}
            <section className=" w-full flex justify-between "></section>
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
