import Notifs from "@/components/forDashboard/Notifs";
import { createClient } from "@/lib/supabase/server";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

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
          <section className="rounded-lg gap-4 lg:gap-12 p-2 md:p-5 lg:p-9 w-full h-full bg-neutral-400/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-auto ">
            {calenderTutData.map((tut) => (
              <div className=" min-h-[30vh] py-2 max-h-[40vh] px-1 lg:px-2 w-full border-4 border-cyan-500 rounded-lg flex flex-col items-center justify-between text-center">
                <span className=" w-full flex justify-between items-center ">
                  <div className=" flex flex-col items-start">
                    <p className=" text-[12px] text-neutral-300 ">
                      scheduled for
                    </p>
                    <p>{tut.date_of_tut}</p>
                  </div>
                  <div className=" flex gap-1 items-center">
                    <p className="text-[12px] text-neutral-300">@</p>
                    <p>{tut.start_time}</p>
                  </div>
                </span>
                <span className=" flex justify-center w-full py-2 items-center gap-1 ">
                  <FaLink /> <p>{tut.session_link}</p>
                </span>

                <div className=" w-full flex justify-center">
                  <Link
                    className=" w-full lg:w-8/12 bg-orange-500 border-4 border-orange-500 hover:bg-transparent hover:scale-95 hover:text-orange-400 transition-all duration-300 ease-in text-white rounded-md text-lg py-2"
                    href={`/tutroom/${tut.session_link}`}
                  >
                    Start Tut Now
                  </Link>
                </div>
                <span className=" w-full py-2 flex gap-2 overflow-auto text-ellipsis">
                  {tut.invited_emails.map((email: string) => (
                    <p>{email}</p>
                  ))}
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
