"use client";
import { useRouter } from "next/navigation";

const NavigareAdaugaProiect = () => {
  const router = useRouter();
  return (
    <button
      className="border px-4 py-2"
      onClick={() => router.push("/adauga-proiect")}
    >
      Adauga Proiect Nou
    </button>
  );
};

export default NavigareAdaugaProiect;
