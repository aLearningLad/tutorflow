import { createClient } from "@/lib/supabase/server";
import { currentUser } from "@clerk/nextjs/server";
import MainReminder from "./MainReminder";
import OtherReminders from "./OtherReminders";

const ScheduleComp = async () => {
  const supabase = createClient();
  const user = await currentUser();

  const { data: remindersData, error: remindersDataError } = await supabase
    .from("reminders")
    .select("*")
    .eq("authorid", user?.id);

  if (remindersData && remindersData.length > 0) {
    const mainReminderData = remindersData[0];
    const otherReminderData = remindersData.slice(1);
    return (
      <div className=" w-full h-[90vh] flex flex-col">
        <MainReminder
          author={mainReminderData.author}
          detail={mainReminderData.detail}
          endsAt={mainReminderData.endsat}
          is_private={mainReminderData.is_private}
          reminderId={mainReminderData.reminderid}
          shareableLink={mainReminderData.shareable_link}
          startsAt={mainReminderData.startsat}
          title={mainReminderData.title}
          key={mainReminderData.reminderid}
        />
        <OtherReminders allreminders={otherReminderData} />
      </div>
    );
  }

  if (remindersDataError) {
    return <div>Something went wrong. Contact developer!</div>;
  }

  return (
    <div className="w-full h-[90vh] flex justify-center items-center flex-col text-center">
      <h2 className=" text-xl text-white ">
        Nothing to show yet. Would you like to create a new reminder to add to
        your schedule?
      </h2>
      <button className=" w-full md:w-10/12 lg:w-fit text-lg mt-5 lg:mt-10 bg-orange-500 text-white lg:px-4 py-2 rounded-md ">
        Add new reminder
      </button>
    </div>
  );
};

export default ScheduleComp;
