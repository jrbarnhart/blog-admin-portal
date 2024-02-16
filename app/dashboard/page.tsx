"use client";

import { useEffect } from "react";
import { isTokenExpired } from "../lib/utils";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (isTokenExpired()) {
      router.push("/login");
    }
  });

  return (
    <main>
      <p>This is some dashboard page content!</p>
      <p>Total Posts: Many</p>
      <p>Total Comments: A Lot</p>
      <p>Published: All / Unpublished: 0</p>
    </main>
  );
}
