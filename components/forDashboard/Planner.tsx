"use client";

import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export function Planner() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md bg-neutral-300 text-black border-4 border-red-600 "
    />
  );
}
