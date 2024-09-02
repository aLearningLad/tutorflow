"use client";

import Link from "next/link";

// import { usePathname } from "next/navigation";

const SideBarBtn: React.FC<TsidebarData> = ({
  label,
  link,
  linkId,
  linkImg,
}) => {
  //   const thePathName = usePathname();
  //   console.log("We are currently on this path: ", thePathName);

  return (
    <li
      className="w-full hover:bg-slate-600 rounded-lg transition-all duration-300 ease-in"
      key={linkId}
    >
      <Link
        className="group w-full h-full flex justify-center items-center flex-col px-1 py-3"
        href={link}
      >
        <div>{linkImg}</div>
        <p className=" lg:group-hover:text-neutral-300 transition-all duration-300 ease-in text-transparent lg:text-[14px] ">
          {label}
        </p>
      </Link>
    </li>
  );
};

export default SideBarBtn;
