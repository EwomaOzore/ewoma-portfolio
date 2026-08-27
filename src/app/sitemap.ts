import type { MetadataRoute } from "next";
import { links } from "@/constants";

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
      priority: 0.8,
    },
  ];
}
