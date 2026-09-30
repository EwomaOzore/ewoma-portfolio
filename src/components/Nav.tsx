"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import TrackedLink from "./TrackedLink";
import { links } from "@/constants";

const navItems = [
  { label: "Work", hash: "#work" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", hash: "#experience" },
  { label: "Skills", hash: "#skills" },
  { label: "Contact", hash: "#contact" },
] as const;

function itemHref(item: (typeof navItems)[number], isHome: boolean) {
  if ("href" in item) return item.href;
  return isHome ? item.hash : `/${item.hash}`;
}

const linkClass = (active: boolean) =>
  `text-[13px] underline-offset-[7px] transition-colors hover:text-[#f4efe6] ${
    active
      ? "text-[#f4efe6] underline decoration-[#e3a36a] decoration-2"
      : "text-[#f4efe6]/70"
  }`;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const onProjects = pathname === "/projects";
  const onWork = pathname.startsWith("/work");

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-14 max-w-content items-center justify-between rounded-full bg-[#1c1915] px-2 text-[#f4efe6] shadow-[0_18px_50px_-20px_rgba(28,25,21,0.55)] lg:grid lg:h-16 lg:grid-cols-[1fr_auto_1fr] lg:px-2.5 dark:bg-[#161d27] dark:shadow-[0_18px_50px_-16px_rgba(0,0,0,0.7)] dark:ring-1 dark:ring-white/10"
      >
        <Link
          href={isHome ? "#top" : "/"}
          aria-label="Ewoma Ozore, home"
          className="pl-3 font-serif text-lg italic tracking-tight lg:pl-4"
        >
          E. Ozore
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const href = itemHref(item, isHome);
            const active =
              ("href" in item && onProjects) ||
              (item.label === "Work" && onWork);

            return (
              <Link key={item.label} href={href} className={linkClass(active)}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center justify-self-end pr-1 lg:flex">
          <TrackedLink
            href={links.cv}
            target="_blank"
            rel="noopener noreferrer"
            event="Resume Click"
            data={{ location: "nav" }}
            className="rounded-full bg-[#f4efe6] px-4 py-2 text-[13px] font-medium text-[#1c1915] transition-transform hover:scale-[1.03]"
          >
            Résumé
          </TrackedLink>
          <ThemeToggle className="text-[#f4efe6]/75 hover:text-[#f4efe6]" />
        </div>

        <div className="flex items-center pr-1 lg:hidden">
          <ThemeToggle className="text-[#f4efe6]/75 hover:text-[#f4efe6]" />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#f4efe6]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-content rounded-3xl bg-[#1c1915] px-6 py-4 text-[#f4efe6] shadow-[0_18px_50px_-20px_rgba(28,25,21,0.55)] lg:hidden dark:bg-[#161d27] dark:ring-1 dark:ring-white/10">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const href = itemHref(item, isHome);
              const active =
                ("href" in item && onProjects) ||
                (item.label === "Work" && onWork);

              return (
                <Link
                  key={item.label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-sm ${linkClass(active)}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <TrackedLink
              href={links.cv}
              target="_blank"
              rel="noopener noreferrer"
              event="Resume Click"
              data={{ location: "nav-mobile" }}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-[#f4efe6]"
            >
              Download résumé
            </TrackedLink>
          </div>
        </div>
      )}
    </header>
  );
}
