import React from "react";
import Image from "next/image";

type DeviceFrameProps = {
  src?: string;
  alt: string;
  accent: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "phone";
  priority?: boolean;
  fill?: boolean;
  children?: React.ReactNode;
  glow?: boolean;
  notch?: boolean;
};

export default function DeviceFrame({
  src,
  alt,
  accent,
  className = "",
  size = "md",
  priority = false,
  fill = false,
  children,
  glow = false,
  notch = true,
}: Readonly<DeviceFrameProps>) {
  const dims =
    size === "sm"
      ? "h-[280px] w-[138px] rounded-[1.7rem] p-[7px]"
      : size === "phone"
        ? "h-[560px] w-[258px] rounded-[2.6rem] p-[10px]"
        : size === "lg"
          ? "h-[560px] w-[274px] rounded-[2.6rem] p-[10px]"
          : "h-[360px] w-[176px] rounded-[2.1rem] p-2";

  const notchClass =
    size === "lg" || size === "phone"
      ? "h-[20px] w-[70px] top-2.5"
      : "h-[14px] w-[68px] top-2";

  const screenRadius =
    size === "lg" || size === "phone" ? "rounded-[1.95rem]" : "rounded-[1.55rem]";

  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div
          aria-hidden
          className="absolute inset-4 rounded-full blur-3xl"
          style={{ background: accent, opacity: 0.35 }}
        />
      )}
      <div
        className={`relative border border-white/15 bg-[#111] shadow-2xl ${dims}`}
      >
        {notch && (
          <div
            className={`absolute left-1/2 z-10 -translate-x-1/2 rounded-full bg-black mt-1 ${notchClass}`}
          />
        )}
        <div
          className={`relative h-full overflow-hidden ${screenRadius}`}
          style={
            children || fill || !glow
              ? undefined
              : {
                  background: accent,
                }
          }
        >
          {children ??
            (fill && src ? (
              <Image
                src={src}
                alt={alt}
                fill
                sizes={size === "lg" || size === "phone" ? "274px" : "176px"}
                className="object-cover object-top"
                priority={priority}
              />
            ) : src ? (
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
            ) : null)}
        </div>
      </div>
    </div>
  );
}
