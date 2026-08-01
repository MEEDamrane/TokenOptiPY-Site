import Link from "next/link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <Container className="grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-start">
        <div className="max-w-md"><Logo /><p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">Open-source, local-first token-flow analysis for Python LLM applications.</p></div>
        <div><p className="footer-heading">Product</p><div className="footer-links"><Link href={siteConfig.docs.tokenGraph}>TokenGraph</Link><Link href={siteConfig.docs.mcp}>MCP</Link><Link href={siteConfig.docs.vscode}>VS Code</Link><Link href="/roadmap">Roadmap</Link></div></div>
        <div><p className="footer-heading">Resources</p><div className="footer-links"><Link href="/docs">Documentation</Link><Link href="/privacy">Privacy</Link><Link href="/changelog">Changelog</Link><a href={siteConfig.websiteRepositoryUrl} target="_blank" rel="noopener noreferrer" aria-label="Open the TokenOptiPy site repository on GitHub">Website source</a></div></div>
      </Container>
      <Container className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-dim)] sm:flex-row sm:items-center sm:justify-between"><p>TokenOptiPy {siteConfig.version} · MIT licensed.</p><p>Token estimates require application-level quality evaluation.</p></Container>
    </footer>
  );
}
