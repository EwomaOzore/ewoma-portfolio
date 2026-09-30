import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { localize } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { pageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary();

  return {
    ...pageMeta({
      title: dict.notFound.metaTitle,
      description: dict.notFound.metaDescription,
      path: "/404",
      locale,
    }),
    robots: { index: false, follow: true },
  };
}

export default async function NotFound() {
  const locale = await getLocale();
  const dict = await getDictionary();
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
