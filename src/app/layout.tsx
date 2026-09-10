import React from "react";
import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans, Instrument_Serif } from "next/font/google";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  defaultDescription,
  defaultTitle,
  personJsonLd,
  siteName,
  siteUrl,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const display = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s — ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: "Ewomaoghene Ozore", url: siteUrl }],
  creator: "Ewomaoghene Ozore",
  category: "portfolio",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png" },
    ],
    apple: "/apple-icon",
  },
  keywords: [
    "Ewoma Ozore",
    "Senior Frontend Engineer",
    "Mobile Engineer",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
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
      <body
        className={`${sans.variable} ${serif.variable} ${display.variable} font-sans`}
      >
        <JsonLd data={personJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
