import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { inviteeList, sessionLink } = await req.json();

  if (!inviteeList || !sessionLink) {
    return NextResponse.json(
      {
        mmessage: "Either an invitee list or session link is missing",
      },
      { status: 400 }
    );
  }
}
