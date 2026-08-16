import React from "react";
import Image from "next/image";

type BrowserFrameProps = {
  src?: string;
  url: string;
  title: string;
  accent: string;
  className?: string;
  priority?: boolean;
  size?: "sm" | "lg";
};

export default function BrowserFrame({
  src,
  url,
  title,
  accent,
  className = "",
  priority = false,
  size = "lg",
}: BrowserFrameProps) {
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const box =
    size === "sm"
      ? "h-[240px] w-[380px]"
      : "w-full md:h-[520px] md:max-w-[720px]";

  return (
    <div className={`relative ${box} ${className}`}>
      <div
        aria-hidden
        className="absolute inset-6 rounded-full blur-3xl"
        style={{ background: accent, opacity: 0.35 }}
      />
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#111] shadow-2xl">
        <div className="flex h-10 shrink-0 items-center gap-2 border-b border-white/10 px-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#28c840]" />
          <div className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white/8 px-2.5 py-1 text-[10px] tracking-wide text-white/50">
            {host}
          </div>
        </div>

        <div
          className={`relative w-full overflow-hidden ${
            size === "sm"
              ? "min-h-0 flex-1"
              : "aspect-[16/10] md:aspect-auto md:min-h-0 md:flex-1"
          }`}
        >
          {src ? (
            <Image
              src={src}
              alt={title}
              fill
              sizes={size === "sm" ? "380px" : "(max-width: 768px) 100vw, 720px"}
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
                {title}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
