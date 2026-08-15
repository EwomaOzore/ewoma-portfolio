"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BrowserFrame from "@/components/BrowserFrame";
import DeviceFrame from "@/components/DeviceFrame";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import { featuredWork, type Work } from "@/constants";

function Preview({ work }: { work: Work }) {
  if (work.kind === "web" && work.href) {
    return (
      <BrowserFrame
        src={work.screen}
        url={work.href}
        title={work.name}
        accent={work.accent}
        className="max-w-none w-full"
      />
    );
  }

  return (
    <DeviceFrame
      src={work.screen ?? work.icon}
      alt={`${work.name} on device`}
      accent={work.accent}
      fill={Boolean(work.screen)}
      size="lg"
    />
  );
}

export default function WorkSection() {
  const [active, setActive] = useState(0);
  const work = featuredWork[active];

  return (
    <section id="work" className="mx-auto max-w-[1280px] px-6 py-24 md:py-32">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-muted">
          01 — Selected work
        </p>
        <h2 className="mt-4 max-w-[16ch] font-serif text-5xl tracking-tightest md:text-6xl">
          Shipped to real people, not just staging.
        </h2>
      </Reveal>

      <Reveal className="mt-14">
        <SpotlightCard
          accent={work.accent}
          className="rounded-[2rem] border border-line bg-surface"
        >
          <div className="grid items-stretch gap-5 p-6 md:grid-cols-[minmax(240px,0.62fr)_1.38fr] md:p-10 lg:gap-12">
            <div>
              <div className="max-h-[420px] overflow-y-auto pr-1 md:max-h-[520px]">
                {featuredWork.map((item, i) => {
                  const selected = i === active;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={selected}
                      className={`flex w-full items-center gap-4 border-b border-line py-4 text-left transition-colors ${
                        selected ? "opacity-100" : "opacity-45 hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium">
                          {item.name}
                        </span>
                        <span className="block truncate text-xs text-muted">
                          {item.role}
                        </span>
                      </span>
                      <span className="font-serif text-lg italic text-muted">
                        {item.index}
                      </span>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={work.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-8"
                >
                  <h3 className="max-w-[18ch] font-serif text-3xl leading-[1.1] tracking-tightest md:text-4xl">
                    {work.description}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {work.detail}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
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
                        className="rounded-full bg-background/60 px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {work.href && (
                      <a
                        href={work.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
                      >
                        Visit live site
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                    {work.stores?.map((store) => (
                      <a
                        key={store.label}
                        href={store.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
                      >
                        {store.label}
                        <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex min-h-[420px] items-center justify-center md:sticky md:top-24 md:min-h-[560px] md:self-stretch">
              <AnimatePresence mode="wait">
                <motion.div
                  key={work.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex w-full justify-center"
                >
                  <Preview work={work} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}
