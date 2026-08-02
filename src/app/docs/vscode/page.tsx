import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { ExternalIcon } from "@/components/icons";
import { siteConfig as site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("VS Code extension", "Install and use TokenOptiPy MCP Traceability in VS Code.", "/docs/vscode");
const toc = [{ id: "install", label: "Install" }, { id: "features", label: "Features" }, { id: "commands", label: "Commands" }, { id: "settings", label: "Settings" }, { id: "trust", label: "Workspace trust" }];

export default function VscodePage() { return <DocPage href="/docs/vscode" title={site.extensionName} description="Register the local server, inspect safe MCP traces, and build TokenGraph reports from VS Code." toc={toc}>
  <h2 id="install">Install the extension</h2><p>Publisher: <code>{site.publisher}</code><br />Extension identifier: <code>{site.extensionId}</code></p><p><a href={site.marketplaceUrl} target="_blank" rel="noopener noreferrer" aria-label="Open TokenOptiPy on the Visual Studio Marketplace" className="inline-flex items-center gap-2">Open Visual Studio Marketplace <ExternalIcon className="size-4" /></a></p><CodeBlock label="VS Code CLI" code={`code --install-extension ${site.extensionId}`} />
  <div className="note">The extension starts <code>python -m tokenoptipy.mcp_server</code>. Install the TokenOptiPy Python package in the selected Python environment first.</div>
  <h2 id="features">Confirmed features in version {site.version}</h2><ul><li>Registers a workspace-local MCP stdio server definition.</li><li>Maintains a TokenOptiPy MCP block in workspace Codex configuration when enabled.</li><li>Shows recent safe tool traceability in one status-bar item.</li><li>Builds <code>graph.html</code>, <code>graph.json</code>, and <code>TOKEN_REPORT.md</code>.</li><li>Opens the generated interactive graph in the default browser.</li><li>Configures supported MCP clients and agent instruction files.</li><li>Shows a selected prompt&apos;s flow as JSON.</li><li>Can rebuild the graph automatically after <code>inspect_workspace</code> completes.</li></ul>
  <h2 id="commands">Command Palette</h2><ul><li><code>TokenOptiPy: Configure MCP Clients</code></li><li><code>TokenOptiPy: Build TokenGraph</code></li><li><code>TokenOptiPy: Build and Open TokenGraph</code></li><li><code>TokenOptiPy: Open TokenGraph</code></li><li><code>TokenOptiPy: Show Prompt Flow</code></li></ul>
  <h2 id="settings">Settings</h2><ul><li><code>tokenoptipy.pythonPath</code> — Python executable used to start the server.</li><li><code>tokenoptipy.traceLimit</code> — recent events shown in the status tooltip, from 1 to 100.</li><li><code>tokenoptipy.configureCodex</code> — maintain the workspace Codex MCP block.</li><li><code>tokenoptipy.buildGraphAfterInspect</code> — rebuild reports after a completed workspace inspection.</li></ul>
  <h2 id="trust">Workspace trust and privacy</h2><p>The extension does not provide MCP server definitions in an untrusted workspace. Trace tooltips state that prompts, secrets, and tool arguments are excluded. Generated graph reports remain local but can contain file metadata and redacted previews, so review them before public sharing.</p>
</DocPage>; }
