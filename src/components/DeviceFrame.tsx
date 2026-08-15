import React from "react";
import Image from "next/image";

type DeviceFrameProps = {
  src: string;
  alt: string;
  accent: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  fill?: boolean;
};

export default function DeviceFrame({
  src,
  alt,
  accent,
  className = "",
  size = "md",
  priority = false,
  fill = false,
}: Readonly<DeviceFrameProps>) {
  const dims =
    size === "sm"
      ? "h-[280px] w-[138px] rounded-[1.7rem] p-[7px]"
      : size === "lg"
        ? "h-[560px] w-[274px] rounded-[2.6rem] p-[10px]"
        : "h-[360px] w-[176px] rounded-[2.1rem] p-2";

  const notch =
    size === "lg" ? "h-[20px] w-[70px] top-2.5" : "h-[14px] w-[68px] top-2";

  const screenRadius =
    size === "lg" ? "rounded-[1.95rem]" : "rounded-[1.55rem]";

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="absolute inset-4 rounded-full blur-3xl"
        style={{ background: accent, opacity: 0.35 }}
      />
      <div
        className={`relative border border-white/15 bg-[#111] shadow-2xl ${dims}`}
      >
        <div
          className={`absolute left-1/2 z-10 -translate-x-1/2 rounded-full bg-black mt-1 ${notch}`}
        />
        <div
          className={`relative h-full overflow-hidden ${screenRadius}`}
          style={
            fill
              ? undefined
              : {
                  background: `linear-gradient(165deg, ${accent}55 0%, #0c0c0c 58%)`,
                }
          }
        >
          {fill ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={size === "lg" ? "274px" : "176px"}
              className="object-cover object-top"
              priority={priority}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center">
              <Image
                src={src}
                alt={alt}
                width={72}
                height={72}
                className="rounded-[1.15rem] shadow-lg"
                priority={priority}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
