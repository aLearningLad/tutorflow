import { createClient } from "@/lib/supabase/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import ReminderBtn from "./ReminderBtn";

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
    const reminders = [1, 2, 3, 4, 5, 6];
    return (
      <div className=" w-full h-[50vh] overflow-auto flex flex-col gap-5 lg:gap-7">
        {allReminders.map((reminder) => (
          <div className=" w-full min-h-60 rounded-lg bg-slate-700 p-5 flex flex-col">
            This is a card
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-[50vh] items-center justify-center text-center flex flex-col gap-5 lg:gap-7">
      <h1>No reminders stored yet</h1>
      <p>
        Create some to keep track of important tasks or discussions to be
        addressed within your tutorials
      </p>
      <ReminderBtn />
    </div>
  );
};

export default ReminderList;
