export type DocLink = {
  href: string;
  title: string;
  description: string;
};

export const docsLinks: DocLink[] = [
  { href: "/docs", title: "Overview", description: "Outputs, scope, and limitations" },
  { href: "/docs/quickstart", title: "Quickstart", description: "Install and build a TokenGraph" },
  { href: "/docs/cli", title: "CLI", description: "Build, inspect, query, and optimize" },
  { href: "/docs/mcp", title: "MCP server", description: "Local stdio tools and client setup" },
  { href: "/docs/vscode", title: "VS Code", description: "Traceability and graph commands" },
  { href: "/docs/token-graph", title: "TokenGraph", description: "Nodes, edges, findings, and flows" },
];

export function adjacentDocs(href: string) {
  const index = docsLinks.findIndex((item) => item.href === href);
  return {
    previous: index > 0 ? docsLinks[index - 1] : undefined,
    next: index >= 0 && index < docsLinks.length - 1 ? docsLinks[index + 1] : undefined,
  };
}
