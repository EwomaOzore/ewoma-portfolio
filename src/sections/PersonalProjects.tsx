"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BrowserFrame from "@/components/BrowserFrame";
import DeviceFrame from "@/components/DeviceFrame";
import Reveal from "@/components/Reveal";
import TrackedLink from "@/components/TrackedLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import { personalProjects, type PersonalProject } from "@/constants";

function Preview({ project }: Readonly<{ project: PersonalProject }>) {
  if (project.kind === "web") {
    return (
      <BrowserFrame
        src={project.screen}
        url={project.href ?? project.github ?? ""}
        title={project.name}
        alt={`Screenshot of ${project.name}`}
        accent={project.accent}
        size="lg"
        fit="contain"
        glow={false}
        imageWidth={project.screenWidth}
        imageHeight={project.screenHeight}
        priority
      />
    );
  }

  return (
    <DeviceFrame
      src={project.screen}
      alt={`${project.name} app screenshot`}
      accent={project.accent}
      size="phone"
      fill
      glow={false}
      notch={false}
      priority
    />
  );
}

export default function PersonalProjects() {
  return (
    <section id="projects" className="mx-auto max-w-[1280px] px-6 pb-24 pt-28 md:pb-32 md:pt-36">
      <Reveal>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { label: "Personal projects" },
          ]}
        />
        <p className="mt-10 text-xs uppercase tracking-[0.22em] text-muted">
          Personal work
        </p>
        <h1 className="mt-4 max-w-[14ch] font-display text-5xl tracking-tightest md:text-7xl">
          Nights and weekends.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Not client briefs. An ops console, a developer control plane, a
          store, a banking dashboard, and a budget app I wanted to exist —
          designed and shipped myself.
        </p>
      </Reveal>

      <div className="mt-8 md:mt-12">
        {personalProjects.map((project, i) => (
          <Reveal key={project.name}>
            <article className="grid items-center gap-10 border-t border-line py-16 md:grid-cols-2 md:gap-16 md:py-24">
              <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                <p className="font-serif text-sm italic text-muted">
                  {project.year} · {project.kind}
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-tightest md:text-4xl">
                  {project.name}
                </h2>
                <p className="mt-4 max-w-[22ch] font-serif text-xl leading-snug italic text-muted md:text-2xl">
                  {project.description}
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                  {project.detail}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      background: `${project.accent}22`,
                      color: project.accent,
                    }}
                  >
                    {project.metric}
                  </span>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.slug && (
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
                    >
                      Read the case study
                      <ArrowUpRight size={14} />
                    </Link>
                  )}
                  {project.href && (
                    <TrackedLink
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      event="Live Site Click"
                      data={{ project: project.name, destination: "web" }}
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium ${
                        project.slug
                          ? "border border-line transition-colors hover:bg-surface"
                          : "bg-foreground text-background transition-transform hover:scale-[1.03]"
                      }`}
                    >
                      Visit live site
                      <ArrowUpRight size={14} />
                    </TrackedLink>
                  )}
                  {project.github && (
                    <TrackedLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      event="GitHub Click"
                      data={{ project: project.name }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:bg-surface"
                    >
                      GitHub
                      <ArrowUpRight size={14} />
                    </TrackedLink>
                  )}
                </div>
              </div>

              <div className="flex min-w-0 justify-center">
                <Preview project={project} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
