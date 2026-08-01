import type { Metadata } from "next";
import { absoluteUrl, siteConfig as site } from "@/config/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      siteName: site.name,
      images: [{ url: site.assets.ogImage, width: 1200, height: 630, alt: `${site.name} TokenGraph` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.assets.ogImage],
    },
  };
}
