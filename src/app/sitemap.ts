import type { MetadataRoute } from "next";
import { links } from "@/constants";
import { caseStudies } from "@/constants/caseStudies";
import { locales, localize, type Locale } from "@/i18n/config";

function entry(path: string, priority: number): MetadataRoute.Sitemap[number] {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${links.site}${localize(locale, path) === "/" ? "" : localize(locale, path)}`]),
  ) as Record<Locale, string>;

  return {
    url: `${links.site}${localize("en", path) === "/" ? "" : localize("en", path)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "/", priority: 1 },
    { path: "/projects", priority: 0.6 },
    ...caseStudies.map((study) => ({
      path: `/work/${study.slug}`,
      priority: study.slug === "quantumspecs" ? 0.95 : 0.9,
    })),
  ];

  return locales.flatMap((locale) =>
    paths.map(({ path, priority }) => ({
      ...entry(path, priority),
      url: `${links.site}${localize(locale, path) === "/" ? "" : localize(locale, path)}`,
    })),
  );
}
