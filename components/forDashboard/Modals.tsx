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

const Modals: React.FC<Imodal> = ({ modalFor, btnIcon }) => {
  if (modalFor === modalOptions.NEW) {
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
  }
};

export default Modals;
