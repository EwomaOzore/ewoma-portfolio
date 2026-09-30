import React from "react";
import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";
import PersonalProjects from "@/sections/PersonalProjects";
import ContactSection from "@/sections/Contact";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary();

  return pageMeta({
    title: dict.meta.projectsTitle,
    description: dict.meta.projectsDescription,
    path: "/projects",
    locale,
  });
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: dict.projects.home, path: "/" },
            { name: dict.projects.crumb, path: "/projects" },
          ],
          locale,
        )}
      />
      <PersonalProjects />
      <ContactSection glow={false} />
    </SiteShell>
  );
}
