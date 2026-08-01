const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://tokenoptipy.example").replace(/\/$/, "");
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
const asset = (path: string) => `${basePath}${path}`;

const PRODUCT_REPOSITORY_URL = "https://github.com/MEEDamrane/TokenOptiPy";
const WEBSITE_REPOSITORY_URL = "https://github.com/MEEDamrane/TokenOptiPY-Site";
const MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=mohamedamrane.tokenoptipy-vscode";
const INSTALL_COMMAND = `pip install git+${PRODUCT_REPOSITORY_URL}.git`;

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const siteConfig = {
  name: "TokenOptiPy",
  version: "0.3.0",
  description:
    "TokenOptiPy is an open-source local TokenGraph engine for analyzing prompt tokens, context flows, model calls and MCP-based optimization workflows.",
  shortDescription: "Local token-flow analysis for Python LLM applications.",
  url: siteUrl,
  productRepositoryUrl: PRODUCT_REPOSITORY_URL,
  websiteRepositoryUrl: WEBSITE_REPOSITORY_URL,
  marketplaceUrl: MARKETPLACE_URL,
  extensionId: "mohamedamrane.tokenoptipy-vscode",
  extensionName: "TokenOptiPy MCP Traceability",
  installCommand: INSTALL_COMMAND,
  publisher: "mohamedamrane",
  docs: {
    home: "/docs",
    quickstart: "/docs/quickstart",
    cli: "/docs/cli",
    mcp: "/docs/mcp",
    vscode: "/docs/vscode",
    tokenGraph: "/docs/token-graph",
  },
  commands: {
    build: "tokenoptipy build . --output tokenoptipy-out",
    hotspots: "tokenoptipy hotspots --graph tokenoptipy-out/graph.json",
    explain: "tokenoptipy explain CLASSIFY_PROMPT \\\n  --graph tokenoptipy-out/graph.json",
    path: "tokenoptipy path CLASSIFY_PROMPT conversation_history \\\n  --graph tokenoptipy-out/graph.json",
    mcpConfig: "tokenoptipy mcp-config --client all",
    agentInit: "tokenoptipy agent-init --client all",
  },
  social: [] as Array<{ label: string; href: string }>,
  assets: {
    logo: asset("/tokenoptipy-icon.png"),
    ogImage: asset("/og-image.png"),
    appleTouchIcon: asset("/apple-touch-icon.png"),
    favicon: asset("/favicon.ico"),
    faviconPng: asset("/favicon.png"),
    manifest: asset("/manifest.webmanifest"),
  },
} as const;


// TODO: Replace NEXT_PUBLIC_SITE_URL before production deployment.
// TODO: Confirm the Marketplace listing is publicly available at the URL above.
// v0.3.0 writes MCP/agent config immediately; it does not expose a --write option.
