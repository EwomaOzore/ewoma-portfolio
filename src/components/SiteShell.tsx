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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
