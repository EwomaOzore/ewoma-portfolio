import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const prefixed = new Set(["en", "es", "fr", "de"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/icon" ||
    pathname === "/apple-icon" ||
    pathname === "/opengraph-image" ||
    pathname.endsWith("/opengraph-image")
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/")[1] ?? "";

  if (prefixed.has(segment)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
