import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { siteConfig as site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("CLI reference", "TokenOptiPy CLI commands for graphs, hotspots, prompt flows, optimization, evaluation, and MCP setup.", "/docs/cli");
const toc = [{ id: "install", label: "Install" }, { id: "graph", label: "Graph commands" }, { id: "prompts", label: "Prompt commands" }, { id: "mcp", label: "MCP configuration" }, { id: "notes", label: "Version notes" }];

export default function CliPage() { return <DocPage href="/docs/cli" title="CLI reference" description="Build, inspect, query, and validate token-flow evidence from the terminal." toc={toc}>
  <h2 id="install">Install</h2><CodeBlock label="Terminal" code={site.installCommand} />
  <h2 id="graph">Graph commands</h2>
  <h3>Build</h3><CodeBlock code={site.commands.build} /><p>Scans the project and writes HTML, JSON, and Markdown outputs. Optional flags include <code>--backend</code>, <code>--max-file-size</code>, <code>--include-hidden</code>, and <code>--update</code>.</p>
  <h3>Show statistics and hotspots</h3><CodeBlock code={`tokenoptipy stats --graph tokenoptipy-out/graph.json\n${site.commands.hotspots}`} />
  <h3>Explain a node</h3><CodeBlock code={site.commands.explain} /><p>Returns the resolved node, incoming edges, outgoing edges, and findings as JSON.</p>
  <h3>Find a path</h3><CodeBlock code={site.commands.path} />
  <h3>Search and inspect prompt flow</h3><CodeBlock code={`tokenoptipy query "where is history injected" \\\n  --graph tokenoptipy-out/graph.json\n\ntokenoptipy prompt-flow CLASSIFY_PROMPT \\\n  --graph tokenoptipy-out/graph.json`} />
  <h2 id="prompts">Standalone prompt commands</h2>
  <p>The original prompt optimizer remains available alongside TokenGraph analysis.</p><CodeBlock code={`tokenoptipy count prompt.txt\ntokenoptipy analyze prompt.txt\ntokenoptipy optimize prompt.txt \\\n  --required-term JSON \\\n  --output prompt.optimized.txt \\\n  --report optimization.json\ntokenoptipy compare prompt.txt prompt.optimized.txt`} />
  <p>Optimization checks can preserve configured required terms and inspect placeholders, numbers, negations, and indentation-sensitive structure. Application-level quality evaluation is still required.</p>
  <h3>Aggregate evaluation results</h3><CodeBlock code="tokenoptipy evaluate results.jsonl" />
  <h2 id="mcp">MCP and agent configuration</h2><CodeBlock code={`${site.commands.mcpConfig}\n${site.commands.agentInit}`} /><p>These commands write supported client configuration and agent instruction files into the current workspace.</p>
  <h2 id="notes">Version 0.3.0 notes</h2><div className="note"><strong>No <code>--write</code> flag:</strong> in TokenOptiPy 0.3.0, <code>mcp-config</code> and <code>agent-init</code> write files directly. The command examples above match the current CLI parser.</div>
</DocPage>; }
