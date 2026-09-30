import React from "react";
import Link from "next/link";
import { links } from "@/constants";
import { localize } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

const internal = [
  { href: "/", key: "home" },
  { href: "/#work", key: "work" },
  { href: "/projects", key: "projects" },
  { href: "/#experience", key: "experience" },
  { href: "/#skills", key: "skills" },
  { href: "/#contact", key: "contact" },
] as const;

const social = [
  { href: links.github, label: "GitHub" },
  { href: links.linkedin, label: "LinkedIn" },
  { href: links.whatsapp, label: "WhatsApp" },
  { href: links.telegram, label: "Telegram" },
] as const;

export default async function Footer() {
  const dict = await getDictionary();
  const locale = await getLocale();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-serif italic text-muted">
          © {new Date().getFullYear()} Ewomaoghene Ozore
        </p>
        <nav aria-label={dict.nav.footer}>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            {internal.map((item) => (
              <li key={item.href}>
                <Link
                  href={localize(locale, item.href)}
                  className="transition-colors hover:text-foreground"
                >
                  {dict.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={dict.nav.social}>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            {social.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
