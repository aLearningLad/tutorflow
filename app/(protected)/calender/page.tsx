import Notifs from "@/components/forDashboard/Notifs";
import { createClient } from "@/lib/supabase/server";
import { currentUser } from "@clerk/nextjs/server";

const CalenderPage = async () => {
  const supabase = createClient();
  const user = await currentUser();

  const { data: calenderTutData, error: calenderError } = await supabase
    .from("calendertuts")
    .select("*")
    .eq("author_id", user?.id);

  if (calenderError) {
    console.log("Error while fetching calender tuts: ", calenderError.message);
  }

  if (calenderTutData && calenderTutData.length > 0) {
    return (
      <main className="min-h-screen bg-slate-900 flex flex-col text-white">
        <Notifs />
        <div className="h-[90vh] flex flex-col p-1 md:p-2 lg:p-5 items-center text-center ">
          <section className="rounded-lg w-full h-full bg-neutral-300/70 grid grid-cols-1 lg:grid-cols-2 "></section>
        </div>
      </main>
    );
  }

  if (calenderError) {
    return (
      <div className=" min-h-screen bg-slate-900 flex flex-col text-white ">
        Something went wrong...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col text-white">
      No calender-marked tutorials to show here
    </div>
  );
};

export default CalenderPage;
