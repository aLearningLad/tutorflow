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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Setup using calender</DialogTitle>
            <DialogDescription>This will open the calender</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  if (modalFor === modalOptions.JOIN) {
    return (
      <Dialog>
        <DialogTrigger> {btnIcon}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join an existing tut session</DialogTitle>
            <DialogDescription>
              This add you to a tutorial you were invited to
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  if (modalFor === modalOptions.SHARE) {
    return (
      <Dialog>
        <DialogTrigger> {btnIcon}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share a tutorial invite link</DialogTitle>
            <DialogDescription>
              You wish to share this link with others. They will be able to
              accept and join your tutorial session
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
