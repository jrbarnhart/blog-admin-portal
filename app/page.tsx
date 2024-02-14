import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>This is some home page content!</p>
      <Link href="/dashboard">Continue to Dashboard</Link>
    </main>
  );
}
