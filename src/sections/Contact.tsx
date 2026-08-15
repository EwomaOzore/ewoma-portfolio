import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { links } from "@/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.04] blur-3xl"
      />

      <div className="mx-auto max-w-content px-6 py-28 md:py-40">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-muted">
            04 — Contact
          </p>
          <h2 className="mt-6 max-w-[16ch] font-serif text-5xl leading-[0.95] tracking-tightest md:text-7xl">
            Let&apos;s build something people love to use.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Open to senior frontend and mobile engineering roles — remote or
            relocation.
          </p>

          <a
            href={`mailto:${links.email}`}
            className="mt-10 inline-flex items-center gap-3 font-serif text-2xl italic underline decoration-line underline-offset-8 transition-colors hover:text-muted md:text-4xl"
          >
            {links.email}
            <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8" />
          </a>

          <div className="mt-10">
            <a
              href={links.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              Download résumé
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
