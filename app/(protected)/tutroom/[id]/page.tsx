import VideoRoom from "@/components/forTutRoom/VideoRoom";
import React from "react";

const TutRoom = (params: TtutRoomParams) => {
  const { id } = params;
  return (
    <main className=" min-h-screen bg-slate-900">
      {/* TutRoom with ID: {id} */}
      <VideoRoom />
    </main>
  );
};

export default TutRoom;
