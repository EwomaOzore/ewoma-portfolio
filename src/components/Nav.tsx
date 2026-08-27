"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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

function itemHref(
  item: (typeof navItems)[number],
  isHome: boolean,
) {
  if ("href" in item) return item.href;
  return isHome ? item.hash : `/${item.hash}`;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const onProjects = pathname === "/projects";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/65 backdrop-blur-2xl">
      <nav className="mx-auto flex h-14 max-w-content items-center justify-between px-6">
        <Link
          href={isHome ? "#top" : "/"}
          className="font-serif text-lg italic tracking-tight"
        >
          E. Ozore
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const href = itemHref(item, isHome);
            const active = "href" in item && onProjects;

            return (
              <Link
                key={item.label}
                href={href}
                className={`text-[13px] transition-colors hover:text-foreground ${
                  active ? "text-foreground" : "text-muted"
                }`}
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
            data={{ location: "nav" }}
            className="rounded-full bg-foreground px-3.5 py-1.5 text-[13px] font-medium text-background transition-transform hover:scale-[1.03]"
          >
            Résumé
          </TrackedLink>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center text-muted"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => {
                const href = itemHref(item, isHome);
                const active = "href" in item && onProjects;

                return (
                  <Link
                    key={item.label}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`py-2 text-sm transition-colors hover:text-foreground ${
                      active ? "font-medium text-foreground" : "text-muted"
                    }`}
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
                className="py-2 text-sm font-medium"
              >
                Download résumé
              </TrackedLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
