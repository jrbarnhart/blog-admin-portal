import SideNav from "../ui/sidenav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideNav />
      {children}
    </>
  );
}
