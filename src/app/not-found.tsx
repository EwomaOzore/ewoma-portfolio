import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Page not found",
    description:
      "This page does not exist. Go home, read a case study, or get in touch.",
    path: "/404",
  }),
  robots: { index: false, follow: true },
};

const actions = [
  { href: "/", label: "Home", primary: true },
  { href: "/#work", label: "Case studies" },
  { href: "/projects", label: "Personal projects" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function NotFound() {
  return (
    <SiteShell>
      <section className="mx-auto flex min-h-[calc(100svh-8.5rem)] max-w-content flex-col justify-center px-6 py-24">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { label: "Page not found" },
          ]}
        />
        <p className="mt-14 text-xs uppercase tracking-[0.22em] text-muted">
          404
        </p>
        <h1 className="mt-5 max-w-[12ch] font-display text-5xl leading-[0.92] tracking-tightest md:text-7xl">
          This page does not exist.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
          That URL is not a case study or project on this site.
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
