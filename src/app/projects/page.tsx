import React from "react";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PersonalProjects from "@/sections/PersonalProjects";
import ContactSection from "@/sections/Contact";

export const metadata: Metadata = {
  title: "Personal projects — Ewoma Ozore",
  description:
    "Side projects by Ewoma Ozore — QuantumSpecs, GameBuddy, Interswitch, and Flux. Built nights and weekends.",
  openGraph: {
    title: "Personal projects — Ewoma Ozore",
    description:
      "An AI ops console, a store, a banking dashboard, and a budget app I designed and shipped myself.",
  },
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PersonalProjects />
      <ContactSection glow={false} />
    </SiteShell>
  );
}
