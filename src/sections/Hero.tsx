"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { featuredWork, links } from "@/constants";
import BrowserFrame from "@/components/BrowserFrame";
import DeviceFrame from "@/components/DeviceFrame";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div aria-hidden className="grid-overlay pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-foreground/[0.04] blur-3xl"
      />

      <div className="mx-auto grid min-h-screen max-w-content items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
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
            className="mt-7 max-w-[14ch] font-serif text-[4.2rem] leading-[0.92] tracking-tightest sm:text-7xl md:text-8xl"
          >
            Software used by{" "}
            <em className="italic text-muted">millions.</em>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            I&apos;m Ewoma Ozore — a senior frontend and mobile engineer. For
            5+ years I&apos;ve shipped React, React Native, and Next.js products
            used by 1M+ people across web, iOS, and Android.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              See selected work
            </a>
            <a
              href={`mailto:${links.email}`}
              className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden h-[420px] w-full max-w-[280px] md:block lg:h-[460px] lg:max-w-[420px]"
        >
          <BrowserFrame
            src={featuredWork[0].screen}
            url={featuredWork[0].href ?? "https://partner.mtn.ng/"}
            title={featuredWork[0].name}
            accent={featuredWork[0].accent}
            className="absolute left-0 top-16 hidden w-[210px] -rotate-[10deg] lg:block"
          />
          <DeviceFrame
            src={featuredWork[1].screen ?? featuredWork[1].icon}
            alt={featuredWork[1].name}
            accent={featuredWork[1].accent}
            fill={Boolean(featuredWork[1].screen)}
            priority
            className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rotate-[4deg] lg:left-[150px] lg:translate-x-0"
          />
          <DeviceFrame
            src={featuredWork[2].screen ?? featuredWork[2].icon}
            alt={featuredWork[2].name}
            accent={featuredWork[2].accent}
            fill={Boolean(featuredWork[2].screen)}
            size="sm"
            priority
            className="absolute right-0 top-24 z-20 hidden rotate-[14deg] lg:block"
          />
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
