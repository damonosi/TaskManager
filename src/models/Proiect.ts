import mongoose from "mongoose";

const proiectSchema = new mongoose.Schema(
  {
    nume: { type: String, required: true },
    liderEchipa: { type: String, required: true },
    echipa: [String],
  },
  {
    timestamps: true,
  },
);

const Proiect =
  mongoose.models.Proiect || mongoose.model("Proiect", proiectSchema);
export default Proiect;
