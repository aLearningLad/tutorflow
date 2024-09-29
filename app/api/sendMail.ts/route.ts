import nodeMailer from "nodemailer";
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
}
