import Link from "next/link";
import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div>
      <Link href={"/"}>
        <h1>Blog Author Portal</h1>
      </Link>
      <div>
        <NavLinks />
        {/* Logout form goes here*/}
      </div>
    </div>
  );
}
