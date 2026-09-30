import React from "react";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import { stats } from "@/constants";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Highlights() {
  const dict = await getDictionary();
  return (
    <section className="border-y border-line">
      <div className="mx-auto grid max-w-content grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.06}
            className={`px-6 py-12 ${
              i < 3 ? "md:border-r md:border-line" : ""
            } ${i % 2 === 0 ? "max-md:border-r max-md:border-line" : ""} ${
              i < 2 ? "max-md:border-b max-md:border-line" : ""
            }`}
          >
            <p className="font-display text-5xl tracking-tightest md:text-6xl">
              <CountUp to={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-3 max-w-[14ch] text-sm text-muted">
              {dict.stats[i]}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
