import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { siteConfig as site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("MCP server", "Configure TokenOptiPy's local stdio MCP server and use its token-flow tools safely.", "/docs/mcp");
const toc = [{ id: "overview", label: "Overview" }, { id: "configure", label: "Configure clients" }, { id: "tools", label: "Available tools" }, { id: "workflow", label: "Suggested workflow" }, { id: "compatibility", label: "Compatibility" }, { id: "traceability", label: "Traceability" }];
const tools = [
  ["inspect_workspace", "Scan a workspace and return graph statistics, hotspots, and safety findings without full prompt bodies."],
  ["analyze_prompt_file", "Analyze one local file for token count and optimization opportunities."],
  ["validate_prompt_change", "Compare original and candidate prompts and report savings plus safety invariants."],
  ["query_token_flow", "Search files, prompts, contexts, functions, and model calls by keyword or natural-language query."],
  ["get_prompt_flow", "Return directed relations, connected nodes, model-call paths, findings, and a trace ID."],
  ["build_graph_report", "Write graph.json, TOKEN_REPORT.md, and self-contained graph.html locally."],
  ["get_traceability", "Return recent safe execution metadata, including status, duration, timestamp, and trace ID."],
];

export default function McpPage() { return <DocPage href="/docs/mcp" title="Local MCP server" description="Expose TokenOptiPy analysis over standard MCP stdio transport for compatible developer tools and coding agents." toc={toc}>
  <h2 id="overview">Overview</h2><p>TokenOptiPy uses the Python MCP SDK and runs a standard local server over <code>stdio</code>. The server instructions recommend inspecting token flows before changing prompts and validating changes afterward.</p><CodeBlock code="python -m tokenoptipy.mcp_server" /><p>The package also installs the <code>tokenoptipy-mcp</code> script.</p>
  <h2 id="configure">Configure supported clients</h2><CodeBlock code={`${site.commands.mcpConfig}\n${site.commands.agentInit}`} /><p>The configuration generator supports Codex, Claude Code, Claude Desktop, VS Code, Cursor, Windsurf, Cline, Roo Code, Continue, and a generic MCP JSON file. Agent instructions are available for Codex, Claude, GitHub Copilot, Cursor, Windsurf, Cline, Roo Code, and Continue.</p>
  <div className="note"><strong>Client behavior varies.</strong> A client may require manual configuration, workspace trust, or explicit instructions. Do not assume every agent will discover or invoke TokenOptiPy automatically.</div>
  <h2 id="tools">Available tools</h2><div className="not-prose grid gap-3">{tools.map(([name, description]) => <div key={name} className="rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4"><code className="font-mono text-sm text-indigo-500">{name}</code><p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{description}</p></div>)}</div>
  <h2 id="workflow">Suggested workflow</h2><ol><li>Run <code>inspect_workspace</code> before editing prompts or context assembly.</li><li>Use <code>get_prompt_flow</code> to understand the prompt&apos;s connected sources and model-call paths.</li><li>Edit the prompt or context logic in your normal development workflow.</li><li>Call <code>validate_prompt_change</code> to compare token estimates and safety invariants.</li><li>Generate updated local artifacts with <code>build_graph_report</code>.</li></ol>
  <h2 id="compatibility">Compatibility and boundaries</h2><ul><li>The transport is local MCP over stdio.</li><li>Exact capabilities depend on the client&apos;s current MCP implementation.</li><li>Generated configuration paths are client-specific and workspace-local.</li><li>TokenOptiPy tools do not modify project source files; report generation writes only local output artifacts.</li></ul>
  <h2 id="traceability">Safe traceability</h2><p>Trace records contain tool name, status, timestamp, duration, trace identifier, and a safe summary. Full prompt bodies and tool arguments are excluded from trace records. Review any generated reports separately before sharing.</p>
</DocPage>; }
