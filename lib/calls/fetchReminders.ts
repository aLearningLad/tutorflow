"use server";

import { unstable_cache } from "next/cache";
import { createClient } from "../supabase/server";
import { currentUser } from "@clerk/nextjs/server";

export const fetchReminders = unstable_cache(
  async () => {
    const supabase = createClient();
    const user = await currentUser();
    const { data, error } = await supabase
      .from("reminders")
      .select("*")
      .eq("authorid", user?.id);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  ["reminders"], // cache key
  { revalidate: 3600 }
);
