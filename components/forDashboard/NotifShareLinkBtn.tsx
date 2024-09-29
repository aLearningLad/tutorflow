"use client";

import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const NotifShareLinkBtn: React.FC<Tcalendertutdata> = ({
  author_id,
  date_of_tut,
  invited_emails,
  session_link,
  start_time,
  tut_id,
}) => {
  const handleShare = async () => {
    try {
      //   error checks for missing values
      if (
        !author_id ||
        !date_of_tut ||
        !invited_emails ||
        invited_emails.length < 1 ||
        !session_link
      ) {
        alert("Something went wrong. Please contact the developer");
        return;
      }

      // API call to nodemailer backend
      const response = await fetch("/api/sendMail", {
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
      if (data.ok) {
        console.log("Link shared successfully");
        alert("Link shared!");
      } else {
      }
    } catch (error) {
      console.log("Error sharing link: ", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <button className=" w-fit px-3 lg:px-7 min-h-10 lg:min-h-8 bg-blue-600 text-white rounded-[4px] text-[14px] ">
          Send reminder
        </button>
      </DialogTrigger>
      <DialogContent className=" bg-slate-700 text-white h-full w-full lg:h-[85vh] flex flex-col items-center text-center justify-center border-none">
        <h1>
          You're about to send a reminder email to the people listed below
        </h1>
        <div className=" bg-slate-900 w-full h-[65%] text-white rounded-md p-3 lg:p-5 overflow-auto flex gap-2 md:gap-4 last:gap-5 "></div>
        <button className=" w-full min-h-14 text-lg bg-orange-500 text-white rounded-md hover:bg-white hover:text-black transition-all duration-300 ease-in hover:scale-95 ">
          I Understand, Send The Reminder Emails
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default NotifShareLinkBtn;
