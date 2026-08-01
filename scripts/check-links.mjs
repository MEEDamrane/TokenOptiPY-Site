import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const routeSet = new Set(["/", "/docs", "/docs/quickstart", "/docs/cli", "/docs/mcp", "/docs/vscode", "/docs/token-graph", "/privacy", "/roadmap", "/changelog"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (/\.(tsx|ts)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const files = await walk(path.join(root, "src"));
const failures = [];
for (const file of files) {
  const text = await readFile(file, "utf8");
  for (const match of text.matchAll(/(?:href|canonical):?\s*=??\s*["'`]([^"'`]+)["'`]/g)) {
    const href = match[1];
    if (!href || href.startsWith("http") || href.startsWith("#") || href.includes("${")) continue;
    const route = href.split("#")[0].replace(/\/$/, "") || "/";
    if (route.startsWith("/") && !routeSet.has(route) && !route.startsWith("/favicon") && !route.startsWith("/manifest") && !route.startsWith("/og-image") && !route.startsWith("/apple-touch") && !route.startsWith("/tokenoptipy-icon")) failures.push(`${path.relative(root, file)}: ${href}`);
  }
}
if (failures.length) {
  console.error("Broken internal route references:\n" + failures.join("\n"));
  process.exit(1);
}
console.log(`Checked ${files.length} source files; internal route references are valid.`);
