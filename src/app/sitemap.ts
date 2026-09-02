import type { MetadataRoute } from "next";
import { links } from "@/constants";
import { caseStudies } from "@/constants/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: links.site,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${links.site}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...caseStudies.map((study) => ({
      url: `${links.site}/work/${study.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: study.slug === "quantumspecs" ? 0.95 : 0.9,
    })),
  ];
}
