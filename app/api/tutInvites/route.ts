import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { inviteeList, sessionLink } = await req.json();

  // handle error if either is missing
  if (!inviteeList || !sessionLink) {
    return NextResponse.json(
      {
        mmessage: "Either an invitee list or session link is missing",
      },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
}
