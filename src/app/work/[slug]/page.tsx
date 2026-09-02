import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";
import CaseStudySection from "@/sections/CaseStudy";
import ContactSection from "@/sections/Contact";
import { personalProjects } from "@/constants";
import { caseStudies, getCaseStudy } from "@/constants/caseStudies";
import {
  breadcrumbJsonLd,
  caseStudyJsonLd,
  caseStudyMeta,
  workBySlug,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: Readonly<PageProps>): Promise<Metadata> {
  const { slug } = await params;
  return caseStudyMeta(slug);
}

export default async function CaseStudyPage({
  params,
}: Readonly<PageProps>) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const work = workBySlug(slug);

  if (!study || !work) {
    notFound();
  }

  const parent = personalProjects.some((item) => item.slug === slug)
    ? { name: "Personal projects", path: "/projects" }
    : { name: "Selected work", path: "/#work" };

  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          parent,
          { name: work.name, path: `/work/${slug}` },
        ])}
      />
      <JsonLd data={caseStudyJsonLd(slug)} />
      <CaseStudySection study={study} />
      <ContactSection glow={slug !== "quantumspecs"} />
    </SiteShell>
  );
}
