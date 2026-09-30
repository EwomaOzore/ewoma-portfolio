"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { links } from "@/constants";
import { useI18n } from "@/components/I18nProvider";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { y: 12 },
  show: {
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const corners = [
  "-left-[5px] -top-[5px]",
  "-right-[5px] -top-[5px]",
  "-bottom-[5px] -left-[5px]",
  "-bottom-[5px] -right-[5px]",
] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { dict } = useI18n();

  return (
    <section id="top" className="relative min-h-screen">
      <div className="mx-auto flex min-h-screen w-full max-w-[1680px] items-center px-6 py-24 lg:px-10">
        <motion.div
          variants={container}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          className="mx-auto grid w-fit max-w-full items-center gap-8 lg:grid-cols-[minmax(0,max-content)_auto] lg:gap-8"
        >
          <div className="flex flex-col items-start text-left md:items-center md:text-center lg:items-start lg:text-left">
            <motion.p
              variants={item}
              className="relative px-5 py-2.5 text-sm text-foreground"
            >
              <span
                aria-hidden
                className="absolute inset-0 border border-foreground"
              />
              {corners.map((corner) => (
                <span
                  key={corner}
                  aria-hidden
                  className={`absolute h-2.5 w-2.5 border border-foreground bg-sunset ${corner}`}
                />
              ))}
              {dict.hero.hello}
            </motion.p>

            <motion.h1
              variants={item}
              className="hero-title mt-7 text-[2rem] leading-[1.08] tracking-tightest sm:text-4xl lg:text-5xl"
            >
              <span className="block">
                {dict.hero.before}{" "}
                <span className="text-sunset underline decoration-sunset decoration-[3px] underline-offset-[0.14em]">
                  {dict.hero.name}
                </span>
                ,
              </span>
              <span className="mt-1 block">
                {dict.hero.afterStart} <br className="hidden lg:block" />
                {dict.hero.afterEnd}
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-base leading-relaxed text-muted"
            >
              {dict.hero.intro}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap gap-3 md:justify-center lg:justify-start"
            >
              <a
                href="#work"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                {dict.hero.studies}
              </a>
              <a
                href={`mailto:${links.email}`}
                className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
              >
                {dict.hero.contact}
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="flex min-w-0 justify-center lg:justify-end"
          >
            {/* File is 1536×1024 with the portrait inset at 308,27 921×997. */}
            <div className="relative aspect-[921/997] w-[min(88vw,26rem)] overflow-hidden lg:h-[min(calc(100svh-12rem),740px)] lg:w-auto">
              <Image
                src="/assets/hero1.png"
                alt="Ewoma Ozore"
                width={1536}
                height={1024}
                priority
                sizes="(min-width: 1024px) 42rem, 88vw"
                className="absolute max-w-none"
                style={{
                  top: "-2.71%",
                  left: "-33.44%",
                  height: "102.71%",
                  width: "auto",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#work"
        aria-label={dict.hero.scroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={18} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
