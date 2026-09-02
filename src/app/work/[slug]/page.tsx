import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import CaseStudySection from "@/sections/CaseStudy";
import ContactSection from "@/sections/Contact";
import { featuredWork, personalProjects } from "@/constants";
import { caseStudies, getCaseStudy } from "@/constants/caseStudies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: Readonly<PageProps>): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const work =
    featuredWork.find((item) => item.slug === slug) ??
    personalProjects.find((item) => item.slug === slug);

  if (!study || !work) {
    return { title: "Case study — Ewoma Ozore" };
  }

  return {
    title: `${work.name} — Case study — Ewoma Ozore`,
    description: study.lede,
    openGraph: {
      title: `${work.name} — Case study — Ewoma Ozore`,
      description: study.lede,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: Readonly<PageProps>) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <SiteShell>
      <CaseStudySection study={study} />
      <ContactSection glow={slug !== "quantumspecs"} />
    </SiteShell>
  );
}
