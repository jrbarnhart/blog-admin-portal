import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Posts", href: "/dashboard/posts" },
  { name: "Create Post", href: "/dashboard/create-post" },
];

export default function NavLinks() {
  return (
    <>
      {/* loginToken ? null : <Link href="/login">Log In</Link> */}
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
