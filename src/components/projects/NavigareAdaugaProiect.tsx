"use client";
import { useRouter } from "next/navigation";

const NavigareAdaugaProiect = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/adauga-proiect")}>
      Adauga Proiect nou
    </button>
  );
};

export default NavigareAdaugaProiect;
