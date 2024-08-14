"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;
const secret = process.env.STREAM_SECRET!;
const client = new StreamClient(apiKey, secret);

export const createToken = async () => {
  try {
    const isLoggedIn = await currentUser();

    if (isLoggedIn) {
      const userId = auth().userId;
      const result = client.createToken(userId as string);
      return result;
    }

    if (!isLoggedIn) {
      throw new Error("This user is not signed in!");
    }
  } catch (error) {
    console.log("Error occured while trying to generate a token: ", error);
  }
};
