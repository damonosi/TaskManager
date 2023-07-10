import Link from "next/link";
import DropdownUser from "./DropdownUser";

export default function Header() {
  return (
    <header className="w-full dark:bg-[#003249] fixed flex z-40 justify-between items-center h-14  px-16">
      <Link href="/">
        <h1 className="text-[#89998A]">Task Manager</h1>
      </Link>{" "}
      <div className="flex gap-4">
        <DropdownUser />
      </div>
    </header>
  );
}
