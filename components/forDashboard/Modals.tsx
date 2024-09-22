import { Imodal } from "@/Interfaces";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { modalOptions } from "@/lib/enums";
import InputForNew from "./InputForNew";
import ToJoinInput from "./ToJoinInput";
import Scheduling from "./Scheduling";
import TraversalBtns from "./TraversalBtns";

const Modals: React.FC<Imodal> = ({ modalFor, btnIcon }) => {
  // modals are not responding to if statements. The last one is a default I used for testing.
  // find a fix, champ

  if (modalFor === modalOptions.NEW) {
    return (
      <Dialog>
        <DialogTrigger>{btnIcon}</DialogTrigger>
        <DialogContent className=" w-full h-[70vh] md:w-10/12 lg:w-8/12 xl:w-6/12 flex flex-col items-center justify-center text-center bg-slate-600/50 text-white">
          <DialogHeader className=" text-center">
            <DialogTitle className=" text-2xl">
              You're creating a new tutorial session
            </DialogTitle>
            <DialogDescription className=" text-white w-full flex justify-center text-center">
              This will open a tut session
            </DialogDescription>
          </DialogHeader>
          <InputForNew />
        </DialogContent>
      </Dialog>
    );
  }

  if (modalFor === modalOptions.CALENDER) {
    return (
      <Dialog>
        <DialogTrigger> {btnIcon}</DialogTrigger>
        <DialogContent className=" w-full h-[70vh] md:w-10/12 lg:w-8/12 xl:w-6/12 flex flex-col items-center justify-center text-center bg-slate-600/50 text-white">
          <DialogHeader>
            <DialogTitle className=" text-2xl">
              Setup using calender
            </DialogTitle>
            <DialogDescription>
              Plan ahead and set a date for your upcoming tutorial session, send
              invites and coordinate who is attending
            </DialogDescription>
          </DialogHeader>
          <Scheduling />
          <TraversalBtns />
        </DialogContent>
      </Dialog>
    );
  }

  if (modalFor === modalOptions.JOIN) {
    return (
      <Dialog>
        <DialogTrigger> {btnIcon}</DialogTrigger>
        <DialogContent className=" w-full h-[70vh] md:w-10/12 lg:w-8/12 xl:w-6/12 flex flex-col items-center justify-center text-center bg-slate-600/50 text-white">
          <DialogHeader>
            <DialogTitle className=" text-2xl">
              Join an existing tut session
            </DialogTitle>
            <DialogDescription className=" text-white w-full flex justify-center text-center">
              Paaste your invite link below
            </DialogDescription>
          </DialogHeader>
          <ToJoinInput />
        </DialogContent>
      </Dialog>
    );
  }

  if (modalFor === modalOptions.SHARE) {
    return (
      <Dialog>
        <DialogTrigger> {btnIcon}</DialogTrigger>
        <DialogContent className=" bg-slate-700">
          <DialogHeader>
            <DialogTitle className=" text-xl text-white">
              About tutorflow
            </DialogTitle>
            <DialogDescription>
              <p className=" text-[14px] text-neutral-200 ">
                Kindly share this app with others to introduce them to the ease
                and simplicity of tutorFlow&copy;. Once they accept, they'll
                join you in a productive learning environment. Stay tuned for
                our upcoming social media pages where you can connect with the
                tutorFlow community and get the latest updates from HillSawft,
                the team behind this app. We're excited to grow together!
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog>
      <DialogTrigger> {btnIcon}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>You're creating a new tutorial session</DialogTitle>
          <DialogDescription>This will open a tut session</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modals;
