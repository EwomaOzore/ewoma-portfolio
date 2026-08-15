import React from "react";
import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${serif.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
