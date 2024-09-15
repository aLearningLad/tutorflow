import { Isidebar } from "@/Interfaces";
import { sidebardata } from "@/misc/sidebardata";
import Link from "next/link";
import { NextRequest, NextResponse } from "next/server";
import SideBarBtn from "../forSidebar/SideBarBtn";

const Sidebar: React.FC<Isidebar> = () => {
  return (
    <nav className="absolute bottom-0 lg:relative h-14 lg:min-h-screen w-full lg:w-24 bg-slate-950 lg:border-r-2 border-neutral-600">
      <section className=" w-2/12 lg:w-full flex justify-center items-center h-full lg:h-1/6 xl:h-[13%] bg-neutral-500/40">
        {/* app logo here */}
      </section>
      <section className="w-full h-full lg:h-5/6 flex flex-row lg:flex-col">
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
    </nav>
  );
};

export default Sidebar;
