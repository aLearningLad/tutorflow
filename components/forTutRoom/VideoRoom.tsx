"use client";

import { createToken } from "@/server-actions/getToken";
import { useAuth } from "@clerk/nextjs";
import {
  CallControls,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCall,
  User,
} from "@stream-io/video-react-sdk";
import { useState, useEffect, useRef } from "react";
import RoomUI from "./RoomUI";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;

const VideoRoom = () => {
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const userIdValue = useAuth().userId;
  const [client, setClient] = useState<any>();
  const user: User = { id: userIdValue as string, name: "Thato" };
  const [callObj, setCallObj] = useState<any>(null);
  const callJoinedRef = useRef(false);

  //get userId, then get token value & set state
  useEffect(() => {
    const fetchToken = async () => {
      const tokenValue = await createToken();
      if (tokenValue) {
        setToken(tokenValue);
      }
    };

    fetchToken();
  }, [userIdValue]);

  // depending on token availability, create client
  useEffect(() => {
    if (token) {
      setClient(new StreamVideoClient({ apiKey, user, token }));
    }
  }, [token]);

  useEffect(() => {
    if (client && !callJoinedRef.current) {
      const call = client.call("default", "my-first-call");
      setCallObj(call);
      call.join({ create: true });
      callJoinedRef.current = true;
    }
  }, [client]);

  return (
    <StreamVideo client={client}>
      <StreamTheme>
        <StreamCall call={callObj}>
          {/* callObj is calling a double render issue*/}
          <main className=" min-h-screen border-4 border-yellow-500 p-5 flex ">
            <RoomUI />
            <section className=" min-h-screen flex flex-col gap-3 w-[20%] text-black">
              <SpeakerLayout />
              <p>Speakers will show here</p>
            </section>
          </main>
          {/* <CallControls /> */}
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
};

export default VideoRoom;
