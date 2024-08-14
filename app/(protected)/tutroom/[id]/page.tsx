import VideoRoom from "@/components/forTutRoom/VideoRoom";
import React from "react";

const TutRoom = (params: TtutRoomParams) => {
  const { id } = params;
  return (
    <main className=" min-h-screen bg-purple-400/70">
      {/* TutRoom with ID: {id} */}
      <VideoRoom />
    </main>
  );
};

export default TutRoom;
