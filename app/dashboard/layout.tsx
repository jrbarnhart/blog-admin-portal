"use client";

import { createContext, useContext, useState } from "react";
import SideNav from "../ui/sidenav";

const TokenContext = createContext({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [token, setToken] = useState({ text: "", isAdmin: false });

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <SideNav />
      {children}
    </TokenContext.Provider>
  );
}
