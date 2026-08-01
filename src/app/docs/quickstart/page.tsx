import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { siteConfig as site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Quickstart", "Install TokenOptiPy and build your first local TokenGraph.", "/docs/quickstart");
const toc = [{ id: "requirements", label: "Requirements" }, { id: "install", label: "Install" }, { id: "build", label: "Build a graph" }, { id: "inspect", label: "Inspect results" }, { id: "update", label: "Incremental check" }];

export default function QuickstartPage() { return <DocPage href="/docs/quickstart" title="Build your first TokenGraph" description="Install from GitHub, scan a local project, and inspect the generated report." toc={toc}>
  <h2 id="requirements">Requirements</h2><ul><li>Python 3.10, 3.11, 3.12, or 3.13.</li><li>A local Python project that contains prompts or model calls.</li><li>No API key is required for the default workflow.</li></ul>
  <h2 id="install">Install TokenOptiPy</h2><CodeBlock label="Terminal" code={site.installCommand} /><p>This installs the Python package and the <code>tokenoptipy</code> command from the public GitHub repository.</p>
  <h2 id="build">Build a graph</h2><CodeBlock code={site.commands.build} /><p>The scanner reads supported files without executing the analyzed project. By default, output is written under <code>tokenoptipy-out/</code>.</p>
  <h3>Expected files</h3><CodeBlock label="Output" code={`tokenoptipy-out/\n├── graph.html\n├── graph.json\n└── TOKEN_REPORT.md`} />
  <h2 id="inspect">Inspect the result</h2><p>Open <code>tokenoptipy-out/graph.html</code> in a browser, then use the CLI to rank hotspots or explain a node.</p><CodeBlock code={`${site.commands.hotspots}\n\n${site.commands.explain}`} />
  <h2 id="update">Skip unchanged rebuilds</h2><p>The <code>--update</code> option compares the current project fingerprint with the prior build state and skips rebuilding when supported files have not changed.</p><CodeBlock code="tokenoptipy build . --update" />
  <div className="note warning"><strong>Remember:</strong> static token counts are estimates, and runtime data may be larger or smaller. Validate changes with representative evaluation cases.</div>
</DocPage>; }
