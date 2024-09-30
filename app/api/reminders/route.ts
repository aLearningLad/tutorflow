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
    console.log("Reminders sent successfully!");
    return NextResponse.json({
      message: "Reminders have been sent",
    });
  } catch (error: any) {
    console.log("Error while sending reminders: ", error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { inviteList, sessionLink } = await req.json();

//   if (!inviteList || !sessionLink) {
//     return NextResponse.json(
//       { message: "Either an invitee list or session link is missing" },
//       { status: 400 }
//     );
//   }

//   console.log("inviteList:", inviteList);
//   console.log("sessionLink:", sessionLink);

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.GOOGLE_APP_PASSWORD,
//       },
//     });

//     for (const invitee of inviteList) {
//       await transporter.sendMail({
//         from: process.env.EMAIL,
//         to: invitee,
//         subject: "Thato is keen to have you join his tut session!",
//         text: `You've been invited to an invite-only tutorial session. Join here: ${sessionLink}`,
//       });
//       console.log(`Email sent to ${invitee}`);
//     }

//     console.log("Invites sent successfully");
//     return NextResponse.json({ message: "Invites have been sent!" });
//   } catch (error: any) {
//     console.log("Error while trying to send email invites: ", error.message);
//     return NextResponse.json({ message: error.message }, { status: 500 });
//   }
// }
