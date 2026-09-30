import React from "react";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/constants";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function SkillsSection() {
  const dict = await getDictionary();
  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-24 md:py-32">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-muted">
          {dict.skills.eyebrow}
        </p>
        <h2 className="mt-4 max-w-[18ch] font-display text-5xl tracking-tightest md:text-6xl">
          {dict.skills.title}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const featured = group.title === "Mobile";
          const title =
            dict.skills.groups[group.title as keyof typeof dict.skills.groups];

          return (
            <Reveal
              key={group.title}
              delay={i * 0.05}
              className={
                featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }
            >
              <div
                className={`h-full rounded-[1.75rem] border border-line p-6 ${
                  featured ? "bg-foreground text-background" : "bg-surface"
                }`}
              >
                <h3
                  className={`text-xs uppercase tracking-[0.2em] ${
                    featured ? "text-background/60" : "text-muted"
                  }`}
                >
                  {title}
                </h3>
                {featured && (
                  <p className="mt-4 font-display text-3xl leading-tight tracking-tightest">
                    {dict.skills.mobile}
                  </p>
                )}
                <div
                  className={`flex flex-wrap gap-2 ${featured ? "mt-8" : "mt-5"}`}
                >
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full px-3 py-1 text-sm ${
                        featured
                          ? "bg-background/10"
                          : "bg-background/70 text-foreground"
                      }`}
                    >
                      {dict.skills.labels[
                        skill as keyof typeof dict.skills.labels
                      ] ?? skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
