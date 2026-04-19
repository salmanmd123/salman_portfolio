import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Message from "@/models/Message";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await connectDB();

    const newMessage = await Message.create(body);

    return NextResponse.json({ success: true, data: newMessage });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export async function GET() {
  return new Response("API is working ✅");
}