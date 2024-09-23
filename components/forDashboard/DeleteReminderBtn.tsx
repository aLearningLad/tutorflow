"use client";

import { FaTrashAlt } from "react-icons/fa";

const DeleteReminderBtn: React.FC<Tdeletereminderbtn> = ({ reminderId }) => {
  const handleDelete = async () => {};

  return (
    <button className="w-fit px-3 group bg-white flex justify-center items-center h-[70%] rounded-md text-center py-2">
      <FaTrashAlt size={18} className=" text-red-600 group-hover:text-black" />
    </button>
  );
};

export default DeleteReminderBtn;
