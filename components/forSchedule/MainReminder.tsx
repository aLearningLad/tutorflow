import Image from "next/image";
import { GiDiceTarget } from "react-icons/gi";
import SchedulingTopRight from "./SchedulingTopLeft";
import SchedulingTopLeft from "./SchedulingTopLeft";

const MainReminder: React.FC<TreminderCard> = ({
  author,
  detail,
  endsat,
  is_private,
  reminderid,
  shareable_link,
  startsat,
  title,
}) => {
  return (
    <div className=" w-full h-[60%] flex p-1 md:p-2 lg:p-5 lg:gap-5 ">
      <section className=" w-7/12 lg:flex hidden ">
        {/* left side, only visible on large */}
        <SchedulingTopLeft />
      </section>
      <section className=" w-full lg:w-5/12 h-full flex hover:scale-95 transition-all duration-300 ease-in flex-col hover:bg-neutral-100/20 bg-blue-600/10 p-1 md:p-2 lg:p-5 rounded-lg">
        {/* right side */}
        <section className=" w-full py-2">
          <div className=" w-full  flex justify-between ">
            <span className="py-2 px-4 bg-neutral-100/10 rounded-md">
              <p className="text-[10px] ">from</p>
              <h2>{startsat}</h2>
            </span>
            <span className="min-w-[30%] max-w-[50%] text-ellipsis flex items-center justify-center bg-neutral-100/10 py-2 px-5 lg:px-7 rounded-md gap-2 ">
              <GiDiceTarget size={20} />
              <p className=" text-xl  overflow-auto flex ">{title}</p>
            </span>
            <span className="py-2 px-4 bg-neutral-100/10 rounded-md ">
              <p className="text-[10px]">until</p>
              <h2>{endsat}</h2>
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
        <section className=" w-full h-full lg:h-fit overflow-auto rounded-md text-ellipsis bg-slate-100/10 py-2 px-4 ">
          <p>{detail}</p>
        </section>
      </section>
    </div>
  );
};

export default MainReminder;
