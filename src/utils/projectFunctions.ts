import Project from "@/models/Project";
import User from "@/models/User";
import db from "@/utils/db";
import { Session } from "next-auth";

export async function getProject({ params }: { params: { project: string } }) {
  const projectId = params.project;

  await db.connect();
  const project = await Project.findOne({ _id: projectId });

  await db.disconnect();
  return project;
}

export function getDate(date: {
  getDate: () => number;
  getMonth: () => number;
  getFullYear: () => number;
}) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const updateDate = day + " / " + month + " / " + year;

  return updateDate;
}

export async function getProjects(session: Session | null) {
  const userId = session?.user.id;
  await db.connect();
  const user = await User.findById(userId);
  function getProjectsIds() {
    const getProjectIds = () => {
      return user?.projects.map(function (proiectId: string) {
        return proiectId.toString();
      });
    };
    const projectsIds = getProjectIds();
    return projectsIds;
  }
  let projIds = getProjectsIds();

  const projects = await Project.find({
    _id: {
      $in: projIds,
    },
  });
  await db.disconnect();
  return projects;
}
