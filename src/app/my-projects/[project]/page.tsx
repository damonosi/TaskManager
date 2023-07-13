import { getDate, getProject } from "@/utils/projectFunctions";

import AddNewTask from "./AddNewTask";
import CardProject from "./CardProject";
import TaskContainer from "./TaskContainer";
interface Params {
  params: { project: string };
}

export default async function ProjectPage({ params }: Params) {
  const project = await getProject({ params });
  const { name, teamLider, team, updatedAt, createdAt } = project;

  const updateDate = getDate(updatedAt);
  const createdDate = getDate(createdAt);

  return (
    <section
      id="project-page"
      className="min-h-screen relative flex flex-col items-center pt-6 gap-4 px-4 overflow-hidden"
    >
      <div className="flex gap-2 items-center">
        <CardProject
          name={name}
          teamLider={teamLider}
          team={team}
          createdDate={createdDate}
          updateDate={updateDate}
        />
        <AddNewTask teamLider={teamLider} />
      </div>
      <section
        className="flex  overflow-auto border w-full py-8 px-4 gap-4"
        id="task section"
      >
        <TaskContainer />
      </section>
    </section>
  );
}
