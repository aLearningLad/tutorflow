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
          <section className="rounded-lg gap-4 lg:gap-12 p-2 md:p-5 lg:p-9 w-full h-full bg-neutral-300/70 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-auto ">
            {calenderTutData.map((tut) => (
              <div className=" min-h-[20vh] max-h-[30vh] px-1 lg:px-2 w-full border-4 border-cyan-500 rounded-lg flex flex-col items-center justify-between text-center">
                <span className=" w-full flex justify-between items-center ">
                  <p>{tut.date_of_tut}</p>
                  <p>{tut.start_time}</p>
                </span>
              </div>
            ))}
          </section>
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
