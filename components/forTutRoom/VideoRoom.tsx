"use client";

import { createToken } from "@/server-actions/getToken";
import { useAuth } from "@clerk/nextjs";
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  useCall,
  User,
} from "@stream-io/video-react-sdk";
import { useState, useEffect, useCallback } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const VideoRoom = () => {
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;
  const userIdValue = useAuth().userId;
  const [client, setClient] = useState<any>();
  const user: User = { id: userIdValue as string };
  const [callObj, setCallObj] = useState();

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
    setClient(new StreamVideoClient({ apiKey, user, token }));
  }, [token]);

  const call = client.call("default", "my-first-call");
  call.join({ create: true });

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <div className=" min-h-screen bg-orange-400 text-white flex items-center justify-normal">
          VideoRoom
        </div>
      </StreamCall>
    </StreamVideo>
  );
};

export default VideoRoom;
