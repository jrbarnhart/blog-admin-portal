import Link from "next/link";

const links = [
  { name: "Posts", href: "/posts" },
  { name: "Log In", href: "/login" },
  { name: "Create Post", href: "/create-post" },
];

export default function NavLinks() {
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
