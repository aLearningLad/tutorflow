"use client";

import { useCallStateHooks, ParticipantView } from "@stream-io/video-react-sdk";

const RoomUI = () => {
  const { useParticipants } = useCallStateHooks();
  const participants = useParticipants();

  return (
    <div className=" min-h-screen w-[80%] border-4 border-pink-600 ">
      {participants.map((user) => (
        <section className=" rounded-xl p-5 bg-red-600 h-24 w-28 overflow-clip">
          <ParticipantView participant={user} key={user.sessionId} />
        </section>
      ))}
    </div>
  );
};

export default RoomUI;
