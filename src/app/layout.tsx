import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig as site } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — See where your LLM tokens go`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: ["TokenGraph", "LLM", "prompt optimization", "MCP", "Python", "token analysis"],
  authors: [{ name: "Mohamed Amrane", url: site.productRepositoryUrl }],
  creator: "Mohamed Amrane",
  publisher: "TokenOptiPy",
  icons: {
    icon: [{ url: site.assets.favicon }, { url: site.assets.faviconPng, type: "image/png" }],
    apple: [{ url: site.assets.appleTouchIcon, sizes: "180x180", type: "image/png" }],
  },
  manifest: site.assets.manifest,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — See where your LLM tokens go`,
    description: site.description,
    images: [{ url: site.assets.ogImage, width: 1200, height: 630, alt: "TokenOptiPy TokenGraph" }],
  },
  twitter: { card: "summary_large_image", title: `${site.name} — See where your LLM tokens go`, description: site.description, images: [site.assets.ogImage] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "light dark", themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f8fafc" }, { media: "(prefers-color-scheme: dark)", color: "#070b18" }] };

const themeScript = `(function(){try{var t=localStorage.getItem('tokenoptipy-theme');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Windows, macOS, Linux",
    softwareVersion: site.version,
    description: site.description,
    codeRepository: site.productRepositoryUrl,
    license: "https://opensource.org/licenses/MIT",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head><Script id="theme-script" strategy="beforeInteractive">{themeScript}</Script><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></head>
      <body><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white">Skip to content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body>
    </html>
  );
}
