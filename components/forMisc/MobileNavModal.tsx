"use client";

import useStore from "@/app/(store)/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ItutorStore } from "@/Interfaces";

const MobileNavModal = () => {
  const isNavOpen = useStore((store: ItutorStore) => store.isNavOpen);

  return (
    <div>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent
          className={`w-full ${
            isNavOpen ? "flex z-50 h-screen w-screen absolute" : "hidden"
          } h-full bg-black`}
        >
          <DialogHeader>
            <DialogTitle className=" text-xl text-white">
              Add reminder
            </DialogTitle>
            <DialogDescription>
              <p className=" text-[14px] text-neutral-200 ">
                Create a reminder for important information, or plans you might
                have
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MobileNavModal;
