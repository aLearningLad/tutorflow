import React from "react";

const MainReminder: React.FC<TreminderCard> = ({
  author,
  detail,
  endsAt,
  is_private,
  reminderId,
  shareableLink,
  startsAt,
  title,
}) => {
  return (
    <div className=" w-full h-[60%] flex p-1 md:p-2 lg:p-5 lg:gap-5 ">
      <section className=" w-7/12 lg:flex hidden ">
        {/* left side */}
        <div className=" h-full flex w-full bg-neutral-200/20 rounded-lg ">
          image comes here
        </div>
      </section>
      <section className=" w-full lg:w-5/12 h-full flex bg-red-600/30 p-1 md:p-2 lg:p-5 rounded-lg">
        {/* right side */}
        <div className=" w-full py-2 flex justify-between ">
          <span>
            <p>from</p>
            <h2>{startsAt}</h2>
          </span>
          <span>
            <p>until</p>
            <h2>{endsAt}</h2>
          </span>
        </div>
      </section>
    </div>
  );
};

export default MainReminder;
