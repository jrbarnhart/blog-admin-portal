"use client";

import Link from "next/link";
import useToken from "../lib/useToken";

const links = [
  { name: "Home", href: "/dashboard" },
  { name: "Posts", href: "/dashboard/posts" },
  { name: "Create Post", href: "/dashboard/create-post" },
];

export default function NavLinks() {
  const { token } = useToken();

  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
