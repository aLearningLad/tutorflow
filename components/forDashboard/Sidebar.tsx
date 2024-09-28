import { Isidebar } from "@/Interfaces";
import { sidebardata } from "@/misc/sidebardata";
import Link from "next/link";
import { NextRequest, NextResponse } from "next/server";
import SideBarBtn from "../forSidebar/SideBarBtn";

const Sidebar: React.FC<Isidebar> = () => {
  return (
    <nav className="fixed z-20 bottom-0 lg:relative h-14 lg:min-h-screen w-full lg:w-24 bg-slate-900 lg:border-r-2 border-neutral-600">
      <section className=" w-2/12 lg:w-full hidden lg:flex justify-center items-center h-full lg:h-1/6 xl:h-[13%] bg-neutral-500/40">
        {/* app logo here */}
      </section>

      <section className="w-full h-full lg:h-5/6 flex flex-row lg:flex-col">
        {/* only on desktop */}
        <ul className=" w-full h-full lg:flex lg:h-[70%] hidden flex-col text-center justify-around items-center lg:px-1 xl:px-2">
          {sidebardata.map(({ label, link, linkId, linkImg }) => (
            <SideBarBtn
              label={label}
              link={link}
              linkId={linkId}
              linkImg={linkImg}
              key={linkId}
            />
          ))}
        </ul>
      </section>

      <section className=" w-full h-full flex justify-between items-center px-1 md:px-2 ">
        {/* only on small screens */}
      </section>
    </nav>
  );
};

export default Sidebar;
