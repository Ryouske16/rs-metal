import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import Contact from "../../../models/Contact";
import nodemailer from "nodemailer";
import { put } from "@vercel/blob"; // ✅ Vercel Blob upload

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name")?.toString() || "Anonymous";
    const email = formData.get("email")?.toString() || "No email provided";
    const phone = formData.get("phone")?.toString() || "Not provided";
    const message = formData.get("message")?.toString() || "No message";
    const file = formData.get("file") as File | null;

    console.log("🗂️ File received:", file ? file.name : "No file");

    let fileUrl = "";
    if (file) {
      // ✅ Convert file to buffer for upload
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // ✅ Create a unique filename (timestamp + original name)
      const safeFileName = file.name.replace(/\s+/g, "_");
      const uniqueFileName = `metal_fabrication_contacts/${Date.now()}-${safeFileName}`;

      // ✅ Upload to Vercel Blob (public and unique)
      const blob = await put(uniqueFileName, buffer, {
        access: "public", // 👈 ensures viewable link
        token: process.env.BLOB_READ_WRITE_TOKEN, // 👈 secure upload
        addRandomSuffix: true, // 👈 prevents overwrite conflicts
      });

      fileUrl = blob.url;
      console.log("✅ Uploaded to Vercel Blob:", fileUrl);
    }

    // ✅ Save contact to MongoDB
    await connectToDatabase();
    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
      fileUrl,
    });

    console.log("📦 Saved contact:", contact);

    // ✅ Setup Titan Email
    const transporter = nodemailer.createTransport({
      host: process.env.TITAN_SMTP_HOST || "smtp.titan.email",
      port: Number(process.env.TITAN_SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.TITAN_EMAIL,
        pass: process.env.TITAN_PASS,
      },
    });

    // ✅ Email HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>New Client Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        ${
          fileUrl
            ? `<p><strong>Uploaded File:</strong> <a href="${fileUrl}" target="_blank" rel="noopener noreferrer">View File</a></p>`
            : "<p><em>No file uploaded</em></p>"
        }
      </div>
    `;

    // ✅ Send email to Titan inbox
    await transporter.sendMail({
      from: `"RS Metal Fabrication" <${process.env.TITAN_EMAIL}>`,
      to: process.env.TITAN_EMAIL,
      subject: "New Client Contact Submission",
      html: emailHtml,
    });

    console.log("📧 Email sent successfully to Titan inbox!");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save or send message" },
      { status: 500 }
    );
  }
}
