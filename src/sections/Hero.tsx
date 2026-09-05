"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { availability, links } from "@/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div aria-hidden className="grid-overlay pointer-events-none absolute inset-0" />

      <div className="mx-auto flex min-h-screen max-w-content items-center justify-center px-6 pb-20 pt-28">
        <motion.div
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="flex w-full flex-col items-center text-center"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs text-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Ready to work
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 max-w-[16ch] font-display text-5xl leading-[0.96] tracking-tightest md:text-6xl"
          >
            Senior frontend engineer. Product systems at{" "}
            <em className="italic text-muted">scale.</em>
          </motion.h1>

          {/* <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            I own the surface people actually use — React, React Native, and
            Next.js, shipped to 1M+ customers. I write about the trade-offs,
            not just the screenshots.
          </motion.p> */}

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-sm tracking-wide text-muted"
          >
            {availability.join("  ·  ")}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Read the case studies
            </a>
            <a
              href={`mailto:${links.email}`}
              className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={18} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
