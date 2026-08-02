const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://tokenoptipy-site.netlify.app").replace(/\/$/, "");
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
  version: "0.5.0",
  description:
    "Build a local TokenGraph connecting prompts, context, variables and model calls. Find token hotspots and investigate safer optimization opportunities.",
  shortDescription: "Local token-flow analysis for LLM applications.",
  officialWebsiteDescription:
    "The official website for TokenOptiPy — the local TokenGraph engine, CLI, MCP server and VS Code extension.",
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
    build: "tokenoptipy build . --language auto",
    hotspots: "tokenoptipy hotspots --graph tokenoptipy-out/graph.json",
    explain: "tokenoptipy explain CLASSIFY_PROMPT \\\n  --graph tokenoptipy-out/graph.json",
    path: "tokenoptipy path CLASSIFY_PROMPT conversation_history \\\n  --graph tokenoptipy-out/graph.json",
    mcpConfig: "tokenoptipy mcp-config --client all",
    agentInit: "tokenoptipy agent-init --client all",
  },
  social: [] as Array<{ label: string; href: string }>,
  assets: {
    logo: asset("/tokenoptipy-icon.png"),
    wordmark: asset("/optipy-wordmark.png"),
    ogImage: asset("/og-image.png"),
    appleTouchIcon: asset("/apple-touch-icon.png"),
    favicon: asset("/favicon.ico"),
    faviconPng: asset("/favicon.png"),
    manifest: asset("/manifest.webmanifest"),
  },
} as const;


// Set NEXT_PUBLIC_SITE_URL to the verified production domain before deployment.
// TODO: Confirm the Marketplace listing is publicly available at the URL above.
// Keep this value synchronized with ../TokenOptiPy/pyproject.toml via `npm run sync:version`.
