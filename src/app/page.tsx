import React from "react";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";
import Marquee from "@/components/Marquee";
import Hero from "@/sections/Hero";
import Highlights from "@/sections/Highlights";
import WorkSection from "@/sections/Work";
import ExperienceSection from "@/sections/Experience";
import SkillsSection from "@/sections/Skills";
import ContactSection from "@/sections/Contact";
import { marqueeItems } from "@/constants";
import {
  defaultDescription,
  defaultTitle,
  pageMeta,
  professionalServiceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: defaultTitle,
    description: defaultDescription,
    path: "/",
  }),
  title: { absolute: defaultTitle },
};

export default function Home() {
  return (
    <SiteShell>
      <JsonLd data={professionalServiceJsonLd()} />
      <Hero />
      <WorkSection />
      <Highlights />
      <Marquee items={marqueeItems} />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </SiteShell>
  );
}
