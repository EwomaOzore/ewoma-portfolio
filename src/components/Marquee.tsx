import React from "react";

type MarqueeProps = {
  items: string[];
};

export default function Marquee({ items }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-line">
      <div className="marquee-track flex w-max gap-10 py-4 pr-10">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm tracking-wide text-muted"
          >
            {item}
            <span aria-hidden className="font-serif text-foreground/40">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
