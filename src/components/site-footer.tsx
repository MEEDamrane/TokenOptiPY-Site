import Link from "next/link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,auto)] lg:items-start">
        <div className="max-w-md"><Logo /><p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">{siteConfig.officialWebsiteDescription}</p></div>
        <div><p className="footer-heading">Product</p><div className="footer-links"><Link href={siteConfig.docs.tokenGraph}>TokenGraph</Link><Link href={siteConfig.docs.cli}>CLI</Link><Link href={siteConfig.docs.mcp}>MCP</Link><Link href={siteConfig.docs.vscode}>VS Code extension</Link></div></div>
        <div><p className="footer-heading">Resources</p><div className="footer-links"><Link href={siteConfig.docs.home}>Documentation</Link><Link href={siteConfig.docs.quickstart}>Quickstart</Link><Link href="/roadmap">Roadmap</Link><Link href="/changelog">Changelog</Link><Link href="/privacy">Privacy</Link></div></div>
        <div><p className="footer-heading">Source</p><div className="footer-links"><a href={siteConfig.productRepositoryUrl} target="_blank" rel="noopener noreferrer" aria-label="Open the TokenOptiPy product repository on GitHub">Product repository</a><a href={siteConfig.websiteRepositoryUrl} target="_blank" rel="noopener noreferrer" aria-label="Open the TokenOptiPy website source repository on GitHub">Website source</a><a href={siteConfig.marketplaceUrl} target="_blank" rel="noopener noreferrer" aria-label="Open TokenOptiPy on the Visual Studio Marketplace">Visual Studio Marketplace</a></div></div>
      </Container>
      <Container className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-dim)] sm:flex-row sm:items-center sm:justify-between"><p>TokenOptiPy {siteConfig.version} · MIT licensed.</p><p>Token estimates require application-level quality evaluation.</p></Container>
    </footer>
  );
}
