"use client";
import getError from "@/utils/getError";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  team: string[];
};

const AddProject = () => {
  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ name, team }) => {
    try {
      await axios.post("/api/project/add-project", { name, team });
      toast.success("Project added !");
    } catch (err) {
      toast.error(getError(err));
    }
  };
  const [teamNumber, setTeamNumber] = useState(1);
  const teamArray = Array.from(Array(teamNumber).keys());
  return (
    <div className="min-h-screen">
      <form
        className="flex flex-col gap-5 items-center"
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Project Name"
          className="text-black"
          {...register("name", { required: true })}
        />
        <div
          className=""
          id="add-team"
        >
          {" "}
          <section className="flex gap-4">
            <h2>Your Team</h2>

            <button
              type="button"
              onClick={() => setTeamNumber(teamNumber + 1)}
            >
              +
            </button>
          </section>
          <div
            className="grid"
            id="teamContainer"
          >
            {teamArray.map((index) => (
              <div
                key={index}
                className="flex"
              >
                <input
                  type="text"
                  placeholder={`teamMember ${index}`}
                  className="text-black w-fit"
                  {...register(`team.${index}`, { required: true })}
                />
                <button
                  type="button"
                  onClick={() => {
                    unregister(`team.${index}`);
                    setTeamNumber(teamNumber - 1);
                  }}
                >
                  -
                </button>
              </div>
            ))}
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddProject;
