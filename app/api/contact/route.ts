import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import Contact from "../../../models/Contact";
import nodemailer from "nodemailer";
import { put } from "@vercel/blob"; // ✅ For file upload

export async function POST(req: Request) {
  try {
    console.log("🚀 [API] /api/contact started");

    // === Parse form data ===
    const formData = await req.formData();
    const name = formData.get("name")?.toString() || "Anonymous";
    const email = formData.get("email")?.toString() || "No email provided";
    const phone = formData.get("phone")?.toString() || "Not provided";
    const message = formData.get("message")?.toString() || "No message";
    const file = formData.get("file") as File | null;

    console.log("🧾 Received form submission:", { name, email, phone });

    // === File Upload to Vercel Blob ===
    let fileUrl = "";
    if (file) {
      console.log("🗂️ Uploading file:", file.name);
      const buffer = Buffer.from(await file.arrayBuffer());

      const safeFileName = file.name.replace(/\s+/g, "_");
      const uniqueFileName = `metal_fabrication_contacts/${Date.now()}-${safeFileName}`;

      try {
        const blob = await put(uniqueFileName, buffer, {
          access: "public",
          token: process.env.BLOB_READ_WRITE_TOKEN,
          addRandomSuffix: true, // prevent overwrite
        });

        fileUrl = blob.url;
        console.log("✅ File uploaded successfully:", fileUrl);
      } catch (uploadError) {
        console.error("❌ Error uploading to Vercel Blob:", uploadError);
        throw new Error("File upload failed");
      }
    } else {
      console.log("⚠️ No file uploaded with form.");
    }

    // === Save to MongoDB ===
    console.log("🔗 Connecting to MongoDB...");
    await connectToDatabase();
    console.log("✅ MongoDB connection successful!");

    try {
      const contact = await Contact.create({
        name,
        email,
        phone,
        message,
        fileUrl,
      });
      console.log("📦 Saved contact successfully:", contact);
    } catch (dbError) {
      console.error("❌ MongoDB save failed:", dbError);
      throw new Error("Database save failed");
    }

    // === Send Email with Titan ===
    console.log("📧 Preparing Titan email transporter...");
    const transporter = nodemailer.createTransport({
      host: process.env.TITAN_SMTP_HOST || "smtp.titan.email",
      port: Number(process.env.TITAN_SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.TITAN_EMAIL,
        pass: process.env.TITAN_PASS,
      },
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>New Client Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        ${
          fileUrl
            ? `<p><strong>Uploaded File:</strong> <a href="${fileUrl}" target="_blank" rel="noopener noreferrer">View File</a></p>`
            : "<p><em>No file uploaded</em></p>"
        }
      </div>
    `;

    try {
      console.log("📨 Sending Titan email...");
      await transporter.sendMail({
        from: `"RS Metal Fabrication" <${process.env.TITAN_EMAIL}>`,
        to: process.env.TITAN_EMAIL,
        subject: "New Client Contact Submission",
        html: emailHtml,
      });
      console.log("✅ Titan email sent successfully!");
    } catch (emailError) {
      console.error("❌ Failed to send Titan email:", emailError);
      throw new Error("Email sending failed");
    }

    console.log("🎉 Contact process complete — all steps successful!");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("🚨 [API ERROR] Contact form failed:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
