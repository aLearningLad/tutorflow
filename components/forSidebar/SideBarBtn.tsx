"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarBtn: React.FC<TsidebarData> = ({
  label,
  link,
  linkId,
  linkImg,
}) => {
  const thePathName = usePathname().slice(1);
  console.log(
    "We are currently on this path: ",
    thePathName,
    "and the link is: ",
    link
  );

  return (
    <li
      className={` w-full ${
        thePathName === link.slice(1)
          ? "bg-slate-800/70 text-white font-semibold"
          : "hover:bg-slate-800/70"
      }  lg:h-1/6 rounded-lg transition-all duration-300 ease-in`}
      key={linkId}
    >
      <Link
        className="group w-full h-full flex justify-center items-center text-center flex-col px-1 py-3"
        href={link}
      >
        <div
          className={`mb-2 ${
            thePathName === link.slice(1)
              ? " text-white flex items-center justify-center"
              : "text-neutral-400 group-hover:text-neutral-100 transition-all duration-300 ease-in-out"
          } `}
        >
          {linkImg}
        </div>
        <p
          className={` ${
            thePathName === link.slice(1)
              ? " text-white"
              : "lg:group-hover:text-neutral-300 transition-all duration-300 ease-in text-transparent lg:text-[14px]"
          } `}
        >
          {label}
        </p>
      </Link>
    </li>
  );
};

export default SideBarBtn;
