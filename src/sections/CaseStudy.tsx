import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import BrowserFrame from "@/components/BrowserFrame";
import DeviceFrame from "@/components/DeviceFrame";
import Reveal from "@/components/Reveal";
import TrackedLink from "@/components/TrackedLink";
import { featuredWork, personalProjects, type Work } from "@/constants";
import type { CaseStudy } from "@/constants/caseStudies";
import { caseStudies, getCaseStudy } from "@/constants/caseStudies";

type CaseStudyDisplay = Omit<
  Pick<
    Work,
    | "name"
    | "role"
    | "index"
    | "kind"
    | "accent"
    | "metric"
    | "tags"
    | "href"
    | "stores"
    | "screen"
    | "icon"
  >,
  "icon"
> & {
  icon?: string;
  github?: string;
  screenWidth?: number;
  screenHeight?: number;
  fit: "cover" | "contain";
  glow: boolean;
  backHref: string;
  backLabel: string;
  disclaimer: string;
};

function getDisplay(slug: string): CaseStudyDisplay | null {
  const featured = featuredWork.find((item) => item.slug === slug);
  if (featured) {
    return {
      ...featured,
      fit: "cover",
      glow: true,
      backHref: "/#work",
      backLabel: "Selected work",
      disclaimer:
        "Private production system. This is the public story — not the codebase.",
    };
  }

  const personal = personalProjects.find((item) => item.slug === slug);
  if (!personal) return null;

  return {
    name: personal.name,
    role: "Selected demo",
    index: "Demo",
    kind: personal.kind,
    accent: personal.accent,
    metric: personal.metric,
    tags: personal.tags,
    href: personal.href,
    github: personal.github,
    screen: personal.screen,
    screenWidth: personal.screenWidth,
    screenHeight: personal.screenHeight,
    fit: "contain",
    glow: false,
    backHref: "/projects",
    backLabel: "Personal projects",
    disclaimer:
      getCaseStudy(slug)?.disclaimer ??
      "A selected demo. The public story of a system I designed and shipped.",
  };
}

export default function CaseStudySection({
  study,
}: Readonly<{ study: CaseStudy }>) {
  const work = getDisplay(study.slug);
  if (!work) return null;

  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const previous = index > 0 ? caseStudies[index - 1] : null;
  const next =
    index >= 0 && index < caseStudies.length - 1
      ? caseStudies[index + 1]
      : null;
  const previousWork = previous ? getDisplay(previous.slug) : null;
  const nextWork = next ? getDisplay(next.slug) : null;

  const isWeb = work.kind === "web" && Boolean(work.href);

  return (
    <article className="mx-auto max-w-content px-6 pb-28 pt-28 md:pb-40 md:pt-32">
      <Reveal>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: work.backHref, label: work.backLabel },
            { label: work.name },
          ]}
        />

        <p className="mt-10 text-xs uppercase tracking-[0.22em] text-muted">
          {work.index} — {work.role}
        </p>
        <h1 className="mt-4 max-w-[16ch] font-display text-5xl leading-[0.95] tracking-tightest md:text-7xl">
          {work.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {study.lede}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-3 py-1 text-xs font-medium"
            style={{
              background: `${work.accent}22`,
              color: work.accent,
            }}
          >
            {work.metric}
          </span>
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {work.href && (
            <TrackedLink
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              event="Live Site Click"
              data={{ project: work.name, destination: "web" }}
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              Visit live site
              <ArrowUpRight size={14} />
            </TrackedLink>
          )}
          {work.stores?.map((store) => (
            <TrackedLink
              key={store.label}
              href={store.href}
              target="_blank"
              rel="noopener noreferrer"
              event="Live Site Click"
              data={{ project: work.name, destination: store.label }}
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              {store.label}
              <ArrowUpRight size={14} />
            </TrackedLink>
          ))}
          {work.github && (
            <TrackedLink
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              event="GitHub Click"
              data={{ project: work.name }}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:bg-surface"
            >
              GitHub
              <ArrowUpRight size={14} />
            </TrackedLink>
          )}
        </div>
      </Reveal>

      <Reveal className="mt-16 flex justify-center">
        {isWeb ? (
          <BrowserFrame
            src={work.screen}
            url={work.href!}
            title={work.name}
            alt={`Screenshot of ${work.name}`}
            accent={work.accent}
            size="lg"
            fit={work.fit}
            glow={work.glow}
            imageWidth={work.screenWidth}
            imageHeight={work.screenHeight}
            priority
          />
        ) : (
          <DeviceFrame
            src={work.screen ?? work.icon}
            alt={`${work.name} app screenshot`}
            accent={work.accent}
            fill={Boolean(work.screen)}
            glow={work.glow}
            size="lg"
            priority
          />
        )}
      </Reveal>

      <p className="mt-8 text-xs text-muted">
        {work.disclaimer}
      </p>

      <div className="mt-20 grid gap-16 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-20">
        <nav
          aria-label="On this page"
          className="hidden lg:block"
        >
          <ul className="sticky top-24 space-y-3 text-sm text-muted">
            {study.sections.map((section) => (
              <li key={section.title}>
                <a
                  href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="transition-colors hover:text-foreground"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-16">
          {study.sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.04}>
              <section
                id={section.title.toLowerCase().replace(/\s+/g, "-")}
              >
                <h2 className="font-display text-3xl tracking-tightest md:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-muted md:text-lg">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24 grid gap-6 border-t border-line pt-10 sm:grid-cols-2">
        {previous && previousWork ? (
          <Link
            href={`/work/${previous.slug}`}
            className="group rounded-2xl border border-line p-6 transition-colors hover:bg-surface"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Previous
            </p>
            <p className="mt-2 font-display text-2xl tracking-tightest group-hover:italic">
              {previousWork.name}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next && nextWork ? (
          <Link
            href={`/work/${next.slug}`}
            className="group rounded-2xl border border-line p-6 text-right transition-colors hover:bg-surface sm:justify-self-end"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Next
            </p>
            <p className="mt-2 font-display text-2xl tracking-tightest group-hover:italic">
              {nextWork.name}
            </p>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
