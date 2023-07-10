import User from "@/models/User";
import db from "@/utils/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

interface RequestBody {
  username: string;
  email: string;
  password: string;
}
export async function POST(req: Request) {
  const body: RequestBody = await req.json();
  const { username, email, password } = body;
  if (
    !username ||
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
  const existingUsername = await User.findOne({ username: username });
  if (existingUsername) {
    await db.disconnect();
    return NextResponse.json(
      {
        message: "Username is taken",
      },
      {
        status: 422,
      },
    );
  }
  if (existingUser) {
    await db.disconnect();
    return NextResponse.json(
      {
        message: "Email is already used",
      },
      {
        status: 422,
      },
    );
  }
  const newUser = new User({
    username,
    email,
    password: await bcrypt.hash(password, 10),
    isAdmin: false,
  });
  const user = await newUser.save();
  await db.disconnect();

  return new Response(JSON.stringify(user));
}
