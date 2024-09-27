import Image from "next/image";
import { GiDiceTarget } from "react-icons/gi";

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
        {/* left side, only visible on large */}
        <div className=" h-full flex w-full bg-neutral-200/20 rounded-lg ">
          image comes here
        </div>
      </section>
      <section className=" w-full lg:w-5/12 h-full flex flex-col bg-blue-600 p-1 md:p-2 lg:p-5 rounded-lg">
        {/* right side */}
        <section className=" w-full py-2">
          <div className=" w-full  flex justify-between ">
            <span className="p-2 bg-neutral-100/30 rounded-md">
              <p className="text-[10px] ">from</p>
              <h2>{startsAt}</h2>
            </span>
            <span className="min-w-[30%] max-w-[50%] flex items-center justify-center bg-neutral-200/30 p-2 rounded-md gap-2 ">
              <GiDiceTarget size={20} />
              <p className=" text-xl  overflow-auto flex ">{title}</p>
            </span>
            <span className=" p-2 bg-neutral-100/30 rounded-md ">
              <p className="text-[10px]">until</p>
              <h2>{endsAt}</h2>
            </span>
          </div>
        </section>
        <section className=" w-full flex justify-center items-center text-center py-5 flex-col ">
          <Image
            alt="img"
            src={"/assets/speaker3.png"}
            width={100}
            height={80}
            className=" p-1 bg-cyan-500 rounded-md"
          />
          <span className=" w-full flex items-center justify-center gap-2">
            <p className=" text-white text-[12px] ">by</p>
            <p className=" text-[18px] ">{author}</p>
          </span>
        </section>
        <section className=" w-full h-full lg:h-fit overflow-auto rounded-md text-ellipsis bg-slate-100/30 py-2 px-4 ">
          <p>{detail}</p>
        </section>
      </section>
    </div>
  );
};

export default MainReminder;
