"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import NewTaskForm from "./NewTaskForm";

const AddNewTask = ({ teamLider }: { teamLider: string }) => {
  const { data: session } = useSession();
  const [newTask, setShow] = useState(false);

  return (
    <div className="flex">
      {session?.user.username === teamLider && (
        <button
          className="group border px-4 py-2 flex items-center justify-center"
          onClick={() => setShow(true)}
        >
          <span className="group-hover:scale-105">add new task</span>
          <RiArrowRightDoubleLine className="group-hover:scale-125 text-green-600 w-6 h-6" />
        </button>
      )}
      {newTask && <NewTaskForm />}
    </div>
  );
};

export default AddNewTask;
