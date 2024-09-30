"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import InvitedConfirmTab from "./InvitedConfirmTab";
import { createClient } from "@/lib/supabase/client";
import { FaTrashAlt } from "react-icons/fa";

const NotifShareLinkBtn: React.FC<Tcalendertutdata> = ({
  author_id,
  date_of_tut,
  invited_emails,
  session_link,
  start_time,
  tut_id,
  is_reminded,
}) => {
  // state to hold official email reminder list
  const [sendlist, setSendlist] = useState<string[]>(invited_emails);

  const handleShare = async () => {
    try {
      //   error checks for missing values
      if (
        !author_id ||
        !date_of_tut ||
        !invited_emails ||
        sendlist.length < 1 ||
        !session_link
      ) {
        alert("Something went wrong. Please contact the developer");
        return;
      }

      // adjust is_reminded status in DB table
      const supabase = createClient();
      const { data: updatedStatus, error: updateError } = await supabase
        .from("calendertuts")
        .update({ is_reminded: true })
        .eq("tut_id", tut_id)
        .select();

      // API call to nodemailer backend
      const response = await fetch("/api/reminders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author_id,
          date_of_tut,
          invited_emails,
          session_link,
          start_time,
          tut_id,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Link shared successfully");
        alert("Link shared!");
      } else {
        console.error("Failed to send reminders: ", data.message);
        alert("Unable to send reminders");
      }
    } catch (error) {
      console.log("Error sharing link: ", error);
    }
  };

  const handleToRemove = (emailToRemove: string) => {
    setSendlist((prevList) =>
      prevList.filter((anEmailString) => anEmailString !== emailToRemove)
    );
  };

  const handleDelete = async () => {
    if (!tut_id) {
    }

    try {
    } catch (error) {}
  };

  return (
    <Dialog>
      <DialogTrigger>
        {is_reminded ? (
          <button className=" w-fit px-3 min-h-10 lg:min-h-8 bg-slate-700 text-white rounded-[4px] text-[14px] ">
            <FaTrashAlt size={20} className=" text-red-600" />
          </button>
        ) : (
          <button className=" w-fit px-3 lg:px-7 min-h-10 lg:min-h-8 bg-blue-600 text-white rounded-[4px] text-[14px] ">
            Send reminder
          </button>
        )}
      </DialogTrigger>
      <DialogContent className=" bg-slate-700 text-white h-full w-full lg:h-[85vh] flex flex-col items-center text-center justify-center border-none">
        <h1>
          You're about to send a reminder email to the people listed below
        </h1>
        <div className=" bg-slate-900 w-full h-[65%] text-white rounded-md p-3 lg:p-5 overflow-auto flex flex-col gap-2 md:gap-4 last:gap-5 ">
          {sendlist.map((btn) => (
            <InvitedConfirmTab
              emailString={btn}
              handleToRemove={() => handleToRemove(btn)}
              index={btn}
            />
          ))}
        </div>
        {/* <DialogTrigger className=" w-full min-h-14 text-lg bg-orange-500 text-white rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in hover:scale-95 "> */}
        <button onClick={handleShare}>
          I Understand, Send The Reminder Emails
        </button>
        {/* </DialogTrigger> */}
      </DialogContent>
    </Dialog>
  );
};

export default NotifShareLinkBtn;
