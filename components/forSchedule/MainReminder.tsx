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
  return <div>{title}</div>;
};

export default MainReminder;
