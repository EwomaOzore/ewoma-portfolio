import React from "react";
import Link from "next/link";
import { links } from "@/constants";

const internal = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;

const social = [
  { href: links.github, label: "GitHub" },
  { href: links.linkedin, label: "LinkedIn" },
  { href: links.whatsapp, label: "WhatsApp" },
  { href: links.telegram, label: "Telegram" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-serif italic text-muted">
          © {new Date().getFullYear()} Ewomaoghene Ozore
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            {internal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Social">
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
