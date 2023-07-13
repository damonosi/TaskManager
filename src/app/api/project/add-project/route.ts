import Project from "@/models/Project";
import User from "@/models/User";
import { authOptions } from "@/utils/auth";
import db from "@/utils/db";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
interface RequestBody {
  name: string;
  team: string[];
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  const session = await getServerSession(authOptions);

  const { name, team } = body;

  if (!name || !team) {
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
    const newProject = new Project({
      teamLider: session?.user?.username,
      name,
      team,
    });
    const project = await newProject.save();
    const filter = { _id: session?.user?.id };
    const update = { projects: project._id };

    await User.updateOne(filter, { $push: update });
    const checkUser = team.map((user) => User.findOne({ username: user }));
    const teamArray = await Promise.all(checkUser);

    const teamIncludesNull = teamArray.includes(null);

    if (teamIncludesNull) {
      return NextResponse.json(
        {
          message: "Add valid team members using their username",
        },
        {
          status: 422,
        },
      );
    }

    teamArray.map(async (member) => {
      await User.updateOne(
        { username: member.username },
        { $push: { projects: project._id } },
      );
    });
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
