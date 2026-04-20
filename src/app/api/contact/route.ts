import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER, // better for delivery
      replyTo: body.email,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Message",
      text: `
Name: ${body.name}
Email: ${body.email}
Message: ${body.message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function GET() {
  return new Response("API is working ✅");
}
