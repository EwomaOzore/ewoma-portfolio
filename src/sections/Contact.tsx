import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import TrackedLink from "@/components/TrackedLink";
import { links } from "@/constants";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function ContactSection({
  glow = false,
}: Readonly<{
  glow?: boolean;
}>) {
  const dict = await getDictionary();

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line"
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.04] blur-3xl"
        />
      )}

      <div className="mx-auto max-w-content px-6 py-28 md:py-40">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-muted">
            {dict.contact.eyebrow}
          </p>
          <h2 className="mt-6 max-w-[16ch] font-display text-5xl leading-[0.95] tracking-tightest md:text-7xl">
            {dict.contact.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            {dict.contact.body}
          </p>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(links.email)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 font-serif text-2xl italic underline decoration-sunset/70 underline-offset-8 transition-colors hover:text-muted md:text-4xl"
          >
            {links.email}
            <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8" />
          </a>

          <div className="mt-10 flex flex-wrap gap-3">
            <TrackedLink
              href={links.cv}
              target="_blank"
              rel="noopener noreferrer"
              event="Resume Click"
              data={{ location: "contact" }}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              {dict.contact.resume}
              <ArrowUpRight size={14} />
            </TrackedLink>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
