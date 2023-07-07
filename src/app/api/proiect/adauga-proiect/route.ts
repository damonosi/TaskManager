import Proiect from "@/models/Proiect";
import User from "@/models/User";
import { authOptions } from "@/utils/auth";
import db from "@/utils/db";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
interface RequestBody {
  nume: string;
  echipa: string[];
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  const session = await getServerSession(authOptions);

  const { nume, echipa } = body;

  console.log("nume", nume);
  console.log("echipa", echipa);
  if (!nume || !echipa) {
    return NextResponse.json(
      {
        message: "Validation error",
      },
      {
        status: 422,
      },
    );
  }
  if (session) {
    await db.connect();
    const newProject = new Proiect({
      liderEchipa: session?.user?.id,
      nume,
      echipa,
    });
    const project = await newProject.save();
    const filter = { _id: session?.user?.id };
    const update = { proiecte: project._id };

    const user = await User.updateOne(filter, { $push: update });
    console.log("user", user);
    await db.disconnect();
    return new Response(JSON.stringify(project));
  } else {
    return NextResponse.json(
      {
        message: "Trebuie sa fii logat",
      },
      {
        status: 422,
      },
    );
  }
}
