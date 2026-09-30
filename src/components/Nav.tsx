"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import TrackedLink from "./TrackedLink";
import { links } from "@/constants";
import { localeMeta, locales, stripLocale } from "@/i18n/config";
import { useI18n, useLocalize } from "./I18nProvider";

const navItems = [
  { key: "work", hash: "#work" },
  { key: "projects", href: "/projects" },
  { key: "experience", hash: "#experience" },
  { key: "skills", hash: "#skills" },
  { key: "contact", hash: "#contact" },
] as const;

function itemHref(
  item: (typeof navItems)[number],
  isHome: boolean,
  hrefFor: (path: string) => string,
) {
  if ("href" in item) return hrefFor(item.href);
  return isHome ? item.hash : hrefFor(`/${item.hash}`);
}

const linkClass = (active: boolean) =>
  `text-[13px] underline-offset-[7px] transition-colors hover:text-[#f4efe6] ${
    active
      ? "text-[#f4efe6] underline decoration-[#e3a36a] decoration-2"
      : "text-[#f4efe6]/70"
  }`;

function LanguageMenu({
  onOpen,
  dismiss,
}: Readonly<{ onOpen?: () => void; dismiss?: boolean }>) {
  const { locale, dict } = useI18n();
  const { switchTo } = useLocalize();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (dismiss) setOpen(false);
  }, [dismiss]);

  useEffect(() => {
    if (!open) return;

    function onPointer(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={dict.nav.languages}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() =>
          setOpen((value) => {
            const next = !value;
            if (next) onOpen?.();
            return next;
          })
        }
        className="flex h-9 items-center gap-1 rounded-full px-2 text-[12px] tracking-wide text-[#f4efe6]/80 transition-colors hover:text-[#f4efe6]"
      >
        {localeMeta[locale].label}
        <ChevronDown
          size={13}
          strokeWidth={1.75}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          id={menuId}
          aria-label={dict.nav.languages}
          className="absolute right-0 top-[calc(100%+18px)] z-50 min-w-[10.5rem] rounded-2xl bg-[#1c1915] p-1.5 text-[#f4efe6] shadow-[0_18px_50px_-20px_rgba(28,25,21,0.7)] ring-1 ring-white/10 dark:bg-[#161d27]"
        >
          {locales.map((code) => {
            const current = code === locale;

            return (
              <li key={code}>
                <Link
                  href={switchTo(code)}
                  hrefLang={code}
                  lang={code}
                  aria-current={current ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between gap-4 rounded-xl px-3 py-2 text-sm ${
                    current
                      ? "bg-white/10 text-[#f4efe6]"
                      : "text-[#f4efe6]/75 hover:bg-white/10 hover:text-[#f4efe6]"
                  }`}
                >
                  {localeMeta[code].name}
                  <span className="text-[11px] tracking-wide text-[#f4efe6]/50">
                    {localeMeta[code].label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { dict } = useI18n();
  const { href } = useLocalize();
  const pathname = stripLocale(usePathname() || "/");
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
          href={isHome ? "#top" : href("/")}
          aria-label="Ewoma Ozore, home"
          className="pl-3 font-serif text-lg italic tracking-tight lg:pl-4"
        >
          E. Ozore
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const itemPath = itemHref(item, isHome, href);
            const active =
              ("href" in item && onProjects) || (item.key === "work" && onWork);

            return (
              <Link
                key={item.key}
                href={itemPath}
                className={linkClass(active)}
              >
                {dict.nav[item.key]}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center justify-self-end gap-1 pr-1 lg:flex">
          <TrackedLink
            href={links.cv}
            target="_blank"
            rel="noopener noreferrer"
            event="Resume Click"
            data={{ location: "nav" }}
            className="mr-2 rounded-full bg-[#f4efe6] px-4 py-2 text-[13px] font-medium text-[#1c1915] transition-transform hover:scale-[1.03]"
          >
            {dict.nav.resume}
          </TrackedLink>
          <LanguageMenu />
          <ThemeToggle className="text-[#f4efe6]/75 hover:text-[#f4efe6]" />
        </div>

        <div className="flex items-center pr-1 lg:hidden">
          <LanguageMenu onOpen={() => setOpen(false)} dismiss={open} />
          <ThemeToggle className="text-[#f4efe6]/75 hover:text-[#f4efe6]" />
          <button
            type="button"
            aria-label={open ? dict.nav.close : dict.nav.open}
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
              const itemPath = itemHref(item, isHome, href);
              const active =
                ("href" in item && onProjects) ||
                (item.key === "work" && onWork);

              return (
                <Link
                  key={item.key}
                  href={itemPath}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-sm ${linkClass(active)}`}
                >
                  {dict.nav[item.key]}
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
              {dict.nav.download}
            </TrackedLink>
          </div>
        </div>
      )}
    </header>
  );
}
