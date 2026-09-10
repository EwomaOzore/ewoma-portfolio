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
  children?: React.ReactNode;
  fit?: "cover" | "contain";
  glow?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  alt?: string;
};

export default function BrowserFrame({
  src,
  url,
  title,
  accent,
  className = "",
  priority = false,
  size = "lg",
  children,
  fit = "cover",
  glow = false,
  imageWidth = 1600,
  imageHeight = 900,
  alt,
}: BrowserFrameProps) {
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const box =
    size === "sm"
      ? "h-[240px] w-[380px]"
      : fit === "contain"
        ? "w-full min-w-0"
        : "aspect-[16/10] w-full min-w-0 overflow-hidden md:aspect-auto md:h-[520px] md:max-w-[720px]";

  return (
    <div className={`relative min-w-0 shrink-0 ${box} ${className}`}>
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-6 rounded-full blur-3xl"
          style={{ background: accent, opacity: 0.35 }}
        />
      )}
      <div className="relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#111] shadow-2xl">
        <div className="flex h-10 min-w-0 shrink-0 items-center gap-2 border-b border-white/10 px-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#28c840]" />
          <div className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white/8 px-2.5 py-1 text-[10px] tracking-wide text-white/50">
            {host}
          </div>
        </div>

        <div
          className={
            fit === "contain"
              ? "relative w-full"
              : "relative min-h-0 w-full flex-1 overflow-hidden"
          }
        >
          {children ??
            (src && fit === "contain" ? (
              <Image
                src={src}
                alt={alt ?? `Screenshot of ${title}`}
                width={imageWidth}
                height={imageHeight}
                sizes={size === "sm" ? "380px" : "(max-width: 768px) 100vw, 640px"}
                className="h-auto w-full"
                priority={priority}
              />
            ) : src ? (
              <Image
                src={src}
                alt={alt ?? `Screenshot of ${title}`}
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
            ))}
        </div>
      </div>
    </div>
  );
}
