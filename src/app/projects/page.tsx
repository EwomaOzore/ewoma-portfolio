import React from "react";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";
import PersonalProjects from "@/sections/PersonalProjects";
import ContactSection from "@/sections/Contact";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Personal projects",
  description:
    "Side projects by Ewoma Ozore — QuantumSpecs, GameBuddy, Interswitch, and Flux. Built nights and weekends.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Personal projects", path: "/projects" },
        ])}
      />
      <PersonalProjects />
      <ContactSection glow={false} />
    </SiteShell>
  );
}
