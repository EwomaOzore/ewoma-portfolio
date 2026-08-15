import React from "react";
import Image from "next/image";

type BrowserFrameProps = {
  src?: string;
  url: string;
  title: string;
  accent: string;
  className?: string;
  priority?: boolean;
};

export default function BrowserFrame({
  src,
  url,
  title,
  accent,
  className = "",
  priority = false,
}: BrowserFrameProps) {
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className={`relative w-full ${className}`}>
      <div
        aria-hidden
        className="absolute inset-6 rounded-full blur-3xl"
        style={{ background: accent, opacity: 0.35 }}
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#111] shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <div className="ml-2 flex-1 truncate rounded-md bg-white/8 px-2.5 py-1 text-[10px] tracking-wide text-white/50">
            {host}
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden">
          {src ? (
            <Image
              src={src}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover object-top"
              priority={priority}
            />
          ) : (
            <div
              className="flex h-full flex-col justify-between p-5"
              style={{
                background: `linear-gradient(160deg, ${accent} 0%, #1a1a1a 55%)`,
              }}
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/70">
                MTN Nigeria
              </p>
              <div>
                <p className="font-serif text-2xl leading-tight text-black">
                  Partner Portal
                </p>
                <p className="mt-1 max-w-[24ch] text-xs text-black/70">
                  Reach millions of customers. Onboard, integrate, and grow.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
