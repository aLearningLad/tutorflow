"use client";

import { createToken } from "@/server-actions/getToken";
import { useAuth, useUser } from "@clerk/nextjs";
import {
  CallControls,
  PaginatedGridLayout,
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
import Link from "next/link";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;

const VideoRoom = () => {
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const userIdValue = useAuth().userId;
  const [client, setClient] = useState<any>();
  const user: User = { id: userIdValue as string, name: userId };
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

  if (!client || !callObj) {
    return (
      <div className=" h-screen w-full bg-slate-900 flex flex-col justify-center items-center">
        <h2 className=" text-xl lg:text-2xl text-white">Just a moment...</h2>
        <p className=" text-[14px] lg:text-[12px] text-neutral-200 ">
          We're setting up a tutorial room for you. <br /> You're going to be
          live in no time!{" "}
        </p>
      </div>
    );
  }

  return (
    <StreamVideo client={client}>
      <StreamTheme className=" h-screen flex items-center justify-center w-full">
        <StreamCall call={callObj}>
          <main className=" h-full w-full p-5 flex flex-col items-center justify-center border-4 border-yellow-400">
            <header className=" py-3 px-12 w-full flex justify-between items-center ">
              <Link className=" text-white text-lg" href={"/dashboard"}>
                Return
              </Link>
            </header>
            <div className=" h-[70vh] w-[95%] xl:h-[500px] xl:w-[800px] text-neutral-500 ">
              <SpeakerLayout participantsBarPosition={"right"} />
            </div>
            <CallControls />
          </main>
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
};

export default VideoRoom;
