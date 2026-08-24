"use client";

import React from "react";
import { track } from "@vercel/analytics";

type TrackedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  data?: Record<string, string | number | boolean | null>;
};

export default function TrackedLink({
  event,
  data,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track(event, data);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
