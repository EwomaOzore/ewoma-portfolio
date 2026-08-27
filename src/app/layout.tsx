import React from "react";
import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ewomaozore.vercel.app"),
  title: "Ewoma Ozore — Senior Frontend & Mobile Engineer",
  description:
    "Senior Frontend & Mobile Engineer with 5+ years shipping React, React Native, and Next.js products used by over a million people across web, iOS, and Android.",
  keywords: [
    "Ewoma Ozore",
    "Senior Frontend Engineer",
    "Mobile Engineer",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "Ewoma Ozore — Senior Frontend & Mobile Engineer",
    description:
      "5+ years shipping production web and mobile products for 1M+ customers.",
    type: "website",
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${serif.variable} font-sans`}>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
