import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { inviteList, sessionLink } = await req.json();

  // handle error if either is missing
  if (!inviteList || !sessionLink) {
    return NextResponse.json(
      {
        mmessage: "Either an invitee list or session link is missing",
      },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    for (const invitee of inviteList) {
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: invitee,
        subject: "Thato is keen to have you join his tut session!",
        text: `You've been invited to an invite-only tutorial session. Join here: ${sessionLink}`,
      });
    }

    return NextResponse.json({ message: "Invites have been sent!" });
  } catch (error) {
    console.log("Error while trying to send email invites: ", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
