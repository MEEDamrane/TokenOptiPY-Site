import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const read = (file) => readFile(path.join(root, file), "utf8");

const routes = [
  "src/app/page.tsx",
  "src/app/docs/page.tsx",
  "src/app/docs/quickstart/page.tsx",
  "src/app/docs/cli/page.tsx",
  "src/app/docs/mcp/page.tsx",
  "src/app/docs/vscode/page.tsx",
  "src/app/docs/token-graph/page.tsx",
  "src/app/privacy/page.tsx",
  "src/app/roadmap/page.tsx",
  "src/app/changelog/page.tsx",
  "src/app/not-found.tsx",
];

test("all requested routes exist", async () => {
  await Promise.all(routes.map((file) => access(path.join(root, file))));
});

test("site configuration centralizes project identity", async () => {
  const config = await read("src/config/site.ts");
  assert.match(config, /version: "0\.5\.0"/);
  assert.match(config, /MEEDamrane\/TokenOptiPy"/);
  assert.match(config, /MEEDamrane\/TokenOptiPY-Site/);
  assert.match(config, /mohamedamrane\.tokenoptipy-vscode/);
  assert.match(config, /marketplace\.visualstudio\.com/);
});

test("external URLs are centralized and links are accessible", async () => {
  const config = await read("src/config/site.ts");
  assert.match(config, /export const siteConfig/);
  assert.match(config, /productRepositoryUrl/);
  assert.match(config, /websiteRepositoryUrl/);
  assert.match(config, /installCommand/);
  for (const file of ["src/components/site-header.tsx", "src/components/site-footer.tsx", "src/app/page.tsx", "src/app/docs/vscode/page.tsx"]) {
    const content = await read(file);
    assert.doesNotMatch(content, /https:\/\/(github\.com|marketplace\.visualstudio\.com)/);
  }
});

test("product, marketplace, and website destinations remain distinct", async () => {
  const header = await read("src/components/site-header.tsx");
  const home = await read("src/components/marketing/hero.tsx");
  const footer = await read("src/components/site-footer.tsx");
  assert.match(header, /siteConfig\.productRepositoryUrl/);
  assert.match(home, /site\.productRepositoryUrl/);
  assert.match(footer, /siteConfig\.websiteRepositoryUrl/);
  assert.match(footer, />Website source</);
  assert.doesNotMatch(header, /websiteRepositoryUrl/);
  assert.doesNotMatch(home, /websiteRepositoryUrl/);
});

test("CLI examples match the current parser", async () => {
  const config = await read("src/config/site.ts");
  assert.match(config, /tokenoptipy mcp-config --client all/);
  assert.match(config, /tokenoptipy agent-init --client all/);
  assert.doesNotMatch(config, /mcpConfig:.*--write/);
  assert.doesNotMatch(config, /agentInit:.*--write/);
});

test("MCP documentation includes all confirmed tools", async () => {
  const page = await read("src/app/docs/mcp/page.tsx");
  for (const tool of ["inspect_workspace", "analyze_prompt_file", "validate_prompt_change", "query_token_flow", "get_prompt_flow", "build_graph_report", "get_traceability"]) {
    assert.match(page, new RegExp(tool));
  }
});

test("static export and unoptimized local images are configured", async () => {
  const config = await read("next.config.ts");
  assert.match(config, /output: "export"/);
  assert.match(config, /unoptimized: true/);
  assert.match(config, /trailingSlash: true/);
});

test("copy controls use the browser clipboard API", async () => {
  const component = await read("src/components/copy-button.tsx");
  assert.match(component, /navigator\.clipboard\.writeText/);
  assert.match(component, /aria-label/);
});

test("no obvious secret values are committed", async () => {
  const files = ["src/config/site.ts", ".env.example", "README.md"];
  for (const file of files) {
    const content = await read(file);
    assert.doesNotMatch(content, /(sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16})/);
  }
});

test("light, dark, focus, and reduced-motion styles are present", async () => {
  const css = await read("src/app/globals.css");
  assert.match(css, /:root/);
  assert.match(css, /html\[data-theme="dark"\]/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
});

test("responsive navigation and documentation menu are implemented", async () => {
  const header = await read("src/components/site-header.tsx");
  const docs = await read("src/components/doc-page.tsx");
  assert.match(header, /lg:hidden/);
  assert.match(header, /aria-label="Open navigation menu"/);
  assert.match(docs, /Mobile documentation/);
  assert.match(docs, /DocsSearch/);
});

test("interactive graph nodes are keyboard-focusable controls", async () => {
  const graph = await read("src/components/marketing/token-graph-showcase.tsx");
  assert.match(graph, /role="button"/);
  assert.match(graph, /onFocus=/);
  assert.match(graph, /tabIndex=/);
  assert.match(graph, /Demonstration data/);
});
