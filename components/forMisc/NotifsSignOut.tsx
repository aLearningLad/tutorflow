"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useClerk } from "@clerk/nextjs";

interface Inotifssignout {
  dp: string;
}

const NotifsSignOut: React.FC<Inotifssignout> = ({ dp }) => {
  const { signOut } = useClerk();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" w-full h-full relative" variant="outline">
          <Image
            className=" p-0 absolute "
            alt="profile image"
            fill
            src={dp}
            objectFit="cover"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>{"You're"} about to sign out</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => signOut({ redirectUrl: "/" })} type="submit">
            Sign Out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NotifsSignOut;
