"use client";

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
    } catch (error) {
      console.log("Error sharing link: ", error);
    }
  };

  return (
    <button className=" w-fit px-3 lg:px-7 min-h-10 lg:min-h-8 bg-blue-600 text-white rounded-[4px] text-[14px] ">
      Share link
    </button>
  );
};

export default NotifShareLinkBtn;
