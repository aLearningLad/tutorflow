import Notifs from "@/components/forDashboard/Notifs";
import { createClient } from "@/lib/supabase/server";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";

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
            {calenderTutData.map((tut, index) => (
              <div
                key={tut}
                className={`min-h-[30vh] py-2 lg:py-4 max-h-[40vh] px-1 lg:px-5 w-full ${
                  index % 2 === 0 && "bg-orange-500 text-white"
                } ${index % 3 === 0 && "bg-cyan-500 text-black"} ${
                  index % 2 !== 0 &&
                  index % 3 !== 0 &&
                  " bg-blue-900 text-white "
                } rounded-lg flex hover:bg-neutral-100/10 transition-all duration-300 ease-in-out hover:scale-95 flex-col items-center justify-between text-center`}
              >
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
                    className={` w-full lg:w-8/12  ${
                      index % 2 === 0 &&
                      "bg-orange-300 text-black hover:bg-black hover:text-white"
                    } ${
                      index % 3 === 0 &&
                      "bg-cyan-500 text-black hover:bg-black hover:text-white"
                    } ${
                      index % 2 !== 0 &&
                      index % 3 !== 0 &&
                      " bg-blue-600 text-white hover:bg-black "
                    }  hover:scale-95 transition-all duration-300 ease-in rounded-md text-lg py-2`}
                    href={`/tutroom/${tut.session_link}`}
                  >
                    Start Tut Now
                  </Link>
                </div>

                {tut.invited_emails.length > 0 && (
                  <span className=" w-full py-2 flex gap-2 overflow-auto text-ellipsis ">
                    {tut.invited_emails.map((email: string) => (
                      <span
                        className=" bg-neutral-100/20 px-3 lg:px-5 rounded-md py-2 flex justify-center items-center gap-1"
                        key={email}
                      >
                        <FaPersonCircleCheck size={18} color="white" />
                        {email}
                      </span>
                    ))}
                  </span>
                )}
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
