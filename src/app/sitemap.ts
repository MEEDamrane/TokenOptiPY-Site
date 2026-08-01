import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
export const dynamic = "force-static";
const routes = ["/", "/docs", "/docs/quickstart", "/docs/cli", "/docs/mcp", "/docs/vscode", "/docs/token-graph", "/privacy", "/roadmap", "/changelog"];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route) => ({ url: absoluteUrl(route), lastModified: new Date("2026-08-01"), changeFrequency: route === "/" ? "weekly" : "monthly", priority: route === "/" ? 1 : route.startsWith("/docs") ? 0.8 : 0.6 })); }
