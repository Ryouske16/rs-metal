import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const files = formData.getAll("projectFiles") as File[];

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // or your hostinger SMTP
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments =
      files?.length > 0
        ? await Promise.all(
            files.map(async (file) => ({
              filename: file.name,
              content: Buffer.from(await file.arrayBuffer()),
            }))
          )
        : [];

    await transporter.sendMail({
      from: `"RS Metal Website" <${process.env.SMTP_USER}>`,
      to: "info@rsmetal.co.uk",
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message}
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
