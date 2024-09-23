"use client";

import useStore from "@/app/(store)/store";
import { ItutorStore } from "@/Interfaces";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ReminderInputs from "./ReminderInputs";
import { FaPlusSquare, FaShare } from "react-icons/fa";

const ReminderBtn = () => {
  const setRemoteReminder = useStore(
    (store: ItutorStore) => store.setRemoteReminder
  );

  const remoteReminder = useStore((store: ItutorStore) => store.remoteReminder);

  return (
    <Dialog>
      <DialogTrigger
        className=" w-full flex justify-center"
        onClick={setRemoteReminder}
      >
        {/* <FaShare size={20} className=" text-white" /> */}
        <span className=" w-full md:w-10/12 lg:w-8/12 xl:w-6/12 flex justify-center items-center gap-3 bg-orange-400 text-white rounded-md py-2">
          <p className=" text-lg">New Reminder</p>
          <FaPlusSquare size={20} className=" text-white " />
        </span>
      </DialogTrigger>
      <DialogContent className=" bg-slate-700 text-white">
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
        <ReminderInputs />
      </DialogContent>
    </Dialog>
  );
  //   }
};

export default ReminderBtn;
