import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { experience } from "@/constants";
import { localize } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

export default async function ExperienceSection() {
  const dict = await getDictionary();
  const locale = await getLocale();
  return (
    <section id="experience" className="border-y border-line bg-surface/50">
      <div className="mx-auto max-w-content px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-muted">
            {dict.experience.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[18ch] font-display text-5xl tracking-tightest md:text-6xl">
            {dict.experience.title}
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute bottom-4 left-[11px] top-2 w-px bg-line md:left-[15px]"
          />

          <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <Reveal key={`${job.company}-${job.period}`} delay={i * 0.04}>
                <article className="relative grid gap-3 pl-10 md:grid-cols-[220px_1fr] md:gap-12 md:pl-12">
                  <span
                    aria-hidden
                    className={`absolute left-[11px] top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full md:left-[15px] ${
                      i === 0
                        ? "bg-foreground shadow-[0_0_0_6px_var(--glow)]"
                        : "bg-muted"
                    }`}
                  />

                  <div>
                    <div className="flex items-center gap-3">
                      {job.icon && (
                        <Image
                          src={job.icon}
                          alt={`${job.company} logo`}
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-lg bg-white object-contain"
                        />
                      )}
                      <h3 className="font-medium tracking-tight">
                        {job.href ? (
                          <Link
                            href={localize(locale, job.href)}
                            className="transition-colors hover:text-muted"
                          >
                            {job.company}
                          </Link>
                        ) : (
                          job.company
                        )}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-muted">{job.period}</p>
                  </div>

                  <div className="min-w-0">
                    <p className="font-serif text-xl italic md:text-2xl">
                      {dict.experience.roles[job.company as keyof typeof dict.experience.roles]}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {dict.experience.points[job.company as keyof typeof dict.experience.points].map((point) => (
                        <li
                          key={point}
                          className="text-sm leading-relaxed text-muted"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
