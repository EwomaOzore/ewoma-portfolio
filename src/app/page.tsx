import React from "react";
import SiteShell from "@/components/SiteShell";
import Marquee from "@/components/Marquee";
import Hero from "@/sections/Hero";
import Highlights from "@/sections/Highlights";
import WorkSection from "@/sections/Work";
import ExperienceSection from "@/sections/Experience";
import SkillsSection from "@/sections/Skills";
import ContactSection from "@/sections/Contact";
import { marqueeItems } from "@/constants";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Marquee items={marqueeItems} />
      <Highlights />
      <WorkSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </SiteShell>
  );
}
