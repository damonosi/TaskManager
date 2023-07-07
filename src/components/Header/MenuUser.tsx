import Link from "next/link";
import SignOutButton from "../auth/SignOutButton";

const MenuUser = ({ open }: { open: boolean }) => {
  return (
    <>
      {open && (
        <div
          className="absolute bottom-0 top-full  border-4 flex flex-col items-center justify-center gap-6 pt-6 w-28 h-fit "
          id="menuUser"
        >
          <Link href="/proiectele-mele">Proiecte</Link>
          <Link href="/adauga-proiect">adauga proiect nou</Link>
          <SignOutButton />
        </div>
      )}
    </>
  );
};

export default MenuUser;
