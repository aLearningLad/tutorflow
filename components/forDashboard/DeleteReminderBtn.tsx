"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";

const DeleteReminderBtn: React.FC<Tdeletereminderbtn> = ({ reminderId }) => {
  const router = useRouter();

  const handleDelete = async () => {
    if (!reminderId) {
      console.log("No reminder ID provided!");
      return;
    }
    const supabase = createClient();
    try {
      const { error: reminderDeletionError } = await supabase
        .from("reminders")
        .delete()
        .eq("reminderid", reminderId);

      if (reminderDeletionError) {
        throw new Error(reminderDeletionError.details);
      }

      router.refresh();
    } catch (error) {
      console.log("Error while deleting reminder: ", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="w-fit px-3 group bg-white flex justify-center items-center h-[70%] rounded-md text-center py-2"
    >
      <FaTrashAlt size={18} className=" text-red-600 group-hover:text-black" />
    </button>
  );
};

export default DeleteReminderBtn;
