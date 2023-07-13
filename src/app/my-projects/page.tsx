import ButtonAddNewProject from "@/components/projects/ButtonAddNewProject";

import { authOptions } from "@/utils/auth";

import { getProjects } from "@/utils/projectFunctions";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const MyProjects = async () => {
  const session = await getServerSession(authOptions);

  const projects = await getProjects(session);

  return (
    <div className="flex flex-col items-center py-4 gap-6 text-white min-h-screen">
      <div
        className="grid grid-cols-2 gap-5 "
        id="container-my-projects"
      >
        {projects.map(({ name, id, teamLider }) => (
          <div
            className="border-4 px-6 py-1 gap-6 flex flex-col items-center"
            id="container-proiect"
          >
            <h1>Project Name : {name}</h1>
            {session?.user.username === teamLider ? (
              <h2>You are the team leader</h2>
            ) : (
              <h2>Team Leader : {teamLider}</h2>
            )}

            <Link
              href={`/my-projects/${id}`}
              className=""
            >
              <RiArrowRightDoubleLine className="hover:scale-125 text-green-600 w-6 h-6" />
            </Link>
          </div>
        ))}
      </div>
      <div>
        <ButtonAddNewProject />
      </div>
    </div>
  );
};

export default MyProjects;
