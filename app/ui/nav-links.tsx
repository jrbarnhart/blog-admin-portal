import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Posts", href: "/posts" },
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
