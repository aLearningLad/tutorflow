import Link from "next/link";
import React from "react";

const OtherReminders: React.FC<Totherremindercard> = ({ allreminders }) => {
  if (allreminders && allreminders.length > 0) {
    return (
      <div className=" w-full h-[40%] flex flex-col gap-6 py-2 px-3 md:px-5 lg:px-12 overflow-auto ">
        {allreminders.map(
          (
            {
              author,
              detail,
              endsat,
              is_private,
              reminderid,
              shareable_link,
              startsat,
              title,
            },
            index
          ) => (
            <div
              className={` ${
                index % 2 === 0
                  ? " bg-gradient-to-b from-orange-600 via-orange-800/40 to-transparent"
                  : " bg-gradient-to-b from-transparent via-orange-800/40 to-orange-600 text-white"
              }  py-4 px-8 items-center justify-center lg:flex-row flex-col text-center min-h-[220px] rounded-lg lg:rounded-xl flex w-full`}
              key={reminderid}
            >
              <p className=" text-[12px] mr-3 lg:flex hidden w-[30px] h-[30px] p-3 rounded-full bg-neutral-100/40 justify-center items-center ">
                {index + 1}
              </p>

              {/* title */}
              <div
                className={`w-full h-full px-5 rounded-lg py-2 lg:w-4/12 flex justify-center items-center text-center ${
                  index % 2 === 0
                    ? " bg-gradient-to-b from-neutral-100/10 via-neutral-50/10 to-transparent "
                    : " bg-gradient-to-b from-transparent via-neutral-50/10 to-neutral-100/10 "
                }`}
              >
                <h1 className=" text-[14px]  ">{title}</h1>
              </div>

              {/* detail & link if applicable */}
              <div className=" w-full lg:w-[400px] overflow-auto h-full flex justify-center items-center flex-col text-center ">
                <h2>{detail}</h2>
              </div>

              {/* times */}

              {/* link */}
              {shareable_link && (
                <Link
                  className={`bg-black ${
                    index % 2 ? "pulseLinkTwo" : "pulseLink"
                  }  rounded-lg text-white w-full md:w-10/12 lg:w-fit lg:px-6 h-fit py-4 lg:py-5 flex justify-center items-center text-center text-ellipsis`}
                  href={shareable_link}
                  target="_blank"
                >
                  <p className=" text-[16px] lg:text-[12px] ">
                    {shareable_link}
                  </p>
                </Link>
              )}
            </div>
          )
        )}
      </div>
    );
  }

  return (
    <div className=" w-full h-[40%] p-1 md:p-2 lg:p-5">
      <div className="w-full rounded-lg h-full bg-blue-600/10 py-2 px-3 md:px-5 lg:px-12 flex justify-center items-center flex-col ">
        <h2 className=" text-2xl mb-2 lg:mb-3">
          Nothing more to show for now...
        </h2>
        <p className="mb-4 md:mb-7 lg:mb-12">
          As you add more reminders, they will be collected, sorted and shown
          here. {"You'll"} be able to easily curate your reminders by priority,
          removing them as needed.
        </p>
        <Link
          className=" w-full md:w-10/12 lg:w-fit lg:px-3 flex justify-center items-center py-2 bg-orange-500 border-4 border-orange-500 rounded-md hover:bg-transparent transition-all duration-300 ease-in "
          href={"/dashboard"}
        >
          Head over to your Dashboard for more options
        </Link>
      </div>
    </div>
  );
};

export default OtherReminders;
