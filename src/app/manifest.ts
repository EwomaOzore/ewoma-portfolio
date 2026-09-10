import type { MetadataRoute } from "next";
import { defaultDescription, siteName } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} — Senior Frontend & Mobile Engineer`,
    short_name: siteName,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f4ef",
    theme_color: "#141414",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
