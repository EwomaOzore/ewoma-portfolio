import React from "react";
import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Instrument_Sans,
  Instrument_Serif,
  Schibsted_Grotesk,
} from "next/font/google";
import { I18nProvider } from "@/components/I18nProvider";
import Providers from "@/components/Providers";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { defaultLocale, hasLocale, locales } from "@/i18n/config";
import { dictionaryFor } from "@/i18n/get-dictionary";
import { personJsonLd, siteName, siteUrl, websiteJsonLd } from "@/lib/seo";
import "../globals.css";

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
const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1117" },
  ],
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: Readonly<{ params: Promise<{ lang: string }> }>): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = dictionaryFor(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.title,
      template: `%s — ${siteName}`,
    },
    description: dict.meta.description,
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
    openGraph: {
      siteName,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
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
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: requested } = await params;
  const lang = hasLocale(requested) ? requested : defaultLocale;
  const dict = dictionaryFor(lang);

  return (
    <html lang={lang} suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${sans.variable} ${serif.variable} ${display.variable} ${grotesk.variable} font-sans`}
      >
        <JsonLd data={personJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Providers>
          <I18nProvider locale={lang} dict={dict}>
            {children}
          </I18nProvider>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
