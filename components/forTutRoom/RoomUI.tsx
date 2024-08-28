"use client";

import {
  useCallStateHooks,
  ParticipantView,
  StreamVideoParticipant,
} from "@stream-io/video-react-sdk";
import { useState } from "react";

const RoomUI = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const { useParticipants } = useCallStateHooks();
  const participants = useParticipants();

  if (fullScreen) {
    return (
      <div className="min-h-screen w-[80%] flex justify-center items-center ">
        <button
          className=" bg-cyan-600 text-white p-2 rounded-lg"
          onClick={(e) => setFullScreen(false)}
        >
          Exit Full Screen
        </button>
      </div>
    );
  }

  if (!fullScreen) {
    return (
      <div className="min-h-screen w-[80%] ">
        {participants.map((user) => (
          <section className=" overflow-clip w-[70%] h-[100%] rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl flex justify-center items-center">
            <ParticipantView
              className=" bg-black rounded-xl md:rounded-2xl lg:rounded-3xl xl:rounded-[30px] p-1 md:p-2 lg:p-5 xl:p-7 flex justify-center items-center flex-col text-white"
              participant={user}
              key={user.sessionId}
            />
          </section>
        ))}
      </div>
    );
  }
};

export default RoomUI;
