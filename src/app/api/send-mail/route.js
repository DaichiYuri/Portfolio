import nodemailer from "nodemailer";

export async function POST(req) {
  const { email } = await req.json();

  // 1️⃣ Configure the SMTP transporter  
  const transporter = nodemailer.createTransport({
    service: "gmail", // Change if using another provider
    auth: {
      user: "developer.luffy2024@gmail.com", // Your email
      pass: "fzrbbqajnmogeiuv", // Your email password or App Password
    },
  });

  try {
    // 2️⃣ Send the email  
    await transporter.sendMail({
      from: "developer.luffy2024@gmail.com",
      to: "developer.luffy2024@gmail.com", // Send to the provided email
      subject: "New Subscriber",
      text: "new Subscriber :"+email,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
