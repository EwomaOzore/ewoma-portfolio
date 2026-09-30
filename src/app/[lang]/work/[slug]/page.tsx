import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";
import CaseStudySection from "@/sections/CaseStudy";
import ContactSection from "@/sections/Contact";
import { personalProjects } from "@/constants";
import { caseStudies, getCaseStudy } from "@/constants/caseStudies";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import {
  breadcrumbJsonLd,
  caseStudyJsonLd,
  caseStudyMeta,
  workBySlug,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: Readonly<PageProps>): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const dict = await getDictionary();
  const work = workBySlug(slug);

  return caseStudyMeta(slug, locale, {
    title: `${work?.name ?? slug} — ${dict.meta.caseStudy}`,
    description:
      dict.caseLedes[slug as keyof typeof dict.caseLedes] ??
      dict.meta.description,
  });
}

export default async function CaseStudyPage({ params }: Readonly<PageProps>) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  const work = workBySlug(slug);
  const locale = await getLocale();
  const dict = await getDictionary();

  if (!study || !work) {
    notFound();
  }

  const parent = personalProjects.some((item) => item.slug === slug)
    ? { name: dict.caseStudy.personalProjects, path: "/projects" }
    : { name: dict.caseStudy.selectedWork, path: "/#work" };

  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: dict.caseStudy.home, path: "/" },
            parent,
            { name: work.name, path: `/work/${slug}` },
          ],
          locale,
        )}
      />
      <JsonLd
        data={caseStudyJsonLd(
          slug,
          locale,
          dict.caseLedes[slug as keyof typeof dict.caseLedes],
        )}
      />
      <CaseStudySection study={study} />
      <ContactSection />
    </SiteShell>
  );
}
