"use client";

import { createToken } from "@/server-actions/getToken";
import { useAuth } from "@clerk/nextjs";
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import { useState, useEffect } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const VideoRoom = () => {
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;
  const userIdValue = useAuth().userId;
  const [client, setClient] = useState<any>();

  useEffect(() => {
    if (userIdValue) {
      setUserId(userIdValue);
    }

    const fetchToken = async () => {
      const tokenValue = await createToken();

      if (tokenValue) {
        setToken(tokenValue);
      }
    };

    if (userId && token.length > 2) {
      const user: User = { id: userId };
      const clientValue = new StreamVideoClient({ apiKey, user, token });

      setClient(clientValue);
    }

    fetchToken();
  }, []);

  const call = client.call("default", "my-first-call");

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <div className=" h-full bg-orange-400 text-white flex items-center justify-normal">
          VideoRoom
        </div>
      </StreamCall>
    </StreamVideo>
  );
};

export default VideoRoom;
