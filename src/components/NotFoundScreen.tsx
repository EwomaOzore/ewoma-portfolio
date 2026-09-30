import React from "react";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { localize, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export default function NotFoundScreen({
  locale,
  dict,
}: Readonly<{ locale: Locale; dict: Dictionary }>) {
  const actions = [
    { href: localize(locale, "/"), label: dict.notFound.home, primary: true },
    { href: localize(locale, "/#work"), label: dict.notFound.studies },
    { href: localize(locale, "/projects"), label: dict.notFound.projects },
    { href: localize(locale, "/#contact"), label: dict.notFound.contact },
  ] as const;

  return (
    <SiteShell>
      <section className="mx-auto flex min-h-[calc(100svh-8.5rem)] max-w-content flex-col justify-center px-6 py-24">
        <Breadcrumbs
          items={[
            { href: localize(locale, "/"), label: dict.notFound.home },
            { label: dict.notFound.crumb },
          ]}
        />
        <p className="mt-14 text-xs uppercase tracking-[0.22em] text-muted">
          404
        </p>
        <h1 className="mt-5 max-w-[12ch] font-display text-5xl leading-[0.92] tracking-tightest md:text-7xl">
          {dict.notFound.title}
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
          {dict.notFound.body}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {actions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={
                "primary" in action && action.primary
                  ? "rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  : "rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
              }
            >
              {action.label}
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
