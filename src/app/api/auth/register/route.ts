import User from "@/models/User";
import db from "@/utils/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}
export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { name, email, password } = body;
  if (
    !name ||
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 5
  ) {
    return NextResponse.json(
      {
        message: "Validation error",
      },
      {
        status: 422,
      },
    );
  }
  await db.connect();
  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    console.log("user exists");
    await db.disconnect();
    return NextResponse.json(
      {
        message: "User exists already",
      },
      {
        status: 422,
      },
    );
  }
  const newUser = new User({
    name,
    email,
    password: await bcrypt.hash(password, 10),
    isAdmin: false,
  });
  const user = await newUser.save();
  await db.disconnect();

  return new Response(JSON.stringify(user));
}
