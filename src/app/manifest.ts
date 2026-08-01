import type { MetadataRoute } from "next";
import { basePath, siteConfig as site } from "@/config/site";
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.shortDescription,
    start_url: basePath || "/",
    display: "standalone",
    background_color: "#070b18",
    theme_color: "#4f46e5",
    icons: [
      { src: site.assets.logo, sizes: "256x256", type: "image/png" },
      { src: site.assets.appleTouchIcon, sizes: "180x180", type: "image/png" },
    ],
  };
}
