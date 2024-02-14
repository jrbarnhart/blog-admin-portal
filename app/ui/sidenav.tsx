import Link from "next/link";
import NavLinks from "./nav-links";

export default async function SideNav() {
  return (
    <div className="flex flex-col p-3">
      <h1 className="text-2xl">Blog Author Portal</h1>
      <div>
        {/* loginToken ? null : <Link href="/login">Log In</Link> */}
        <NavLinks />
        {/* Logout form goes here*/}
      </div>
    </div>
  );
}
