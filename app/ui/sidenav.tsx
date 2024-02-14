import Link from "next/link";
import NavLinks from "./nav-links";

export default async function SideNav() {
  return (
    <div className="flex flex-col p-3">
      <h1 className="text-2xl text-center">Blog Author Portal</h1>
      <div className="flex justify-around gap-x-3">
        <NavLinks />
        {/* Logout form goes here*/}
      </div>
    </div>
  );
}
