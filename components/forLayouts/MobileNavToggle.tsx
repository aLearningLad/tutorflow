"use client";

import { CgMenuGridR } from "react-icons/cg";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { truncate } from "fs/promises";
import useStore from "@/app/(store)/store";
import { ItutorStore } from "@/Interfaces";
import { sidebardata } from "@/misc/sidebardata";

const MobileNavToggle = () => {
  const isNavOpen = useStore((store: ItutorStore) => store.isNavOpen);
  const setIsNavOpen = useStore((store: ItutorStore) => store.setIsNavOpen);

  return (
    <Dialog>
      <DialogTrigger>
        <button
          onClick={(e) => setIsNavOpen()}
          className="w-fit p-2 h-fit rounded-md bg-orange-500 active:bg-blue-600 active:scale-95 transition-all duration-300 ease-in"
        >
          <CgMenuGridR className=" text-white" size={30} />
        </button>
      </DialogTrigger>
      <DialogContent className=" w-full h-screen flex flex-col items-center justify-center text-center bg-slate-900 text-white">
        {sidebardata.map((btn) => (
          <button>{btn.label}</button>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default MobileNavToggle;
