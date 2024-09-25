import React from "react";

const MainReminder: React.FC<TreminderCard> = ({
  author,
  detail,
  endsAt,
  is_private,
  reminderId,
  shareableLink,
  startsAt,
  title,
}) => {
  return <div className=" w-full h-[60%]">{title}</div>;
};

export default MainReminder;
