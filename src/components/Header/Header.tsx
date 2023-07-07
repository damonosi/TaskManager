import Link from "next/link";
import DropdownUser from "./DropdownUser";

export default function Header() {
  return (
    <header className="w-full border flex  justify-between items-center h-14 border-b-black px-16">
      <Link href="/">
        <h1>Task Manager</h1>
      </Link>{" "}
      <DropdownUser />
    </header>
  );
}
