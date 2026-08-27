import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ProgressBar from "@/components/ProgressBar";

export default function SiteShell({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="noise" aria-hidden />
      <Cursor />
      <ProgressBar />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
