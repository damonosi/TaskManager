"use client";
import { useRouter } from "next/navigation";

const ButtonAddNewProject = () => {
  const router = useRouter();
  return (
    <button
      className="border px-4 py-2"
      onClick={() => router.push("/add-project")}
    >
      Add new project
    </button>
  );
};

export default ButtonAddNewProject;
