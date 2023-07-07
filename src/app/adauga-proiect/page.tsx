"use client";
import getError from "@/utils/getError";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  nume: string;
  echipa: string[];
};

const AdaugaProiect = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ nume, echipa }) => {
    try {
      await axios.post("/api/proiect/adauga-proiect", { nume, echipa });
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <div className="min-h-screen">
      <form
        className="flex flex-col gap-5 items-center"
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="nume proiect"
          {...register("nume", { required: true })}
        />
        <input
          type="text"
          placeholder="echipaj1"
          {...register("echipa.0", { required: true })}
        />
        <input
          type="text"
          placeholder="echipaj2"
          {...register("echipa.1", { required: true })}
        />
        <input
          type="text"
          placeholder="echipaj3"
          {...register("echipa.2", { required: true })}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AdaugaProiect;
