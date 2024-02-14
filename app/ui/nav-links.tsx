"use client";

import Link from "next/link";

const links = [
  { name: "Home", href: "/dashboard" },
  { name: "Posts", href: "/dashboard/posts" },
];

export default function NavLinks() {
  const token = localStorage.getItem("token");

  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        );
      })}
      {token ? (
        <Link href="/dashboard/create-post">Create Post</Link>
      ) : (
        <Link href="/login">Log In</Link>
      )}
    </>
  );
}
