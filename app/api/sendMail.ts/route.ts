import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    author_id,
    date_of_tut,
    invited_emails,
    session_link,
    start_time,
    tut_id,
  } = await req.json();

  if (
    !author_id ||
    !date_of_tut ||
    !invited_emails ||
    invited_emails.length < 1 ||
    !session_link
  ) {
    return NextResponse.json({
      message: "Bruv, important info from the client is missing.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    // send a reminder to each invitee
    for (const invitee of invited_emails) {
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: invitee,
        subject: "Tutorial Session Reminder",
        text: `Hi there! Just a quick reminder that you have a tutorial session with Thato. It is scheduled for ${date_of_tut}, and will commence at ${start_time}`,
      });
    }
  } catch (error) {}
}
