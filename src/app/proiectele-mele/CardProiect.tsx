import Link from "next/link";
import { RiArrowRightDoubleLine } from "react-icons/ri";
interface CardProps {
  nume: string;
  echipa: string[];
  id: number;
}

const CardProiect = ({ nume, id, echipa }: CardProps) => {
  return (
    <div
      className="border-4 px-6 py-1 gap-6 flex flex-col items-center"
      id="container-proiect"
    >
      <div>{nume}</div>{" "}
      <div id="container-echipa">
        <h2>Echipa</h2>
        {echipa.map((coechipier, index) => (
          <div
            className="flex gap-2 border px-2 justify-between"
            key={index}
          >
            <span>{index + 1} )</span>
            <p>{coechipier}</p>
          </div>
        ))}
      </div>
      <Link
        href={`/proiectele-mele/${nume}`}
        className=""
      >
        <RiArrowRightDoubleLine className="hover:scale-125 text-green-600 w-6 h-6" />
      </Link>
    </div>
  );
};

export default CardProiect;
