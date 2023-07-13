import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    teamLider: { type: String, required: true },
    team: [String],
    tasks: [
      {
        teamMember: { type: String },
        toDo: { type: String },
        finished: { type: Boolean },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;
