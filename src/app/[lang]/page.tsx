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
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import {
  localBusinessJsonLd,
  pageMeta,
  professionalServiceJsonLd,
} from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary();

  return {
    ...pageMeta({
      title: dict.meta.title,
      description: dict.meta.description,
      path: "/",
      locale,
    }),
    title: { absolute: dict.meta.title },
  };
}

export default function Home() {
  return (
    <SiteShell>
      <JsonLd data={professionalServiceJsonLd()} />
      <JsonLd data={localBusinessJsonLd()} />
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
